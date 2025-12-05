import React, { useState } from "react";

export const HeroJoinTraders: React.FC = () => {
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
    <section
      className="bg-white relative"
      style={{
        width: "1440px",
        margin: "0 auto",
        minHeight: "420px",
        position: "relative",
        paddingBottom: "0",
      }}
    >
      {/* Heading - Join 50,000+ traders who trust us */}
      <h1
        className="absolute"
        style={{
          width: "516px",
          height: "210px",
          left: "calc(50% - 516px/2 - 326px)",
          top: "80px",
          fontFamily:
            "'Gilroy-Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "72px",
          lineHeight: "97%",
          letterSpacing: "-0.03em",
          color: "#000000",
        }}
      >
        Join <span style={{ color: "#ed1d25" }}>50,000+</span> traders who trust
        us
      </h1>

      {/* Paragraph - Experience advanced trading tools... */}
      <p
        className="absolute"
        style={{
          width: "515px",
          height: "66px",
          left: "calc(50% - 515px/2 + 326.5px)",
          top: "100px",
          fontFamily:
            "'Gilroy-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "22px",
          color: "#232323",
        }}
      >
        Experience advanced trading tools, transparent and competitive pricing,
        lightning-fast execution, and dedicated support trusted by traders
        worldwide.
      </p>

      {/* Button Group */}
      <div
        className="absolute flex gap-4"
        style={{
          width: "401px",
          height: "53px",
          left: "790px",
          top: "200px",
        }}
      >
        <button
          onClick={handleStartTrading}
          className="rounded-full shadow-md hover:opacity-90 transition active:scale-95"
          style={{
            backgroundColor:
              activeButton === "startTrading" ? "#ED1D25" : "#FFFFFF",
            color: "#000000",
            border: "1.5px solid #ED1D25",
            padding: "14px 32px",
            fontSize: "16px",
            fontFamily:
              "'Urbanist', SemiBold, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 600,
            // border: "none",
            cursor: "pointer",
            transform:
              activeButton === "startTrading" ? "scale(0.98)" : "scale(1)",
            transition: "all 0.2s ease",
          }}
        >
          Start Trading
        </button>
        <button
          onClick={handleTryDemo}
          className="rounded-full hover:bg-[#ED1D25] transition active:scale-95"
          style={{
            backgroundColor: activeButton === "tryDemo" ? "#ED1D25" : "#FFFFFF",
            color: "#000000",
            border: "1.5px solid #ED1D25",
            padding: "14px 32px",
            fontSize: "16px",
            fontFamily:
              "'Urbanist', SemiBold, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 400,
            cursor: "pointer",
            textAlign: "center",
            transform: activeButton === "tryDemo" ? "scale(0.98)" : "scale(1)",
            transition: "all 0.2s ease",
          }}
        >
          Try Demo Account
        </button>
      </div>
    </section>
  );
};
