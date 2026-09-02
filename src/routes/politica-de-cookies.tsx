import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/legal-page";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Ryzon" },
      {
        name: "description",
        content:
          "Quais cookies o site da Ryzon utiliza, para que servem, por quanto tempo ficam armazenados e como gerenciar suas preferências.",
      },
      { property: "og:title", content: "Política de Cookies — Ryzon" },
      {
        property: "og:description",
        content: "Categorias de cookies usadas pela Ryzon e como revisar suas preferências a qualquer momento.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Cookies"
      updatedAt="2 de setembro de 2026"
      intro="Cookies são pequenos arquivos gravados no seu dispositivo quando você visita um site. Abaixo explicamos quais utilizamos e como você pode controlá-los."
      sections={[
        {
          id: "categorias",
          title: "Categorias de cookies",
          body: (
            <ul>
              <li>
                <strong>Essenciais</strong>: necessários ao funcionamento do site e ao registro da
                sua escolha de consentimento. Não podem ser desativados.
              </li>
              <li>
                <strong>Analíticos</strong>: medem páginas mais visitadas e desempenho, de forma
                agregada.
              </li>
              <li>
                <strong>Marketing</strong>: só são ativados mediante consentimento e permitem medir
                campanhas.
              </li>
            </ul>
          ),
        },
        {
          id: "prazos",
          title: "Prazo de armazenamento",
          body: (
            <p>
              Cookies de sessão são eliminados ao fechar o navegador. Cookies persistentes, como o
              registro da sua preferência de consentimento, permanecem por até 12 meses.
            </p>
          ),
        },
        {
          id: "gerenciar",
          title: "Como gerenciar suas preferências",
          body: (
            <>
              <p>
                Você pode alterar sua escolha limpando os dados deste site no navegador — o aviso de
                cookies será exibido novamente na próxima visita.
              </p>
              <p>
                Também é possível bloquear ou excluir cookies nas configurações do navegador. Note
                que bloquear cookies essenciais pode afetar funcionalidades do site.
              </p>
            </>
          ),
        },
        {
          id: "terceiros",
          title: "Cookies de terceiros",
          body: (
            <p>
              Ferramentas de análise e hospedagem podem gravar cookies próprios. Esses fornecedores
              tratam os dados conforme suas próprias políticas, sempre limitados às instruções
              contratuais da Ryzon.
            </p>
          ),
        },
      ]}
    />
  );
}
