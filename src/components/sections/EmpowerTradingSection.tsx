import React from "react";

/**
 * Feature item data structure for Empower Trading section
 */
export interface EmpowerFeature {
  /**
   * Icon image source path
   */
  iconSrc: string;
  /**
   * Feature title
   */
  title: string;
  /**
   * Feature description
   */
  description: string;
  /**
   * Alt text for the icon
   */
  iconAlt?: string;
}

/**
 * Props for EmpowerTradingSection component
 */
export interface EmpowerTradingSectionProps {
  /**
   * Main title text
   * @default "Empower Your Trading"
   */
  title?: string;
  /**
   * Subtitle text displayed below the title
   * @default "Unlock advanced tools, insights, and support to maximise your trading potential."
   */
  subtitle?: string;
  /**
   * Array of feature items (should be 4 items for 2x2 grid)
   */
  features?: EmpowerFeature[];
  /**
   * Central circular icon image source
   */
  centralIconSrc?: string;
  /**
   * Alt text for central icon
   */
  centralIconAlt?: string;
  /**
   * Custom className for the section container
   */
  className?: string;
  /**
   * Optional click handler for the central icon
   */
  onCentralIconClick?: () => void;
}

/**
 * Default features for Empower Trading section
 */
const DefaultFeatures: EmpowerFeature[] = [
  {
    iconSrc: "/assets/Empower_2.png",
    iconAlt: "Charting tools and indicators",
    title: "Charting tools and indicators",
    description:
      "Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators.",
  },
  {
    iconSrc: "/assets/Empower_3.png",
    iconAlt: "Get flexible leverage",
    title: "Get flexible leverage",
    description:
      "Amplify your trading power with flexible leverage options tailored to your strategy and risk tolerance.",
  },
  {
    iconSrc: "/assets/Empower_4.png",
    iconAlt: "Round-the-clock support",
    title: "Round-the-clock support",
    description:
      "Access dedicated support whenever you need it, 24/7, ensuring you're never left without assistance.",
  },
  {
    iconSrc: "/assets/Empower_4.png",
    iconAlt: "Customisable price alerts",
    title: "Customisable price alerts",
    description:
      "Stay ahead of market movements with customisable alerts that notify you of price changes and opportunities.",
  },
];

/**
 * Feature Card Component
 */
const FeatureCard: React.FC<{ feature: EmpowerFeature }> = ({ feature }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 h-full">
      {/* Icon */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        <img
          src={feature.iconSrc}
          alt={feature.iconAlt || feature.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
          {feature.title}
        </h3>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

/**
 * Empower Trading Section Component
 *
 * A dark-themed section highlighting key trading features in a 2x2 grid layout
 * with a central circular icon. Features include charting tools, leverage,
 * support, and price alerts.
 */
export const EmpowerTradingSection: React.FC<EmpowerTradingSectionProps> = ({
  title = "Empower Your Trading",
  subtitle = "Unlock advanced tools, insights, and support to maximise your trading potential.",
  features = DefaultFeatures,
  centralIconSrc = "/assets/Empower_1.png",
  centralIconAlt = "Empower trading",
  className = "",
  onCentralIconClick,
}) => {
  return (
    <section
      className={`relative w-full py-20 md:py-32 bg-gradient-to-br from-[#0a0000] via-[#1a0000] to-[#0a0000] overflow-hidden ${className}`}
      aria-labelledby="empower-heading"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Gradient Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(237, 29, 37, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="pm-container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1
            id="empower-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid with Central Icon */}
        <div className="relative max-w-6xl mx-auto">
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative">
            {/* Grid Lines - Visual Separators */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-800 opacity-30 -z-0" />
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 opacity-30 -z-0" />

            {/* Top Left - Charting Tools */}
            {features[0] && (
              <div className="relative z-10">
                <FeatureCard feature={features[0]} />
              </div>
            )}

            {/* Top Right - Leverage */}
            {features[1] && (
              <div className="relative z-10">
                <FeatureCard feature={features[1]} />
              </div>
            )}

            {/* Bottom Left - Support */}
            {features[2] && (
              <div className="relative z-10">
                <FeatureCard feature={features[2]} />
              </div>
            )}

            {/* Bottom Right - Price Alerts */}
            {features[3] && (
              <div className="relative z-10">
                <FeatureCard feature={features[3]} />
              </div>
            )}

            {/* Central Circular Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <button
                onClick={onCentralIconClick}
                className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-transparent border-2 border-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-500/50 group"
                aria-label={centralIconAlt}
                type={onCentralIconClick ? "button" : "button"}
              >
                {/* Red Glow Effect */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow:
                      "0 0 30px rgba(237, 29, 37, 0.6), 0 0 60px rgba(237, 29, 37, 0.3)",
                  }}
                />

                {/* Icon Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={centralIconSrc}
                    alt={centralIconAlt}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>

                {/* Subtle Red Border Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(237, 29, 37, 0.3)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
