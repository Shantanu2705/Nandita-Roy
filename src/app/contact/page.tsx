"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { profileData } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    subject: "Student Mentoring Inquiry",
    message: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [waLinkGenerated, setWaLinkGenerated] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+-\s()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    if (!formData.privacyConsent) errs.privacyConsent = "Please agree to the privacy terms.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Compose formatted text for WhatsApp and mailto fallback
    const messageBody = `*New Inquiry via Nandita Speaks Website*
---------------------------------------
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
${formData.address ? `*Address:* ${formData.address}\n` : ""}
*Message:*
${formData.message}`;

    const encodedWa = encodeURIComponent(messageBody);
    const waUrl = `https://wa.me/917548074284?text=${encodedWa}`;
    setWaLinkGenerated(waUrl);

    setTimeout(() => {
      setStatus("success");
      try {
        window.open(waUrl, "_blank");
      } catch {}
    }, 400);
  };

  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Initiate Contact"
            title="Start Your Journey With Nandita"
            subtitle="Reach out for student training cohorts, institution partnerships, school delegation preparation, or speaking invitations."
          />
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left: Contact Info & Photo (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-ivory-300 aspect-[4/3] w-full">
                <Image
                  src="/images/nandita/portrait-white-blazer.jpg"
                  alt="Nandita Roy in white blazer"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-ivory-50/90 backdrop-blur-sm text-xs text-charcoal-800 border border-ivory-border">
                  <span className="font-serif font-bold text-charcoal-900 block text-sm">
                    Nandita Roy
                  </span>
                  Siliguri, West Bengal · Available for In-Person & Virtual Cohorts
                </div>
              </div>

              {/* Direct Details Box */}
              <div className="p-8 rounded-3xl bg-ivory-50 border-2 border-ivory-border shadow-card space-y-6">
                <h3 className="font-serif text-xl font-bold text-charcoal-900 border-b border-ivory-border pb-3">
                  Direct Inquiries
                </h3>

                <div className="space-y-4 text-sm text-charcoal-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal-900 block text-xs uppercase font-mono tracking-wider">
                        Address
                      </span>
                      <p className="mt-0.5 leading-relaxed text-xs sm:text-sm">
                        {profileData.contact.address}, {profileData.contact.city} {profileData.contact.pincode}, West Bengal, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal-900 block text-xs uppercase font-mono tracking-wider">
                        Telephone
                      </span>
                      <a
                        href={profileData.contact.callLink}
                        className="mt-0.5 hover:text-warmBrown transition-colors font-semibold block text-xs sm:text-sm"
                      >
                        {profileData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal-900 block text-xs uppercase font-mono tracking-wider">
                        Electronic Mail
                      </span>
                      <a
                        href={`mailto:${profileData.contact.email}`}
                        className="mt-0.5 hover:text-warmBrown transition-colors font-semibold block text-xs sm:text-sm"
                      >
                        {profileData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal-900 block text-xs uppercase font-mono tracking-wider">
                        Office Hours
                      </span>
                      <div className="mt-1 space-y-1 text-xs">
                        {profileData.contact.officeHours.map((oh, i) => (
                          <div key={i} className="flex justify-between gap-4">
                            <span className="text-charcoal-600">{oh.days}:</span>
                            <span className="font-medium text-charcoal-900">{oh.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-4 border-t border-ivory-border">
                  <a
                    href={profileData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                    <span>Chat on WhatsApp Instantly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Premium Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border-2 border-ivory-border shadow-card">
                <div className="mb-8">
                  <span className="text-xs uppercase font-mono tracking-wider text-warmBrown font-bold">
                    Official Message Form
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mt-1">
                    Send an Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 font-sans">
                    Please provide your contact details and message below. We promptly respond within 24 to 48 hours.
                  </p>
                </div>

                {status === "success" && (
                  <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-2">
                    <div className="flex items-center gap-2 font-bold text-emerald-800 font-serif text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Inquiry Prepared Successfully!</span>
                    </div>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Your inquiry has been compiled and forwarded to Nandita Roy. If WhatsApp did not open automatically, click the button below to send your pre-filled inquiry:
                    </p>
                    {waLinkGenerated && (
                      <div className="pt-2">
                        <a
                          href={waLinkGenerated}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                          <span>Open in WhatsApp</span>
                        </a>
                      </div>
                    )}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-xs font-bold underline text-emerald-800 hover:text-emerald-900"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Ananya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-ivory-100 border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amber transition-all ${
                          errors.fullName ? "border-red-400" : "border-ivory-border"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-ivory-100 border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amber transition-all ${
                          errors.phone ? "border-red-400" : "border-ivory-border"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. ananya@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-ivory-100 border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amber transition-all ${
                          errors.email ? "border-red-400" : "border-ivory-border"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                        City / Address <span className="text-charcoal-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="e.g. Siliguri / Kolkata"
                        className="w-full px-4 py-3 rounded-xl bg-ivory-100 border border-ivory-border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amber transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Inquiry Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory-100 border border-ivory-border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-amber transition-all"
                    >
                      <option value="Student Mentoring Inquiry">
                        Student Mentoring Inquiry (Classes 8–12)
                      </option>
                      <option value="MUN, FUN & BEYOND Cohort">
                        MUN, FUN & BEYOND Cohort Admission
                      </option>
                      <option value="School / Institutional Delegation">
                        School / Institutional Delegation Training
                      </option>
                      <option value="Keynote Speaking & Masterclass">
                        Keynote Speaking & Workshop Invitation
                      </option>
                      <option value="Youth Counselling & Confidence Guidance">
                        Youth Counselling & Confidence Guidance
                      </option>
                      <option value="General Inquiries">General Inquiries</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please tell us about your requirement, student age/grade, or institution details..."
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-100 border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amber transition-all ${
                        errors.message ? "border-red-400" : "border-ivory-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Privacy Policy Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) =>
                          setFormData({ ...formData, privacyConsent: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded text-amber focus:ring-amber border-ivory-border"
                      />
                      <span className="text-xs text-charcoal-600 leading-snug">
                        I agree to the{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-warmBrown underline hover:text-amber-dark"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and consent to Nandita Speaks processing my contact details for response.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="mt-1 text-xs text-red-600">{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-charcoal-500 text-center mt-2.5">
                      Submissions connect directly with Nandita Roy&apos;s verified communication desk.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-ivory-200/60 border-t border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-ivory-50 border border-ivory-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-warmBrown block">
                Office Location
              </span>
              <h3 className="font-serif text-xl font-bold text-charcoal-900">
                Siliguri, West Bengal (Pincode: 734004)
              </h3>
              <p className="text-xs text-charcoal-600">
                P.C. Sarani, Deshbandhupara, Ward No. 30, Siliguri 734004, West Bengal, India.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Siliguri+734004+West+Bengal+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal-900 text-white hover:bg-warmBrown transition-colors shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

