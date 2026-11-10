export interface EventItem {
  id: string;
  title: string;
  date: string;
  year: number;
  location: string;
  category: "Webinar" | "MUN & Training" | "Social Impact" | "UN Conference" | "Award & Recognition";
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
}

export const eventsData: EventItem[] = [
  {
    id: "un-rbhr-bangkok-2024",
    title: "United Nations Responsible Business & Human Rights Forum (Asia-Pacific)",
    date: "17 September 2024",
    year: 2024,
    location: "United Nations Conference Centre (UNCC), Bangkok, Thailand",
    category: "UN Conference",
    badge: "International UN Forum",
    description:
      "Nandita Roy moderated the critical session 'Collaborative Pilot Towards Eliminating Silicosis in Artisanal Small-scale Mining' as Communication Lead for MLPC Trust, bringing together international human rights advocates, industry experts, and policymakers.",
    image: "/images/conferences/un-rbhr-stage.jpg",
    highlights: [
      "Held in UNCC Conference Room 4, Bangkok",
      "Moderated by Nandita Roy for MLPC Trust",
      "Focus on human rights, worker protection, and ethical stone mining",
    ],
  },
  {
    id: "webinar-mun-2022",
    title: "Successful National Webinar on Model United Nations",
    date: "16 October 2022",
    year: 2022,
    location: "Online / National Virtual Hall",
    category: "Webinar",
    badge: "National Webinar",
    description:
      "A flagship national interactive webinar guiding hundreds of school and college students through the core mechanics of MUN, international diplomacy, rules of order, and building an articulate speaking voice.",
    image: "/images/programs/workshop-roundtables.jpg",
    highlights: [
      "Nationwide student participation",
      "Parliamentary procedure simplified",
      "Live Q&A and interactive debate breakdowns",
    ],
  },
  {
    id: "iea-gurgaon-2022",
    title: "International Education Awards Gurgaon — Award for Contribution to Student Development",
    date: "30 December 2022",
    year: 2022,
    location: "Hyatt Regency, Gurgaon",
    category: "Award & Recognition",
    badge: "Award Ceremony",
    description:
      "Conferred the prestigious 'Award for Contribution to Student Development' at the International Education Awards organized by Kiteskraft Productions in recognition of over two decades of transformative youth guidance.",
    image: "/images/awards/iea-gurgaon-award-2022.jpg",
    highlights: [
      "Honoring 20+ years of educational mentorship",
      "Held at Hyatt Regency, Gurgaon",
      "Organized by Kiteskraft Productions",
    ],
  },
  {
    id: "super-school-2022",
    title: "Super School National Workshop: Building Highly Effective Institutions",
    date: "29–30 January 2022",
    year: 2022,
    location: "Virtual National Conference",
    category: "MUN & Training",
    badge: "National Workshop",
    description:
      "Served as Event Moderator for the nationwide educators' summit organized by Future School Leaders and Activity Academy, driving high-impact discussions on modern institutional pedagogical transformation.",
    image: "/images/awards/super-school-certificate.jpg",
    highlights: [
      "Event Moderator role",
      "Focus on school leadership and student engagement",
      "Partnered with leading school networks",
    ],
  },
  {
    id: "train-yourself-mun-2021",
    title: "Train Yourself as an Expert MUNner with Nandita Roy",
    date: "03 June 2021",
    year: 2021,
    location: "Interactive Digital Cohort",
    category: "MUN & Training",
    badge: "Masterclass",
    description:
      "An intensive training cohort focusing on position paper mastery, unmoderated caucus strategies, cross-examination techniques, and high-stakes negotiation skills.",
    image: "/images/students/aps-session.jpg",
    highlights: [
      "Intensive caucus strategy",
      "Position paper research methods",
      "Debate simulation and speaker evaluations",
    ],
  },
  {
    id: "find-a-bed-2021",
    title: "FIND A BED — Youth COVID Support Initiative by IIMUNofficial",
    date: "10 May 2021",
    year: 2021,
    location: "Pan-India Community Initiative",
    category: "Social Impact",
    badge: "Social Impact",
    description:
      "Mobilized student volunteers across regions under the IIMUN network for FIND A BED, a youth-led social impact initiative providing verified medical bed assistance and emergency support during the nationwide crisis.",
    image: "/images/students/library-mentoring-wide.jpg",
    highlights: [
      "Youth mobilization across institutions",
      "Real-world civic empathy and action",
      "Community crisis response coordination",
    ],
  },
  {
    id: "sacred-school-2021",
    title: "Sacred School — International Summit of Leading Global Schools",
    date: "08–12 October 2021",
    year: 2021,
    location: "International Digital Summit",
    category: "MUN & Training",
    badge: "Global Summit",
    description:
      "Participated as a featured contributor at the international gathering of forward-thinking educators and schools organized by Future School Leaders and OneLXP by Illumnus.",
    image: "/images/awards/sacred-school-certificate.jpg",
    highlights: [
      "International educator delegates",
      "Innovation in adolescent communication",
      "Holistic schooling paradigms",
    ],
  },
  {
    id: "young-minds-2021",
    title: "Young Minds: Global Masterclass for Emerging Changemakers",
    date: "01–05 September 2021",
    year: 2021,
    location: "Global Virtual Forum",
    category: "MUN & Training",
    badge: "Youth Leadership",
    description:
      "Mentored adolescent changemakers on articulate expression, ethical leadership, and transforming ideas into actionable social impact initiatives.",
    image: "/images/awards/young-minds-certificate.jpg",
    highlights: [
      "Young changemaker presentations",
      "Speech crafting for civic impact",
      "Personal leadership blueprints",
    ],
  },
  {
    id: "iassi-nalanda-2026",
    title: "25th IASSI Annual Conference at Nalanda University, Rajgir",
    date: "25–28 October 2026",
    year: 2026,
    location: "Nalanda University, Rajgir, Bihar",
    category: "UN Conference",
    badge: "Academic Conference",
    description:
      "Represented civil society and communication initiatives alongside the Institute for Human Development, UNICEF, and leading academic institutions at historic Nalanda University.",
    image: "/images/events/nalanda-conference.jpg",
    highlights: [
      "Hosted at Nalanda University, Rajgir",
      "In collaboration with UNICEF and IHD",
      "Social science research and human development focus",
    ],
  },
  {
    id: "aiims-jodhpur-conference",
    title: "11th Annual National Conference of Medical Social Work Professionals",
    date: "Annual National Summit",
    year: 2023,
    location: "AIIMS Jodhpur, Rajasthan",
    category: "Social Impact",
    badge: "National Summit",
    description:
      "Participated in national deliberations on social welfare, patient advocacy, occupational health, and community empowerment at AIIMS Jodhpur.",
    image: "/images/events/aiims-jodhpur-conference.jpg",
    highlights: [
      "Hosted at AIIMS Jodhpur",
      "Advocacy for healthcare social work",
      "Interdisciplinary collaboration",
    ],
  },
];

