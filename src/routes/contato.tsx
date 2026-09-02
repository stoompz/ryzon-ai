import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e diagnóstico técnico — Ryzon" },
      {
        name: "description",
        content:
          "Fale com os engenheiros da Ryzon. Analisamos seu processo e devolvemos um escopo de automação com I.A. em até 5 dias úteis.",
      },
      { property: "og:title", content: "Contato e diagnóstico técnico — Ryzon" },
      {
        property: "og:description",
        content: "Envie seu processo para análise e receba um escopo de automação em até 5 dias úteis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
      <div>
        <span className="label-mono text-accent">Contato</span>
        <h1 className="mt-3 max-w-[18ch] text-balance text-4xl font-semibold tracking-tight text-snow">
          Mapeamos seu processo em uma sessão técnica.
        </h1>
        <p className="mt-5 max-w-[44ch] text-pretty text-base leading-relaxed text-fog">
          Sem pitch genérico. Nossos engenheiros analisam o fluxo, identificam os pontos de
          automação e devolvem um escopo em até 5 dias úteis.
        </p>
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 text-sm text-fog">
            <span className="grid size-5 place-items-center rounded-[6px] border border-line bg-panel text-xs text-accent">
              ✉
            </span>
            contato@ryzon.ai
          </div>
          <div className="flex items-center gap-3 text-sm text-fog">
            <span className="grid size-5 place-items-center rounded-[6px] border border-line bg-panel text-xs text-accent">
              ▣
            </span>
            São Paulo · Campinas · Remoto no Brasil
          </div>
        </div>
      </div>

      <form
        className="space-y-4 rounded-2xl glass-panel p-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs text-fog">Nome</span>
            <input
              required
              type="text"
              className="mt-1.5 w-full rounded-[8px] border border-line bg-ink-2/50 px-3 py-2.5 text-sm text-snow placeholder:text-fog/60 focus:border-accent/60 focus:outline-none"
              placeholder="Seu nome"
            />
          </label>
          <label className="block">
            <span className="text-xs text-fog">E-mail corporativo</span>
            <input
              required
              type="email"
              className="mt-1.5 w-full rounded-[8px] border border-line bg-ink-2/50 px-3 py-2.5 text-sm text-snow placeholder:text-fog/60 focus:border-accent/60 focus:outline-none"
              placeholder="voce@empresa.com"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-xs text-fog">Processo que deseja automatizar</span>
          <textarea
            required
            rows={3}
            className="mt-1.5 w-full rounded-[8px] border border-line bg-ink-2/50 px-3 py-2.5 text-sm text-snow placeholder:text-fog/60 focus:border-accent/60 focus:outline-none"
            placeholder="Ex.: conciliação bancária, emissão de notas, triagem de chamados..."
          />
        </label>
        <label className="flex items-start gap-2 text-xs leading-relaxed text-fog">
          <input required type="checkbox" className="mt-0.5 accent-accent" />
          <span>
            Li e concordo com a{" "}
            <Link to="/politica-de-privacidade" className="text-accent hover:underline">
              Política de Privacidade
            </Link>{" "}
            e autorizo o contato sobre esta solicitação.
          </span>
        </label>
        <button
          type="submit"
          className="w-full rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground ring-1 ring-accent/60 transition-colors hover:bg-snow"
        >
          {sent ? "Solicitação registrada" : "Enviar para análise"}
        </button>
        <p className="label-mono text-center text-fog/80">
          {sent
            ? "Recebemos seus dados neste dispositivo · nenhum envio externo configurado"
            : "Resposta em até 1 dia útil · Seus dados conforme a LGPD"}
        </p>
      </form>
    </div>
  );
}
