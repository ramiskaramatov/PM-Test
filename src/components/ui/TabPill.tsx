import React from "react";

interface TabPillProps {
  content: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TabPill: React.FC<TabPillProps> = ({
  content,
  active = false,
  onClick,
  className = "",
}) => {
  // Base styling matching "Try Demo Account" button
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "1.5px solid #ED1D25",
    padding: "14px 32px",
    fontSize: "16px",
    fontFamily:
      "'Urbanist', SemiBold, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: 400,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "999px",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
  };

  // Active state: add subtle background tint to indicate selection
  const activeStyle: React.CSSProperties = active
    ? {
        ...baseStyle,
        backgroundColor: "#ED1D25",
        color: "#FFFFFF", // Light red tint for active state
        border: "1.5px solid #FFFFFF",
      }
    : baseStyle;

  return (
    <button onClick={onClick} style={activeStyle} className={className}>
      {content}
    </button>
  );
};
