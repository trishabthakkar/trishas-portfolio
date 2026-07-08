// TODO(trisha): githubHref/devpostHref point at your profile pages as an
// interim (solfit + hera are hackathon builds without a solo repo yet;
// foodsaver is personal). Swap in each project's direct repo/devpost link
// whenever you have them. `story` is optional — undefined until you answer
// the 5 prompts in DEPTH-PLAN.md, then the project's /projects/[slug] page
// upgrades from "coming soon" to the real story automatically.

export type ProjectStory = {
  spark: string;
  how: string[];
  wall: string;
  learned: string;
};

export type Project = {
  slug: string;
  name: string;
  context: string; // award / where / status — shown small above the name
  blurb: string;
  tags: string[];
  githubHref: string;
  devpostHref: string;
  story?: ProjectStory;
};

export const projects: Project[] = [
  {
    slug: "solfit",
    name: "solfit",
    context: "mlh best use of solana + best use of auth0",
    blurb:
      "a decentralized fitness app with real-money wager pools on solana — an esp32 sensor and computer vision verify every rep before the smart contract pays out.",
    tags: ["React", "Node.js", "Solana", "WebSockets", "MediaPipe"],
    githubHref: "https://github.com/trishabthakkar",
    devpostHref: "https://devpost.com/trishabthakkar/",
  },
  {
    slug: "hera",
    name: "hera",
    context: "3rd place overall · innovateher",
    blurb:
      "scrapes sec filings and news into snowflake, then uses cortex ai to flag compliance risks and match consumer spending against insider activity.",
    tags: ["Python", "Snowflake", "TypeScript", "Express", "MongoDB"],
    githubHref: "https://github.com/trishabthakkar",
    devpostHref: "https://devpost.com/trishabthakkar/",
  },
  {
    slug: "foodsaver",
    name: "foodsaver",
    context: "personal project",
    blurb:
      "ocrs your grocery receipts into a live inventory, then nudges you before food expires and suggests recipes to use it up.",
    tags: ["React", "Firebase", "Google Cloud Vision", "OpenFoodFacts API"],
    githubHref: "https://github.com/trishabthakkar",
    devpostHref: "https://devpost.com/trishabthakkar/",
  },
];
