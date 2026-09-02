import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "../components/legal-page";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Ryzon" },
      {
        name: "description",
        content:
          "Como a Ryzon coleta, usa, compartilha e protege dados pessoais, e como exercer seus direitos previstos na LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Ryzon" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais na Ryzon: bases legais, retenção, direitos do titular e contato do DPO.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="2 de setembro de 2026"
      intro="Esta política descreve como a Ryzon Automação LTDA trata dados pessoais coletados neste site e na prestação de seus serviços, em conformidade com a Lei nº 13.709/2018 (LGPD)."
      sections={[
        {
          id: "controlador",
          title: "Quem é o controlador dos dados",
          body: (
            <p>
              <strong>Ryzon Automação LTDA</strong>, inscrita no CNPJ 00.000.000/0001-00, com sede
              em São Paulo/SP, é a controladora dos dados pessoais tratados neste site. Contato do
              Encarregado (DPO): <a href="mailto:dpo@ryzon.ai">dpo@ryzon.ai</a>.
            </p>
          ),
        },
        {
          id: "dados",
          title: "Dados que coletamos",
          body: (
            <ul>
              <li>
                <strong>Dados de contato</strong> informados por você em formulários: nome, e-mail
                corporativo, empresa e descrição do processo.
              </li>
              <li>
                <strong>Dados de navegação</strong>: endereço IP, tipo de dispositivo, navegador,
                páginas visitadas e origem do acesso, coletados por cookies.
              </li>
              <li>
                <strong>Dados de projeto</strong>: informações compartilhadas por clientes durante a
                execução contratual, tratadas na condição de operador.
              </li>
            </ul>
          ),
        },
        {
          id: "finalidades",
          title: "Finalidades e bases legais",
          body: (
            <ul>
              <li>Responder solicitações de contato — execução de procedimentos preliminares a contrato.</li>
              <li>Prestar os serviços contratados — execução de contrato.</li>
              <li>Medir desempenho do site e melhorar conteúdo — legítimo interesse.</li>
              <li>Enviar comunicações comerciais — consentimento, revogável a qualquer momento.</li>
              <li>Cumprir obrigações fiscais e regulatórias — cumprimento de obrigação legal.</li>
            </ul>
          ),
        },
        {
          id: "compartilhamento",
          title: "Compartilhamento com terceiros",
          body: (
            <p>
              Compartilhamos dados apenas com operadores necessários à prestação do serviço, como
              provedores de hospedagem em nuvem, ferramentas de análise, e-mail e provedores de
              modelos de inteligência artificial. Todos são contratualmente obrigados a tratar os
              dados exclusivamente conforme nossas instruções. Não vendemos dados pessoais.
            </p>
          ),
        },
        {
          id: "transferencia",
          title: "Transferência internacional",
          body: (
            <p>
              Parte da infraestrutura pode estar hospedada fora do Brasil. Nesses casos, a
              transferência ocorre com salvaguardas contratuais adequadas, nos termos dos artigos 33
              e seguintes da LGPD.
            </p>
          ),
        },
        {
          id: "retencao",
          title: "Retenção e eliminação",
          body: (
            <p>
              Dados de contato são mantidos por até 24 meses após a última interação. Dados
              contratuais e fiscais são mantidos pelos prazos legais aplicáveis. Encerrado o prazo
              ou a finalidade, os dados são eliminados ou anonimizados.
            </p>
          ),
        },
        {
          id: "seguranca",
          title: "Segurança da informação",
          body: (
            <p>
              Adotamos controle de acesso por perfil, criptografia em trânsito, registro de
              auditoria das execuções automatizadas, segregação de ambientes e revisão periódica de
              permissões. Incidentes relevantes são comunicados aos titulares e à ANPD conforme a
              legislação.
            </p>
          ),
        },
        {
          id: "direitos",
          title: "Seus direitos como titular",
          body: (
            <>
              <p>
                Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
                portabilidade, eliminação, informação sobre compartilhamentos e revogação de
                consentimento.
              </p>
              <p>
                Para exercer qualquer direito, escreva para{" "}
                <a href="mailto:dpo@ryzon.ai">dpo@ryzon.ai</a>. Respondemos em até 15 dias.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "Cookies",
          body: (
            <p>
              O uso de cookies está detalhado na{" "}
              <Link to="/politica-de-cookies">Política de Cookies</Link>, onde você também encontra
              as instruções para gerenciar suas preferências.
            </p>
          ),
        },
        {
          id: "alteracoes",
          title: "Alterações desta política",
          body: (
            <p>
              Podemos atualizar esta política para refletir mudanças legais ou operacionais. A data
              de última atualização é sempre indicada no topo desta página.
            </p>
          ),
        },
      ]}
    />
  );
}
