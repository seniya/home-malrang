import type { ReactNode } from "react";

type RetroPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
  tone?: "blue" | "pink" | "lime";
};

export function RetroPanel({ title, children, className = "", tone = "blue" }: RetroPanelProps) {
  return (
    <section className={`retro-panel retro-panel-${tone} ${className}`}>
      <h2 className="retro-panel-title">
        <span aria-hidden="true">✦</span> {title} <span aria-hidden="true">✦</span>
      </h2>
      <div className="retro-panel-content">{children}</div>
    </section>
  );
}
