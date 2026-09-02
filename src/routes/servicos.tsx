import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de automação com I.A. — Ryzon" },
      {
        name: "description",
        content:
          "Agentes de I.A., automação de processos, integrações com ERP/CRM e dashboards auditáveis. Conheça o processo de implantação da Ryzon.",
      },
      { property: "og:title", content: "Serviços de automação com I.A. — Ryzon" },
      {
        property: "og:description",
        content:
          "Quatro módulos de automação e um processo de implantação em quatro etapas, com observabilidade desde o piloto.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const modules = [
  {
    icon: "✦",
    title: "Agentes de I.A.",
    text: "Agentes autônomos que leem documentos, decidem e executam ações nos seus sistemas, com supervisão humana configurável por regra de risco.",
    bullets: ["Triagem de chamados", "Leitura de documentos", "Respostas com contexto da marca"],
  },
  {
    icon: "⛭",
    title: "Automação de processos",
    text: "Roteiros determinísticos com pontos de checagem, reprocessamento automático e registro de cada etapa executada.",
    bullets: ["Conciliação bancária", "Emissão de documentos", "Rotinas de fechamento"],
  },
  {
    icon: "◈",
    title: "Integrações",
    text: "Conectores para ERP, CRM, planilhas e APIs proprietárias, com mapeamento de dados e controle de versão dos contratos.",
    bullets: ["ERP e CRM", "APIs internas", "Planilhas e arquivos"],
  },
  {
    icon: "◎",
    title: "Dashboards",
    text: "Métricas em tempo real por fluxo, auditoria de cada execução e alertas por exceção para o time responsável.",
    bullets: ["Painéis por operação", "Alertas por exceção", "Trilha de auditoria"],
  },
];

const steps = [
  { n: "01", t: "Diagnóstico", d: "Mapeamos gargalos, volumes e pontos de automação." },
  { n: "02", t: "Projeto", d: "Definimos agentes, integrações e critérios de aceite." },
  { n: "03", t: "Implantação", d: "Piloto em produção com observabilidade e rollback." },
  { n: "04", t: "Escala", d: "Ampliamos o fluxo e medimos o retorno por processo." },
];

function Servicos() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <span className="label-mono text-accent">Serviços</span>
      <h1 className="mt-3 max-w-[20ch] text-balance text-4xl font-semibold tracking-tight text-snow">
        Quatro camadas, um sistema único.
      </h1>
      <p className="mt-5 max-w-[56ch] text-pretty text-base leading-relaxed text-fog">
        Cada módulo opera de forma independente e se integra ao todo por trilhos de sinal
        padronizados — do primeiro piloto até a operação em escala.
      </p>

      <div className="mt-12 grid grid-cols-1 border-t border-l border-line/60 sm:grid-cols-2">
        {modules.map((m) => (
          <article key={m.title} className="border-r border-b border-line/60 p-7">
            <span className="text-lg text-accent">{m.icon}</span>
            <h2 className="mt-5 text-xl font-medium text-snow">{m.title}</h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-fog">{m.text}</p>
            <ul className="mt-4 space-y-1.5">
              {m.bullets.map((b) => (
                <li key={b} className="font-mono text-[11px] text-fog">
                  · {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-snow">
        Como implantamos
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line/60 bg-line/60 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-ink p-6">
            <span className="font-mono text-3xl text-accent">{s.n}</span>
            <h3 className="mt-2 text-lg font-medium text-snow">{s.t}</h3>
            <p className="mt-1 text-sm leading-relaxed text-fog">{s.d}</p>
          </div>
        ))}
      </div>

      <Link
        to="/contato"
        className="mt-10 inline-flex items-center gap-2 rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground ring-1 ring-accent/60 transition-colors hover:bg-snow"
      >
        Solicitar diagnóstico
        <span className="text-accent-foreground/70">→</span>
      </Link>
    </div>
  );
}
