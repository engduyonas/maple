import Link from "next/link";

/** Invalid or expired token — shown when invitation is missing or already used */
export default function ApplyInvitationNotFound() {
  return (
    <div className="min-h-screen bg-mccain-gray flex flex-col justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl shadow-gray-200/50">
        <h1 className="text-lg font-bold text-mccain-dark">Link not available</h1>
        <p className="mt-2 text-sm text-gray-600">
          This registration link is invalid or has already been used. Ask your contact for a new invitation if you still
          need to apply.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-mccain-green px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-mccain-green-dark"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
