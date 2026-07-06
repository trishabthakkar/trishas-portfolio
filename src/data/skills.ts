// Levels are my best estimate from your resume (what you've actually built
// with each one, and how central it was) — not self-reported. Adjust freely;
// `level` (0–100) only drives the little meter bar, it isn't shown as a number.

export type Skill = { name: string; note: string; level: number };
export type SkillGroup = { title: string; items: Skill[] };

export const skills: SkillGroup[] = [
  {
    title: "languages",
    items: [
      { name: "python", note: "zealogics + hera + research", level: 90 },
      { name: "typescript", note: "hera, solfit, this site", level: 85 },
      { name: "sql", note: "postgres @ zealogics", level: 75 },
      { name: "java", note: "data structures", level: 72 },
      { name: "c / c++", note: "systems coursework", level: 65 },
    ],
  },
  {
    title: "frameworks + tools",
    items: [
      { name: "react", note: "solfit, hera, foodsaver", level: 88 },
      { name: "git / github", note: "everywhere", level: 90 },
      { name: "fastapi", note: "zealogics ai assistant", level: 82 },
      { name: "postgresql", note: "zealogics backend", level: 78 },
      { name: "firebase", note: "foodsaver", level: 78 },
      { name: "snowflake", note: "hera + cortex ai", level: 75 },
    ],
  },
  {
    title: "ai + systems",
    items: [
      { name: "rag pipelines", note: "zealogics — hybrid search", level: 85 },
      { name: "auth + rbac", note: "zealogics, solfit (auth0)", level: 82 },
      { name: "vector databases", note: "zealogics semantic search", level: 80 },
      { name: "computer vision", note: "solfit rep tracking", level: 78 },
      { name: "mcp tool-calling", note: "zealogics agent tools", level: 78 },
    ],
  },
];
