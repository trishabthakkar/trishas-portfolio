// Real projects. TODO(trisha): solfit + hera point at your devpost profile
// (they're hackathon builds) and foodsaver points at your github profile
// (personal project) as interim links — swap in each project's direct
// devpost/repo/live link whenever you have them.

export type Project = {
  name: string;
  context: string; // award / where / status — shown small above the name
  blurb: string;
  tags: string[];
  href: string; // devpost or live site
};

export const projects: Project[] = [
  {
    name: "solfit",
    context: "mlh best use of solana + best use of auth0",
    blurb:
      "a decentralized fitness app with real-money wager pools on solana — an esp32 sensor and computer vision verify every rep before the smart contract pays out.",
    tags: ["React", "Node.js", "Solana", "WebSockets", "MediaPipe"],
    href: "https://devpost.com/trishabthakkar/",
  },
  {
    name: "hera",
    context: "3rd place overall · innovateher",
    blurb:
      "scrapes sec filings and news into snowflake, then uses cortex ai to flag compliance risks and match consumer spending against insider activity.",
    tags: ["Python", "Snowflake", "TypeScript", "Express", "MongoDB"],
    href: "https://devpost.com/trishabthakkar/",
  },
  {
    name: "foodsaver",
    context: "personal project",
    blurb:
      "ocrs your grocery receipts into a live inventory, then nudges you before food expires and suggests recipes to use it up.",
    tags: ["React", "Firebase", "Google Cloud Vision", "OpenFoodFacts API"],
    href: "https://github.com/trishabthakkar",
  },
];
