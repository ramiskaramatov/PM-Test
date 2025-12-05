import React from "react";

interface CategoryPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({
  label,
  active = false,
  onClick,
  className = "",
}) => {
  // Determine padding based on text length to ensure full readability
  const getPadding = (text: string) => {
    // Use more padding for longer labels to ensure full readability
    if (text.length > 12) return "px-7";
    if (text.length > 8) return "px-6";
    return "px-5";
  };

  const baseClasses = `rounded-full h-10 ${getPadding(
    label
  )} py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center justify-center`;

  const activeClasses = active
    ? "bg-[#E53935] text-white hover:bg-[#c81a21] border border-transparent"
    : "bg-white text-[#333] border border-[#E53935] hover:bg-red-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${className}`}
    >
      {label}
    </button>
  );
};
