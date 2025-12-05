import React, { useState } from "react";

interface HeroSectionProps {
  activeButton: string | null;
  onButtonClick: (button: "startTrading" | "tryDemo") => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeButton,
  onButtonClick,
}) => {
  return (
    <section className="pm-hero" id="trading">
      <div className="pm-container pm-hero-grid">
        <div className="pm-hero-copy">
          <h1>
            <span className="pm-hero-title-large">Trade Forex</span>
            <br />
            <span className="pm-hero-title-small">with Premier</span>
            <br />
            <span className="pm-hero-title-large">Markets</span>
          </h1>
          <p className="pm-hero-sub">
            Access global markets with advanced trading
            <br />
            tools, competitive spreads, and institutional
            <br />
            grade execution.
          </p>

          <div className="pm-hero-actions">
            <button
              onClick={() => onButtonClick("startTrading")}
              className="pm-btn pm-btn--start-trading transition active:scale-95"
              style={{
                backgroundColor:
                  activeButton === "startTrading" ? "#FFFFFF" : "transparent",
                color: activeButton === "startTrading" ? "#ED1D25" : "#FFFFFF",
                border: "2px solid #FFFFFF",
                transform:
                  activeButton === "startTrading" ? "scale(0.98)" : "scale(1)",
                transition: "all 0.2s ease",
              }}
            >
              Start Trading
            </button>
            <button
              onClick={() => onButtonClick("tryDemo")}
              className="pm-btn pm-btn--try-demo transition active:scale-95"
              style={{
                backgroundColor:
                  activeButton === "tryDemo" ? "#FFFFFF" : "transparent",
                color: activeButton === "tryDemo" ? "#ED1D25" : "#FFFFFF",
                border: "2px solid #FFFFFF",
                transform:
                  activeButton === "tryDemo" ? "scale(0.98)" : "scale(1)",
                transition: "all 0.2s ease",
              }}
            >
              Try Demo Account
            </button>
          </div>
        </div>

        <aside className="pm-hero-panel" aria-label="Watchlist and performance">
          <div className="pm-iphone-side-image">
            <img
              src="public/assets/20ae4cc7d95ed194279d337796d951679b146d4a copy.png"
              alt="iPhone side profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div className="pm-iphone-mockup">
            <div className="pm-iphone-frame">
              <div className="pm-iphone-screen">
                <div className="pm-iphone-status-bar">
                  <span className="pm-status-time">9:41</span>
                  <div className="pm-status-notch">
                    <div className="pm-notch-bar"></div>
                    <div className="pm-notch-circle"></div>
                  </div>
                  <div className="pm-status-icons">
                    {/* Cellular Signal - 3 bars */}
                    <svg width="18" height="11" viewBox="0 0 1 12" fill="none">
                      <rect
                        x="0"
                        y="8"
                        width="2"
                        height="3"
                        rx="0.5"
                        fill="#fff"
                      />
                      <rect
                        x="4"
                        y="5"
                        width="2"
                        height="6"
                        rx="0.5"
                        fill="#fff"
                      />
                      <rect
                        x="8"
                        y="2"
                        width="2"
                        height="9"
                        rx="0.5"
                        fill="#fff"
                      />
                    </svg>
                    {/* Wi-Fi Icon */}
                    <svg width="28" height="12" viewBox="0 0 20 12" fill="none">
                      <path
                        d="M8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5Z"
                        fill="#fff"
                      />
                      <path
                        d="M8 3C10.76 3 13 5.24 13 8"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M8 5.5C9.38 5.5 10.5 6.62 10.5 8"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    {/* Battery Icon */}
                    <svg width="22" height="12" viewBox="0 0 24 12" fill="none">
                      <rect
                        x="1"
                        y="2"
                        width="18"
                        height="8"
                        rx="1.5"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                      />
                      <rect
                        x="20"
                        y="4.5"
                        width="1.5"
                        height="3"
                        rx="0.5"
                        fill="#fff"
                      />
                      <rect
                        x="3"
                        y="4"
                        width="14"
                        height="4"
                        rx="0.5"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pm-watchlist-app">
                  <h2 className="pm-watchlist-app-title">My Watchlist</h2>
                  <div className="pm-watchlist-items">
                    <div className="pm-watchlist-item">
                      <div className="pm-watchlist-icon">
                        <div className="pm-icon-bg pm-icon-red">
                          <img
                            src="public/assets/01dce5790c77d6de8017fb49f472956fddff5a7f.png"
                            alt="Vanguard"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                      <div className="pm-watchlist-info">
                        <div className="pm-watchlist-name">
                          Vanguard S&P 500
                        </div>
                        <div className="pm-watchlist-ticker">VUSA</div>
                      </div>
                      <div className="pm-watchlist-price-info">
                        <div className="pm-watchlist-price">$75.48</div>
                        <div className="pm-watchlist-change pm-change-positive">
                          +1.1575
                        </div>
                      </div>
                    </div>
                    <div className="pm-watchlist-item">
                      <div className="pm-watchlist-icon">
                        <div className="pm-icon-bg pm-icon-green">
                          <img
                            src="public/assets/42cd425eb406396ca0e1c7f58b782b8dd643a416.png"
                            alt="iShares"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                      <div className="pm-watchlist-info">
                        <div className="pm-watchlist-name">
                          iShares Core S&P 500
                        </div>
                        <div className="pm-watchlist-ticker">IVV</div>
                      </div>
                      <div className="pm-watchlist-price-info">
                        <div className="pm-watchlist-price">$75.48</div>
                        <div className="pm-watchlist-change pm-change-negative">
                          -0.10
                        </div>
                      </div>
                    </div>
                    <div className="pm-watchlist-item">
                      <div className="pm-watchlist-icon">
                        <div className="pm-icon-bg pm-icon-blue">
                          <img
                            src="public/assets/7cda1052d125ff9802fba51a9eb5bcf81615dced.png"
                            alt="Invesco"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                      <div className="pm-watchlist-info">
                        <div className="pm-watchlist-name">
                          Invesco QQQ Trust
                        </div>
                        <div className="pm-watchlist-ticker">QQQ</div>
                      </div>
                      <div className="pm-watchlist-price-info">
                        <div className="pm-watchlist-price">$75.48</div>
                        <div className="pm-watchlist-change pm-change-positive">
                          +0.01
                        </div>
                      </div>
                    </div>
                    <div className="pm-watchlist-item">
                      <div className="pm-watchlist-icon">
                        <div className="pm-icon-bg pm-icon-yellow">
                          <img
                            src="public/assets/0de5d36b7abcafa71e1153a848f30094607e7cbf.png"
                            alt="21Shares"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                      <div className="pm-watchlist-info">
                        <div className="pm-watchlist-name">
                          21Shares Bitcoin Core
                        </div>
                        <div className="pm-watchlist-ticker">VUSA</div>
                      </div>
                      <div className="pm-watchlist-price-info">
                        <div className="pm-watchlist-price">$75.48</div>
                        <div className="pm-watchlist-change pm-change-negative">
                          -0.12
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
