import React from "react";

interface FeaturePillProps {
  text: string;
  icon: string;
  className?: string;
}

export const FeaturePill: React.FC<FeaturePillProps> = ({
  text,
  icon,
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        width: "258px",
        height: "56px",
        borderRadius: "30px",
        padding: "1px",
        background: "linear-gradient(90deg, #ED1D25 0%, #FF9595 100%)",
      }}
    >
      <div
        className="flex items-center justify-center gap-[10px] text-white text-sm h-full"
        style={{
          background: "linear-gradient(90deg, #900003 0%, #730307 100%)",
          borderRadius: "30px",
          padding: "10px",
        }}
      >
        <span className="text-base">{icon}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};
