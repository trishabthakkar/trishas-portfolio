import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading label="say hi" title="contact" />
      <p className="mb-8 max-w-prose text-ink-soft">
        i&apos;d love to hear from you — whether it&apos;s about collaborating, research, or
        just saying hi.
      </p>
      <Button href="mailto:thakkart@purdue.edu">thakkart@purdue.edu</Button>
      <p className="mt-10 italic text-ink-mute">full contact form coming soon</p>
    </div>
  );
}
