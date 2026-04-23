import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://visibilityboost.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'VisibilityBoost — Local SEO & Digital Marketing for Small Businesses',
  description: 'We put your local business on the first page of Google. Local SEO, social media management, and a free website when you sign annually. Simple. Proven. Affordable.',
  keywords: 'local SEO, Google Business Profile, social media management, small business marketing, digital marketing agency',
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
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How fast will I see results?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most clients see measurable movement in their Google profile views and rankings within 30–60 days. Review improvements typically happen in 45–90 days. Full SEO results compound over 3–6 months — that\'s just how Google works, and anyone who promises overnight results is lying to you.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do I have to sign a long contract?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Month-to-month plans have no contract — cancel with 30 days notice. Annual plans are 12-month commitments (which is what unlocks the free website), but you save significantly and we\'re confident you\'ll love the results.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What exactly is included in the free website?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A professionally designed, mobile-first, 5-page website: Home, About, Services, Testimonials/Reviews, and Contact. Fully SEO-optimized from day one. You own it completely — files, domain access, everything.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Will I need to do a lot of work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Almost none. We\'ll need a 30-minute kickoff call at the start, your logo, and access to your Google and social media accounts. After that, we do everything.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do I own my accounts if I cancel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Absolutely, 100%. Every account we manage belongs to you. We never hold anything hostage. If you cancel, we transfer everything to you within 5 business days of final payment.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can you guarantee Google rankings?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No — and we\'d be lying if we did. Nobody controls Google\'s algorithm. What we can guarantee is consistent, professional execution of proven local SEO practices and honest monthly reporting.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What industries do you work with?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We work with any local B2B service business: plumbers, HVAC, electricians, lawyers, accountants, chiropractors, dentists, cleaners, landscapers, contractors, real estate agents, and more.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How is VisibilityBoost different from other agencies?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Three things: (1) Plain English — no tech jargon. (2) You own everything we create from day one. (3) We\'re priced for local businesses — most agencies charge $1,500–$5,000/month for what we do at $297–$997.',
          },
        },
      ],
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
