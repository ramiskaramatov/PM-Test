import React from "react";

/**
 * Feature item data structure
 */
export interface FeatureItem {
  /**
   * Icon component or identifier
   */
  icon: "speed" | "security" | "access" | React.ReactNode;
  /**
   * Feature title
   */
  title: string;
  /**
   * Feature description
   */
  description: string;
}

/**
 * Notification card data structure
 */
export interface NotificationCard {
  /**
   * Profile picture URL or initials
   */
  profilePic?: string;
  /**
   * Market/platform name
   */
  marketName: string;
  /**
   * User name
   */
  userName: string;
  /**
   * Status message
   */
  status: string;
  /**
   * Progress percentage (0-100)
   */
  progress: number;
}

/**
 * Props for SeamlessWithdrawalsSection component
 */
export interface SeamlessWithdrawalsSectionProps {
  /**
   * Subtitle text (displayed above main title)
   * @default "Access your funds anytime, anywhere."
   */
  subtitle?: string;
  /**
   * Main title text
   * @default "Seamless Withdrawals"
   */
  title?: string;
  /**
   * Array of feature items
   */
  features?: FeatureItem[];
  /**
   * Main illustration image source (hand holding phone)
   */
  illustrationImageSrc?: string;
  /**
   * Mastercard logo image source
   */
  mastercardLogoSrc?: string;
  /**
   * Notification card data
   */
  notificationCard?: NotificationCard;
  /**
   * Custom className for the section container
   */
  className?: string;
}

/**
 * Default feature items
 */
const DefaultFeatures: FeatureItem[] = [
  {
    icon: "speed",
    title: "Ultra-Fast Processing",
    description:
      "Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.",
  },
  {
    icon: "security",
    title: "Secure & Transparent",
    description:
      "Tier 1 banking and custody partners keep your funds protected at every stage.",
  },
  {
    icon: "access",
    title: "Effortless Access",
    description:
      "Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.",
  },
];

/**
 * Default notification card data
 */
const DefaultNotificationCard: NotificationCard = {
  profilePic: undefined,
  marketName: "Premier Markets",
  userName: "John Smith",
  status: "100% withdrawal completed",
  progress: 100,
};

/**
 * Speed/Fast-forward icon component
 */
const SpeedIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13 6L21 12L13 18V6Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6L11 12L3 18V6Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Security/Shield with checkmark icon component
 */
const SecurityIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * Star/Access icon component
 */
const AccessIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Feature Item Component
 */
const FeatureItemComponent: React.FC<{ feature: FeatureItem }> = ({
  feature,
}) => {
  const renderIcon = () => {
    if (React.isValidElement(feature.icon)) {
      return feature.icon;
    }

    const iconClass = "w-6 h-6 text-white";
    switch (feature.icon) {
      case "speed":
        return <SpeedIcon className={iconClass} />;
      case "security":
        return <SecurityIcon className={iconClass} />;
      case "access":
        return <AccessIcon className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start gap-4 md:gap-6">
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-red-600 flex items-center justify-center">
        {renderIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-bold text-black mb-2">
          {feature.title}
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

/**
 * Notification Card Component
 */
const NotificationCardComponent: React.FC<{
  notification: NotificationCard;
}> = ({ notification }) => {
  return (
    <div className="absolute bottom-8 left-4 md:bottom-12 md:left-8 bg-white rounded-xl shadow-lg p-3 md:p-4 max-w-[200px] md:max-w-[240px] z-10">
      <div className="flex items-center gap-3 mb-2">
        {notification.profilePic ? (
          <img
            src={notification.profilePic}
            alt={notification.userName}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        ) : (
          <img
            src="/assets/Withdrawals_2.png"
            alt={notification.userName}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-600 font-normal truncate">
            {notification.marketName}
          </p>
          <p className="text-sm md:text-base font-bold text-black truncate">
            {notification.userName}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-600 mb-2">{notification.status}</p>
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 rounded-full transition-all duration-300"
          style={{ width: `${notification.progress}%` }}
          role="progressbar"
          aria-valuenow={notification.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

/**
 * Mastercard Logo Component
 */
const MastercardLogo: React.FC<{ src?: string }> = ({ src }) => {
  if (src) {
    return (
      <img
        src={src}
        alt="Mastercard"
        className="w-16 h-10 md:w-20 md:h-12 object-contain"
      />
    );
  }

  // Fallback SVG Mastercard logo
  return (
    <div className="flex items-center gap-1">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600"></div>
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 -ml-4"></div>
    </div>
  );
};

/**
 * Seamless Withdrawals Section Component
 *
 * A section highlighting withdrawal features with a dynamic illustration.
 * Features a responsive layout that adapts to different screen sizes.
 */
export const SeamlessWithdrawalsSection: React.FC<
  SeamlessWithdrawalsSectionProps
> = ({
  subtitle = "Access your funds anytime, anywhere.",
  title = "Seamless Withdrawals",
  features = DefaultFeatures,
  illustrationImageSrc = "/assets/Withdrawals_1.png",
  mastercardLogoSrc,
  notificationCard = DefaultNotificationCard,
  className = "",
}) => {
  return (
    <section
      className={`py-20 bg-white ${className}`}
      aria-labelledby="withdrawals-heading"
    >
      <div className="pm-container">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm md:text-base font-bold uppercase tracking-wider mb-2 md:mb-3"
            style={{ color: "#ed1d25" }}
          >
            {subtitle}
          </p>
          <h1
            id="withdrawals-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black"
          >
            {title}
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-red-50 rounded-3xl md:rounded-4xl shadow-xl p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Features List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureItemComponent key={index} feature={feature} />
              ))}
            </div>

            {/* Right Column - Illustration */}
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <div className="relative w-full max-w-md md:max-w-lg h-full">
                {/* Main Illustration Image (Hand with Phone) */}
                <div className="relative z-10 flex items-center justify-center">
                  <img
                    src={illustrationImageSrc}
                    alt="Seamless withdrawals illustration showing hand holding smartphone"
                    className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px]"
                  />
                </div>

                {/* Mastercard Logo - Positioned top right */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                  <MastercardLogo src={mastercardLogoSrc} />
                </div>

                {/* Notification Card - Positioned bottom left */}
                <NotificationCardComponent notification={notificationCard} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
