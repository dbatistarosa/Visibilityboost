import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VisibilityBoost — Local SEO & Digital Marketing for Small Businesses',
  description: 'We put your local business on the first page of Google. Local SEO, social media management, and a free website when you sign annually. Simple. Proven. Affordable.',
  keywords: 'local SEO, Google Business Profile, social media management, small business marketing, digital marketing agency',
  openGraph: {
    title: 'VisibilityBoost — We Make Local Businesses Impossible to Ignore',
    description: 'Local SEO + Social Media + Free Website for local businesses. Starting at $297/month.',
    type: 'website',
    url: 'https://visibilityboost.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisibilityBoost — Local SEO & Digital Marketing',
    description: 'Starting at $297/month. Free website with annual plan. No contracts.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
