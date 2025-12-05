import React from "react";
import { AssetCard } from "../ui/AssetCard";

export const AssetList: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Active BTC Card (1st row) - Pressed State */}
      <AssetCard
        symbol="Btc"
        name="Bitcoin"
        price="₽ 524,0"
        change="+3,25%"
        active={true}
        opacityLevel="100"
        iconType="BTC"
      />

      {/* Inactive BTC Card (2nd row) - 100% opacity */}
      <AssetCard
        symbol="BTC"
        name="Bitcoin"
        price="₽ 524,0"
        change="+3,25%"
        active={false}
        opacityLevel="100"
        iconType="BTC"
      />

      {/* Inactive BTC Card (3rd row) - 90% opacity */}
      <AssetCard
        symbol="BTC"
        name="Bitcoin"
        price="₽ 524,0"
        change="+3,25%"
        active={false}
        opacityLevel="90"
        iconType="BTC"
      />

      {/* Inactive BTC Card (4th row) - 80% opacity */}
      <AssetCard
        symbol="BTC"
        name="Bitcoin"
        price="₽ 524,0"
        change="+3,25%"
        active={false}
        opacityLevel="80"
        iconType="BTC"
      />

      {/* Inactive ETH Card (5th row) - 70% opacity */}
      <AssetCard
        symbol="ETH"
        name="Ethereum"
        price="₽ 524,0"
        change="+3,25%"
        active={false}
        opacityLevel="70"
        iconType="ETH"
      />
    </div>
  );
};
