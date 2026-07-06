// PLACEHOLDER DATA — swap names/blurbs/tags with your real projects and set
// each `href` to the devpost or project-site link. Layout is final.

export type Project = {
  name: string;
  context: string; // award / where / status — shown small above the name
  blurb: string;
  tags: string[];
  href: string; // devpost or live site
};

export const projects: Project[] = [
  {
    name: "aurora",
    context: "1st place · spring hackathon",
    blurb: "paste a url and watch ai agents stress-test your site. built solo, overnight.",
    tags: ["Next.js", "FastAPI", "Playwright", "Modal", "Claude"],
    href: "#",
  },
  {
    name: "polymer",
    context: "shipped to 500+ users",
    blurb: "conditional, voice-native trade execution for prediction markets.",
    tags: ["Next.js", "LiveKit", "Zustand", "TypeScript"],
    href: "#",
  },
  {
    name: "herizon",
    context: "1st place · innovateher",
    blurb: "a gamified stem career museum for young women exploring the field.",
    tags: ["Next.js", "Gemini", "ElevenLabs", "MongoDB"],
    href: "#",
  },
  {
    name: "aide",
    context: "4th place · purdue hackathon",
    blurb: "paste code in your editor and get a quiz on it, instantly.",
    tags: ["JavaScript", "Node.js", "OpenAI", "VS Code API"],
    href: "#",
  },
  {
    name: "vtol drone",
    context: "autonomous hybrid aircraft",
    blurb: "hybrid vtol drone with autonomous flight — full cad and a custom flight-controller pcb.",
    tags: ["ArduPilot", "Fusion 360", "PCB", "C++"],
    href: "#",
  },
  {
    name: "stickx cane",
    context: "smart assistive device",
    blurb: "a smart cane built from salvaged parts for a neighbor. tested blindfolded.",
    tags: ["Arduino", "IoT", "GPS", "3D Printing"],
    href: "#",
  },
];
