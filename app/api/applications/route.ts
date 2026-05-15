import { NextRequest, NextResponse } from "next/server";
import {
  consumeInvitation,
  invitationExists,
  isInviteTokenFormat,
} from "@/lib/apply-invitations";
import { isMongoConfigured } from "@/lib/mongodb";
import { createEmployee } from "@/lib/store";
import { validateApplicationBody } from "@/lib/validate-application";

export async function POST(request: NextRequest) {
  if (!isMongoConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const body = await request.json();
    const inviteToken = typeof body.inviteToken === "string" ? body.inviteToken.trim() : "";
    if (!inviteToken || !isInviteTokenFormat(inviteToken)) {
      return NextResponse.json({ error: "Invalid or missing invitation" }, { status: 400 });
    }
    const valid = await invitationExists(inviteToken);
    if (!valid) {
      return NextResponse.json(
        { error: "This invitation link is invalid or has already been used" },
        { status: 410 }
      );
    }

    const parsed = validateApplicationBody(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const applicant = await createEmployee({
      ...parsed.data,
      status: "submitted",
    });

    await consumeInvitation(inviteToken);

    return NextResponse.json(
      { id: applicant.id, message: "Application received" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
