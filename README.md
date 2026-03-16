# FaceSynth Landing Page

Modern and interactive landing page for **FaceSynth – RGPD Synthetic Face Pack**.

## 📋 Description

A modern website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **framer-motion**. Presents the FaceSynth product (100% RGPD-compliant synthetic face dataset) to computer vision, AI, and R&D teams.

## 🎯 Features

- ✨ **Hero Section** with interactive synthetic face visualization grid
- 📊 **Structured Sections**: Problem/Solution, Benefits, Package Content, Variations, Use Cases, Pricing, Compliance, FAQ
- 🎨 **Modern Design**: Blue/indigo color palette, mobile-first responsive design
- 🎬 **Smooth Animations**: Fade-in and slide-up on scroll with framer-motion
- 📝 **Lead Capture Form**: Modal with email validation
- ♿ **Accessibility**: Semantic HTML, good visual hierarchy
- 📱 **Responsive**: Optimized for mobile, tablet, desktop

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: framer-motion
- **Utilities**: clsx

## 📦 Installation

```bash
# Clone the repository
git clone <repo-url>
cd faceSynth-website

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

The site will be available at `http://localhost:3000`.

## 📁 Project Structure

```
faceSynth-website/
├── app/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx           # Reusable button component
│   │   │   ├── Card.tsx             # Card component
│   │   │   └── SectionWrapper.tsx   # Wrapper with animations
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── PackContentSection.tsx
│   │   ├── VariationsSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ComplianceSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── LeadCaptureForm.tsx      # Modal form
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts    # Custom scroll animation hook
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── constants/
│   │   └── site.ts                  # Site configuration and content
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── page.tsx                     # Homepage
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🎨 Design & Colors

- **Main Background**: White/very light gray (`#f9fafb`)
- **Primary Accents**: Blue (`#2563eb`)
- **Secondary Accents**: Blue-violet (`#6366f1`)
- **Text**: Dark gray (`#1f2937`)
- **Secondary Text**: Medium gray (`#6b7280`)

## 🔧 Configuration

### Tailwind CSS
Customize colors and variants in `tailwind.config.ts`.

### Framer Motion
Animations are integrated in section components via `<motion.*>`. Modify `initial`, `animate`, `transition` to customize.

### Content
All content is centralized in `app/constants/site.ts` for easy updates. The landing page is currently in **French**.

To translate:

1. Create an i18n structure (e.g., with `next-intl`)
2. Extract strings into JSON files
3. Integrate the translation library

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

Or use the Vercel Dashboard:
1. Go to https://vercel.com/new
2. Connect your GitHub repository
3. Select this project
4. Click "Deploy"

### Docker
```bash
docker build -t facesynth-landing .
docker run -p 3000:3000 facesynth-landing
```

### Other Platforms
Compatible with Netlify, AWS Amplify, etc. Follow their Next.js deployment guides.

## 🔐 Environment Variables

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://api.facesynth.io
NEXT_PUBLIC_CONTACT_EMAIL=contact@facesynth.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

See `.env.example` for all available variables.

## 📊 Performance

- Lighthouse score target: >90 (Performance, Accessibility, Best Practices, SEO)
- Images optimized with `next/image`
- Automatic code splitting with Next.js
- Minimized CSS-in-JS

## 🎯 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint and TypeScript checks |

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Quick setup guide (5 minutes)
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development and customization guide
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed architecture overview
- **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** - Pre-launch checklist
- **[INDEX.md](./INDEX.md)** - Navigation guide for all documentation

## 🤝 Contributing

To contribute:
1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

## 📄 License

MIT License – See the `LICENSE` file.

## 📧 Support

For questions or feedback:
- Email: contact@facesynth.io
- LinkedIn: [FaceSynth](https://linkedin.com)
- Twitter: [@FaceSynth](https://twitter.com)
- GitHub Issues: [Report a bug](https://github.com/Ismail-Bzk/Synthetic_Face_Generator/issues)

---

**Made with ❤️ for the AI/CV community.**

**Status**: ✅ Production Ready | **Version**: 1.0.0 | **Last Updated**: March 16, 2026
