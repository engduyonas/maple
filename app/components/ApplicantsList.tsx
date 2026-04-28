"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface Applicant {
  id: string;
  fullName: string;
  phoneNumber: string;
  passportNumber: string;
  gender: string;
  photograph: string;
  age: number;
  status: string;
  createdAt: string;
}

type FilterKey = "all" | "pending" | "approved" | "rejected";

const STATUS_STYLES: Record<string, { badge: string; dot: string; label: string; underline: string }> = {
  pending: {
    badge: "bg-white text-amber-700 border-amber-200",
    dot: "bg-amber-400",
    label: "Pending",
    underline: "from-amber-400 to-amber-500",
  },
  approved: {
    badge: "bg-white text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    label: "Approved",
    underline: "from-emerald-400 to-emerald-500",
  },
  rejected: {
    badge: "bg-white text-red-700 border-red-200",
    dot: "bg-red-500",
    label: "Rejected",
    underline: "from-red-400 to-red-500",
  },
};

const FILTER_DOT: Record<FilterKey, string> = {
  all: "bg-emerald-500",
  pending: "bg-amber-400",
  approved: "bg-emerald-500",
  rejected: "bg-red-500",
};

function PersonIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function PassportIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v15a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0018 2.25H6A2.25 2.25 0 003.75 4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

function HeaderIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72M6.219 18.72A9.094 9.094 0 002.479 18.24a3 3 0 014.682-2.72M15.75 9.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function InfoRow({
  icon,
  label,
  value,
  mono = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">{label}</p>
        <p className={`mt-0.5 text-sm font-bold text-mccain-dark truncate ${mono ? "font-mono tracking-wide" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ApplicantsList({
  applicants,
  variant = "full",
}: {
  applicants: Applicant[];
  variant?: "full" | "public";
}) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = useMemo(() => {
    const c = { all: applicants.length, pending: 0, approved: 0, rejected: 0 };
    applicants.forEach((a) => {
      if (a.status === "pending") c.pending++;
      else if (a.status === "approved") c.approved++;
      else if (a.status === "rejected") c.rejected++;
    });
    return c;
  }, [applicants]);

  const visible = useMemo(() => {
    if (variant === "public") return applicants;
    if (filter === "all") return applicants;
    return applicants.filter((a) => a.status === filter);
  }, [applicants, filter, variant]);

  const showFilters = variant === "full";

  return (
    <section className="bg-mccain-gray border-t border-gray-200 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
            <HeaderIcon />
            {variant === "public" ? "Featured" : "Applicants"}
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-mccain-dark sm:text-5xl">
            {variant === "public" ? (
              <>
                Featured applicants<span className="text-emerald-500">.</span>
              </>
            ) : (
              <>
                Application Status<span className="text-amber-400">.</span>
              </>
            )}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-mccain-gray-dark sm:text-base">
            {variant === "public"
              ? "Profiles shown here have been reviewed and approved."
              : "Applicants and their current status"}
          </p>
        </div>

        {/* Filter pills — admin-style review only on full dashboard */}
        {showFilters && (
        <div className="mt-7 flex flex-wrap gap-2">
          {(["all", "pending", "approved", "rejected"] as const).map((key) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all active:scale-95 ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-400 hover:text-emerald-700"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-white" : FILTER_DOT[key]}`} />
                {key}
                <span className={`ml-0.5 text-[10px] font-bold ${isActive ? "text-white/80" : "text-gray-400"}`}>
                  {counts[key]}
                </span>
              </button>
            );
          })}
        </div>
        )}

        {/* Cards */}
        {visible.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-sm font-bold text-mccain-dark">No applicants found</p>
            <p className="mt-1 text-xs text-mccain-gray-dark">
              {applicants.length === 0
                ? variant === "public"
                  ? "No featured applicants yet."
                  : "Applicants added in the admin panel will appear here."
                : "Try a different filter."}
            </p>
          </div>
        ) : (
          <ul className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((applicant) => {
              const style =
                variant === "public"
                  ? {
                      badge: "bg-white/95 text-emerald-800 border-emerald-200",
                      dot: "bg-emerald-500",
                      label: "Featured",
                      underline: STATUS_STYLES.approved.underline,
                    }
                  : (STATUS_STYLES[applicant.status] ?? STATUS_STYLES.pending);
              const phoneRaw = (applicant.phoneNumber || "").trim();
              const phoneDisplay = phoneRaw && !/^\+?\d{0,4}\s*$/.test(phoneRaw) ? phoneRaw : "Private";
              return (
                <li
                  key={applicant.id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Photo + overlays */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    {applicant.photograph ? (
                      <Image
                        src={applicant.photograph}
                        alt={applicant.fullName}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={applicant.photograph.startsWith("data:")}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-5xl font-black text-mccain-gray-dark">
                        {applicant.fullName.charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Status pill */}
                    <span
                      className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] shadow-sm ${style.badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      {style.label}
                    </span>

                    {/* Gradient + name overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/55 to-transparent px-4 pb-4 pt-14">
                      <p className="truncate text-base font-black uppercase tracking-wide text-white">
                        {applicant.fullName}
                      </p>
                    </div>
                  </div>

                  {/* Info rows */}
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <InfoRow
                      icon={<PersonIcon />}
                      label="Gender / Age"
                      value={`${applicant.gender} \u00b7 ${applicant.age} yrs`}
                    />
                    <InfoRow icon={<PhoneIcon />} label="Phone" value={phoneDisplay} />
                    <InfoRow icon={<PassportIcon />} label="Passport" value={applicant.passportNumber} mono />
                  </div>

                  {/* Bottom underline */}
                  <div className={`h-1 bg-linear-to-r ${style.underline}`} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
