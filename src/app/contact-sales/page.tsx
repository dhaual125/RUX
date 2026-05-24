"use client";

import Link from "next/link";
import { useState } from "react";

const instituteTypes = [
  "School / K-12",
  "College / University",
  "Coaching Institute",
  "Enterprise / B2B",
  "Other",
];

const studentRanges = [
  "1 - 100 students",
  "101 - 500 students",
  "501 - 2000 students",
  "2000+ students",
];

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    jobTitle: "",
    instituteName: "",
    instituteType: "",
    studentCount: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.instituteName.trim()) newErrors.instituteName = "Institute name is required";
    if (!formData.instituteType) newErrors.instituteType = "Please select institute type";

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
          alt="Contact Sales RUX background visual"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* ── Right Side: Contact Sales Form ── */}
      <div className="flex flex-col h-screen lg:h-screen overflow-y-auto bg-[var(--page-bg)] text-[var(--page-text)] p-6 sm:p-10 md:p-12 lg:py-16 lg:pl-12 lg:pr-24 relative">
        
        {/* Unified Wrapper — Left-aligned close to the image on desktop */}
        <div className="max-w-xl w-full lg:ml-0 mx-auto my-auto flex flex-col justify-center py-8">
          {/* Top Back Link */}
          <div className="mb-8">
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
                Request Sent Successfully!
              </h1>
              <p className="text-[14px]" style={{ color: "var(--muted-text)", lineHeight: 1.6 }}>
                Thank you for reaching out, <strong className="text-[var(--heading-color)]">{formData.firstName}</strong>. We have registered your institutional request. Our partnership team will contact you at <strong className="text-[var(--heading-color)]">{formData.workEmail}</strong> shortly to discuss requirements.
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
            /* Contact Sales Form */
            <div className="w-full pr-1">
              <h1
                className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  lineHeight: 1.15,
                }}
              >
                Contact Sales
              </h1>
              <p className="mb-8 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                Fill in the details below and we&apos;ll reach out shortly.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                {/* First Name & Last Name (Side-by-Side) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      First name <span className="text-[#e11d48] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="eg. John"
                      className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                      style={{
                        borderColor: errors.firstName ? "#e11d48" : undefined,
                      }}
                    />
                    {errors.firstName && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.firstName}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      Last name <span className="text-[#e11d48] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="eg. Doe"
                      className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                      style={{
                        borderColor: errors.lastName ? "#e11d48" : undefined,
                      }}
                    />
                    {errors.lastName && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    Work email <span className="text-[#e11d48] font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="eg. john.doe@institute.edu"
                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                    style={{
                      borderColor: errors.workEmail ? "#e11d48" : undefined,
                    }}
                  />
                  {errors.workEmail && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.workEmail}</span>}
                </div>

                {/* Mobile Phone Number */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    Mobile phone number <span className="text-[#e11d48] font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="eg. 9129139145"
                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                    style={{
                      borderColor: errors.phoneNumber ? "#e11d48" : undefined,
                    }}
                  />
                  {errors.phoneNumber && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.phoneNumber}</span>}
                </div>

                {/* Job Title & Institute Name (Side-by-Side) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      Job title <span className="text-[#e11d48] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="eg. Principal"
                      className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                      style={{
                        borderColor: errors.jobTitle ? "#e11d48" : undefined,
                      }}
                    />
                    {errors.jobTitle && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.jobTitle}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      Institute name <span className="text-[#e11d48] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                      placeholder="eg. Delhi Public School"
                      className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 text-black dark:text-white"
                      style={{
                        borderColor: errors.instituteName ? "#e11d48" : undefined,
                      }}
                    />
                    {errors.instituteName && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.instituteName}</span>}
                  </div>
                </div>

                {/* Institute Type & Number of Students (Side-by-Side Select) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      Institute type <span className="text-[#e11d48] font-bold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="instituteType"
                        value={formData.instituteType}
                        onChange={handleChange}
                        className="w-full bg-[var(--page-bg)] border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 pr-8 pl-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 appearance-none cursor-pointer text-black dark:text-white"
                        style={{
                          borderColor: errors.instituteType ? "#e11d48" : undefined,
                        }}
                      >
                        <option value="" className="text-gray-400 dark:text-zinc-500 bg-white dark:bg-[#121212]">Please select</option>
                        {instituteTypes.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-[#121212] text-black dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 bottom-2.5 pointer-events-none flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    {errors.instituteType && <span className="text-[10px] text-[#e11d48] font-medium mt-1">{errors.instituteType}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-black dark:text-white">
                      Number of students
                    </label>
                    <div className="relative">
                      <select
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleChange}
                        className="w-full bg-[var(--page-bg)] border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 pr-8 pl-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 appearance-none cursor-pointer text-black dark:text-white"
                      >
                        <option value="" className="text-gray-400 dark:text-zinc-500 bg-white dark:bg-[#121212]">Please select</option>
                        {studentRanges.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-[#121212] text-black dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 bottom-2.5 pointer-events-none flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements & Goals (Textarea) */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-black dark:text-white">
                    Requirements & goals
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={2}
                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-zinc-800 rounded-none py-1.5 px-0 text-[14px] outline-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white transition-colors duration-200 resize-none text-black dark:text-white"
                  />
                </div>

                {/* Send Request Button */}
                <div className="mt-4 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center gap-2.5 transition-all duration-200 active:scale-[0.98] cursor-pointer bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500"
                    style={{
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
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
        </div>
      </div>
    </div>
  );
}
