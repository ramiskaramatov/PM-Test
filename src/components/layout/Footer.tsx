import React from "react";

export interface FooterProps {
  /**
   * Variant style for the footer
   * @default "default"
   */
  variant?: "default" | "compact";

  /**
   * Whether to show the payment methods section
   * @default true
   */
  showPaymentMethods?: boolean;

  /**
   * Whether to show the secondary disclaimer section
   * @default true
   */
  showSecondaryDisclaimer?: boolean;

  /**
   * Custom className for the footer container
   */
  className?: string;
}

interface SocialIconProps {
  name: string;
  href: string;
  ariaLabel: string;
}

interface NavigationLinkProps {
  label: string;
  href: string;
}

interface NavigationColumnProps {
  title: string;
  links: NavigationLinkProps[];
}

const PremierMarketsLogo: React.FC = () => (
  <div className="pm-footer-logo">
    <div className="pm-footer-logo-icon">
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
    <div className="pm-footer-logo-text">
      <span className="pm-footer-logo-text-premier">premier</span>
      <span className="pm-footer-logo-text-markets">markets</span>
    </div>
  </div>
);

const SocialIcon: React.FC<SocialIconProps> = ({ name, href, ariaLabel }) => {
  const getIconPath = () => {
    switch (name.toLowerCase()) {
      case "facebook":
        return (
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.01 3.66 9.16 8.44 9.91v-7.01H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.01C18.34 21.16 22 17.01 22 12c0-5.52-4.48-10-10-10z" />
        );
      case "linkedin":
        return (
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        );
      case "instagram":
        return (
          <>
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              ry="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="17.5"
              y1="6.5"
              x2="17.51"
              y2="6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      case "youtube":
        return (
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        );
      case "twitter":
        return (
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        );
      default:
        return (
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        );
    }
  };

  return (
    <a
      href={href}
      className="pm-footer-social-icon"
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        {getIconPath()}
      </svg>
    </a>
  );
};

const PaymentMethodLogo: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const getPaymentIcon = () => {
    switch (name.toLowerCase()) {
      case "paypal":
        return (
          <img
            src="/assets/PayPal.png"
            alt="PayPal"
            className="pm-footer-payment-image"
          />
        );
      case "mastercard":
        return (
          <img
            src="/assets/MasterCard.png"
            alt="Mastercard"
            className="pm-footer-payment-image"
          />
        );
      case "skrill":
        return (
          <img
            src="/assets/Skrill.svg"
            alt="Skrill"
            className="pm-footer-payment-image"
          />
        );
      case "apple pay":
        return (
          <img
            src="/assets/ApplePay.svg"
            alt="Apple Pay"
            className="pm-footer-payment-image"
          />
        );
      case "visa":
        return (
          <img
            src="/assets/Visa.svg"
            alt="Visa"
            className="pm-footer-payment-image"
          />
        );
      default:
        return <span>{name}</span>;
    }
  };

  return (
    <div
      className={`pm-footer-payment-logo ${className || ""}`}
      aria-label={name}
    >
      {getPaymentIcon()}
    </div>
  );
};

const NavigationColumn: React.FC<NavigationColumnProps> = ({
  title,
  links,
}) => (
  <div className="pm-footer-nav-column">
    <h3 className="pm-footer-nav-title">{title}</h3>
    <ul className="pm-footer-nav-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="pm-footer-nav-link">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const CFD_DISCLAIMER =
  "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.";

const REGULATORY_INFO = [
  "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.",
  "Premier Markets Ltd. trading as Premier Markets is a company incorporated under company number: A000003075 in Anguilla. Our registered office is located at Anguilla. The Valley, Kismet House, Sandy Hill, PO Box P.O.Box 174 The information on this site is not directed at residents of Russia, Afghanistan, Belgium, Canada, India, United States or any country or jurisdiction where such distribution or use would be contrary to local law, sanctions or regulation.",
];

export const Footer: React.FC<FooterProps> = ({
  variant = "default",
  showPaymentMethods = true,
  showSecondaryDisclaimer = true,
  className = "",
}) => {
  const quickLinks: NavigationLinkProps[] = [
    { label: "About Us", href: "#about" },
    { label: "Our Markets", href: "#markets" },
    { label: "Platforms", href: "#platforms" },
    { label: "Pricing", href: "#pricing" },
  ];

  const supportLinks: NavigationLinkProps[] = [
    { label: "Help Center", href: "#help" },
    { label: "FAQs", href: "#faqs" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ];

  const companyLinks: NavigationLinkProps[] = [
    { label: "Careers", href: "#careers" },
    { label: "News & Updates", href: "#news" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Legal Documents", href: "#legal" },
  ];

  const socialIcons: SocialIconProps[] = [
    { name: "Facebook", href: "#facebook", ariaLabel: "Facebook" },
    { name: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" },
    { name: "Instagram", href: "#instagram", ariaLabel: "Instagram" },
    { name: "YouTube", href: "#youtube", ariaLabel: "YouTube" },
    { name: "Twitter", href: "#twitter", ariaLabel: "Twitter" },
  ];

  const paymentMethods = [
    "PayPal",
    "Mastercard",
    "Skrill",
    "Apple Pay",
    "VISA",
  ];

  return (
    <footer className={`pm-footer pm-footer--${variant} ${className}`}>
      {/* Top Red Accent Bar */}
      <div className="pm-footer-red-bar"></div>

      {/* Payment Methods Section */}
      {showPaymentMethods && (
        <div className="pm-footer-payment-section">
          <div className="pm-container pm-footer-payment-container">
            <div className="pm-footer-payment-logos">
              {paymentMethods.map((method, index) => (
                <PaymentMethodLogo key={index} name={method} />
              ))}
            </div>
          </div>
          <div className="pm-footer-divider"></div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="pm-footer-main">
        <div className="pm-container pm-footer-main-container">
          <div className="pm-footer-main-grid">
            {/* Left Column: Logo, Disclaimer, Social Icons */}
            <div className="pm-footer-left-column">
              <PremierMarketsLogo />
              <p className="pm-footer-disclaimer">{CFD_DISCLAIMER}</p>
              <div className="pm-footer-social-icons">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>

            {/* Right Columns: Navigation Links */}
            <div className="pm-footer-right-columns">
              <NavigationColumn title="Quick links" links={quickLinks} />
              <NavigationColumn title="Support" links={supportLinks} />
              <NavigationColumn title="Company" links={companyLinks} />
            </div>
          </div>
        </div>
        <div className="pm-footer-divider"></div>
      </div>

      {/* Secondary Disclaimer & Regulatory Information Section */}
      {showSecondaryDisclaimer && (
        <div className="pm-footer-secondary-section">
          <div className="pm-container pm-footer-secondary-container">
            {REGULATORY_INFO.map((paragraph, index) => (
              <p key={index} className="pm-footer-regulatory">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Copyright Section */}
      <div className="pm-footer-copyright">
        <div className="pm-container">
          <p className="pm-footer-copyright-text">
            Copyright © 2025 Premier Markets - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
