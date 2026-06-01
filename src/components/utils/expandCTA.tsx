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
  const [is_expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`expanding ${is_expanded ? "expanded" : ""}`}
      style={{ color }}
      onClick={() => !is_expanded && setExpanded(true)}
    >
      {!is_expanded && (
        <p className="expanding_label">{CTAtext}</p>
      )}

      <div className="expanded_content">
        {is_expanded && children}

        {is_expanded && (
          <button
            className="expanding_close"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}