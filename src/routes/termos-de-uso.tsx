import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "../components/legal-page";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Ryzon" },
      {
        name: "description",
        content:
          "Condições de uso do site da Ryzon Automação: escopo, propriedade intelectual, responsabilidades, contratação de serviços e foro.",
      },
      { property: "og:title", content: "Termos de Uso — Ryzon" },
      {
        property: "og:description",
        content: "Regras de uso do site e das soluções de automação com I.A. da Ryzon.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Termos de Uso"
      updatedAt="2 de setembro de 2026"
      intro="Estes termos regulam o acesso e o uso do site da Ryzon Automação LTDA. Ao navegar por este site, você concorda com as condições abaixo."
      sections={[
        {
          id: "objeto",
          title: "Objeto",
          body: (
            <p>
              Este site tem finalidade informativa e comercial, apresentando as soluções de
              automação com inteligência artificial da Ryzon. Nenhum conteúdo aqui publicado
              constitui, por si só, proposta comercial vinculante.
            </p>
          ),
        },
        {
          id: "uso",
          title: "Uso permitido",
          body: (
            <ul>
              <li>É vedado usar o site para fins ilícitos ou que violem direitos de terceiros.</li>
              <li>É vedada a extração automatizada em massa de conteúdo sem autorização escrita.</li>
              <li>É vedado tentar acessar áreas restritas ou comprometer a segurança do serviço.</li>
            </ul>
          ),
        },
        {
          id: "propriedade",
          title: "Propriedade intelectual",
          body: (
            <p>
              Marca, identidade visual, textos, código e materiais deste site são de titularidade da
              Ryzon ou licenciados a ela. A reprodução depende de autorização prévia e por escrito.
            </p>
          ),
        },
        {
          id: "contratacao",
          title: "Contratação de serviços",
          body: (
            <p>
              A prestação de serviços de automação é regida por contrato específico, que define
              escopo, prazos, níveis de serviço, preços e responsabilidades. Em caso de divergência,
              prevalece o contrato assinado entre as partes.
            </p>
          ),
        },
        {
          id: "ia",
          title: "Uso de inteligência artificial",
          body: (
            <p>
              Soluções baseadas em modelos de I.A. podem produzir resultados imprecisos. Recomendamos
              e implementamos pontos de revisão humana em fluxos de maior risco. O cliente é
              responsável por definir os critérios de aceite aplicáveis à sua operação.
            </p>
          ),
        },
        {
          id: "responsabilidade",
          title: "Limitação de responsabilidade",
          body: (
            <p>
              A Ryzon não responde por indisponibilidades decorrentes de terceiros, força maior ou
              uso indevido do site. A responsabilidade contratual observa os limites acordados no
              instrumento firmado com o cliente.
            </p>
          ),
        },
        {
          id: "privacidade",
          title: "Privacidade",
          body: (
            <p>
              O tratamento de dados pessoais está descrito na{" "}
              <Link to="/politica-de-privacidade">Política de Privacidade</Link>, parte integrante
              destes termos.
            </p>
          ),
        },
        {
          id: "foro",
          title: "Lei aplicável e foro",
          body: (
            <p>
              Aplica-se a legislação brasileira. Fica eleito o foro da Comarca de São Paulo/SP para
              dirimir controvérsias, com renúncia a qualquer outro.
            </p>
          ),
        },
      ]}
    />
  );
}
