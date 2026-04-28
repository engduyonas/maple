import Link from "next/link";
import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "Submit application | Maple Leaf Foods",
  description: "Invitation-only profile form. Use the link you were sent to complete your submission.",
};

export default function ApplyPage() {
  return (
    <div className="bg-mccain-gray min-h-[calc(100vh-8rem)] border-t border-gray-200 py-12 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <nav className="mb-8">
          <Link href="/" className="text-sm font-semibold text-mccain-green hover:underline">
            ← Home
          </Link>
        </nav>

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Applicants</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-mccain-dark sm:text-4xl">Submit your profile</h1>
          <p className="mt-2 text-sm text-mccain-gray-dark sm:text-base">
            You opened this page from a link we sent you. Complete the form below; our team reviews submissions, and only
            approved profiles are shown on the site.
          </p>
        </div>

        <ApplyForm />
      </div>
    </div>
  );
}
