export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  organization: string;
  quote: string;
  highlight: string;
  relationship?: string;
  avatarPlaceholder?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "amit-de",
    name: "Amit De",
    designation: "General Manager",
    organization: "JP Minda Group",
    quote:
      "Nandita - Orator par excellence with her own dignified style of portraying the concept and thought which sink with all and is able to link a fabulous touch of connection, which specially I had seen with the students and peers. It would be great to have Nandita sharing all her exceptional skills matched with her unmatched techniques particularly to the younger generation as usual to cultivate a canvas of budding smart and intelligent Samaritans well prepared to cross the national boundary and be there in the widespread International field. All the very best to Nandita- prolific coach on the path of accolade for a noble cause, professionally managed indeed.",
    highlight: "Orator par excellence with her own dignified style of portraying the concept and thought which sink with all...",
    avatarPlaceholder: "AD",
  },
  {
    id: "moumita-debnath",
    name: "Moumita Debnath",
    designation: "Senior Mistress",
    organization: "DPS Siliguri",
    quote:
      "Nandita Roy is truly an excellent trainer for students interested in public speaking. She helps them in developing communication skills. Youngsters have performed extraordinarily well in different MUNs organised in the country and abroad.",
    highlight: "Youngsters have performed extraordinarily well in different MUNs organised in the country and abroad.",
    avatarPlaceholder: "MD",
  },
  {
    id: "sumana-sarkar-banerjee",
    name: "Sumana Sarkar Banerjee",
    designation: "HOD - English",
    organization: "DPS Siliguri",
    quote:
      "Nandita Roy is a name associated with MUN, English plays, Debates & Elocution competitions, she is the pioneer in guiding the students. Students have won accolades in national and international platforms under her tutelage. Her zeal and enthusiasm for public speaking is commendable. All such competitions are incomplete without her. Wish her success in all her future endeavours.",
    highlight: "She is the pioneer in guiding the students. Students have won accolades in national and international platforms under her tutelage.",
    avatarPlaceholder: "SB",
  },
  {
    id: "mousumi-brahma",
    name: "Mousumi Brahma",
    designation: "Parent",
    organization: "Guardian & Well-Wisher",
    quote:
      "With effortless fluency and a robust diction Nandita is an orator par excellence. More importantly in my interactions with her I have found her to be a lovely human being and have observed that she not only takes personal interest in each of her students but also encourages and ensures that their potential is fully explored. This sort of impeccable nurturing and quality guidance helps the candidates with their long term skill building.",
    highlight: "She not only takes personal interest in each of her students but also encourages and ensures that their potential is fully explored.",
    avatarPlaceholder: "MB",
  },
  {
    id: "amrit-tarfdar",
    name: "Amrit Tarfdar",
    designation: "Advocate",
    organization: "Legal Professional & Former Student/Mentee",
    quote:
      "Excellent Coach and Mentor. She has been a constant guide for students both personally and professionally. She has been an efficient and invaluable resource for the institutions.",
    highlight: "She has been a constant guide for students both personally and professionally. An invaluable resource for institutions.",
    avatarPlaceholder: "AT",
  },
  {
    id: "swati-bhattacharya",
    name: "Swati Bhattacharya",
    designation: "Chief Communications and Brand Officer",
    organization: "Bajaj Group",
    quote:
      "Nandita has a natural flair for public speaking and communication skills. She has been a driving force to young students to be a part of the prestigious MUN platforms.",
    highlight: "She has been a driving force to young students to be a part of the prestigious MUN platforms.",
    avatarPlaceholder: "SB",
  },
];

