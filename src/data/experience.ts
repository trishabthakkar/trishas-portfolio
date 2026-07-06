export type Experience = {
  org: string;
  role: string;
  period: string;
  blurb: string;
};

export const experience: Experience[] = [
  {
    org: "zealogics technologies",
    role: "ai software engineering intern",
    period: "june 2026 — aug 2026",
    blurb:
      "building a full-stack ai knowledge assistant — a rag pipeline with hybrid semantic + keyword search, mcp tool-calling, jwt-secured multi-user access, and an admin dashboard to keep an eye on it all.",
  },
  {
    org: "collabera digital",
    role: "c# programming intern",
    period: "2024",
    blurb:
      "analyzed the c# algorithms behind the company's web app and shadowed the engineering team's testing and debugging workflows.",
  },
];
