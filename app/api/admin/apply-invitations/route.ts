import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, AUTH_TOKEN_VALUE } from "@/lib/auth";
import { createInvitation } from "@/lib/apply-invitations";
import { isMongoConfigured } from "@/lib/mongodb";
import { getRequestOrigin } from "@/lib/request-origin";

function isAuthed(request: NextRequest): boolean {
  const token = request.cookies.get(AUTH_COOKIE_NAME);
  return token?.value === AUTH_TOKEN_VALUE;
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isMongoConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const { token } = await createInvitation();
    const origin = getRequestOrigin(request);
    const url = `${origin.replace(/\/$/, "")}/apply/${token}`;
    return NextResponse.json({ token, url }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create invitation" }, { status: 500 });
  }
}
