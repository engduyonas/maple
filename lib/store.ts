import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

// ═══════════════════════════════════════════════════
//  Employee CRUD — MongoDB
//  (No in-memory list cache: on Vercel each serverless
//  instance has separate memory, so a cached [] on one
//  instance would not be invalidated by writes on another.)
// ═══════════════════════════════════════════════════

export interface Employee {
  id: string;
  fullName: string;
  phoneNumber: string;
  passportNumber: string;
  gender: string;
  photograph: string; // base64 data URL stored directly in MongoDB
  age: number;
  status: string;
  createdAt: string;
}

interface EmployeeDoc {
  _id: ObjectId;
  fullName: string;
  phoneNumber: string;
  passportNumber: string;
  gender: string;
  photograph: string;
  age: number;
  status: string;
  createdAt: string;
}

function toEmployee(doc: EmployeeDoc): Employee {
  return {
    id: doc._id.toHexString(),
    fullName: doc.fullName,
    phoneNumber: doc.phoneNumber,
    passportNumber: doc.passportNumber,
    gender: doc.gender,
    photograph: doc.photograph,
    age: doc.age,
    status: doc.status,
    createdAt: doc.createdAt,
  };
}

export async function getAllEmployees(): Promise<Employee[]> {
  const db = await getDb();
  const docs = await db
    .collection<EmployeeDoc>("employees")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  return docs.map(toEmployee);
}

export async function createEmployee(data: Omit<Employee, "id" | "createdAt">): Promise<Employee> {
  const db = await getDb();
  const doc = {
    ...data,
    createdAt: new Date().toISOString(),
  };
  const result = await db.collection("employees").insertOne(doc);
  return {
    ...data,
    id: result.insertedId.toHexString(),
    createdAt: doc.createdAt,
  };
}

export async function updateEmployeeStatus(id: string, status: string): Promise<Employee | null> {
  const db = await getDb();
  const result = await db.collection<EmployeeDoc>("employees").findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { status } },
    { returnDocument: "after" }
  );
  return result ? toEmployee(result) : null;
}

export async function updateEmployee(
  id: string,
  data: Partial<Omit<Employee, "id" | "createdAt">>
): Promise<Employee | null> {
  const db = await getDb();
  const updates: Record<string, unknown> = {};
  if (data.fullName !== undefined) updates.fullName = data.fullName;
  if (data.phoneNumber !== undefined) updates.phoneNumber = data.phoneNumber;
  if (data.passportNumber !== undefined) updates.passportNumber = data.passportNumber;
  if (data.gender !== undefined) updates.gender = data.gender;
  if (data.photograph !== undefined) updates.photograph = data.photograph;
  if (data.age !== undefined) updates.age = data.age;
  if (data.status !== undefined) updates.status = data.status;

  if (Object.keys(updates).length === 0) return null;

  const result = await db.collection<EmployeeDoc>("employees").findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updates },
    { returnDocument: "after" }
  );
  return result ? toEmployee(result) : null;
}

export async function deleteEmployee(id: string): Promise<boolean> {
  const db = await getDb();
  const result = await db.collection("employees").deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}

// ═══════════════════════════════════════════════════
//  Admin settings — MongoDB
// ═══════════════════════════════════════════════════

interface AdminSettings {
  username: string;
  password: string;
}

const DEFAULT_ADMIN: AdminSettings = { username: "admin", password: "admin123" };

export async function getAdminCredentials(): Promise<AdminSettings> {
  const db = await getDb();
  const col = db.collection("admin_settings");
  // Look for the new format first
  const doc = await col.findOne({ key: "admin" });
  if (doc) return { username: doc.username as string, password: doc.password as string };
  // Clean up any old broken docs and return default
  await col.deleteMany({});
  return DEFAULT_ADMIN;
}

export async function updateAdminPassword(newPassword: string): Promise<void> {
  const db = await getDb();
  await db.collection("admin_settings").updateOne(
    { key: "admin" },
    { $set: { password: newPassword, username: "admin" } },
    { upsert: true }
  );
}
