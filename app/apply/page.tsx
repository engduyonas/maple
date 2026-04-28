import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "Registration | Maple Leaf Foods",
  description: "Invitation-only profile registration. Use the link you were sent to complete your submission.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-mccain-gray flex flex-col justify-center px-4 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-lg">
        <ApplyForm />
      </div>
    </div>
  );
}
