import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | VisibilityBoost',
  description:
    'Answers to the most common questions about local SEO, social media management, pricing, contracts, and how VisibilityBoost works.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Local SEO & Digital Marketing Questions Answered | VisibilityBoost',
    description: 'Every question we\'ve been asked about local SEO, social media management, pricing, contracts, and results — answered honestly. No spin.',
    url: 'https://www.visibilityboostweb.com/faq',
    siteName: 'VisibilityBoost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Local SEO & Digital Marketing Questions Answered | VisibilityBoost',
    description: 'Every question we\'ve been asked about local SEO, social media management, pricing, contracts, and results — answered honestly. No spin.',
  },
}

const BASE_URL = 'https://www.visibilityboostweb.com'

const CATEGORIES = [
  {
    title: 'Getting Started',
    icon: '🚀',
    faqs: [
      [
        'What happens on the free audit call?',
        "We spend 15 minutes looking at your actual Google presence live on the screen with you — your Business Profile, your current rankings, your review count vs. competitors. You'll see exactly where you stand. At the end, we give you 3 specific things to improve, whether or not you become a client.",
      ],
      [
        'How fast can you get started?',
        "We onboard new clients every Monday. Once you book your free audit and decide to move forward, you can be fully onboarded and active within 3–5 business days. We just need your Google and social media account access and a 30-minute kickoff call.",
      ],
      [
        'What information do you need from me?',
        "Very little. We need: (1) manager access to your Google Business Profile, (2) admin access to your Facebook/Instagram business accounts, (3) your logo (if you have one), and (4) 30 minutes on a kickoff call to understand your business, customers, and goals. After that, we handle everything.",
      ],
      [
        'Do I need a website to work with you?',
        "No. We can work around no website, a bad website, or an existing website. If you're on an annual plan, we build you a new 5-page site. If you're on monthly, we optimize what you have (or give you specific recommendations to improve it).",
      ],
    ] as [string, string][],
  },
  {
    title: 'Results & Timeline',
    icon: '📈',
    faqs: [
      [
        'How fast will I see results?',
        "Most clients see measurable movement in their Google profile views and rankings within 30–60 days. Review improvements typically happen in 45–90 days. Full SEO results compound over 3–6 months — that's just how Google works, and anyone who promises overnight results is lying to you.",
      ],
      [
        'What results can I realistically expect?',
        "Based on our clients: 200–400% increase in Google Business Profile views within 90 days, 40–200% increase in inbound calls from Google within 6 months, star rating improvements from 3.x to 4.5+ within 60–90 days for clients who engage their review system. Results vary by market competitiveness, starting point, and industry.",
      ],
      [
        'What if I don\'t see results?',
        "In 6+ years, no client who stayed with us for 90 days has seen zero improvement. Google rewards consistency. That said, if after 90 days you're not seeing movement, we do a full strategy review, identify why, and adjust — no extra charge. You'll always have a frank conversation, not excuses.",
      ],
      [
        'Can you guarantee page-one Google rankings?',
        "No — and we'd be lying if we did. Nobody controls Google's algorithm. What we can guarantee is consistent, professional execution of proven local SEO practices, transparent monthly reporting, and a team that treats your results as seriously as you do.",
      ],
    ] as [string, string][],
  },
  {
    title: 'Services & Deliverables',
    icon: '🔧',
    faqs: [
      [
        'What exactly do you do every month?',
        "Every month: publish your social media content (8–24 posts depending on plan), monitor and respond to reviews, update your Google Business Profile with new posts and optimizations, track your rankings and report on movement, and proactively identify any new opportunities or issues. Growth and Authority plans also include strategy calls.",
      ],
      [
        'What industries do you work with?',
        "We work with any local B2B service business: plumbers, HVAC, electricians, lawyers, accountants, chiropractors, dentists, cleaners, landscapers, contractors, real estate agents, and more. If your customers find you via local Google searches — we're a fit.",
      ],
      [
        'What exactly is included in the free website?',
        "A professionally designed, mobile-first, 5-page website: Home, About, Services, Testimonials/Reviews, and Contact. Fully SEO-optimized from day one. Click-to-call button, contact form, map embed. You own it completely — files, domain access, everything — from the moment we hand it over.",
      ],
      [
        'Will I need to do a lot of work?',
        "Almost none. We'll need a 30-minute kickoff call at the start, your logo, and access to your Google and social media accounts. We may occasionally ask for a few photos of your work (phone quality is fine — we edit them). After that, we do everything.",
      ],
      [
        'How do I know what\'s being done each month?',
        "Every month you receive a plain-English report: Google profile view counts, how many calls came from Google, ranking movement on your target keywords, social media reach and engagement numbers, and a summary of what we did and what we're doing next. No tech jargon. Just numbers and context.",
      ],
    ] as [string, string][],
  },
  {
    title: 'Billing & Contracts',
    icon: '💳',
    faqs: [
      [
        'Do I have to sign a long contract?',
        "Month-to-month plans have no contract — cancel with 30 days notice. Annual plans are 12-month commitments (which is what unlocks the free website), but you save significantly and we're confident you'll love the results.",
      ],
      [
        'Do I own my accounts if I cancel?',
        "Absolutely, 100%. Every account we manage belongs to you. We never hold anything hostage. If you cancel, we transfer everything to you within 5 business days of final payment — Google access, social media, website files, all of it.",
      ],
      [
        'Are there any hidden fees?',
        "Never. Your monthly plan price is your total cost. The only potential add-ons are things you explicitly ask for outside the plan scope (extra pages, ad spend management, etc.), and we quote those before starting.",
      ],
      [
        'How is VisibilityBoost different from other agencies?',
        "Three things: (1) Plain English — no tech jargon, ever. (2) You own everything we create from day one. (3) We're priced for local businesses — most agencies charge $1,500–$5,000/month for what we do at $297–$997. We built this business specifically for local service companies that are being priced out of the market.",
      ],
    ] as [string, string][],
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': CATEGORIES.flatMap(cat =>
    cat.faqs.map(([q, a]) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="min-h-[50vh] flex items-center relative overflow-hidden pt-20 pb-16"
        style={{ background: '#03080f' }}
      >
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a44a' }} />
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: '#c8a44a' }}>
                FAQ
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(42px,5vw,68px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                marginBottom: 20,
              }}
            >
              Questions?<br />
              <em style={{ color: '#c8a44a' }}>We've got answers.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 500,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Every question we've ever been asked, answered honestly. No spin, no marketing
              language.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Categories */}
      {CATEGORIES.map((cat, ci) => (
        <section
          key={ci}
          className="py-20"
          style={{ background: ci % 2 === 0 ? '#fff' : '#f8f8f6' }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <Reveal className="flex items-center gap-3 mb-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(200,164,74,0.1)' }}
              >
                {cat.icon}
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(26px,3.5vw,36px)',
                  fontWeight: 600,
                  color: '#080f1e',
                  letterSpacing: '-0.5px',
                }}
              >
                {cat.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <FaqAccordion faqs={cat.faqs} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Still have questions */}
      <section className="py-24 text-center" style={{ background: '#080f1e' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(34px,4vw,52px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-1.5px',
              }}
            >
              Still have a question?
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, lineHeight: 1.7 }}
            >
              Book a free 15-minute call. We'll answer everything live and show you your actual
              Google presence while we're on the phone.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/#booking"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-9 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#c8a44a', color: '#080f1e' }}
              >
                Book Free Audit →
              </a>
              <a
                href="mailto:hello@visibilityboost.com"
                className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-4 rounded-lg border transition-all duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
