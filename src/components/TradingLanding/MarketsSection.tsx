import React, { useState } from "react";
import { TabPill } from "../ui/TabPill";
import { AssetList } from "./AssetList";
import { ChartCard } from "./ChartCard";
import { TimeframeColumn } from "./TimeframeColumn";
import { TradingPanel } from "./TradingPanel";

export const MarketsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Most Traded");
  const [activeTimeframe, setActiveTimeframe] = useState("1h");

  const tabs = [
    "Most Traded",
    "Commodities",
    "Indices",
    "Cryptocurrencies",
    "Shares",
    "ETFs",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Subtitle */}
        <div className="text-center space-y-4 mb-10">
          <h2
            className="text-black"
            style={{
              fontFamily: "Gilroy-Bold, 'Gilroy', sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
            }}
          >
            Our Markets
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Stay informed with the data that matters, on 17,000+ markets. Get
            the latest news, trader sentiment, spreads, price action and much
            more.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <TabPill
              key={tab}
              content={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Main Markets Layout - 3 Column Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_280px)_minmax(0,_1fr)_minmax(0,_120px)] gap-6 items-start">
            {/* Left Column - Asset List */}
            <div className="space-y-4 lg:mt-[140px] lg:ml-[1px]">
              <AssetList />
            </div>

            {/* Center Column - Chart */}
            <div className="space-y-6 lg:mt-[20px]">
              {/* Trading Panel */}
              <TradingPanel />
              {/* Chart Card */}
              <ChartCard />
            </div>

            {/* Right Column - Empty */}
            <div className="flex flex-col"></div>
          </div>

          {/* Timeframe Buttons Column - Positioned absolutely to align with chart */}
          <div
            className="hidden lg:block absolute right-6"
            style={{
              top: "195px",
              width: "140px",
              position: "absolute",
            }}
          >
            <TimeframeColumn
              activeTimeframe={activeTimeframe}
              onTimeframeChange={setActiveTimeframe}
            />
          </div>
        </div>

        {/* Mobile Timeframe Buttons - Below chart on mobile */}
        <div className="lg:hidden flex flex-wrap justify-center gap-2 mt-6">
          <TimeframeColumn
            activeTimeframe={activeTimeframe}
            onTimeframeChange={setActiveTimeframe}
          />
        </div>
      </div>
    </section>
  );
};
