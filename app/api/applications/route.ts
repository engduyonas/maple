import { NextRequest, NextResponse } from "next/server";
import { isMongoConfigured } from "@/lib/mongodb";
import { createEmployee } from "@/lib/store";
import { validateApplicationBody } from "@/lib/validate-application";

export async function POST(request: NextRequest) {
  if (!isMongoConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const body = await request.json();
    const parsed = validateApplicationBody(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const applicant = await createEmployee({
      ...parsed.data,
      status: "pending",
    });

    return NextResponse.json(
      { id: applicant.id, message: "Application received" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
