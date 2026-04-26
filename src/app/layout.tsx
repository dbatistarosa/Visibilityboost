import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://visibilityboost.com'),
  title: {
    default: 'VisibilityBoost — Local SEO & Google Business Profile Experts',
    template: '%s | VisibilityBoost',
  },
  description: 'VisibilityBoost helps local businesses dominate Google search. Expert Local SEO, Google Business Profile optimization, social media management & review building. Results in 30–60 days. No contracts.',
  keywords: [
    'local SEO services',
    'Google Business Profile optimization',
    'local SEO for small business',
    'increase Google rankings',
    'social media management local business',
    'local business visibility',
    'citation building',
    'review management',
    'Google Maps ranking',
    'local search optimization',
  ],
  authors: [{ name: 'VisibilityBoost', url: 'https://visibilityboost.com' }],
  creator: 'VisibilityBoost',
  publisher: 'VisibilityBoost',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://visibilityboost.com',
    siteName: 'VisibilityBoost',
    title: 'VisibilityBoost — Local SEO & Google Business Profile Experts',
    description: 'Dominate local Google search. Expert Local SEO, Google Business Profile optimization, social media management & review building. Results in 30–60 days.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VisibilityBoost — Local SEO Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisibilityBoost — Local SEO & Google Business Profile Experts',
    description: 'Dominate local Google search. Expert Local SEO, Google Business Profile optimization & social media management. Results in 30–60 days.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://visibilityboost.com',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
}

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://visibilityboost.com/#organization',
        name: 'VisibilityBoost',
        url: 'https://visibilityboost.com',
        logo: { '@type': 'ImageObject', url: 'https://visibilityboost.com/favicon.svg' },
        contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'hello@visibilityboost.com' },
        sameAs: ['https://www.facebook.com/visibilityboost', 'https://www.instagram.com/visibilityboost'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://visibilityboost.com/#website',
        url: 'https://visibilityboost.com',
        name: 'VisibilityBoost',
        description: 'Local SEO & Google Business Profile Experts',
        publisher: { '@id': 'https://visibilityboost.com/#organization' },
        potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://visibilityboost.com/?s={search_term_string}' }, 'query-input': 'required name=search_term_string' },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://visibilityboost.com/#localbusiness',
        name: 'VisibilityBoost',
        description: 'Expert local SEO, Google Business Profile optimization, social media management and review building for local businesses.',
        url: 'https://visibilityboost.com',
        email: 'hello@visibilityboost.com',
        priceRange: '$297 - $997/month',
        serviceType: ['Local SEO', 'Google Business Profile Optimization', 'Social Media Management', 'Review Management', 'Citation Building'],
        areaServed: { '@type': 'Country', name: 'United States' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Local SEO & Digital Marketing Plans',
          itemListElement: [
            { '@type': 'Offer', name: 'Starter Plan', price: '297', priceCurrency: 'USD', description: 'Google Business Profile setup, local keyword research, 8 social posts/month' },
            { '@type': 'Offer', name: 'Growth Plan', price: '597', priceCurrency: 'USD', description: 'Full local SEO management, 16 social posts/month, competitor analysis' },
            { '@type': 'Offer', name: 'Authority Plan', price: '997', priceCurrency: 'USD', description: 'Full SEO + blog posts + 24 social posts + link building' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How fast will I see results from local SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients see measurable movement in their Google profile views and rankings within 30–60 days. Full SEO results compound over 3–6 months.' } },
          { '@type': 'Question', name: 'Do I have to sign a long-term contract?', acceptedAnswer: { '@type': 'Answer', text: 'Month-to-month plans have no contract — cancel with 30 days notice. Annual plans are 12-month commitments.' } },
          { '@type': 'Question', name: 'What is included in local SEO services?', acceptedAnswer: { '@type': 'Answer', text: 'Google Business Profile optimization, local keyword research, citation building across 50+ directories, review management, competitor analysis, and monthly ranking reports.' } },
          { '@type': 'Question', name: 'Can you guarantee Google rankings?', acceptedAnswer: { '@type': 'Answer', text: 'No one can guarantee specific Google rankings. We guarantee consistent professional execution of proven local SEO practices and honest monthly reporting.' } },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
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
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
