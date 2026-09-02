import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <p className="label-mono text-accent">{eyebrow}</p>
      <h1 className="mt-3 max-w-[22ch] text-balance text-4xl font-semibold tracking-tight text-snow">
        {title}
      </h1>
      <p className="mt-4 max-w-[62ch] text-pretty text-base leading-relaxed text-fog">{intro}</p>
      <p className="label-mono mt-4 text-fog">Última atualização: {updatedAt}</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <nav className="lg:sticky lg:top-24">
            <p className="label-mono text-fog">Sumário</p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-fog transition-colors hover:text-snow"
                  >
                    <span className="font-mono text-[11px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="lg:col-span-9">
          <div className="border-t border-line/60">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line/60 py-8">
                <p className="label-mono text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-medium text-snow">{s.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-fog [&_a]:text-accent [&_a:hover]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-snow">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
