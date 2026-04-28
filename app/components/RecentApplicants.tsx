import { unstable_noStore } from "next/cache";
import { isMongoConfigured } from "@/lib/mongodb";
import { getAllEmployees, type Employee } from "@/lib/store";
import { isPublicVisibleStatus } from "@/lib/employee-status";
import ApplicantsList from "@/app/components/ApplicantsList";

async function fetchApplicants(): Promise<Employee[]> {
  unstable_noStore();
  if (!isMongoConfigured()) return [];
  try {
    return await getAllEmployees();
  } catch {
    return [];
  }
}

export default async function RecentApplicants() {
  const applicants = (await fetchApplicants()).filter((e) => isPublicVisibleStatus(e.status));
  return <ApplicantsList applicants={applicants} variant="public" />;
}
