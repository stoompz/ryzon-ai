import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "../components/legal-page";

export const Route = createFileRoute("/lgpd")({
  head: () => ({
    meta: [
      { title: "Central LGPD e direitos do titular — Ryzon" },
      {
        name: "description",
        content:
          "Canal da Ryzon para exercício dos direitos previstos na LGPD: acesso, correção, portabilidade, eliminação e revogação de consentimento.",
      },
      { property: "og:title", content: "Central LGPD e direitos do titular — Ryzon" },
      {
        property: "og:description",
        content: "Como solicitar acesso, correção ou exclusão dos seus dados pessoais na Ryzon.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/lgpd" },
    ],
    links: [{ rel: "canonical", href: "/lgpd" }],
  }),
  component: Lgpd,
});

function Lgpd() {
  return (
    <LegalPage
      eyebrow="Governança"
      title="Central LGPD"
      updatedAt="2 de setembro de 2026"
      intro="Esta página reúne o canal oficial da Ryzon para pedidos relacionados a dados pessoais e o resumo das nossas práticas de governança."
      sections={[
        {
          id: "encarregado",
          title: "Encarregado de dados (DPO)",
          body: (
            <p>
              Pedidos e dúvidas devem ser enviados para{" "}
              <a href="mailto:dpo@ryzon.ai">dpo@ryzon.ai</a>, com identificação do titular e
              descrição da solicitação. O prazo de resposta é de até 15 dias.
            </p>
          ),
        },
        {
          id: "direitos",
          title: "Direitos que você pode exercer",
          body: (
            <ul>
              <li>Confirmação da existência de tratamento e acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Portabilidade a outro fornecedor.</li>
              <li>Informação sobre compartilhamentos e revogação do consentimento.</li>
              <li>Revisão de decisões automatizadas que afetem seus interesses.</li>
            </ul>
          ),
        },
        {
          id: "governanca",
          title: "Práticas de governança",
          body: (
            <ul>
              <li>Registro de operações de tratamento e mapeamento de fluxos de dados.</li>
              <li>Contratos de operador com todos os fornecedores que tratam dados por nós.</li>
              <li>Trilha de auditoria de cada execução automatizada.</li>
              <li>Plano de resposta a incidentes com comunicação à ANPD quando aplicável.</li>
            </ul>
          ),
        },
        {
          id: "documentos",
          title: "Documentos relacionados",
          body: (
            <ul>
              <li>
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/politica-de-cookies">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/termos-de-uso">Termos de Uso</Link>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
