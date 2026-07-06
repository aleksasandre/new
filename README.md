# Game Character Production Calculator

A production-ready SaaS web application for estimating production time and cost for 3D game characters based on pipeline factors. This tool is designed for game studios to accurately plan resources and budgets.

## Features

### 🎯 Hero Section
- Professional SaaS-style landing section
- Clear value proposition and call-to-action
- Responsive design with gradient backgrounds
- Modern typography and spacing

### 📊 Production Calculator Dashboard
- **Two-column layout** (responsive on mobile)
  - **Left Column**: Input form with 10 parameter dropdowns
  - **Right Column**: Dynamic results panel with real-time calculations

### 🎮 10 Production Parameters
1. **Asset Type**: Character, Creature, NPC, Boss
2. **Category**: Human, Creature, Robot, Alien
3. **Hard Surface Complexity**: None, Low, Medium, High
4. **Reference Quality**: Concept Only, Rough Sketch, Detailed Concept, Photo Reference
5. **Pipeline**: Basic, Standard, Advanced, Complex
6. **Game Scope**: Mobile, Console, PC, AAA
7. **Art Style**: Realistic, Stylised, Cartoon, Minimal
8. **Start State**: From Scratch, Partial Model, Reference Base, Existing Model
9. **Concept Readiness**: Idea, Rough Concept, Detailed Concept, Production Ready
10. **Schedule Pressure**: No, Moderate, High, Critical

### 💰 Dynamic Results Display
- **Estimated Production Time** (in days)
- **Estimated Cost Range** (€)
- **Production Breakdown**:
  - Concept phase
  - Modeling phase
  - Texturing phase
  - Export phase
- Visual progress bars for each phase
- Real-time updates with calculator changes

### 📚 Comprehensive Information Section
Nine detailed cards covering:
- Project Summary
- Business Problem
- Scope Estimation
- Estimation Assumptions
- Calculation Logic
- Production Factors Considered
- User Flow
- Testing & Success Criteria
- Risks & Mitigation

## Design System

### Color Palette
- **Background**: Dark navy (#0a0e27)
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Various gradients
- **Text**: Light (#e8ecff)

### Key Features
- **Dark Theme**: Professional, modern aesthetic
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Effects**: Subtle text and hover effects
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Professional Typography**: Clean sans-serif fonts

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4.2
- **UI Components**: Custom-built with shadcn design patterns
- **State Management**: React hooks (useState, useMemo)
- **Language**: TypeScript

## Calculation Algorithm

The calculator uses a **multiplicative factor approach**:

```
Base Time = 20 days
Adjusted Time = Base Time × (Factor1 × Factor2 × ... × Factor10)

Cost = Adjusted Time × Daily Rate (€400-€600 based on complexity)
```

Each parameter multiplies the estimation:
- Simple conditions: 0.3x - 0.8x (reduces time)
- Standard conditions: 1.0x (baseline)
- Complex conditions: 1.2x - 2.0x (increases time)

## Running Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

## File Structure

```
components/
├── calculator.tsx              # Main calculator wrapper
├── hero.tsx                    # Hero section
├── calculator-dashboard.tsx    # Main dashboard with 2-column layout
├── input-form.tsx             # Input parameter form
├── results-panel.tsx          # Dynamic results display
└── information-sections.tsx   # Information cards grid

app/
├── page.tsx                   # Home page
├── layout.tsx                 # Root layout with metadata
└── globals.css                # Global styles and design tokens
```

## Component Breakdown

### Calculator (`calculator.tsx`)
Main wrapper component that orchestrates all sections and manages results state.

### Hero (`hero.tsx`)
Professional hero section with:
- Title and subtitle
- Call-to-action button
- Background gradient effects
- Responsive spacing

### Calculator Dashboard (`calculator-dashboard.tsx`)
Two-column layout containing:
- Input form (left)
- Results panel (right)
- Real-time calculation via useMemo
- Responsive grid layout

### Input Form (`input-form.tsx`)
Form with 10 dropdown selectors:
- Automatic label formatting
- Clean styling with hover effects
- onChange handler for state management

### Results Panel (`results-panel.tsx`)
Dynamic display showing:
- Initial state with calculate button
- Time and cost estimates
- Production breakdown with progress bars
- Recalculate functionality

### Information Sections (`information-sections.tsx`)
Grid of 9 information cards:
- Glassmorphic design
- Icons for visual hierarchy
- Responsive 3-column grid on desktop
- Stacked on mobile

## Estimation Logic Details

### Time Multipliers
Each parameter adjusts production time:
- Asset type affects complexity
- Hard surface elements add ~20-100% time
- Reference quality impacts concept phase
- Pipeline complexity scales entire project
- Game scope sets baseline fidelity
- Art style affects texturing time
- Start state can reduce time by 50-70%
- Schedule pressure adds buffer time

### Cost Calculation
- Base rate: €500/day
- Low complexity: €400/day
- High complexity: €600/day
- Cost range: ±€1,000 for contingency planning

### Production Breakdown
Percentage allocations adjusted based on:
- Hard surface complexity increases modeling
- Complex pipelines increase export time
- Default: Concept 15%, Modeling 40%, Texturing 35%, Export 10%

## Responsive Design

- **Desktop (1440px+)**: Full 2-column layout, 3-column info grid
- **Tablet (768px-1439px)**: Stacked columns, 2-column info grid
- **Mobile (<768px)**: Single column, responsive touch-friendly inputs

## Performance Optimizations

- Uses `useMemo` for calculation caching
- No external API calls (all client-side)
- Minimal re-renders via proper dependency arrays
- CSS-in-JS with Tailwind for optimized bundle
- Zero additional library overhead

## Deployment

Ready for deployment to:
- **Vercel** (recommended - optimized for Next.js)
- **Netlify** (via Next.js export)
- **Traditional Node.js servers**

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Features Implemented

✅ Hero section with professional styling
✅ 2-column responsive calculator dashboard
✅ 10 parameter input form with dropdowns
✅ Fully functional estimation engine
✅ Dynamic results panel with real-time updates
✅ Production breakdown with visualizations
✅ 9 comprehensive information sections
✅ Professional dark theme with glassmorphism
✅ Mobile-responsive layout
✅ Production-grade code organization
✅ TypeScript for type safety
✅ Accessibility-first design

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This is a professional SaaS tool - modify and deploy as needed for your studio.

## Future Enhancements

Potential additions:
- User authentication and saved estimates
- CSV/PDF export functionality
- Comparison tool for multiple estimates
- Historical data tracking
- Team collaboration features
- Real-time rate adjustments
- Custom calculation rules per studio

---

**Status**: Production-Ready ✅

This application is suitable for immediate deployment and use in professional game development studios.
