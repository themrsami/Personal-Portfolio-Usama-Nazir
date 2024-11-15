import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollProgress from './components/ScrollProgress'
import NavButtons from './components/NavButtons'
import { ThemeProvider } from './context/ThemeContext'
import LiveTime from './components/LiveTime'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://usamalabs.vercel.app'),
  title: {
    default: 'Usama Nazir | Full Stack Developer & UI/UX Designer | React, Next.js Expert',
    template: '%s | Usama Nazir - Full Stack Developer'
  },
  description: 'Expert Full Stack Developer in Pakistan specializing in React, Next.js, TypeScript & modern web development. 5+ years experience creating high-performance, user-centric applications. View my portfolio & hire me for your next project.',
  keywords: [
    'Full Stack Developer Pakistan',
    'React Developer Lahore',
    'Next.js Expert Pakistan',
    'TypeScript Developer',
    'Web Development Services',
    'UI/UX Design Portfolio',
    'Frontend Developer Pakistan',
    'Backend Developer Lahore',
    'JavaScript Expert',
    'Node.js Developer',
    'Usama Nazir Portfolio',
    'Hire Full Stack Developer',
    'Web Developer Portfolio',
    'React.js Development',
    'Modern Web Applications',
    'Professional Portfolio Site',
    'Software Engineer Pakistan',
    'Web Development Expert'
  ],
  creator: 'Usama Nazir',
  authors: [{ name: 'Usama Nazir', url: 'https://usamalabs.vercel.app' }],
  applicationName: 'Usama Nazir Portfolio',
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usamalabs.vercel.app',
    title: 'Usama Nazir | Full Stack Developer & UI/UX Designer | React Expert',
    description: 'Expert Full Stack Developer in Pakistan specializing in React, Next.js, TypeScript & modern web development. View my portfolio & hire me for your next project.',
    siteName: 'Usama Nazir Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Usama Nazir - Full Stack Developer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usama Nazir | Full Stack Developer & UI/UX Designer',
    description: 'Expert Full Stack Developer in Pakistan specializing in React, Next.js & TypeScript. View my portfolio!',
    creator: '@themrsami',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://usamalabs.vercel.app',
    languages: {
      'en-US': 'https://usamalabs.vercel.app',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1F2937" />
        <meta name="color-scheme" content="dark" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://usamalabs.vercel.app" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <NavButtons />
          <ScrollProgress />
          <LiveTime />
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Usama Nazir',
                url: 'https://usamalabs.vercel.app',
                sameAs: [
                  'https://github.com/themrsami',
                  'https://linkedin.com/in/usama-nazir',
                  'https://twitter.com/themrsami',
                  'https://instagram.com/themrsami'
                ],
                jobTitle: 'Full Stack Developer',
                knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design'],
                description: 'Expert Full Stack Developer specializing in React, Next.js, TypeScript, and modern web development.'
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}