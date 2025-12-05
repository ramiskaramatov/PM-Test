import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="pm-header">
      {/* Utility Bar */}
      <div className="pm-utility-bar">
        <div className="pm-container pm-utility-bar-inner">
          <div className="pm-utility-left">
            <a href="#" className="pm-utility-link pm-utility-link--active">
              Personal
            </a>
            <span className="pm-divider-vertical"></span>
            <a href="#" className="pm-utility-link">
              Institutional
            </a>
          </div>
          <div className="pm-utility-right">
            <a href="#" className="pm-utility-link">
              WebTrader
            </a>
            <span className="pm-divider-vertical"></span>
            <a href="#" className="pm-utility-link">
              Support
            </a>
            <span className="pm-divider-vertical"></span>
            <a href="#" className="pm-utility-link">
              Open Demo
            </a>
            <div className="pm-language-selector">
              <svg
                className="pm-flag-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5" height="20" fill="#C8102E" />
                <rect x="5" y="0" width="15" height="6.67" fill="#007A3D" />
                <rect x="5" y="6.67" width="15" height="6.67" fill="#FFFFFF" />
                <rect x="5" y="13.33" width="15" height="6.67" fill="#000000" />
              </svg>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="pm-main-nav">
        <div className="pm-container pm-main-nav-inner">
          <div className="pm-logo">
            <div className="pm-logo-icon">
              <svg
                width="50"
                height="28"
                viewBox="0 0 50 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* First bar - leftmost (near P), largest bar slanted right */}
                <rect
                  x="6"
                  y="-6"
                  width="10"
                  height="30"
                  rx="2.5"
                  ry="1.5"
                  fill="#ed1d25"
                  transform="rotate(-10 22 14)"
                />
                {/* Second bar - middle, medium size bar slanted right */}
                <rect
                  x="20"
                  y="-1"
                  width="10"
                  height="20"
                  rx="2.5"
                  ry="1.5"
                  fill="#ed1d25"
                  transform="rotate(-10 18 14)"
                />
                {/* Third bar - rightmost, smallest bar slanted right */}
                <rect
                  x="34"
                  y="-1"
                  width="10"
                  height="18"
                  rx="2.5"
                  ry="1.5"
                  fill="#ed1d25"
                  transform="rotate(-10 10 15)"
                />
              </svg>
            </div>
            <div className="pm-logo-text">
              <div className="pm-logo-text-line1">premier</div>
              <div className="pm-logo-text-line2">markets</div>
            </div>
          </div>

          <nav className="pm-nav">
            <a href="#trading" className="pm-nav-item">
              Trading
              <svg
                className="pm-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#discover" className="pm-nav-item">
              Discover
              <svg
                className="pm-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#promotions" className="pm-nav-item">
              Promotions
              <svg
                className="pm-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#company" className="pm-nav-item">
              Company
              <svg
                className="pm-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#partners" className="pm-nav-item pm-nav-item--highlight">
              Partner with us
              <svg
                className="pm-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal shaft */}
                <line
                  x1="2"
                  y1="8"
                  x2="12"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Arrowhead - two diagonal lines forming triangle */}
                <path
                  d="M10 5L14 8L10 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </nav>

          <div className="pm-header-actions">
            <button className="pm-btn pm-btn--register">Register</button>
            <div className="pm-user-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="headGradient"
                    x1="7"
                    y1="2.5"
                    x2="17"
                    y2="12.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFF5F5" />
                    <stop offset="100%" stopColor="#E8B0B0" />
                  </linearGradient>
                </defs>
                {/* Head - circular with soft pink gradient (light pink top-left to muted pink bottom-right) */}
                <circle cx="12" cy="7.5" r="5" fill="url(#headGradient)" />
                {/* Body/shoulders - rounded rectangle (pill shape) with solid vibrant red, wider than head */}
                <rect
                  x="4.5"
                  y="13"
                  width="15"
                  height="8"
                  rx="4"
                  fill="#ed1d25"
                />
              </svg>
              <div className="pm-user-icon-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
