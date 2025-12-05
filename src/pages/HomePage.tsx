import React, { useState } from "react";
import { Header, Footer, CTABanner } from "../components/layout";
import {
  HeroSection,
  TickerSection,
  AccessMarketsSection,
  TradingLandingSection,
  EmpowerTradingSection,
  SeamlessWithdrawalsSection,
  DailyUpdatesSection,
  TestimonialsSection,
} from "../components/sections";

export const HomePage: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(
    "startTrading"
  );

  const handleStartTrading = () => {
    setActiveButton("startTrading");
  };

  const handleTryDemo = () => {
    setActiveButton("tryDemo");
  };

  return (
    <div className="pm-page">
      <Header />

      <main>
        <HeroSection
          activeButton={activeButton}
          onButtonClick={(button) =>
            button === "startTrading" ? handleStartTrading() : handleTryDemo()
          }
        />

        <TickerSection />

        {/* Access Markets Section */}
        <AccessMarketsSection />

        {/* Trading Landing Section */}
        <TradingLandingSection />

        {/* Empower Trading Section */}
        <EmpowerTradingSection />

        {/* Seamless Withdrawals Section */}
        <SeamlessWithdrawalsSection />

        {/* Daily Updates Section */}
        <DailyUpdatesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};
