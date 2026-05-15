"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COUNTRY_CODES } from "@/app/data/countryCodes";

function Icon({ d, className = "w-5 h-5" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function ErrorText({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      {msg}
    </p>
  );
}

interface FieldErrors {
  fullName?: string;
  phoneNumber?: string;
  passportNumber?: string;
  gender?: string;
  age?: string;
  photograph?: string;
}

export default function ApplyForm({ inviteToken }: { inviteToken: string }) {
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [gender, setGender] = useState("");
  const [photograph, setPhotograph] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [age, setAge] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const inputBase =
    "w-full px-3.5 py-3 border rounded-xl text-[15px] sm:text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent placeholder:text-gray-400";
  const inputClass = (hasError: boolean) =>
    `${inputBase} ${hasError ? "border-red-300 focus:ring-red-400 bg-red-50/30" : "border-gray-200 focus:ring-mccain-green/50 hover:border-gray-300"}`;
  const selectChevron =
    "appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-[length:12px] bg-[right_14px_center] bg-no-repeat pr-9";

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setFieldErrors((p) => ({ ...p, photograph: "Photo must be less than 5MB" }));
      return;
    }
    if (!file.type.startsWith("image/")) {
      setFieldErrors((p) => ({ ...p, photograph: "File must be an image" }));
      return;
    }
    setFieldErrors((p) => ({ ...p, photograph: undefined }));
    const reader = new FileReader();
    reader.onloadend = () => {
      const b = reader.result as string;
      setPhotograph(b);
      setPhotoPreview(b);
    };
    reader.readAsDataURL(file);
  };

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    const tn = fullName.trim();
    if (!tn) errors.fullName = "Full name is required";
    else if (tn.length < 3) errors.fullName = "Name must be at least 3 characters";
    else if (!/^[a-zA-Z\s\-'.]+$/.test(tn)) errors.fullName = "Letters, spaces, hyphens, and apostrophes only";

    const pn = phoneLocal.trim();
    if (!pn) errors.phoneNumber = "Phone number is required";

    const tp = passportNumber.trim();
    if (!tp) errors.passportNumber = "Passport number is required";
    else if (!/^[a-zA-Z0-9\-]+$/.test(tp)) errors.passportNumber = "Letters, digits, and hyphens only";
    else if (tp.length < 5) errors.passportNumber = "Too short (min 5)";
    else if (tp.length > 20) errors.passportNumber = "Too long (max 20)";

    if (!gender) errors.gender = "Select a gender";
    const an = parseInt(age, 10);
    if (!age) errors.age = "Age is required";
    else if (Number.isNaN(an)) errors.age = "Must be a number";
    else if (an < 18) errors.age = "Must be 18+";
    else if (an > 100) errors.age = "Max 100";
    if (!photograph) errors.photograph = "Photo is required";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inviteToken,
          fullName: fullName.trim(),
          phoneNumber: countryCode ? `${countryCode} ${phoneLocal.trim()}` : phoneLocal.trim(),
          passportNumber: passportNumber.trim().toUpperCase(),
          gender,
          photograph,
          age,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setDone(true);
      } else {
        setError(typeof data.error === "string" ? data.error : "Submission failed");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-10 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <Icon d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-7 h-7 text-emerald-600" />
        </div>
        <h2 className="text-xl font-black text-mccain-dark">Application received</h2>
        <p className="mt-2 text-sm text-mccain-gray-dark">
          Thank you. Our team will review your submission. If approved, your profile may appear on our site.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-mccain-green px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-mccain-green-dark"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-10">
      <div className="mb-8 border-b border-gray-100 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Registration</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight text-mccain-dark sm:text-3xl">Submit your profile</h1>
        <p className="mt-2 text-sm text-mccain-gray-dark sm:text-base">
          Complete this form using the link you were sent. Our team reviews every submission before it can appear on
          the site.
        </p>
      </div>
      {error && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <Icon d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" className="w-5 h-5 shrink-0 text-red-600" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Personal</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Full name *</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setFieldErrors((p) => ({ ...p, fullName: undefined }));
                }}
                placeholder="Jane Doe"
                className={inputClass(!!fieldErrors.fullName)}
              />
              {fieldErrors.fullName && <ErrorText msg={fieldErrors.fullName} />}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:contents">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Gender *</label>
                <select
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setFieldErrors((p) => ({ ...p, gender: undefined }));
                  }}
                  className={`${inputClass(!!fieldErrors.gender)} ${selectChevron}`}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {fieldErrors.gender && <ErrorText msg={fieldErrors.gender} />}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Age *</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    setFieldErrors((p) => ({ ...p, age: undefined }));
                  }}
                  placeholder="25"
                  min={18}
                  max={100}
                  className={inputClass(!!fieldErrors.age)}
                />
                {fieldErrors.age && <ErrorText msg={fieldErrors.age} />}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Contact & ID</h3>
          <div className="flex flex-col gap-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone *</label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  aria-label="Country calling code"
                  className={`w-full shrink-0 rounded-xl border px-3 py-3 text-[15px] sm:w-46 sm:text-sm ${fieldErrors.phoneNumber ? "border-red-300" : "border-gray-200"} bg-white focus:outline-none focus:ring-2 focus:ring-mccain-green/50`}
                >
                  <option value="">Select country code</option>
                  {COUNTRY_CODES.map((c, idx) => (
                    <option key={`${c.country}-${c.code}-${idx}`} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={phoneLocal}
                  onChange={(e) => {
                    setPhoneLocal(e.target.value);
                    setFieldErrors((p) => ({ ...p, phoneNumber: undefined }));
                  }}
                  placeholder="Phone number"
                  className={`w-full ${inputClass(!!fieldErrors.phoneNumber)}`}
                />
              </div>
              {fieldErrors.phoneNumber && <ErrorText msg={fieldErrors.phoneNumber} />}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Passport no. *</label>
              <input
                type="text"
                value={passportNumber}
                onChange={(e) => {
                  setPassportNumber(e.target.value.toUpperCase());
                  setFieldErrors((p) => ({ ...p, passportNumber: undefined }));
                }}
                placeholder="AB1234567"
                maxLength={20}
                className={`${inputClass(!!fieldErrors.passportNumber)} w-full font-mono uppercase tracking-widest`}
              />
              {fieldErrors.passportNumber && <ErrorText msg={fieldErrors.passportNumber} />}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Photo</h3>
          {photoPreview ? (
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-mccain-green/20">
                <Image src={photoPreview} alt="" fill className="object-cover" unoptimized={photoPreview.startsWith("data:")} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900">Photo uploaded</p>
                <button
                  type="button"
                  onClick={() => {
                    setPhotograph("");
                    setPhotoPreview("");
                  }}
                  className="mt-1 text-xs font-semibold text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <label
              className={`flex h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all active:scale-[0.99] ${fieldErrors.photograph ? "border-red-300 bg-red-50/30" : "border-gray-200 hover:border-mccain-green"}`}
            >
              <Icon d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" className="mb-2 h-10 w-10 text-gray-400" />
              <span className="mt-2 text-sm font-medium text-gray-600">Upload photo *</span>
              <span className="mt-0.5 text-[11px] text-gray-400">PNG, JPG, WebP · max 5MB</span>
              <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={handlePhotoChange} className="hidden" />
            </label>
          )}
          {fieldErrors.photograph && !photoPreview && <ErrorText msg={fieldErrors.photograph} />}
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-mccain-green to-mccain-green-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-mccain-green/20 transition enabled:active:scale-[0.98] disabled:opacity-50"
          >
            {submitting ? "Submitting…" : "Submit application"}
          </button>
          <Link href="/" className="text-center text-sm font-medium text-gray-500 hover:text-mccain-green sm:text-left">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
