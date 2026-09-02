import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A empresa — Ryzon Automação" },
      {
        name: "description",
        content:
          "Quem somos, como trabalhamos e dados corporativos da Ryzon Automação LTDA: engenharia aplicada a automação com inteligência artificial.",
      },
      { property: "og:title", content: "A empresa — Ryzon Automação" },
      {
        property: "og:description",
        content: "Engenharia aplicada a automação com I.A., com governança de dados e auditoria de ponta a ponta.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const principles = [
  {
    t: "Engenharia antes de discurso",
    d: "Todo projeto começa com medição do processo atual e critérios de aceite escritos.",
  },
  {
    t: "Auditoria por padrão",
    d: "Cada execução automática registra entrada, decisão e saída, com retenção configurável.",
  },
  {
    t: "Humano no ponto certo",
    d: "Automação total onde o risco é baixo; revisão humana onde o impacto exige.",
  },
];

function Sobre() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <span className="label-mono text-accent">A empresa</span>
      <h1 className="mt-3 max-w-[22ch] text-balance text-4xl font-semibold tracking-tight text-snow">
        Automação tratada como infraestrutura, não como experimento.
      </h1>
      <p className="mt-5 max-w-[60ch] text-pretty text-base leading-relaxed text-fog">
        A Ryzon é uma empresa brasileira de soluções em automação com inteligência artificial.
        Atuamos com times de operações, tecnologia e compliance para transformar processos manuais
        em fluxos observáveis, reversíveis e auditáveis.
      </p>

      <div className="mt-12 grid grid-cols-1 border-t border-l border-line/60 md:grid-cols-3">
        {principles.map((p) => (
          <article key={p.t} className="border-r border-b border-line/60 p-6">
            <h2 className="text-lg font-medium text-snow">{p.t}</h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-fog">{p.d}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-snow">Dados corporativos</h2>
      <dl className="mt-6 max-w-[640px] divide-y divide-line/60 border-y border-line/60 text-sm">
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-fog">Razão social</dt>
          <dd className="text-snow">Ryzon Automação LTDA</dd>
        </div>
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-fog">CNPJ</dt>
          <dd className="font-mono text-snow">00.000.000/0001-00</dd>
        </div>
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-fog">Endereço</dt>
          <dd className="text-right text-snow">São Paulo · SP · Brasil</dd>
        </div>
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-fog">E-mail</dt>
          <dd className="text-snow">contato@ryzon.ai</dd>
        </div>
        <div className="flex justify-between gap-6 py-3">
          <dt className="text-fog">Encarregado de dados (DPO)</dt>
          <dd className="text-snow">dpo@ryzon.ai</dd>
        </div>
      </dl>
      <p className="mt-4 max-w-[60ch] text-xs leading-relaxed text-fog">
        Os dados cadastrais acima são um modelo e devem ser substituídos pelas informações oficiais
        da empresa antes da publicação.
      </p>
    </div>
  );
}
