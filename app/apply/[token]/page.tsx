import { notFound } from "next/navigation";
import ApplyForm from "../ApplyForm";
import { invitationExists, isInviteTokenFormat } from "@/lib/apply-invitations";

export const metadata = {
  title: "Registration | Maple Leaf Foods",
  description: "Invitation-only profile registration. Use the link you were sent to complete your submission.",
};

export default async function ApplyWithTokenPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (!isInviteTokenFormat(token)) notFound();
  const ok = await invitationExists(token);
  if (!ok) notFound();

  return (
    <div className="min-h-screen bg-mccain-gray flex flex-col justify-center px-4 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-lg lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <ApplyForm inviteToken={token} />
      </div>
    </div>
  );
}
