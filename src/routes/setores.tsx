import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/setores")({
  head: () => ({
    meta: [
      { title: "Setores atendidos — Ryzon Automação" },
      {
        name: "description",
        content:
          "Automação com I.A. aplicada a logística, financeiro, atendimento, indústria e serviços jurídicos. Veja casos de uso por setor.",
      },
      { property: "og:title", content: "Setores atendidos — Ryzon Automação" },
      {
        property: "og:description",
        content: "Casos de uso de automação com I.A. por setor: logística, financeiro, atendimento, indústria e jurídico.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/setores" },
    ],
    links: [{ rel: "canonical", href: "/setores" }],
  }),
  component: Setores,
});

const sectors = [
  {
    name: "Logística",
    text: "Triagem de pedidos, roteirização e conferência automática de comprovantes de entrega.",
  },
  {
    name: "Financeiro",
    text: "Conciliação de lançamentos, prevenção de duplicidade e fechamento mensal assistido.",
  },
  {
    name: "Atendimento",
    text: "Primeiro nível resolvido por agente, com escalonamento humano em casos sensíveis.",
  },
  {
    name: "Indústria",
    text: "Consolidação de apontamentos de produção e alertas de desvio em tempo real.",
  },
  {
    name: "Jurídico",
    text: "Leitura de contratos, extração de cláusulas e controle de prazos processuais.",
  },
  {
    name: "Backoffice",
    text: "Cadastro de fornecedores, validação documental e rotinas repetitivas de sistemas.",
  },
];

function Setores() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
      <span className="label-mono text-accent">Setores</span>
      <h1 className="mt-3 max-w-[20ch] text-balance text-4xl font-semibold tracking-tight text-snow">
        Um mesmo motor, diferentes linhas.
      </h1>
      <p className="mt-5 max-w-[56ch] text-pretty text-base leading-relaxed text-fog">
        Os módulos da Ryzon são os mesmos em todos os projetos. O que muda é o desenho do fluxo, as
        regras de negócio e os sistemas conectados.
      </p>

      <div className="mt-12 grid grid-cols-1 border-t border-l border-line/60 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <article key={s.name} className="border-r border-b border-line/60 p-6">
            <span className="label-mono text-accent">{s.name}</span>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-fog">{s.text}</p>
          </article>
        ))}
      </div>

      <Link
        to="/contato"
        className="mt-10 inline-flex items-center gap-2 rounded-[8px] border border-line px-5 py-3 text-sm font-medium text-snow transition-colors hover:border-fog"
      >
        Discutir meu setor
      </Link>
    </div>
  );
}
