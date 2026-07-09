import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { name, context, blurb, tags, githubHref, devpostHref, story } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink-mute transition-colors hover:text-rose"
      >
        <span aria-hidden>←</span> back to projects
      </Link>

      <p className="font-mono text-xs uppercase tracking-wider text-rose">
        {context}
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
        {name}
      </h1>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-petal bg-blush px-2.5 py-0.5 font-mono text-[11px] text-ink-soft"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-rose px-5 py-2 text-sm font-medium text-rose transition-all hover:bg-rose hover:text-blush"
        >
          github
        </a>
        <a
          href={devpostHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-rose px-5 py-2 text-sm font-medium text-rose transition-all hover:bg-rose hover:text-blush"
        >
          devpost
        </a>
      </div>

      {story ? (
        <div className="mt-16 space-y-12">
          <section>
            <SectionHeading label="01" title="the spark" />
            <p className="-mt-4 max-w-prose text-lg leading-relaxed text-ink-soft">
              {story.spark}
            </p>
          </section>
          <section>
            <SectionHeading label="02" title="how it works" />
            <div className="-mt-4 space-y-3">
              {story.how.map((line, i) => (
                <p key={i} className="max-w-prose text-lg leading-relaxed text-ink-soft">
                  {line}
                </p>
              ))}
            </div>
          </section>
          <section>
            <SectionHeading label="03" title="the wall" />
            <p className="-mt-4 max-w-prose text-lg leading-relaxed text-ink-soft">
              {story.wall}
            </p>
          </section>
          <section>
            <SectionHeading label="04" title="what i'd change" />
            <p className="-mt-4 max-w-prose text-lg leading-relaxed text-ink-soft">
              {story.learned}
            </p>
          </section>
        </div>
      ) : (
        <div className="mt-16 rounded-3xl border border-petal bg-white/60 p-8">
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
            {blurb}
          </p>
          <p className="mt-4 italic text-ink-mute">
            the full story behind this one is coming soon.
          </p>
        </div>
      )}
    </div>
  );
}
