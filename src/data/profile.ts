export interface ProfileData {
  name: string;
  brandName: string;
  tagline: string;
  heroHeading: string;
  heroEyebrow: string;
  heroDescription: string;
  stats: {
    value: string;
    numeric: number;
    label: string;
    description: string;
  }[];
  contact: {
    phone: string;
    phoneRaw: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
    whatsappNumber: string;
    whatsappLink: string;
    callLink: string;
    officeHours: {
      days: string;
      hours: string;
    }[];
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
  expertise: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    highlights: string[];
  }[];
  bio: {
    lead: string;
    paragraphs: string[];
    theatrePlays: string[];
    platforms: string[];
  };
}

export const profileData: ProfileData = {
  name: "Nandita Roy",
  brandName: "Nandita Speaks",
  tagline: "Speak. Lead. Thrive — with Nandita Roy.",
  heroEyebrow: "MUN COACH · EDUCATIONIST · EDITOR · MENTOR",
  heroHeading: "Find Your Voice. Shape Your Presence. Inspire Your World.",
  heroDescription:
    "Empowering young minds to communicate with confidence, think critically and become articulate leaders through Model United Nations, public speaking, theatre and transformative learning.",
  stats: [
    {
      value: "8,000+",
      numeric: 8000,
      label: "Students Impacted",
      description: "Mentored across schools, institutions, and nationwide cohorts.",
    },
    {
      value: "20+",
      numeric: 20,
      label: "Years of Experience",
      description: "Decades dedicated to educational excellence, diplomacy, and communication.",
    },
    {
      value: "100+",
      numeric: 100,
      label: "MUN Conferences Mentored",
      description: "Leading student delegations to national and international MUN platforms.",
    },
    {
      value: "UN HQ",
      numeric: 2017,
      label: "Global Championship Accolade",
      description: "Mentored students to win the IIMUN Championship at UN Headquarters, New York (2017).",
    },
  ],
  contact: {
    phone: "+91 75480 74284",
    phoneRaw: "+917548074284",
    email: "amarchithii@gmail.com",
    address: "P.C. Sarani, Deshbandhupara, Ward No. 30",
    city: "Siliguri",
    pincode: "734004",
    whatsappNumber: "917548074284",
    whatsappLink: "https://wa.me/917548074284",
    callLink: "tel:+917548074284",
    officeHours: [
      { days: "Monday – Friday", hours: "10:00 AM – 04:00 PM" },
      { days: "Saturday", hours: "10:00 AM – 02:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  socialLinks: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/nandita.roybaul.9",
      icon: "facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/munarchs",
      icon: "instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@nanditaroybaulmun",
      icon: "youtube",
    },
    {
      name: "Twitter / X",
      url: "https://x.com/nandita_mun",
      icon: "twitter",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nanditaroybaul/",
      icon: "linkedin",
    },
  ],
  expertise: [
    {
      id: "mun",
      title: "Model United Nations (MUN)",
      subtitle: "Diplomacy, Parliamentary Procedure & Global Affairs",
      description:
        "Comprehensive simulation training preparing students aged 12 to 20 for world-class diplomacy, committee rules, policy resolution drafting, and multilateral negotiation.",
      image: "/images/conferences/un-panel-speaking.jpg",
      highlights: ["Resolution Drafting", "Rules of Procedure", "Consensus Building", "Foreign Policy Analysis"],
    },
    {
      id: "public-speaking",
      title: "Public Speaking",
      subtitle: "Vocal Clarity, Articulation & Stage Presence",
      description:
        "Structured instruction designed to conquer stage fright, cultivate commanding vocal modulation, develop body language poise, and deliver compelling speeches with effortless grace.",
      image: "/images/events/keynote-presentation.jpg",
      highlights: ["Stage Presence", "Vocal Modulation", "Speech Architecture", "Audience Connection"],
    },
    {
      id: "communication-skills",
      title: "Communication Skills",
      subtitle: "Executive Articulation & Active Listening",
      description:
        "Empowering learners with real-world conversational intelligence, active listening, persuasive storytelling, and diplomatic tact for academic, personal, and professional arenas.",
      image: "/images/conferences/un-hall-delegate.jpg",
      highlights: ["Active Listening", "Persuasive Storytelling", "Interpersonal Tact", "Clarity of Thought"],
    },
    {
      id: "debate-elocution",
      title: "Debate & Elocution",
      subtitle: "Competitive Rigour & Critical Thinking",
      description:
        "Mentoring high-calibre teams for inter-school, state, and national contests including the ICAI Debate and East India Debate Contest at Assam Valley School, Tezpur.",
      image: "/images/students/speech-debate-practice.jpg",
      highlights: ["Rebuttal Strategy", "Logical Rigour", "Impromptu Thinking", "National Contest Preparation"],
    },
    {
      id: "theatre-drama",
      title: "Theatre & Drama",
      subtitle: "Characterization, Expression & Creative Confidence",
      description:
        "Directing acclaimed school and community productions that harness theatrical pedagogy to instill deep empathy, self-expression, spatial awareness, and collective teamwork.",
      image: "/images/students/aps-session.jpg",
      highlights: ["Stage Direction", "Character Immersion", "Ensemble Collaboration", "Creative Expression"],
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      subtitle: "Ethical Influence & Strategic Vision",
      description:
        "Grounded in 21st-century educational competencies aligned with NEP, fostering resilient self-governance, collaborative decision-making, and transformative youth leadership.",
      image: "/images/conferences/un-rbhr-stage.jpg",
      highlights: ["Collaborative Governance", "Crisis Navigation", "Ethical Advocacy", "Visionary Thinking"],
    },
    {
      id: "student-mentoring",
      title: "Student Mentoring & Counselling",
      subtitle: "Empathetic Guidance & Holistic Well-Being",
      description:
        "Dedicated personal counseling helping students conquer anxiety, exam stress, and self-doubt, nurturing stable, grounded, and emotionally intelligent individuals who flourish in life.",
      image: "/images/students/library-mentoring-close.jpg",
      highlights: ["Confidence Restoration", "Anxiety & Stress Management", "Academic Orientation", "Personal Growth"],
    },
  ],
  bio: {
    lead:
      "Nandita Roy is a seasoned educationist, Model United Nations (MUN) coach, academic editor, and mentor with over two decades of transformative experience. Over 8,000 students have flourished under her dedicated guidance.",
    paragraphs: [
      "With a lifelong commitment to empowering youth, Nandita has cultivated an extraordinary pedagogical path that blends academic rigor, classical elocution, theatrical direction, and international diplomatic training. Her students have competed and triumphed at the highest echelons of national and international public speaking and debate.",
      "She has prepared and escorted student delegations to prestigious national competitions including the Institute of Chartered Accountants of India (ICAI) debate championships and the renowned East India debate contest at Assam Valley School, Tezpur.",
      "A natural director and theatre aficionado, Nandita has staged numerous celebrated productions including Oliver Twist, The Umbrella Man, My Fair Lady, The Sound of Music, Mother's Day, The Taming of the Shrew, and The King and I. Through theatrical immersion, she transforms young people into expressive, empathetic, and culturally conscious communicators.",
      "For two decades, Nandita has trained delegates aged 12 to 20 for MUN conferences held under renowned platforms including India's International Movement to United Nations (IIMUN) and Ivy League simulations. Notably, her tutelage propelled students to win the prestigious Championship Conference organized by IIMUN at the United Nations Headquarters in New York in 2017.",
      "Beyond academic and competitive coaching, Nandita serves as a compassionate counselor to countless students, helping them navigate stress, anxiety, fear, and self-doubt to evolve into grounded, confident young leaders.",
      "In addition to her educational mentorship, Nandita serves as the Communication Lead for the Mine Labour Protection Campaign Trust (MLPC), an NGO dedicated to supporting silicosis victims and their families by championing ethical advocacy, alternative livelihoods, and transparency in the natural stone industry—a role that has seen her moderate panel sessions at the United Nations Conference Centre in Bangkok.",
    ],
    theatrePlays: [
      "Oliver Twist",
      "The Umbrella Man",
      "My Fair Lady",
      "The Sound of Music",
      "Mother's Day",
      "The Taming of the Shrew",
      "The King and I",
    ],
    platforms: [
      "India's International Movement to United Nations (IIMUN)",
      "United Nations Headquarters (New York) Championship (2017)",
      "United Nations Conference Centre (Bangkok) RBHR Forum",
      "ICAI National Debate Championships",
      "East India Debate Contest, Assam Valley School",
      "Mine Labour Protection Campaign Trust (MLPC)",
    ],
  },
};

