import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, AUTH_TOKEN_VALUE } from "@/lib/auth";
import { isMongoConfigured } from "@/lib/mongodb";
import { updateEmployee, deleteEmployee } from "@/lib/store";

function isAuthed(request: NextRequest): boolean {
  const token = request.cookies.get(AUTH_COOKIE_NAME);
  return token?.value === AUTH_TOKEN_VALUE;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isMongoConfigured()) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 }
    );
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const updates: Record<string, unknown> = {};

    if (body.status !== undefined) {
      if (!["submitted", "pending", "approved", "rejected"].includes(body.status)) {
        return NextResponse.json(
          { error: "Invalid status. Must be submitted, pending, approved, or rejected" },
          { status: 400 }
        );
      }
      updates.status = body.status;
    }

    if (body.fullName !== undefined) {
      const v = String(body.fullName).trim();
      if (v.length < 3) return NextResponse.json({ error: "Name must be at least 3 characters" }, { status: 400 });
      updates.fullName = v;
    }

    if (body.phoneNumber !== undefined) {
      const v = String(body.phoneNumber).trim();
      if (!v) return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
      updates.phoneNumber = v;
    }

    if (body.passportNumber !== undefined) {
      const v = String(body.passportNumber).trim().toUpperCase();
      if (!/^[A-Z0-9-]{5,20}$/.test(v)) return NextResponse.json({ error: "Invalid passport number" }, { status: 400 });
      updates.passportNumber = v;
    }

    if (body.gender !== undefined) {
      if (!["Male", "Female", "Other"].includes(body.gender)) {
        return NextResponse.json({ error: "Invalid gender" }, { status: 400 });
      }
      updates.gender = body.gender;
    }

    if (body.age !== undefined) {
      const n = typeof body.age === "number" ? body.age : parseInt(String(body.age), 10);
      if (isNaN(n) || n < 18 || n > 100) return NextResponse.json({ error: "Age must be between 18 and 100" }, { status: 400 });
      updates.age = n;
    }

    if (body.photograph !== undefined && typeof body.photograph === "string" && body.photograph.startsWith("data:image/")) {
      updates.photograph = body.photograph;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
    }

    const employee = await updateEmployee(id, updates);
    if (!employee) {
      return NextResponse.json({ error: "Applicant not found" }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch {
    return NextResponse.json(
      { error: "Failed to update applicant" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isMongoConfigured()) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 }
    );
  }

  try {
    const { id } = await params;
    const deleted = await deleteEmployee(id);
    if (!deleted) {
      return NextResponse.json({ error: "Applicant not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete applicant" },
      { status: 500 }
    );
  }
}
