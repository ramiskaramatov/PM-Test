import React from "react";
import { HeroJoinTraders } from "./sections/HeroJoinTraders";
import { HeroBanner } from "./sections/HeroBanner";
import { MarketsSection } from "./TradingLanding/MarketsSection";

export const TradingLandingSection: React.FC = () => {
  return (
    <div className="w-full">
      <HeroJoinTraders />
      <HeroBanner />
      <MarketsSection />
    </div>
  );
};
