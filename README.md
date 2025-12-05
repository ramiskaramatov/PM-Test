# Premier Markets Home Page (Landing Page)

A production-ready React + TypeScript + Tailwind CSS implementation of the Premier Markets landing page, built according to the Figma design specifications.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, CTABanner)
│   ├── sections/        # Page sections (Hero, Access Markets, etc.)
│   ├── ui/              # Reusable UI primitives (Buttons, Cards, Pills)
│   └── TradingLanding/  # Market-specific components
├── pages/               # Page components
├── assets/              # Image assets
├── styles/              # Global styles (home.css)
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## 🏗️ Architecture Overview

### Component Organisation

The project follows a clean, scalable architecture:

- **Layout Components** (`components/layout/`): Site-wide structural components

  - `Header.tsx` - Navigation and utility bar
  - `Footer.tsx` - Footer with links and disclaimers
  - `CTABanner.tsx` - Call-to-action banner component

- **Section Components** (`components/sections/`): Full-page sections

  - `HeroSection.tsx` - Hero banner with watchlist
  - `TickerSection.tsx` - Market ticker strip
  - `AccessMarketsSection.tsx` - Market access showcase
  - `TradingLandingSection.tsx` - Main trading section wrapper
  - `EmpowerTradingSection.tsx` - Feature grid section
  - `SeamlessWithdrawalsSection.tsx` - Withdrawals feature section
  - `DailyUpdatesSection.tsx` - News and resources section
  - `TestimonialsSection.tsx` - Customer testimonials grid
  - `HeroJoinTraders.tsx` - Trust section
  - `HeroBanner.tsx` - CTA banner section

- **UI Primitives** (`components/ui/`): Reusable UI components

  - `FeaturePill.tsx` - Feature highlight pill
  - `MarketCard.tsx` - Market category card
  - `TabPill.tsx` - Tab navigation pill
  - `CategoryPill.tsx` - Category filter pill
  - `AssetCard.tsx` - Asset display card
  - `TimeframeButton.tsx` - Chart timeframe button

- **Trading Components** (`components/TradingLanding/`): Market-specific components
  - `MarketsSection.tsx` - Main markets display (3-column layout)
  - `AssetList.tsx` - Asset list container
  - `ChartCard.tsx` - Trading chart display
  - `TradingPanel.tsx` - Buy/sell trading panel
  - `TimeframeColumn.tsx` - Timeframe selector column
  - `CategoryPillsRow.tsx` - Category filter row

### Design System

- **Primary Color**: `#ED1D25` (Premier Markets Red)
- **Typography**:
  - Headlines: Gilroy (Bold, 700)
  - Body: Urbanist (Regular, 400)
- **Spacing**: Consistent Tailwind spacing scale
- **Layout**: Max-width containers with responsive breakpoints

## 📋 Section Order (As Per Figma Plan)

1. **Header** - Navigation and utility bar
2. **Hero Section** - Main hero with watchlist
3. **Ticker Section** - Market ticker strip
4. **Access Markets Section** - "Access 17,000+ markets"
5. **Trading Landing Section** - Markets display with chart
   - Hero Join Traders (Trust section)
   - Hero Banner (CTA)
   - Markets Section (3-column layout)
6. **Empower Trading Section** - Feature grid
7. **Seamless Withdrawals Section** - Withdrawals features
8. **Daily Updates Section** - News and resources
9. **Testimonials Section** - Customer testimonials
10. **CTA Banner** - Final call-to-action
11. **Footer** - Site footer

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Custom CSS** (`home.css`) for complex layouts and animations
- **Inline styles** preserved where they match exact Figma specifications
- All visual styling (colours, spacing, gradients) preserved from original implementation

## 🔧 Key Features

- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Clean separation of concerns
- ✅ Reusable UI primitives
- ✅ Accessibility considerations (aria-labels, semantic HTML)
- ✅ Production-ready code structure

## 📝 Assumptions Made

1. **Three Steps CTA Section**: Not implemented as it doesn't exist in the current visual implementation. The Figma plan notes this as missing, but since it's not visible in the current UI, it was not created.

2. **Asset Images**: All image paths preserved as-is. Some images reference `public/assets/` while others use `/assets/`. This is intentional to match the current working setup.

3. **Interactive Features**:

   - Category pills and tabs have state management, but navigation is a placeholder
   - Chart is static (SVG-based) - real-time data integration would be a future enhancement
   - Testimonials are static - carousel functionality can be added if needed

4. **Console Logs**: Removed all debug console.log statements for production readiness.

## 🚧 Improvements with More Time

1. **Performance**:

   - Image optimisation and lazy loading
   - Code splitting for sections
   - Memoisation of expensive components

2. **Functionality**:

   - Real-time market data integration
   - Interactive chart with data updates
   - Testimonials carousel/slider
   - Form validation for registration/login
   - Smooth scroll navigation

3. **Testing**:

   - Unit tests for components
   - Integration tests for sections
   - E2E tests for critical user flows

4. **Accessibility**:

   - Keyboard navigation improvements
   - Screen reader optimisations
   - Focus management

5. **Developer Experience**:
   - Storybook for component documentation
   - Design tokens file for consistent styling
   - ESLint and Prettier configuration

## ⚠️ Important Notes

- **Tight Deadline**: This refactoring was completed under a tight deadline (Wed morning → Fri 23:59)
- **Visual Fidelity**: All visual styling, colours, spacing, and layouts are preserved exactly as they were
- **No Breaking Changes**: The refactor maintains 100% visual compatibility while improving code organisation

## 📦 Dependencies

- React 18.2.0
- TypeScript 5.4.0
- Vite 5.0.0
- Tailwind CSS 3.4.18
- PostCSS & Autoprefixer

## 🎯 Build Status

✅ **Build Successful** - The project builds without errors and is ready for deployment.

---

Built for Obermind (Shortlisted Candidate Task)
