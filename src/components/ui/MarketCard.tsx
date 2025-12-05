import React from "react";

interface MarketCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div className={`pm-market-block ${className}`}>
      {/* Icon - positioned at top */}
      <div className="pm-market-block-icon">{icon}</div>

      {/* Title */}
      <h3 className="pm-market-block-title">{title}</h3>

      {/* Description */}
      <p className="pm-market-block-description">{description}</p>

      {/* Circular Arrow in bottom-left */}
      <div className="pm-market-block-arrow">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
