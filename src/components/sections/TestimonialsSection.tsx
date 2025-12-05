import React from "react";

export type IconType = "refresh" | "mail";

export interface Testimonial {
  /**
   * The testimonial text content
   */
  text: string;
  /**
   * Author's initials (e.g., "AK", "ML")
   */
  authorInitials: string;
  /**
   * Author's full name
   */
  authorName: string;
  /**
   * Type of icon to display (refresh/trade icon or mail icon)
   */
  iconType: IconType;
  /**
   * Background color for the avatar circle (hex color)
   */
  avatarBgColor: string;
}

export interface TestimonialsSectionProps {
  /**
   * Array of testimonial objects
   */
  testimonials?: Testimonial[];
  /**
   * Main title text
   * @default "What Premier Traders are saying about us"
   */
  title?: string;
  /**
   * Subtitle/description text
   * @default "Join a growing community of professionals who rely on our platform to trade smarter every day."
   */
  subtitle?: string;
  /**
   * Custom className for the section container
   */
  className?: string;
}

const DefaultTestimonials: Testimonial[] = [
  {
    text: "I’m new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
    authorInitials: "AK",
    authorName: "Adam Keller",
    iconType: "refresh",
    avatarBgColor: "#4A5568", // Dark gray
  },
  {
    text: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 😊",
    authorInitials: "ML",
    authorName: "Marco Lazzari",
    iconType: "mail",
    avatarBgColor: "#744210", // Dark brown
  },
  {
    text: "Premier works well for me. KYC was fast and support people (Thx milos!!) 🤗 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    authorInitials: "LV",
    authorName: "Lucas Vermeer",
    iconType: "refresh",
    avatarBgColor: "#2D3748", // Dark gray-blue
  },
  {
    text: "I think Premier’s trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it’s fine. Thanks guys",
    authorInitials: "PI",
    authorName: "Petar Ilic",
    iconType: "mail",
    avatarBgColor: "#553C9A", // Dark purple
  },
  {
    text: "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    authorInitials: "SK",
    authorName: "Shivani Kaur",
    iconType: "mail",
    avatarBgColor: "#2C5282", // Dark blue
  },
  {
    text: "Good service ☺️ Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it’s submitted and when it’s done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
    authorInitials: "TA",
    authorName: "TradeAce92",
    iconType: "refresh",
    avatarBgColor: "#1A202C", // Very dark gray
  },
  {
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it’s always in my bank by end of day. Very happy.",
    authorInitials: "DL",
    authorName: "David Lorens",
    iconType: "mail",
    avatarBgColor: "#4A5568", // Dark gray
  },
  {
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
    authorInitials: "MR",
    authorName: "Mark \"Clips\" Renard",
    iconType: "mail",
    avatarBgColor: "#744210", // Dark brown
  },
  {
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    authorInitials: "MD",
    authorName: "Mateusz Durek",
    iconType: "mail",
    avatarBgColor: "#2D3748", // Dark gray-blue
  },
];

const RefreshIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3V8H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const IconComponent =
    testimonial.iconType === "refresh" ? RefreshIcon : MailIcon;

  return (
    <article className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
      <p
        className="text-base font-normal text-gray-800 leading-6 tracking-normal mb-8 flex-grow"
        style={{ fontFamily: "Urbanist, sans-serif" }}
      >
        {testimonial.text}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ backgroundColor: testimonial.avatarBgColor }}
            aria-label={`${testimonial.authorName} avatar`}
          >
            {testimonial.authorInitials}
          </div>
          <span className="text-lg font-bold text-black">
            {testimonial.authorName}
          </span>
        </div>
        <div className="flex-shrink-0" style={{ color: "#ed1d25" }}>
          <IconComponent className="w-6 h-6" />
        </div>
      </div>
    </article>
  );
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = DefaultTestimonials,
  title = "What Premier Traders are saying about us",
  subtitle = "Join a growing community of professionals who rely on our platform to trade smarter every day.",
  className = "",
}) => {
  return (
    <section
      className={`py-20 bg-white ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="pm-container">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-5xl md:text-6xl font-bold text-black mb-6"
          >
            What <span style={{ color: "#ed1d25" }}>Premier</span> Traders are
            saying about us
          </h2>
          <p className="text-lg font-normal text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
