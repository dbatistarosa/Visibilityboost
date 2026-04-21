import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hi-Tech Plumbing & Air | West Palm Beach Plumber, AC & Electrical (561) 708-4989',
  description: 'West Palm Beach\'s trusted plumbing, air conditioning & electrical company for 25+ years. Female-owned. 24/7 emergency service. 55,000+ customers served. Call (561) 708-4989.',
  keywords: 'plumber west palm beach, AC repair west palm beach, plumbing palm beach county, emergency plumber, female owned plumbing company, HVAC west palm beach',
  openGraph: {
    title: 'Hi-Tech Plumbing & Air | West Palm Beach\'s Most Trusted Plumber & AC Company',
    description: '25+ years serving Palm Beach County. Female-owned. 4.87★ Google rating. 24/7 emergency service. Call (561) 708-4989.',
    type: 'website',
    url: 'https://hi-techplumbingandair.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hi-Tech Plumbing & Air | (561) 708-4989',
    description: '24/7 emergency plumbing & AC in West Palm Beach. Female-owned. 55K+ customers.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
