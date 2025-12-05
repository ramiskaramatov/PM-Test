import React from "react";
import { FeaturePill } from "../ui/FeaturePill";
import { MarketCard } from "../ui/MarketCard";

// Icon components for market cards
const ForexIcon = () => (
  <div className="pm-market-icon-wrapper">
    <div className="pm-market-icon-outer">
      <div className="pm-market-icon-inner">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8V24M12 14H20M12 18H20"
            stroke="#ED1D25"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="16"
            r="10"
            stroke="#ED1D25"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </div>
);

const StocksIcon = () => (
  <div className="pm-market-icon-wrapper">
    <div className="pm-market-icon-outer">
      <div className="pm-market-icon-inner">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 22L12 16L18 20L24 10L28 14"
            stroke="#ED1D25"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </div>
);

const IndicesIcon = () => (
  <div className="pm-market-icon-wrapper">
    <div className="pm-market-icon-outer">
      <div className="pm-market-icon-inner">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main pie slice */}
          <path d="M16 16L16 4A12 12 0 0 1 26.928 10L16 16Z" fill="#ED1D25" />
          {/* Separated slice */}
          <path
            d="M16 16L26.928 10A12 12 0 0 1 28 16L16 16Z"
            fill="#ED1D25"
            opacity="0.6"
          />
          {/* Remaining circle */}
          <path
            d="M16 16L28 16A12 12 0 0 1 16 28L16 16Z"
            fill="#ED1D25"
            opacity="0.3"
          />
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="#ED1D25"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </div>
);

const CommoditiesIcon = () => (
  <div className="pm-market-icon-wrapper">
    <div className="pm-market-icon-outer">
      <div className="pm-market-icon-inner">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="10"
            stroke="#ED1D25"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Continents representation */}
          <path
            d="M12 12C12 12 14 10 16 10C18 10 20 12 20 12C20 12 18 14 16 14C14 14 12 12 12 12Z"
            fill="#ED1D25"
            opacity="0.6"
          />
          <path
            d="M10 18C10 18 12 16 14 16C16 16 18 18 18 18C18 18 16 20 14 20C12 20 10 18 10 18Z"
            fill="#ED1D25"
            opacity="0.6"
          />
          <path
            d="M14 22C14 22 15 21 16 21C17 21 18 22 18 22C18 22 17 23 16 23C15 23 14 22 14 22Z"
            fill="#ED1D25"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const AccessMarketsSection: React.FC = () => {
  const marketCards = [
    {
      title: "Forex",
      description:
        "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
      icon: <ForexIcon />,
    },
    {
      title: "Stocks",
      description:
        "Follow global leaders and react to market moves in real time.",
      icon: <StocksIcon />,
    },
    {
      title: "Indices",
      description:
        "Trade major global indices with deep liquidity, precise execution. and competitive spreads across key markets.",
      icon: <IndicesIcon />,
    },
    {
      title: "Commodities",
      description:
        "Trade essential resources such as oil, gas, and agricultural products.",
      icon: <CommoditiesIcon />,
    },
  ];

  return (
    <section className="relative w-full min-h-[847px] access-gradient py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Headline with "17,000+" highlighted in red */}
        <h2 className="access-headline-bold text-white">
          Access <span className="text-red-600">17,000+</span>
          <br />
          markets all in one
        </h2>

        {/* Subtitle */}
        <p className="access-description text-gray-300 mt-6 max-w-2xl mx-auto">
          Trade forex, shares, indices, and commodities with competitive
          spreads, deep liquidity, and seamless execution.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <FeaturePill text="$0 Deposit Fees" icon="💲" />
          <FeaturePill text="Spreads from 0.0 pips" icon="📈" />
          <FeaturePill text="Secure Funds" icon="🔒" />
        </div>

        {/* Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {marketCards.map((card, index) => (
            <MarketCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
