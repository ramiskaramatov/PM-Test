import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="w-full bg-white pt-0 pb-4 -mt-8 overflow-visible">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative w-full rounded-[32px] overflow-visible bg-gradient-to-b from-[#6B0000] via-[#C00000] to-[#6B0000] flex flex-col md:flex-row items-stretch min-h-[300px] md:min-h-[350px]">
          {/* Left Side - Layered Images */}
          <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-visible">
            {/* Background Person Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/e765af951078a2104c964b697995e77a045a48b1.png"
                alt="Trader"
                className="w-full h-full object-cover object-left"
                style={{
                  objectPosition: "left center",
                }}
              />
            </div>

            {/* Euro Symbols Overlay - Glowing and translucent */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/cebd0d1ff1e8361ab68d9fbccc20b49d684d023f.png"
                alt="Euro symbols"
                className="w-full h-full object-contain object-center"
                style={{
                  mixBlendMode: "screen",
                  opacity: 0.9,
                  filter:
                    "drop-shadow(0 0 20px rgba(255, 200, 0, 0.7)) brightness(1.2)",
                }}
              />
            </div>
          </div>

          {/* Right Side - Text and Button */}
          <div className="relative w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 py-6 md:py-8 text-white space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-snug">
              Everything you need to
              <br />
              trade the markets
            </h2>
            <div className="relative self-start inline-block">
              {/* Glowing border effect - outer glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 0, 0, 0.9), rgba(255, 100, 0, 0.7))",
                  filter: "blur(10px)",
                  transform: "scale(1.1)",
                  zIndex: 0,
                }}
              />
              {/* Glowing border effect - inner glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 0, 0, 0.6), rgba(255, 50, 0, 0.4))",
                  filter: "blur(6px)",
                  transform: "scale(1.05)",
                  zIndex: 0,
                }}
              />
              <button
                className="relative px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #8B0000 0%, #A00000 100%)",
                  border: "2px solid",
                  borderColor: "rgba(255, 0, 0, 0.9)",
                  boxShadow: `
                    0 0 20px rgba(255, 0, 0, 0.8),
                    0 0 40px rgba(255, 0, 0, 0.6),
                    inset 0 0 15px rgba(255, 255, 255, 0.1)
                  `,
                  zIndex: 1,
                  position: "relative",
                }}
              >
                Explore Accounts
              </button>
            </div>
          </div>

          {/* Subtle inner shadow effect for depth */}
          <div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            style={{
              boxShadow:
                "inset 0 3px 15px rgba(0, 0, 0, 0.25), inset 0 -3px 15px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
