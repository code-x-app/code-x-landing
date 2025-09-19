# Code-X Landing Page 🕷️

An intergalactic cyber-spider themed landing page for Code-X, showcasing Securi-X and other Web3 security tools.

## 🚀 Live Demo

The landing page will be deployed at: `https://code-x.app`

## 🎨 Design Theme

- **Visual Identity**: Cyber-spider emblem with deep-space vibes
- **Color Palette**: Dark blues/blacks with neon cyan & magenta
- **Typography**: Orbitron (headers) + Inter (body)
- **Tone**: Futuristic, playful, inviting — mix of Tron and Marvel SHIELD

## 📋 Features

### ✅ Completed Sections

1. **Hero Section** - Spider emblem, tagline "Defend the Digital Frontier", CTAs
2. **About Code-X** - Mission narrative and company story
3. **Cyber-Spider Force Creed** - Team manifesto and values
4. **Arsenal** - Product showcase (Securi-X MVP, Future Labs, Developer SDK)
5. **Join & Tinker** - Early-access form and community links
6. **Meet the Crew** - Team member cards with callsigns and bios
7. **Signals & Updates** - Blog posts and release notes
8. **Footer** - Contact info, socials, links

### 🎯 Key Components

- **Navigation** - Sticky nav that appears on scroll
- **CyberSpider** - Animated SVG spider emblem
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion powered interactions
- **Cyber Aesthetics** - Glowing effects, gradients, and sci-fi styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom cyber theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Orbitron + Inter)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd code-x-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (if using static export)
4. Deploy!

### Vercel Deployment

1. Connect your repository to Vercel
2. Vercel will auto-detect Next.js configuration
3. Deploy!

### Custom Domain Setup

1. Point `code-x.app` to your deployment platform
2. Configure DNS records
3. Enable HTTPS

## 🎨 Brand Assets

### Colors

```css
--deep-space: #0a0a0f
--void-black: #000000
--neon-cyan: #00ffff
--neon-magenta: #ff00ff
--electric-blue: #0080ff
--cyber-purple: #8000ff
--matrix-green: #00ff80
--warning-amber: #ffaa00
```

### Typography

- **Headers**: Orbitron (futuristic, bold)
- **Body**: Inter (clean, readable)
- **Cyber Effects**: Glow, gradients, animations

## 📧 Contact & Links

- **Email**: support@code-x.app
- **Securi-X Demo**: https://peucetia.netlify.app
- **GitHub**: [Add GitHub link]
- **Twitter**: [Add Twitter link]

## 🕷️ Cyber-Spider Force Creed

> "We weave security into the fabric of exploration."
> 
> We are curious builders, bold defenders, and creative tinkerers.
> We believe a safer digital frontier is born from openness, shared learning, and playful innovation.

## 📝 Content Updates

To update content:

1. **Hero Section**: Edit `src/components/HeroSection.tsx`
2. **Team Members**: Update `crew` array in `src/components/CrewSection.tsx`
3. **Blog Posts**: Modify `posts` array in `src/components/BlogSection.tsx`
4. **Arsenal Tools**: Update `tools` array in `src/components/ArsenalSection.tsx`

## 🔧 Development Notes

- All animations use Framer Motion for smooth performance
- Responsive design tested on mobile, tablet, and desktop
- SEO optimized with proper meta tags
- Accessibility features included
- Performance optimized for fast loading

## 🎯 Future Enhancements

- [ ] Add blog CMS integration
- [ ] Implement contact form backend
- [ ] Add more interactive animations
- [ ] Create team member detail pages
- [ ] Add analytics integration
- [ ] Implement dark/light theme toggle

---

**Built with ❤️ by the Code-X Cyber-Spider Force** 🕷️✨