import type { Metadata } from "next";
import SectionHeading from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Terms and Conditions | Nandita Speaks",
  description: "Terms and conditions governing the use of the Nandita Speaks website and educational services.",
  alternates: {
    canonical: "https://www.nanditaspeaks.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-ivory-100 min-h-screen">
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal & Governance"
            title="Terms & Conditions"
            subtitle="Terms governing website access, program registrations, and communication with Nandita Roy."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border-2 border-ivory-border shadow-card space-y-8 text-charcoal-700 leading-relaxed text-sm sm:text-base font-sans">
            <div>
              <p>
                By accessing and using the <strong>Nandita Speaks</strong> (Nandita Roy) website or related services, you agree to comply with the following terms and conditions. These terms govern your use of the site, registration, event participation, and communication with Nandita Roy.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                1. Use of Website & Intellectual Property
              </h2>
              <p>
                All content, including curriculum designs, editorial texts, photographs, graphics, logos, and materials, is the intellectual property of Nandita Roy and may not be copied, distributed, or modified without prior written consent.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                2. Member Access & Confidentiality
              </h2>
              <p>
                Member cohort details, webinar links, and course materials are confidential and issued for personal educational use only. Unauthorized sharing, recording, or redistribution is strictly prohibited.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                3. Online Registration & Educational Programs
              </h2>
              <p>
                Registrations for events, webinars, or diagnostic cohorts through this website are subject to verification and eligibility confirmation. Nandita Roy reserves the right to modify cohort schedules or cancel sessions with appropriate notice.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                4. Data & Privacy
              </h2>
              <p>
                Any personal or institutional data submitted is governed by our Privacy Policy. We do not sell or monetize participant information.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                5. Limitation of Liability
              </h2>
              <p>
                Nandita Roy shall not be liable for any indirect or consequential damages arising from the use or inability to access this website or associated digital tools.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of the Republic of India. Any legal disputes shall fall under the exclusive jurisdiction of the competent courts of Kolkata, West Bengal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

