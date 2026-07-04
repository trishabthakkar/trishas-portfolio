import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading label="who i am" title="hi, i'm trisha" />
      <p className="max-w-prose text-ink-soft">
        cs + ai student at purdue who loves experimenting with ai/ml and full stack
        development — building things that sit somewhere in between.
      </p>
      <p className="mt-8 italic text-ink-mute">full about page coming soon</p>
    </div>
  );
}
