import type { Metadata } from "next";
import SectionHeading from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Nandita Speaks",
  description: "Privacy policy and personal data protection information for Nandita Speaks.",
  alternates: {
    canonical: "https://www.nanditaspeaks.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory-100 min-h-screen">
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal & Governance"
            title="Privacy Policy"
            subtitle="How Nandita Speaks collects, uses, and safeguards personal information shared across our educational platforms."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border-2 border-ivory-border shadow-card space-y-8 text-charcoal-700 leading-relaxed text-sm sm:text-base font-sans">
            <div>
              <p>
                <strong>Nandita Speaks</strong> is committed to protecting your personal information. This privacy policy explains how we collect, use and protect your personal information when you visit our website and take advantage of our services. You agree to the terms of this privacy policy by using our website. Please read it thoroughly.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                1. Information We Collect
              </h2>
              <p>
                <strong>Personal Information:</strong> When you voluntarily provide us with personal information, such as your name, email address, phone number and other details through our registration process or when you contact us, we collect that information.
              </p>
              <p>
                <strong>Information Usage:</strong> We collect information automatically about your use of our website, such as your IP address, browser type, device information, and pages viewed. Cookies and standard web technologies are used to enhance user experience.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                2. Use of Information
              </h2>
              <p>
                We may use the personal information you provide us for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-charcoal-700">
                <li>To deliver, administer and enhance our educational services</li>
                <li>To respond to your queries and provide prompt customer assistance</li>
                <li>To customize and improve your online experience</li>
                <li>To send you relevant course notices, schedules, and program updates</li>
                <li>To conduct educational research and analysis to refine our training models</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                3. Information Disclosure
              </h2>
              <p>
                We do not sell or rent personal information to third parties. We might share necessary details only with trusted service providers who assist us in managing our communication platforms under strict confidentiality agreements, or to comply with statutory legal requirements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                4. Data Security
              </h2>
              <p>
                We employ suitable technological and organizational safeguards to prevent unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                5. Privacy of Minors
              </h2>
              <p>
                As an educational platform serving students aged 12–20, student enrollments are conducted with parental or school institutional awareness and consent. We do not solicit personal disclosures from minors without appropriate guardian involvement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 border-b border-ivory-border pb-2">
                6. Contact for Privacy Inquiries
              </h2>
              <p>
                For questions regarding this policy or your personal data, contact us at: <br />
                <strong>Email:</strong> amarchithii@gmail.com <br />
                <strong>Address:</strong> P.C. Sarani, Deshbandhupara, Ward No. 30, Siliguri 734004, West Bengal, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

