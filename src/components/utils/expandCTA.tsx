'use client'
import { useState, ReactNode } from "react";
import "../styles/expandCTA.scss";

type ExpandingPanelProps = {
  color: string;
  CTAtext: string;
  children: ReactNode;
  defaultExpanded?: boolean;
};

export default function ExpandingPanel({
  color,
  CTAtext,
  children,
  defaultExpanded = false,
}: ExpandingPanelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`expanding-panel ${expanded ? "expanded" : ""}`}
      style={{ color }}
    >
      <button
        className="expanding-panel__trigger"
        onClick={() => setExpanded(true)}
        disabled={expanded}
      >
        {CTAtext}
      </button>

      <div className="expanding-panel__container">
        <div className="expanding-panel__content">
          {children}

          {/* Close button */}
          {expanded && (
            <button
              className="expanding-panel__close"
              onClick={() => setExpanded(false)}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}