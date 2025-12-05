import React from "react";

interface TimeframeButtonProps {
  content: string;
  active?: boolean;
  onClick?: () => void;
  width?: string; // e.g., "w-full", "w-20", "w-[120px]", etc.
}

export const TimeframeButton: React.FC<TimeframeButtonProps> = ({
  content,
  active = false,
  onClick,
  width = "w-[40px]", // default to full width
}) => {
  const baseClasses = `${width} flex items-center justify-center px-3 py-2 rounded-full text-xs font-semibold transition`;
  const activeClasses = active
    ? "bg-[#ED1D25] text-white"
    : "bg-black text-white hover:bg-gray-800";

  return (
    <button onClick={onClick} className={`${baseClasses} ${activeClasses}`}>
      {content}
    </button>
  );
};
