import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "ryzon-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const decide = (value: "all" | "essential") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl glass-panel p-5 md:left-auto md:w-[440px]">
      <p className="label-mono text-accent">Cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-fog">
        Usamos cookies essenciais para o funcionamento do site e cookies analíticos para medir
        desempenho. Você pode aceitar todos ou manter apenas os essenciais.{" "}
        <Link to="/politica-de-cookies" className="text-accent hover:underline">
          Saiba mais
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => decide("all")}
          className="rounded-[8px] bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-snow"
        >
          Aceitar todos
        </button>
        <button
          onClick={() => decide("essential")}
          className="rounded-[8px] border border-line px-4 py-2 text-sm font-medium text-snow transition-colors hover:border-fog"
        >
          Apenas essenciais
        </button>
      </div>
    </div>
  );
}
