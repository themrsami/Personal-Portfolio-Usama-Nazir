# Modern Portfolio Website

A sleek and modern portfolio website built with Next.js 15, React 19 RC, and TypeScript, featuring smooth animations, dark mode support, and comprehensive project showcases.

## 🌟 Features

### Core Features
- **Modern Tech Stack**: Next.js 15, React 19 RC, TypeScript
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark/Light Mode**: Seamless theme switching with system preference support
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI Components**: Built with Shadcn UI and Tailwind CSS
- **Dynamic Content**: Real-time content updates and live components

### Pages
- **Home**: Personal introduction and key highlights
- **Projects**: Showcase of development projects with live demos
- **Experience**: Professional timeline and work history
- **Ideas**: Innovation lab showcasing completed and upcoming projects
- **Blog**: Technical articles and development insights

### UI/UX Features
- **Live Time Display**: Real-time clock with date in the top-left corner
- **Smooth Scroll**: Custom scroll progress indicator
- **Animated Cards**: Interactive project cards with neon effects
- **Dynamic Navigation**: Responsive navigation with smooth transitions
- **Category Filtering**: Project and blog post filtering by categories

## 🛠️ Technical Stack

### Core Technologies
- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: React 19 RC
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Shadcn UI
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: pnpm
- **Build Tool**: Turbopack
- **Deployment**: Vercel
- **Version Control**: Git

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── api/               # API routes
│   ├── blog/              # Blog pages and data
│   ├── projects/          # Projects showcase
│   ├── experience/        # Professional experience
│   └── ideas/             # Innovation lab
├── public/                # Static assets
│   └── content/          # Blog post content
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/themrsami/Personal-Portfolio-Usama-Nazir.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Start production server**
   ```bash
   pnpm start
   ```

## 🎨 Key Features Implementation

### Dynamic Theme Switching
- System preference detection
- Smooth transition animations
- Persistent theme selection

### Project Showcase
- Interactive project cards
- GitHub repository integration
- Live demo links
- Technology stack display
- Category-based filtering

### Blog System
- Markdown support
- Code syntax highlighting
- Category tagging
- Reading time estimation
- Dynamic content loading

### Innovation Lab
- Status tracking for projects
- Technology stack visualization
- Impact assessment
- Progress indicators

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables
```

### Customization
- Modify `tailwind.config.js` for theme customization
- Update `app/data` for content management
- Adjust animations in component files

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Fluid typography
- Adaptive layouts

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Configure build settings
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Shadcn UI for beautiful components
- Framer Motion for smooth animations

---

Built with ❤️ using Next.js 15 and React 19 RC
