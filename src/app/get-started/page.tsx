"use client";

import Link from "next/link";
import { useState } from "react";

const countryCodes = [
  { code: "+91", label: "🇮🇳 +91 India" },
  { code: "+1", label: "🇺🇸 +1 United States" },
  { code: "+44", label: "🇬🇧 +44 United Kingdom" },
  { code: "+65", label: "🇸🇬 +65 Singapore" },
  { code: "+61", label: "🇦🇺 +61 Australia" },
  { code: "+971", label: "🇦🇪 +971 UAE" },
];

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    whatsappNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d{8,15}$/.test(formData.whatsappNumber.replace(/[\s-]/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-[var(--page-bg)] text-[var(--page-text)]">
      {/* Left image — hidden on mobile */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden h-full lg:h-screen bg-[#0a0a0a]">
        <img
          src="/frontimage.png"
          alt="Get Started RUX background visual"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* ── Right Side: Waitlist Signup Form ── */}
      <div className="flex flex-col h-screen lg:h-screen overflow-y-auto bg-[var(--page-bg)] text-[var(--page-text)] p-6 sm:p-10 md:p-16 lg:py-20 lg:pl-12 lg:pr-24 relative">
        
        {/* Unified Wrapper — Left-aligned close to the image on desktop */}
        <div className="max-w-md w-full lg:ml-0 mx-auto my-auto flex flex-col justify-center py-8">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <span className="text-[15px]">←</span> Back
            </Link>
          </div>

          {/* Success State */}
          {isSubmitted ? (
            <div className="animate-fade-in flex flex-col items-start gap-4">
              <div className="size-12 rounded-full flex items-center justify-center animate-pulse" style={{ background: "rgba(125,72,53,0.1)", border: "1px solid rgba(125,72,53,0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h1
                className="text-2xl font-semibold tracking-tight"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  color: "var(--heading-color)",
                  lineHeight: 1.15,
                }}
              >
                You&apos;re on the list!
              </h1>
              <p className="text-[14px]" style={{ color: "var(--muted-text)", lineHeight: 1.6 }}>
                Thank you for signing up, <strong className="text-[var(--heading-color)]">{formData.fullName}</strong>. We have registered your interest for early access. We will email or text you as soon as your developer slot opens up!
              </p>
              <Link
                href="/"
                className="mt-4 inline-flex items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200"
                style={{
                  height: "2.75rem",
                  background: "var(--heading-color)",
                  color: "var(--page-bg)",
                }}
              >
                Return Home
              </Link>
            </div>
          ) : (
            /* Waitlist Form */
            <div className="w-full">
              <h1
                className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  lineHeight: 1.15,
                }}
              >
                Get started with RUX
              </h1>
              <p className="mb-8 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                Join the waitlist for early access. We&apos;ll let you know when it&apos;s your turn.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    Full name <span className="text-[#e11d48] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="eg. Rahul Sharma"
                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] placeholder-gray-400 dark:placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                    style={{
                      borderColor: errors.fullName ? "#e11d48" : undefined,
                    }}
                  />
                  {errors.fullName && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    Email <span className="text-[#e11d48] font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eg. rahul@gmail.com"
                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] placeholder-gray-400 dark:placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                    style={{
                      borderColor: errors.email ? "#e11d48" : undefined,
                    }}
                  />
                  {errors.email && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.email}</span>}
                </div>

                {/* WhatsApp Number (Split Select + Input) */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    WhatsApp number <span className="text-[#e11d48] font-bold">*</span>
                  </label>
                  <div
                    className="relative flex items-center w-full border-b border-gray-300 dark:border-zinc-800 py-1.5 px-0 transition-colors duration-200 focus-within:border-black dark:focus-within:border-white"
                    style={{
                      borderColor: errors.whatsappNumber ? "#e11d48" : undefined,
                    }}
                  >
                    <div className="relative flex items-center pr-2 select-none bg-transparent">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="text-[14px] bg-transparent border-none outline-none appearance-none cursor-pointer pr-4 text-black dark:text-white"
                      >
                        {countryCodes.map((item) => (
                          <option key={item.code} value={item.code} className="bg-white dark:bg-[#121212] text-black dark:text-white">
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="h-4 w-px bg-gray-300 dark:bg-zinc-800 mx-2" />
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="flex-1 bg-transparent border-none outline-none py-0 px-0 text-[14px] placeholder-gray-400 dark:placeholder-zinc-500 text-black dark:text-white"
                    />
                  </div>
                  {errors.whatsappNumber && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.whatsappNumber}</span>}
                </div>

                {/* Join Waitlist Button */}
                <div className="mt-4 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center gap-2.5 transition-all duration-200 active:scale-[0.98] cursor-pointer hover:bg-black/90 dark:hover:bg-white/90"
                    style={{
                      background: isSubmitting ? "#e5e7eb" : "black",
                      color: "white",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </>
                    ) : (
                      <>
                        Join waitlist
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block transition-transform duration-200 hover:translate-x-0.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Bottom link */}
          <div className="mt-10">
            <p className="text-[13px] text-gray-500 dark:text-gray-400">
              Are you an institute or school?{" "}
              <Link
                href="/contact-sales"
                className="font-semibold text-black dark:text-white transition-all duration-200 hover:underline inline-flex items-center gap-0.5"
              >
                Talk to our sales team →
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
