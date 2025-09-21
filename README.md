# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features beautiful animations, dark/light mode toggle, and a clean, professional design.

## ✨ Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Component Library**: Shadcn UI components for consistent, accessible design
- **Animations**: Smooth animations and transitions using Framer Motion
- **Theme Support**: Dark/light mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Meta tags, semantic HTML, and structured data
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🏗️ Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles and CSS variables
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── navbar.tsx     # Navigation with mobile menu
│   │   │   └── footer.tsx     # Footer with social links
│   │   ├── providers/         # Context providers
│   │   │   └── theme-provider.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── sheet.tsx
│   │       ├── navigation-menu.tsx
│   │       └── theme-toggle.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── components.json          # Shadcn UI configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/sections/hero-section.tsx`):
   - Name, tagline, and description
   - Profile image or initials
   - Social media links

2. **About Section** (`src/components/sections/about-section.tsx`):
   - Personal bio and experience
   - Skills and specializations

3. **Projects Section** (`src/components/sections/projects-section.tsx`):
   - Your project portfolio
   - Technologies used
   - Live demo and GitHub links

4. **Skills Section** (`src/components/sections/skills-section.tsx`):
   - Technical skills and proficiency levels
   - Tools and technologies

5. **Contact Section** (`src/components/sections/contact-section.tsx`):
   - Contact information
   - Email, phone, location

6. **Layout** (`src/app/layout.tsx`):
   - Site metadata (title, description, keywords)

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Typography**: Update font imports in `src/app/layout.tsx`
- **Components**: Customize Shadcn UI components in `src/components/ui/`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to the main page (`src/app/page.tsx`)
3. Update navigation links in the navbar component

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🌗 Theme Support

- Automatic system preference detection
- Manual toggle between light and dark modes
- Persistent theme selection across sessions
- Smooth transitions between themes

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Build command: `npm run build`
Output directory: `.next`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

**Note**: Remember to replace placeholder content with your actual information before deploying!
