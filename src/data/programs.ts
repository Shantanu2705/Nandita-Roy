export interface ProgramPhase {
  phase: number;
  title: string;
  badge: string;
  duration: string;
  sessions: string;
  frequency: string;
  description: string;
  competencies: string[];
  assessment: string;
  progressionNote?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  nepAlignment: string;
  overview: string;
  phases: ProgramPhase[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  institutionalModel: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const munFunBeyondProgram: TrainingProgram = {
  id: "mun-fun-beyond",
  title: "MUN, FUN & BEYOND",
  subtitle: "Structured Training Pathway in Public Speaking, Communication & MUN Preparation",
  targetAudience: "Students of Classes 8–12 & Emerging Youth Leaders (Ages 12–20)",
  nepAlignment:
    "Directly mapped to the National Education Policy (NEP) focus on developing foundational 21st-century competencies: critical inquiry, diplomacy, adaptive communication, creative problem-solving, and multilateral collaboration.",
  overview:
    "A progressive, dual-stage learning journey designed to guide students from overcoming fear and building basic stage presence to mastering the intricacies of high-stakes parliamentary diplomacy, resolution drafting, and competitive debate.",
  phases: [
    {
      phase: 1,
      title: "Foundation in Public Speaking & Communication",
      badge: "Stage 01 · 6-Month Intensive",
      duration: "6 Months",
      sessions: "24 Structured Sessions",
      frequency: "1 session per week (60 minutes)",
      description:
        "Building core vocal confidence, natural body posture, articulate voice modulation, and persuasive debating capability from the ground up.",
      competencies: [
        "Stage presence and overcoming performance inhibition",
        "Vocal clarity, breath control, articulation and posture",
        "Structured speech crafting and introductory debate rules",
        "Active listening, analytical thinking and persuasive communication",
      ],
      assessment:
        "Comprehensive end-of-phase speaking evaluation assessing articulation, argument coherence, and composure.",
      progressionNote:
        "Progression Benchmark: Students who demonstrate competency in this evaluation qualify for Phase 2 Advanced Training.",
    },
    {
      phase: 2,
      title: "Advanced Model United Nations (MUN) Training",
      badge: "Stage 02 · 3-Month Specialization",
      duration: "3 Months",
      sessions: "12 Specialized Sessions",
      frequency: "1 session per week (60 minutes)",
      description:
        "Rigorous immersion in multilateral global politics, UN committee rules of procedure, working paper creation, unmoderated caucuses, and resolution consensus.",
      competencies: [
        "Critical analysis of international affairs and treaties",
        "Diplomacy, negotiation, and committee leadership tactics",
        "Research methodology, country portfolio dossiers and policy brief preparation",
        "Simulated crisis management and competitive real-world debate",
        "Multilateral consensus building and formal resolution drafting",
      ],
      assessment:
        "Full-day Mock MUN Simulation with delegate awards and comprehensive performance reports.",
      progressionNote:
        "Outcome: Formation of an accredited, high-performing student delegation prepared to represent their institution at inter-school, national, and international MUN conferences.",
    },
  ],
  keyFeatures: [
    {
      title: "Audition & Diagnostic Screening",
      description:
        "An initial diagnostic assessment ensures matched peer learning cohorts and tailored personal growth pathways.",
    },
    {
      title: "NEP-Aligned 21st-Century Skills",
      description:
        "Cultivates critical thinking, emotional resilience, strategic communication, and ethical leadership.",
    },
    {
      title: "Experiential Simulation Pedagogy",
      description:
        "Moving beyond theoretical lectures into immersive mock caucuses, crisis simulations, and live parliamentary debates.",
    },
    {
      title: "Progressive Two-Tier Architecture",
      description:
        "Ensures students master foundational speech confidence before diving into high-pressure diplomatic strategy.",
    },
  ],
  institutionalModel: [
    {
      step: 1,
      title: "Orientation & Vision Session",
      description:
        "Comprehensive orientation for educators, parents, and students detailing the curriculum, benchmarks, and transformational benefits.",
    },
    {
      step: 2,
      title: "Audition & Diagnostic Selection",
      description:
        "Preliminary diagnostic interaction to assess current comfort levels, motivation, and cohort placement for Phase 1.",
    },
    {
      step: 3,
      title: "Phase-Wise Interactive Training",
      description:
        "Weekly experiential workshops, speech drills, and feedback loops followed by the Phase 1 qualification assessment.",
    },
    {
      step: 4,
      title: "Delegation Formation & Contest Prep",
      description:
        "Formation of the school's elite MUN delegation, mentored directly for external competitions and championship circuits.",
    },
    {
      step: 5,
      title: "Periodic Evaluation & Growth Reports",
      description:
        "Institutions receive granular, individualized progress cards mapping each student's communication growth curve.",
    },
  ],
};

