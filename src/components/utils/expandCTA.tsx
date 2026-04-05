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
      className={`expanding ${expanded ? "expanded" : ""}`}
      style={{ color }}
    >
      <button
        className="expanding_trigger"
        onClick={() => setExpanded(true)}
        disabled={expanded}
      >
        {CTAtext}
      </button>

      <div className="expanding_container">
        <div className="expanded_content">
          {children}
          {/* Close button */}
          {expanded && (
            <button
              className="expanding_close"
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