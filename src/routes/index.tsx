import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ryzon — Automação com I.A. para operações críticas" },
      {
        name: "description",
        content:
          "Agentes de I.A., automação de processos, integrações com ERP e CRM e dashboards em tempo real. Escopo técnico em até 5 dias úteis.",
      },
      { property: "og:title", content: "Ryzon — Automação com I.A. para operações críticas" },
      {
        property: "og:description",
        content:
          "Agentes de I.A., automação de processos, integrações e dashboards em tempo real para empresas brasileiras.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const rails = [
  { icon: "✦", label: "Captura de pedido", meta: "ERP →", speed: "3s", accent: false },
  { icon: "◈", label: "Validação por agente", meta: "I.A.", speed: "2.4s", accent: false },
  { icon: "⛭", label: "Execução em lote", meta: "→ CRM", speed: "3.6s", accent: false },
  { icon: "✓", label: "Dashboard em tempo real", meta: "live", speed: "2s", accent: true },
];

const services = [
  {
    icon: "✦",
    title: "Agentes de I.A.",
    text: "Agentes autônomos que leem, decidem e executam com supervisão configurável.",
  },
  {
    icon: "⛭",
    title: "Automação de processos",
    text: "Roteiros determinísticos com pontos de checagem e reprocessamento automático.",
  },
  {
    icon: "◈",
    title: "Integrações",
    text: "Conectores nativos para ERP, CRM, planilhas e APIs proprietárias, com mapeamento de dados.",
  },
  {
    icon: "◎",
    title: "Dashboards",
    text: "Métricas em tempo real, auditoria de cada execução e alertas por exceção.",
  },
];

const metrics = [
  {
    value: "-41%",
    label: "tempo por processo",
    text: "Redução média no ciclo de fechamento mensal para operações financeiras.",
  },
  {
    value: "12,4×",
    label: "retorno de implantação",
    text: "ROI médio nos primeiros seis meses após go-live.",
  },
  {
    value: "2,1M",
    label: "execuções / mês",
    text: "Volume processado pela plataforma sem intervenção manual.",
  },
  {
    value: "0",
    label: "incidentes de dados",
    text: "Trilha de auditoria completa em todas as movimentações de dados.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-8%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 left-[-12%] h-[420px] w-[420px] rounded-full bg-accent-2/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <span className="label-mono inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3 py-1 text-fog">
              <span className="signal-dot size-1.5 rounded-full bg-accent" />
              Automação inteligente · Ryzon
            </span>
            <h1 className="mt-6 max-w-[16ch] text-balance text-[2.6rem] font-semibold leading-tight tracking-tight text-snow sm:text-[3.4rem]">
              Automação com I.A. que roda sozinha, com a nitidez de uma linha de montagem.
            </h1>
            <p className="mt-6 max-w-[46ch] text-pretty text-base leading-relaxed text-fog">
              A Ryzon conecta agentes de I.A. aos seus processos, integra sistemas legados e
              entrega dashboards em tempo real — sem fricção, com auditoria completa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground ring-1 ring-accent/60 transition-colors hover:bg-snow"
              >
                Falar com engenheiro
                <span className="text-accent-foreground/70">→</span>
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center rounded-[8px] border border-line px-5 py-3 text-sm font-medium text-snow transition-colors hover:border-fog"
              >
                Ver o fluxo
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 font-mono">
              <div>
                <div className="text-2xl font-medium text-snow">38%</div>
                <div className="label-mono text-fog">custo operacional</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="text-2xl font-medium text-snow">24/7</div>
                <div className="label-mono text-fog">execução contínua</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="text-2xl font-medium text-snow">99,98%</div>
                <div className="label-mono text-fog">disponibilidade</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rotate-[-1.5deg] rounded-2xl glass-panel p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="label-mono text-fog">Fluxo de automação</span>
                  <span className="label-mono text-accent">● ativo</span>
                </div>
                <div className="space-y-3">
                  {rails.map((rail) => (
                    <div key={rail.label} className="flex items-center gap-3">
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-[8px] border text-accent ${
                          rail.accent
                            ? "border-accent/40 bg-accent/15"
                            : "border-line bg-ink-2"
                        }`}
                      >
                        <span className="text-xs">{rail.icon}</span>
                      </span>
                      <div className="flex-1">
                        <div className="relative h-2 overflow-hidden rounded-full bg-line">
                          <div
                            className="rail-flow absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent"
                            style={{ animationDuration: rail.speed }}
                          />
                        </div>
                        <div className="mt-1.5 flex items-center justify-between">
                          <span
                            className={`text-[13px] ${rail.accent ? "text-accent" : "text-snow"}`}
                          >
                            {rail.label}
                          </span>
                          <span className="font-mono text-[10px] text-fog">{rail.meta}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 hidden rotate-[1deg] rounded-xl glass-panel bg-ink-2/95 px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-[8px] bg-linear-to-br from-accent/30 to-accent-2/20">
                    <span className="text-sm text-accent">◎</span>
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-snow">1.240 tarefas / dia</div>
                    <div className="font-mono text-[10px] text-fog">últimas 24h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="label-mono text-accent">01 · Capacidades</span>
              <h2 className="mt-3 max-w-[20ch] text-balance text-3xl font-semibold tracking-tight text-snow">
                Quatro camadas, um sistema único.
              </h2>
            </div>
            <p className="max-w-[38ch] text-pretty text-sm leading-relaxed text-fog">
              Cada módulo opera de forma independente e se integra ao todo por trilhos de sinal
              padronizados.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-line/60 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/servicos"
                className="group border-r border-b border-line/60 p-6 transition-colors hover:bg-snow/[0.02]"
              >
                <span className="text-lg text-accent">{s.icon}</span>
                <h3 className="mt-5 text-lg font-medium text-snow">{s.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-fog">{s.text}</p>
                <span className="mt-5 inline-block font-mono text-[11px] text-accent transition-transform group-hover:translate-x-1">
                  ver módulo →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 bg-ink-2/40">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/60 bg-line/60 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-ink p-6">
                <div className="font-display text-4xl font-semibold text-snow">{m.value}</div>
                <div className="label-mono mt-2 text-fog">{m.label}</div>
                <p className="mt-3 text-pretty text-[13px] leading-relaxed text-fog">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <span className="label-mono text-accent">02 · Próximo passo</span>
          <h2 className="mt-3 max-w-[18ch] text-balance text-3xl font-semibold tracking-tight text-snow">
            Mapeamos seu processo em uma sessão técnica.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-fog">
            Sem pitch genérico. Nossos engenheiros analisam o fluxo, identificam os pontos de
            automação e devolvem um escopo em até 5 dias úteis.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground ring-1 ring-accent/60 transition-colors hover:bg-snow"
          >
            Solicitar diagnóstico
            <span className="text-accent-foreground/70">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
