import { Link } from "@tanstack/react-router";
import { Logo } from "./site-header";

const legal = [
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos-de-uso", label: "Termos de Uso" },
  { to: "/politica-de-cookies", label: "Cookies" },
  { to: "/lgpd", label: "LGPD" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60 bg-ink-2/40">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Logo />
          <span className="ml-2 text-xs text-fog">
            © {new Date().getFullYear()} Ryzon Automação LTDA · CNPJ 00.000.000/0001-00
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fog">
          {legal.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-snow">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
