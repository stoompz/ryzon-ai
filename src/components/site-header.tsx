import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/servicos", label: "Serviços" },
  { to: "/setores", label: "Setores" },
  { to: "/sobre", label: "Empresa" },
  { to: "/contato", label: "Contato" },
] as const;

export function Logo({ withName = true }: { withName?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid size-6 place-items-center rounded-[4px] bg-linear-to-br from-accent to-accent-2">
        <span className="size-2 rounded-full bg-ink" />
      </span>
      {withName && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-snow">
          Ryzon
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-fog md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-snow"
                activeProps={{ className: "text-snow" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          to="/contato"
          className="inline-flex items-center rounded-[8px] bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground ring-1 ring-accent/60 transition-colors hover:bg-snow"
        >
          Solicitar demo
        </Link>
      </div>
    </header>
  );
}
