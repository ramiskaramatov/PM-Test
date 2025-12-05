import React from "react";

export const ChartCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] max-w-[700px] mx-auto w-full p-3.5 flex flex-col gap-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-base text-gray-800">XAU/USD</div>
      </div>

      {/* Chart Container */}
      <div className="h-64 md:h-80 relative overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 320"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient
              id="chartAreaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ED1D25" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ED1D25" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Red dashed horizontal gridlines */}
          <line
            x1="40"
            y1="50"
            x2="610"
            y2="50"
            stroke="#ED1D25"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />
          <line
            x1="40"
            y1="100"
            x2="610"
            y2="100"
            stroke="#ED1D25"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />
          <line
            x1="40"
            y1="150"
            x2="610"
            y2="150"
            stroke="#ED1D25"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />
          <line
            x1="40"
            y1="200"
            x2="610"
            y2="200"
            stroke="#ED1D25"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />
          <line
            x1="40"
            y1="250"
            x2="610"
            y2="250"
            stroke="#ED1D25"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.4"
          />

          {/* Chart area fill - smooth upward curve */}
          <path
            d="M 40 250 Q 90 230, 120 210 T 200 170 T 280 140 T 360 110 T 440 80 T 610 65 L 610 280 L 40 280 Z T 580 90 "
            fill="url(#chartAreaGradient)"
          />

          {/* Vertical highlighted band (red translucent) */}
          <rect
            x="275"
            y="40"
            width="10"
            height="240"
            fill="#ED1D25"
            opacity="0.15"
          />

          {/* Chart line - smooth red curved line */}
          <path
            d="M 40 250 Q 80 230, 120 210 T 200 170 T 280 140 T 360 110 T 440 80 T 520 70 T 609 65"
            stroke="#ED1D25"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Highlighted point with tooltip */}
          <g transform="translate(280, 140)">
            {/* Tooltip box */}
            <rect
              x="-45"
              y="-80"
              width="90"
              height="45"
              rx="8"
              fill="#ED1D25"
              opacity="0.95"
            />
            <text
              x="0"
              y="-60"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              $1,425.00
            </text>
            <text
              x="0"
              y="-45"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              28 Okt 2023
            </text>
            {/* Selected data point dot with white border */}
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="#ED1D25"
              stroke="white"
              strokeWidth="2.5"
            />
          </g>

          {/* Y-axis labels on left */}
          <text
            x="20"
            y="55"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            100
          </text>
          <text
            x="20"
            y="105"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            80
          </text>
          <text
            x="20"
            y="155"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            60
          </text>
          <text
            x="20"
            y="205"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            40
          </text>
          <text
            x="20"
            y="255"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            20
          </text>
          <text
            x="20"
            y="305"
            fill="#6b7280"
            fontSize="11"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="end"
          >
            0
          </text>

          {/* X-axis labels: Jan → Dec (evenly spaced) */}
          <text
            x="50"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Jan
          </text>
          <text
            x="100"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Feb
          </text>
          <text
            x="150"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Mar
          </text>
          <text
            x="200"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Apr
          </text>
          <text
            x="250"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            May
          </text>
          <text
            x="300"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Jun
          </text>
          <text
            x="350"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Jul
          </text>
          <text
            x="400"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Aug
          </text>
          <text
            x="450"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Sep
          </text>
          <text
            x="500"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Oct
          </text>
          <text
            x="550"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Nov
          </text>
          <text
            x="600"
            y="310"
            fill="#6b7280"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Dec
          </text>
        </svg>
      </div>
    </div>
  );
};
