import React from "react";

export const TradingPanel: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-[700px] mx-auto w-full">
      {/* Left Section - Main Trading Panel */}
      <div className="flex-1 relative bg-[#8B0000] rounded-[20px] p-5 md:p-6 flex flex-col md:flex-row items-center gap-3 md:gap-4">
        {/* Expand Icon - Top Right */}
        <button
          className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:opacity-80 transition-opacity z-10"
          aria-label="Expand panel"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Gold Label */}
        <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
          Gold
        </div>

        {/* Buy Button */}
        <button
          className="flex-1 rounded-[16px] px-4 py-3 flex items-center justify-between text-white min-w-0"
          style={{
            background:
              "linear-gradient(264.96deg, #AC0000 31.55%, #540000 95.95%)",
          }}
        >
          <div className="flex flex-col items-start gap-0.5 min-w-0">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide opacity-90">
              Buy
            </span>
            <span className="text-lg md:text-xl font-bold">3773.31</span>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 ml-2"
          >
            <path d="M12 16L7 11H10V6H14V11H17L12 16Z" fill="currentColor" />
          </svg>
        </button>

        {/* Sell Button */}
        <button className="flex-1 rounded-[16px] px-4 py-3 bg-white border border-gray-200 flex items-center justify-between text-[#8B0000] hover:bg-gray-50 transition-colors min-w-0">
          <div className="flex flex-col items-start gap-0.5 min-w-0">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide">
              Sell
            </span>
            <span className="text-lg md:text-xl font-bold">3773.61</span>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 ml-2"
          >
            <path d="M12 8L17 13H14V18H10V13H7L12 8Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Right Section - Market Statistics Panel */}
      <div className="bg-gray-50 rounded-[20px] p-4 md:p-5 flex flex-col gap-3 md:gap-4 w-full md:w-auto md:min-w-[200px]">
        {/* Buyers Information */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs md:text-sm text-gray-600">Buyers</span>
            <span className="text-xs md:text-sm font-bold text-gray-900">
              66.93%
            </span>
          </div>
          <div className="text-xs md:text-sm font-medium text-green-600 whitespace-nowrap">
            Low: 3686.38
          </div>
        </div>

        {/* Seller Information */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs md:text-sm text-gray-600">Seller</span>
            <span className="text-xs md:text-sm font-bold text-gray-900">
              66.93%
            </span>
          </div>
          <div className="text-xs md:text-sm font-medium text-red-600 whitespace-nowrap">
            High: 3788.96
          </div>
        </div>

        {/* Browse All Markets Link */}
        <a
          href="#"
          className="flex items-center justify-between text-xs md:text-sm text-gray-700 hover:text-[#8B0000] transition-colors mt-auto pt-2"
        >
          <span>Browse all markets</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 ml-2"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
