import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF9ED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nanditaspeaks.com"),
  title: {
    default: "Nandita Speaks | Nandita Roy — MUN Coach, Educationist & Communication Mentor",
    template: "%s | Nandita Speaks",
  },
  description:
    "Empowering 8,000+ students through expert MUN coaching, public speaking, debate, and transformative communication training with Nandita Roy.",
  keywords: [
    "Nandita Roy",
    "Nandita Speaks",
    "MUN Coach",
    "Educationist India",
    "Public Speaking Mentor",
    "Communication Coach",
    "Debate and Elocution",
    "Model United Nations Training",
    "IIMUN Coach",
    "Siliguri Educationist",
    "Student Counselling",
    "Theatre Director",
  ],
  authors: [{ name: "Nandita Roy", url: "https://www.nanditaspeaks.com" }],
  creator: "Nandita Roy",
  publisher: "Nandita Speaks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nanditaspeaks.com",
    siteName: "Nandita Speaks",
    title: "Nandita Speaks | Nandita Roy — MUN Coach & Educationist",
    description:
      "Empowering 8,000+ students through expert Model United Nations coaching, public speaking, and transformative communication training.",
    images: [
      {
        url: "/images/nandita/portrait-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Nandita Roy — Educationist, MUN Coach & Public Speaking Mentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandita Speaks | Nandita Roy — MUN Coach & Educationist",
    description:
      "Empowering 8,000+ students through expert Model United Nations coaching, public speaking, and transformative communication training.",
    site: "@nandita_mun",
    creator: "@nandita_mun",
    images: ["/images/nandita/portrait-studio.jpg"],
  },
  alternates: {
    canonical: "https://www.nanditaspeaks.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.nanditaspeaks.com/#person",
        name: "Nandita Roy",
        alternateName: ["Nandita Roy Baul", "Nandita Speaks"],
        url: "https://www.nanditaspeaks.com",
        image: "https://www.nanditaspeaks.com/images/nandita/portrait-studio.jpg",
        jobTitle: "Model United Nations Coach, Educationist & Communication Mentor",
        description:
          "Seasoned educationist with 20+ years of experience as a Model United Nations coach, editor, and mentor who has impacted over 8,000 students.",
        worksFor: {
          "@type": "Organization",
          name: "Nandita Speaks",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "P.C. Sarani, Deshbandhupara, Ward No. 30",
          addressLocality: "Siliguri",
          postalCode: "734004",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/nandita.roybaul.9",
          "https://www.instagram.com/munarchs",
          "https://www.youtube.com/@nanditaroybaulmun",
          "https://x.com/nandita_mun",
          "https://www.linkedin.com/in/nanditaroybaul/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nanditaspeaks.com/#website",
        url: "https://www.nanditaspeaks.com",
        name: "Nandita Speaks",
        description:
          "Official digital home of Nandita Roy — Educationist, MUN Coach, and Communication Mentor.",
        publisher: {
          "@id": "https://www.nanditaspeaks.com/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${sans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-ivory-100 text-charcoal-800 antialiased selection:bg-ivory-300 selection:text-charcoal-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}

