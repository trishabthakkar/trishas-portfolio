export type ResearchItem = {
  title: string;
  detail: string; // PI credit or publication venue
  period: string;
  blurb: string;
};

export const research: ResearchItem[] = [
  {
    title: "spark lab",
    detail: "student perspectives on ai research & knowledge · pi — dr. nelson",
    period: "aug 2025 — present",
    blurb:
      "designing surveys and tracking frameworks to study how student motivation shapes ai tool usage in an undergrad biology course, and how students prompt generative ai to build software.",
  },
  {
    title: "research in engineering",
    detail: "pi — dr. bosman",
    period: "aug 2025 — may 2026",
    blurb:
      "a qualitative analysis (nvivo) of online discussions in engineering classes, presented at the fall undergraduate research symposium 2025.",
  },
  {
    title: "impact of ai in education",
    detail: "published · quest journal of software engineering and simulation",
    period: "2024",
    blurb:
      "a literature review and survey study on how ai is reshaping education across fields. issn 2321-3795 (online), 2321-3809 (print), vol. 10, issue 4.",
  },
];
