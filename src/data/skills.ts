// PLACEHOLDER DATA — tweak categories, items, notes, and levels to taste.
// `level` (0–100) only drives the little meter bar; it isn't shown as a number.

export type Skill = { name: string; note: string; level: number };
export type SkillGroup = { title: string; items: Skill[] };

export const skills: SkillGroup[] = [
  {
    title: "languages",
    items: [
      { name: "python", note: "ml + data", level: 92 },
      { name: "typescript", note: "the web", level: 88 },
      { name: "java", note: "data structures", level: 78 },
      { name: "c", note: "systems", level: 72 },
    ],
  },
  {
    title: "frontend",
    items: [
      { name: "react / next.js", note: "portfolio + apps", level: 90 },
      { name: "tailwind", note: "styling", level: 88 },
      { name: "react native", note: "mobile", level: 74 },
      { name: "framer motion", note: "motion", level: 80 },
    ],
  },
  {
    title: "data + ml",
    items: [
      { name: "pytorch", note: "modeling", level: 82 },
      { name: "pandas / numpy", note: "wrangling", level: 88 },
      { name: "scikit-learn", note: "evaluation", level: 80 },
      { name: "colab", note: "experiments", level: 84 },
    ],
  },
  {
    title: "tools + platforms",
    items: [
      { name: "git / github", note: "workflows", level: 90 },
      { name: "figma", note: "ui planning", level: 82 },
      { name: "supabase", note: "data", level: 76 },
      { name: "vercel", note: "deploys", level: 86 },
    ],
  },
];
