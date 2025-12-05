import React from "react";

export interface CTABannerProps {
  /**
   * Variant style for the banner
   * @default "default"
   */
  variant?: "default" | "compact" | "reverse";

  /**
   * Title/question text
   * @default "Ready to trade smarter?"
   */
  title?: string;

  /**
   * Descriptive text
   * @default "Get instant access to global markets with reliable tools and 24/5 support."
   */
  description?: string;

  /**
   * Array of step objects for the three-step process
   * @default [{ number: 1, text: "Register" }, { number: 2, text: "Fund" }, { number: 3, text: "Start Trading" }]
   */
  steps?: Array<{ number: number; text: string }>;

  /**
   * Button text
   * @default "Get Started"
   */
  buttonText?: string;

  /**
   * Button link/action
   * @default "#"
   */
  buttonLink?: string;

  /**
   * Callback when button is clicked
   */
  onButtonClick?: () => void;

  /**
   * Whether to show the steps section
   * @default true
   */
  showSteps?: boolean;

  /**
   * Whether to show the illustration
   * @default true
   */
  showIllustration?: boolean;

  /**
   * Custom image source for illustration
   */
  illustrationSrc?: string;

  /**
   * Custom className for the banner container
   */
  className?: string;
}

const DefaultSteps = [
  { number: 1, text: "Register" },
  { number: 2, text: "Fund" },
  { number: 3, text: "Start Trading" },
];

const StepItem: React.FC<{ number: number; text: string }> = ({
  number,
  text,
}) => (
  <div className="pm-cta-step-item">
    <div className="pm-cta-step-number">
      <span className="pm-cta-step-number-inner">{number}</span>
    </div>
    <span className="pm-cta-step-text">{text}</span>
  </div>
);

export const CTABanner: React.FC<CTABannerProps> = ({
  variant = "default",
  title = "Ready to trade smarter?",
  description = "Get instant access to global markets with reliable tools and 24/5 support.",
  steps = DefaultSteps,
  buttonText = "Get Started",
  buttonLink = "#",
  onButtonClick,
  showSteps = true,
  showIllustration = true,
  illustrationSrc,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section className={`pm-cta-banner pm-cta-banner--${variant} ${className}`}>
      <div className="pm-container pm-cta-banner-container">
        <div className="pm-cta-banner-grid">
          {/* Left Content Area */}
          <div className="pm-cta-banner-content">
            {showSteps && (
              <div className="pm-cta-steps">
                {steps.map((step, index) => (
                  <StepItem key={index} number={step.number} text={step.text} />
                ))}
              </div>
            )}

            <h2 className="pm-cta-banner-title">{title}</h2>

            <p className="pm-cta-banner-description">{description}</p>

            <a
              href={buttonLink}
              className="pm-cta-banner-button"
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
            >
              {buttonText}
            </a>
          </div>

          {/* Right Illustration Area */}
          {showIllustration && (
            <div className="pm-cta-banner-illustration">
              <img
                src={illustrationSrc || "/assets/HandWithPhone.png"}
                alt="Trading illustration"
                className="pm-cta-illustration-image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
