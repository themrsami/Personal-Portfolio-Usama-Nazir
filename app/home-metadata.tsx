import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Usama Nazir - Full Stack Developer & UI/UX Designer Portfolio',
    description: 'Explore my portfolio showcasing expertise in full-stack development, React, Next.js, and UI/UX design. View my projects, services, and get in touch for collaboration.',
    alternates: {
      canonical: 'https://usamalabs.vercel.app'
    },
  }
}
