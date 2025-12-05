import React from "react";

/**
 * News article card data structure
 */
export interface NewsArticle {
  /**
   * Image source URL for the news article
   */
  imageSrc: string;
  /**
   * Publication date (e.g., "03 October 2025")
   */
  date: string;
  /**
   * Article headline
   */
  headline: string;
  /**
   * Article snippet/description (truncated with ellipsis)
   */
  snippet: string;
  /**
   * Link URL for "Read more"
   */
  readMoreLink?: string;
  /**
   * Callback when "Read more" is clicked
   */
  onReadMore?: () => void;
}

/**
 * Video player card data structure
 */
export interface VideoCard {
  /**
   * Thumbnail image source URL
   */
  thumbnailSrc?: string;
  /**
   * Video source URL (if applicable)
   */
  videoSrc?: string;
  /**
   * Callback when play button is clicked
   */
  onPlay?: () => void;
}

/**
 * Market banner card data structure
 */
export interface MarketBanner {
  /**
   * Banner title
   */
  title: string;
  /**
   * Banner description
   */
  description: string;
  /**
   * Array of keyword/tag links
   */
  keywords?: string[];
  /**
   * Phone/smartphone image source URL
   */
  phoneImageSrc: string;
  /**
   * Callback when keywords are clicked
   */
  onKeywordClick?: (keyword: string) => void;
}

/**
 * Props for DailyUpdatesSection component
 */
export interface DailyUpdatesSectionProps {
  /**
   * Section title (top-left)
   * @default "Daily Updates"
   */
  title?: string;
  /**
   * Main heading text
   * @default "Everything you need to trade the markets"
   */
  heading?: string;
  /**
   * "View all" link text
   * @default "View all"
   */
  viewAllText?: string;
  /**
   * "View all" link URL
   */
  viewAllLink?: string;
  /**
   * Callback when "View all" is clicked
   */
  onViewAll?: () => void;
  /**
   * News article data
   */
  newsArticle?: NewsArticle;
  /**
   * Video card data
   */
  videoCard?: VideoCard;
  /**
   * Market banner data
   */
  marketBanner?: MarketBanner;
  /**
   * Custom className for the section container
   */
  className?: string;
}

/**
 * Default news article data
 */
const DefaultNewsArticle: NewsArticle = {
  imageSrc: "/assets/1DailyUpdates.png",
  date: "03 October 2025",
  headline: "Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears",
  snippet:
    "Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine's readiness to support a proposal for...",
  readMoreLink: "#",
};

/**
 * Default video card data
 */
const DefaultVideoCard: VideoCard = {
  thumbnailSrc: "/assets/2DailyUpdates.png",
};

/**
 * Default market banner data
 */
const DefaultMarketBanner: MarketBanner = {
  title: "Premier Market - Market Cap Weighted PR (BKP)",
  description:
    "Stay ahead of the latest tech trends with our algorithmically selected portfolio of the 15 top tech stocks each month.",
  keywords: ["Google", "Trending", "investing.com"],
  phoneImageSrc: "/assets/2DailyUpdates.png",
};

/**
 * Play button icon component
 */
const PlayButtonIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 5V19L19 12L8 5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Right arrow icon component
 */
const ArrowRightIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * News Article Card Component
 */
const NewsArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  const handleReadMore = () => {
    if (article.onReadMore) {
      article.onReadMore();
    } else if (article.readMoreLink) {
      window.location.href = article.readMoreLink;
    }
  };

  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={article.imageSrc}
          alt={article.headline}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <time className="text-sm text-gray-500 mb-2" dateTime={article.date}>
          {article.date}
        </time>
        <h3 className="text-xl md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {article.headline}
        </h3>
        <p className="text-base md:text-sm text-gray-700 mb-4 line-clamp-3 flex-grow">
          {article.snippet}
        </p>
        <button
          onClick={handleReadMore}
          className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200 self-start font-medium"
          aria-label={`Read more about ${article.headline}`}
        >
          Read more
        </button>
      </div>
    </article>
  );
};

/**
 * Video Player Card Component
 */
const VideoPlayerCard: React.FC<{ videoCard: VideoCard }> = ({ videoCard }) => {
  const handlePlay = () => {
    if (videoCard.onPlay) {
      videoCard.onPlay();
    } else if (videoCard.videoSrc) {
      // Handle video playback logic here
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative">
      <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
        {videoCard.thumbnailSrc ? (
          <img
            src={videoCard.thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-lg mb-2">Video Content</p>
              <p className="text-sm">Trading platform preview</p>
            </div>
          </div>
        )}
        {/* Play Button Overlay */}
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-200 group"
          aria-label="Play video"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-200">
            <PlayButtonIcon className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
          </div>
        </button>
      </div>
    </div>
  );
};

/**
 * Market Banner Card Component
 */
const MarketBannerCard: React.FC<{ banner: MarketBanner }> = ({ banner }) => {
  const handleKeywordClick = (keyword: string) => {
    if (banner.onKeywordClick) {
      banner.onKeywordClick(keyword);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div className="flex-1">
          <h3 className="text-2xl md:text-xl font-semibold text-white mb-3">
            {banner.title}
          </h3>
          <p className="text-base md:text-sm text-gray-200 mb-4">
            {banner.description}
          </p>
          {banner.keywords && banner.keywords.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {banner.keywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => handleKeywordClick(keyword)}
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  aria-label={`View ${keyword}`}
                >
                  {keyword}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Daily Updates Section Component
 *
 * A section displaying daily updates with news articles, video content, and market information.
 * Features a responsive layout that adapts to different screen sizes.
 */
export const DailyUpdatesSection: React.FC<DailyUpdatesSectionProps> = ({
  title = "Daily Updates",
  heading = "Everything you need to trade the markets",
  viewAllText = "View all",
  viewAllLink,
  onViewAll,
  newsArticle = DefaultNewsArticle,
  videoCard = DefaultVideoCard,
  marketBanner = DefaultMarketBanner,
  className = "",
}) => {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else if (viewAllLink) {
      window.location.href = viewAllLink;
    }
  };

  return (
    <section
      className={`py-20 bg-white ${className}`}
      aria-labelledby="daily-updates-heading"
    >
      <div className="pm-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16 gap-4">
          <div className="flex-1">
            <h2
              className="text-lg md:text-base font-bold text-red-600 mb-2"
              style={{ color: "#ed1d25" }}
            >
              {title}
            </h2>
            <h1
              id="daily-updates-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              {heading}
            </h1>
          </div>
          <button
            onClick={handleViewAll}
            className="flex items-center gap-2 text-base text-red-600 hover:text-red-700 transition-colors duration-200 font-medium self-start md:self-auto"
            style={{ color: "#ed1d25" }}
            aria-label="View all daily updates"
          >
            {viewAllText}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Top Row: News Article and Video Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <NewsArticleCard article={newsArticle} />
          <VideoPlayerCard videoCard={videoCard} />
        </div>

        {/* Bottom Row: Market Banner Card */}
        <MarketBannerCard banner={marketBanner} />
      </div>
    </section>
  );
};
