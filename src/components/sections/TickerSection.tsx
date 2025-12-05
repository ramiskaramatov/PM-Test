import React from "react";

export const TickerSection: React.FC = () => {
  return (
    <section className="pm-ticker-section">
      <div className="pm-container">
        <div className="pm-ticker-cards">
          {/* Card 1: USD/EUR */}
          <div className="pm-ticker-card">
            <div className="pm-ticker-card-left">
              <div className="pm-ticker-card-flags">
                <img
                  src="/assets/b611b2fe7a68c76c522ad7168c6c14e27ed7a529.png"
                  alt="US Flag"
                  className="pm-flag-us"
                />
                <img
                  src="/assets/bb259f179cc170864b93d5c27b31f1010296e039.png"
                  alt="EU Flag"
                  className="pm-flag-eu"
                />
              </div>
              <div className="pm-ticker-card-pair">USD/EUR</div>
            </div>
            <div className="pm-ticker-card-middle">
              <div className="pm-ticker-card-chart">
                <svg width="50" height="24" viewBox="0 0 50 24" fill="none">
                  <defs>
                    <linearGradient
                      id="chartGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#00a651" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#00a651"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,18 6,15 12,12 18,9 24,6 30,8 36,7 42,5 48,3"
                    stroke="url(#chartGradient1)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="pm-ticker-card-right">
              <div className="pm-ticker-card-value">0.00014</div>
              <div className="pm-ticker-card-change pm-change-negative">
                -234.45
              </div>
            </div>
          </div>

          {/* Card 2: XAUUSD */}
          <div className="pm-ticker-card">
            <div className="pm-ticker-card-left">
              <div className="pm-ticker-card-icon">
                <img
                  src="/assets/7d19c2318a6aae756f2555c2f74b1fcfb6a502af.png"
                  alt="Gold"
                  className="pm-xau-icon"
                />
              </div>
              <div className="pm-ticker-card-pair">XAUUSD</div>
            </div>
            <div className="pm-ticker-card-middle">
              <div className="pm-ticker-card-chart">
                <svg width="50" height="24" viewBox="0 0 50 24" fill="none">
                  <polyline
                    points="0,3 6,5 12,7 18,9 24,11 30,13 36,15 42,17 48,19"
                    stroke="#ed1d25"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="pm-ticker-card-right">
              <div className="pm-ticker-card-value">0.00014</div>
              <div className="pm-ticker-card-change pm-change-negative">
                -234.45
              </div>
            </div>
          </div>

          {/* Card 3: USD/EUR (duplicate) */}
          <div className="pm-ticker-card">
            <div className="pm-ticker-card-left">
              <div className="pm-ticker-card-flags">
                <img
                  src="/assets/b611b2fe7a68c76c522ad7168c6c14e27ed7a529.png"
                  alt="US Flag"
                  className="pm-flag-us"
                />
                <img
                  src="/assets/bb259f179cc170864b93d5c27b31f1010296e039.png"
                  alt="EU Flag"
                  className="pm-flag-eu"
                />
              </div>
              <div className="pm-ticker-card-pair">USD/EUR</div>
            </div>
            <div className="pm-ticker-card-middle">
              <div className="pm-ticker-card-chart">
                <svg width="50" height="24" viewBox="0 0 50 24" fill="none">
                  <defs>
                    <linearGradient
                      id="chartGradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#00a651" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#00a651"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,18 6,15 12,12 18,9 24,6 30,8 36,7 42,5 48,3"
                    stroke="url(#chartGradient3)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="pm-ticker-card-right">
              <div className="pm-ticker-card-value">0.00014</div>
              <div className="pm-ticker-card-change pm-change-negative">
                -234.45
              </div>
            </div>
          </div>

          {/* Card 4: XAUUSD (duplicate) */}
          <div className="pm-ticker-card">
            <div className="pm-ticker-card-left">
              <div className="pm-ticker-card-icon">
                <img
                  src="/assets/7d19c2318a6aae756f2555c2f74b1fcfb6a502af.png"
                  alt="Gold"
                  className="pm-xau-icon"
                />
              </div>
              <div className="pm-ticker-card-pair">XAUUSD</div>
            </div>
            <div className="pm-ticker-card-middle">
              <div className="pm-ticker-card-chart">
                <svg width="50" height="24" viewBox="0 0 50 24" fill="none">
                  <polyline
                    points="0,3 6,5 12,7 18,9 24,11 30,13 36,15 42,17 48,19"
                    stroke="#ed1d25"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div className="pm-ticker-card-right">
              <div className="pm-ticker-card-value">0.00014</div>
              <div className="pm-ticker-card-change pm-change-negative">
                -234.45
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
