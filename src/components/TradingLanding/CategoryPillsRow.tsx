import React, { useState } from "react";
import { CategoryPill } from "../ui/CategoryPill";

interface CategoryPillsRowProps {
  onCategoryChange?: (category: string) => void;
  defaultActive?: string;
  className?: string;
}

export const CategoryPillsRow: React.FC<CategoryPillsRowProps> = ({
  onCategoryChange,
  defaultActive = "Most Traded",
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultActive);

  const categories = [
    "Most Traded",
    "Commodities",
    "Indices",
    "Cryptocurrencies",
    "Shares",
    "ETFs",
  ];

  const handleClick = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`.trim()}>
      {categories.map((category) => (
        <CategoryPill
          key={category}
          label={category}
          active={activeCategory === category}
          onClick={() => handleClick(category)}
        />
      ))}
    </div>
  );
};
