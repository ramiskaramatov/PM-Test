import React from "react";

interface AssetCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  active?: boolean;
  opacityLevel?: string;
  iconType: string;
}

export const AssetCard: React.FC<AssetCardProps> = ({
  symbol,
  name,
  price,
  change,
  active = false,
  opacityLevel = "100",
  iconType,
}) => {
  const opacity = parseInt(opacityLevel) / 100;
  const isPositive = change.startsWith("+");
  const changeColor = isPositive ? "text-green-500" : "text-red-500";

  // Icon mapping for different asset types
  const getIcon = () => {
    switch (iconType.toUpperCase()) {
      case "BTC":
        return "₿";
      case "ETH":
        return "Ξ";
      default:
        return symbol.charAt(0);
    }
  };

  const getIconBg = () => {
    switch (iconType.toUpperCase()) {
      case "BTC":
        return "bg-orange-500";
      case "ETH":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`flex items-center justify-between ${
        active
          ? "text-white border-[#ed1d25]"
          : "bg-white text-black border-gray-200"
      }`}
      style={{
        width: active ? "286px" : "auto",
        height: active ? "75px" : "auto",
        borderRadius: "20px",
        borderWidth: "1.7px",
        borderStyle: "solid",
        padding: "16px",
        opacity: active ? 1 : opacity,
        justifyContent: "space-between",
        background: active
          ? "linear-gradient(126.89deg, #ED1D25 -17.29%, #871115 171.67%)"
          : undefined,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${getIconBg()} flex items-center justify-center text-white text-lg font-bold`}
        >
          {getIcon()}
        </div>
        <div className="flex flex-col">
          <span
            className={`font-semibold text-sm ${
              active ? "text-white" : "text-black"
            }`}
          >
            {symbol}
          </span>
          <span
            className={`text-xs ${active ? "text-white" : "text-gray-500"}`}
          >
            {name}
          </span>
        </div>
      </div>
      <div className="text-right text-xs">
        <div
          className={`font-semibold ${active ? "text-white" : "text-black"}`}
        >
          {price}
        </div>
        <div
          className={`font-semibold ${
            active
              ? "text-white"
              : isPositive
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {change}
        </div>
      </div>
    </div>
  );
};
