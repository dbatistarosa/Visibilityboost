import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://www.visibilityboostweb.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'VisibilityBoost — Local SEO & Digital Marketing for Small Businesses',
  description: 'We put your local business on the first page of Google. Local SEO, social media management, and a free website when you sign annually. Simple. Proven. Affordable.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VisibilityBoost — We Make Local Businesses Impossible to Ignore',
    description: 'Local SEO + Social Media + Free Website for local businesses. Starting at $297/month.',
    type: 'website',
    url: BASE_URL,
    siteName: 'VisibilityBoost',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisibilityBoost — Local SEO & Digital Marketing',
    description: 'Starting at $297/month. Free website with annual plan. No contracts.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      'url': BASE_URL,
      'name': 'VisibilityBoost',
      'description': 'Local SEO & Digital Marketing for Small Businesses',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#business`,
      'name': 'VisibilityBoost',
      'url': BASE_URL,
      'email': 'hello@visibilityboost.com',
      'description': 'Local SEO, Google Business Profile management, social media management, and website design for local businesses across the United States.',
      'areaServed': {
        '@type': 'Country',
        'name': 'United States',
      },
      'priceRange': '$297–$997/month',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Local SEO & Digital Marketing Packages',
        'itemListElement': [
          {
            '@type': 'Offer',
            'name': 'Starter Package',
            'description': 'Google Business Profile optimization, local keyword research, 8 social media posts/month, review request system, monthly plain-English report.',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '297',
              'priceCurrency': 'USD',
              'unitCode': 'MON',
            },
          },
          {
            '@type': 'Offer',
            'name': 'Growth Package',
            'description': 'Full local SEO management, 16 social posts/month, 2 Reels/month, competitor analysis, citation building (20+ directories), monthly strategy call. Includes free 5-page website with annual plan.',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '597',
              'priceCurrency': 'USD',
              'unitCode': 'MON',
            },
          },
          {
            '@type': 'Offer',
            'name': 'Authority Package',
            'description': '2 SEO blog posts/month, 24 social posts/month, 4 Reels/videos/month, link building strategy, email newsletter setup, priority support. Includes free website and SEO audit with annual plan.',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '997',
              'priceCurrency': 'USD',
              'unitCode': 'MON',
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#080f1e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
