import { randomBytes } from "crypto";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "apply_invitations";

/** 24 random bytes → base64url (~32 chars), unguessable for public registration links */
export function generateInviteToken(): string {
  return randomBytes(24).toString("base64url");
}

export const INVITE_TOKEN_PATTERN = /^[A-Za-z0-9_-]{20,48}$/;

let indexesEnsured = false;

async function ensureTokenIndex(): Promise<void> {
  if (indexesEnsured) return;
  const db = await getDb();
  await db.collection(COLLECTION).createIndex({ token: 1 }, { unique: true });
  indexesEnsured = true;
}

export function isInviteTokenFormat(token: string): boolean {
  return INVITE_TOKEN_PATTERN.test(token);
}

export async function createInvitation(): Promise<{ token: string }> {
  await ensureTokenIndex();
  const db = await getDb();
  for (let attempt = 0; attempt < 5; attempt++) {
    const token = generateInviteToken();
    try {
      await db.collection(COLLECTION).insertOne({
        token,
        createdAt: new Date().toISOString(),
      });
      return { token };
    } catch {
      /* rare duplicate — retry */
    }
  }
  throw new Error("Failed to create invitation");
}

export async function invitationExists(token: string): Promise<boolean> {
  if (!isInviteTokenFormat(token)) return false;
  const db = await getDb();
  const doc = await db.collection(COLLECTION).findOne({ token });
  return !!doc;
}

/** Remove invitation after a successful application (one link = one submission). */
export async function consumeInvitation(token: string): Promise<boolean> {
  if (!isInviteTokenFormat(token)) return false;
  const db = await getDb();
  const result = await db.collection(COLLECTION).deleteOne({ token });
  return result.deletedCount === 1;
}
