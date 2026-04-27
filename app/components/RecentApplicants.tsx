import { isMongoConfigured } from "@/lib/mongodb";
import { getAllEmployees, type Employee } from "@/lib/store";
import ApplicantsList from "@/app/components/ApplicantsList";

export const dynamic = "force-dynamic";

async function fetchApplicants(): Promise<Employee[]> {
  if (!isMongoConfigured()) return [];
  try {
    return await getAllEmployees();
  } catch {
    return [];
  }
}

export default async function RecentApplicants() {
  const applicants = await fetchApplicants();
  return <ApplicantsList applicants={applicants} />;
}
