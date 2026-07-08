import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const colors = [
  { name: "blush", className: "bg-blush border border-petal", hex: "#fff5f7", use: "page background" },
  { name: "petal", className: "bg-petal", hex: "#ffdbe4", use: "soft surfaces, borders" },
  { name: "petal-deep", className: "bg-petal-deep", hex: "#e3c2c8", use: "accents on dark" },
  { name: "rose", className: "bg-rose", hex: "#ec407a", use: "the one loud accent" },
  { name: "rose-bright", className: "bg-rose-bright", hex: "#f43f7d", use: "hover states" },
  { name: "ink", className: "bg-ink", hex: "#241d20", use: "dark sections, headings" },
  { name: "ink-soft", className: "bg-ink-soft", hex: "#6e5860", use: "body copy" },
  { name: "ink-mute", className: "bg-ink-mute", hex: "#a3919a", use: "labels, hints" },
];

export default function StyleGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading label="design system" title="soft power" />
      <p className="max-w-prose text-ink-soft">
        the dreamy pink identity, executed with confidence. blush daylight,
        deep plum ink, one loud rose accent, and type that does the talking.
      </p>

      <Divider className="my-14" />

      <SectionHeading label="01" title="color" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {colors.map(({ name, className, hex, use }) => (
          <div key={name}>
            <div className={`h-20 rounded-2xl ${className}`} />
            <p className="mt-2 text-sm font-medium text-ink">{name}</p>
            <p className="font-mono text-xs text-ink-mute">{hex}</p>
            <p className="text-xs text-ink-soft">{use}</p>
          </div>
        ))}
      </div>

      <Divider className="my-14" />

      <SectionHeading label="02" title="type" />
      <div className="space-y-8">
        <div>
          <p className="mb-1 text-xs tracking-widest uppercase text-ink-mute">
            display: fraunces
          </p>
          <p className="font-display text-6xl font-semibold tracking-tight text-ink">
            dreamy, but <em className="text-rose">bold</em>
          </p>
        </div>
        <div>
          <p className="mb-1 text-xs tracking-widest uppercase text-ink-mute">
            heading: fraunces semibold
          </p>
          <p className="font-display text-3xl font-semibold text-ink">
            lowercase headings, always
          </p>
        </div>
        <div>
          <p className="mb-1 text-xs tracking-widest uppercase text-ink-mute">
            body: geist sans
          </p>
          <p className="max-w-prose text-ink-soft">
            body copy is warm and first-person, set in geist for clarity.
            italic fraunces is reserved for the words that matter most.
          </p>
        </div>
        <div>
          <p className="mb-1 text-xs tracking-widest uppercase text-ink-mute">
            label: tracked uppercase
          </p>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-rose" />
            <p className="text-xs tracking-[0.3em] uppercase text-ink-mute">
              section label
            </p>
          </div>
        </div>
      </div>

      <Divider className="my-14" />

      <SectionHeading label="03" title="buttons" />
      <div className="flex flex-wrap items-center gap-4">
        <Button href="#">primary</Button>
        <Button href="#" variant="outline">
          outline
        </Button>
        <Button href="#" variant="ghost">
          ghost →
        </Button>
      </div>

      <Divider className="my-14" />

      <SectionHeading label="04" title="cards" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="font-display text-xl font-semibold text-ink">
            a project card
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            hover me: cards lift gently and glow rose. borders are petal,
            surfaces are translucent white over the dot grid.
          </p>
        </Card>
        <Card>
          <h3 className="font-display text-xl font-semibold text-ink">
            another one
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            keep card content sparse: a title, two lines, maybe a tag row.
            let the whitespace breathe.
          </p>
        </Card>
      </div>

      <Divider className="my-14" />

      <SectionHeading label="05" title="dark world" />
      <div className="rounded-3xl bg-ink p-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-rose" />
          <p className="text-xs tracking-[0.3em] uppercase text-petal-deep">
            on ink
          </p>
        </div>
        <p className="font-display text-3xl leading-snug text-blush">
          dark sections use <em className="text-petal-deep">petal-deep</em> for
          emphasis and <span className="text-rose">rose</span> for interaction.
        </p>
        <Divider dark className="my-8" />
        <p className="text-sm text-ink-mute">
          muted text stays readable, never drop below ink-mute on ink.
        </p>
      </div>
    </div>
  );
}
