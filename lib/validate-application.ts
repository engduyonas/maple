/** Shared validation for public applications and API enforcement */
export interface RawApplicationBody {
  fullName?: unknown;
  phoneNumber?: unknown;
  passportNumber?: unknown;
  gender?: unknown;
  photograph?: unknown;
  age?: unknown;
}

export type ParsedApplication = {
  fullName: string;
  phoneNumber: string;
  passportNumber: string;
  gender: string;
  photograph: string;
  age: number;
};

const MAX_PHOTO_CHARS = 7_500_000;

export function validateApplicationBody(body: RawApplicationBody): { ok: true; data: ParsedApplication } | { ok: false; error: string } {
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  if (!fullName) return { ok: false, error: "Full name is required" };
  if (fullName.length < 3) return { ok: false, error: "Name must be at least 3 characters" };
  if (!/^[a-zA-Z\s\-'.]+$/.test(fullName)) return { ok: false, error: "Invalid characters in name" };

  const phoneNumber = typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
  if (!phoneNumber) return { ok: false, error: "Phone number is required" };

  const passportRaw = typeof body.passportNumber === "string" ? body.passportNumber.trim().toUpperCase() : "";
  if (!passportRaw) return { ok: false, error: "Passport number is required" };
  if (!/^[A-Z0-9-]{5,20}$/.test(passportRaw)) return { ok: false, error: "Invalid passport number" };

  const gender = typeof body.gender === "string" ? body.gender : "";
  if (!["Male", "Female", "Other"].includes(gender)) return { ok: false, error: "Invalid gender" };

  const photograph = typeof body.photograph === "string" ? body.photograph : "";
  if (!photograph.startsWith("data:image/")) return { ok: false, error: "A valid photo is required" };
  if (photograph.length > MAX_PHOTO_CHARS) return { ok: false, error: "Photo is too large (max ~5MB)" };

  const ageNum =
    typeof body.age === "number"
      ? body.age
      : typeof body.age === "string"
        ? parseInt(body.age, 10)
        : NaN;
  if (Number.isNaN(ageNum)) return { ok: false, error: "Age must be a number" };
  if (ageNum < 18 || ageNum > 100) return { ok: false, error: "Age must be between 18 and 100" };

  return {
    ok: true,
    data: {
      fullName,
      phoneNumber,
      passportNumber: passportRaw,
      gender,
      photograph,
      age: ageNum,
    },
  };
}
