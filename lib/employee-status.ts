/** MongoDB employee `status` values */
export const EMPLOYEE_STATUSES = ["submitted", "pending", "approved", "rejected"] as const;
export type EmployeeStatus = (typeof EMPLOYEE_STATUSES)[number];

/** Shown on the public website (not raw form submissions awaiting review). */
export const PUBLIC_VISIBLE_STATUSES = ["pending", "approved", "rejected"] as const;

export function isPublicVisibleStatus(status: string): boolean {
  return (PUBLIC_VISIBLE_STATUSES as readonly string[]).includes(status);
}
