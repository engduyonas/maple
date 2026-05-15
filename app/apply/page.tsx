import Link from "next/link";

export const metadata = {
  title: "Registration | Maple Leaf Foods",
  description: "Profile registration uses a personal invitation link from Maple Leaf Foods.",
};

export default function ApplyLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-md text-center">
        <h1 className="text-2xl font-black tracking-tight text-mccain-dark">Registration</h1>
        <p className="mt-3 text-sm text-gray-600">
          Invitations are sent individually. Open the registration link you received by message or email — it contains a
          unique address and cannot be guessed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-mccain-green/40 hover:bg-emerald-50/50"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
