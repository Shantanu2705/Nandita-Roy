export interface VideoItem {
  id: string;
  title: string;
  speaker: string;
  guestOrTopic: string;
  description: string;
  youtubeId?: string;
  youtubeUrl?: string;
  localVideoUrl?: string;
  thumbnail: string;
  category: "Author Interview" | "Keynote & Speech" | "Coaching Highlights";
  duration?: string;
}

export const videosData: VideoItem[] = [
  {
    id: "interview-kulwant-rehal-fulfilled",
    title: 'Interview with Kulwant Kaur Rehal on her book "ABC of Being Fulfilled"',
    speaker: "Nandita Roy (Host & Interviewer)",
    guestOrTopic: "Kulwant Kaur Rehal (Author, Life Coach & Educator)",
    description:
      'In-depth conversation with renowned author Kulwant Kaur Rehal exploring inward growth, overcoming competition, finding balance, and navigating life challenges from her celebrated book "ABC of Being Fulfilled: Sweeter, tangier and exotically flavoured!".',
    youtubeId: "BsdyLxikp0M",
    youtubeUrl: "https://www.youtube.com/watch?v=BsdyLxikp0M",
    thumbnail: "https://img.youtube.com/vi/BsdyLxikp0M/maxresdefault.jpg",
    category: "Author Interview",
    duration: "Full Interview",
  },
  {
    id: "interview-kulwant-rehal-nandita",
    title: "Enriching Interview with Nandita Roy featuring Kulwant Rehal",
    speaker: "Nandita Roy & Kulwant Rehal",
    guestOrTopic: "Communication, Purpose & Youth Fulfilment",
    description:
      "A rich, inspiring exchange on cultivating voice, mentoring the new generation of thinkers, and the transformative power of self-expression in modern education.",
    youtubeId: "glbxPdo-kI4",
    youtubeUrl: "https://www.youtube.com/watch?v=glbxPdo-kI4",
    thumbnail: "https://img.youtube.com/vi/glbxPdo-kI4/maxresdefault.jpg",
    category: "Author Interview",
    duration: "Webinar Feature",
  },
  {
    id: "nandita-speaking-highlight-reel",
    title: "Nandita Roy: Speaking & Educational Mentorship Reel",
    speaker: "Nandita Roy",
    guestOrTopic: "Student Guidance & Live Workshop Dynamics",
    description:
      "Authentic recorded highlights demonstrating interactive classroom engagement, live speaker drills, and the vibrant, uplifting energy Nandita brings to every student cohort.",
    localVideoUrl: "/videos/nandita-speaking-highlight.mp4",
    thumbnail: "/images/events/keynote-presentation.jpg",
    category: "Coaching Highlights",
    duration: "Live Session Highlight",
  },
];

