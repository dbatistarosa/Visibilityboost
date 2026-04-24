import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Local SEO & Google Business Profile Management | VisibilityBoost',
  description:
    'We get your local business to the top of Google. Full Google Business Profile optimization, citation building, review management, and local SEO — done for you every month.',
  alternates: { canonical: '/services/local-seo' },
}

const INCLUDED = [
  {
    icon: '📍',
    title: 'Google Business Profile Optimization',
    desc: 'We complete your profile 100% — correct categories, keyword-rich description, photo uploads, service areas, Q&A setup, and attributes. An optimized GBP can double your search visibility overnight.',
  },
  {
    icon: '🔑',
    title: 'Local Keyword Research',
    desc: 'We find every phrase your customers type when looking for your service in your city. Then we optimize your website pages, headings, and content around the terms that actually drive calls.',
  },
  {
    icon: '📋',
    title: 'Citation Building (50+ Directories)',
    desc: "We list your business on Yelp, Apple Maps, Bing Places, Yellow Pages, and 47+ other directories with perfectly consistent NAP (name, address, phone). Consistency is a core Google trust signal.",
  },
  {
    icon: '⭐',
    title: 'Review Management & Response',
    desc: 'We set up a review request system so happy customers leave 5-star reviews automatically. We also respond to every review — positive and negative — in your voice, within 24 hours.',
  },
  {
    icon: '🔍',
    title: 'Competitor Gap Analysis',
    desc: 'We look at exactly what your top-ranking competitors are doing that you are not — and build a strategy to close the gap and leapfrog them.',
  },
  {
    icon: '📊',
    title: 'Monthly Plain-English Reports',
    desc: 'Every month you get a report showing: how many people found you on Google, how many called, how your rankings moved, and what we did. No jargon. Just numbers that matter.',
  },
]

const TIMELINE = [
  {
    period: 'Month 1',
    title: 'Foundation',
    items: [
      'Complete Google Business Profile audit & full optimization',
      'Keyword research & priority target list',
      'On-page SEO updates to homepage & service pages',
      'Citation cleanup — fix inconsistent listings',
      'Review request system setup',
      'Competitor benchmark report',
    ],
  },
  {
    period: 'Months 2–3',
    title: 'Momentum',
    items: [
      'Citation building (20–50 new directories)',
      'Google profile view & call numbers start climbing',
      'Review count begins growing (most clients: +5–20 new reviews)',
      'Ranking movement on 3–5 target keywords',
      'First monthly report delivered',
    ],
  },
  {
    period: 'Months 4–6+',
    title: 'Compounding Results',
    items: [
      'Page-1 rankings on primary keywords in your city',
      'Consistent 30–60%+ increase in profile views vs. baseline',
      'Inbound calls from Google increase measurably',
      'Authority builds — results accelerate, not plateau',
      'Monthly optimization continues: new keywords, new content',
    ],
  },
]

const FAQS: [string, string][] = [
  [
    'Do you need access to my Google account?',
    "Yes — we'll need manager access to your Google Business Profile and ideally to your website's CMS. We walk you through exactly how to grant access in our onboarding call. You remain the owner of everything.",
  ],
  [
    'What if I don\'t have a Google Business Profile yet?',
    "We create and verify it for you from scratch. The verification process takes 1–2 weeks via Google's postcard method — we handle all of it.",
  ],
  [
    'How is local SEO different from regular SEO?',
    "Regular SEO targets national or global rankings. Local SEO focuses specifically on showing up in the Google Maps 3-pack and location-based search results — like 'plumber near me' or 'best dentist in [city].' That's where your customers are searching.",
  ],
  [
    'Will you write content for my website?',
    'The Growth and Authority plans include regular content updates and blog posts. The Starter plan includes on-page optimization of existing content. If you need full page rewrites, we can include that in a custom scope.',
  ],
  [
    'What happens if my ranking drops?',
    "Google algorithm updates happen — no one is immune. When rankings fluctuate, we investigate immediately, identify the cause, and adjust our strategy. You'll always know what's happening with a clear explanation in your monthly report.",
  ],
]

export default function LocalSEOPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center relative overflow-hidden pt-20 pb-16"
        style={{ background: '#03080f' }}
      >
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,164,74,0.08) 0%, transparent 65%)',
            top: -250,
            right: -200,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[12px] font-medium mb-6 transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              ← All Services
            </a>
            <div className="inline-flex items-center gap-2.5 mb-6 ml-4">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a44a' }} />
              <span
                className="text-[11px] font-semibold tracking-[3px] uppercase"
                style={{ color: '#c8a44a' }}
              >
                Local SEO
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(40px,5vw,66px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                marginBottom: 20,
              }}
            >
              Get to the top of Google.<br />
              <em style={{ color: '#c8a44a' }}>Own your local market.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 560,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              When someone in your city searches for your service, your business should be the first
              thing they see. We make that happen — and keep it that way.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/#booking"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#c8a44a', color: '#080f1e' }}
              >
                Book Free SEO Audit →
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-4 rounded-lg border transition-all duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                See Pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#080f1e', padding: '48px 0' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { num: '97%', label: 'of customers search Google before calling' },
              { num: '+312%', label: 'avg increase in Google profile views' },
              { num: '47 days', label: 'to first measurable ranking movement' },
              { num: '50+', label: 'directories we build citations on' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="py-8 px-6 text-center border-r last:border-r-0"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 40,
                      fontWeight: 700,
                      color: '#c8a44a',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[12px] font-light leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3"
              style={{ color: '#c8a44a' }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Every local SEO lever,<br />
              <em style={{ color: '#c8a44a' }}>pulled every month.</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {INCLUDED.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{ background: 'rgba(200,164,74,0.08)' }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#717d96' }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <p
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3"
              style={{ color: '#c8a44a' }}
            >
              What to Expect
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              A realistic timeline
            </h2>
            <p
              style={{ fontSize: 16, color: '#717d96', maxWidth: 500, margin: '12px auto 0', lineHeight: 1.7 }}
            >
              SEO is not instant — and anyone who says otherwise is lying. Here's what actually
              happens.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TIMELINE.map((phase, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl border h-full"
                  style={{ background: '#fff', borderColor: '#e9eaee' }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase mb-4"
                    style={{ background: 'rgba(200,164,74,0.1)', color: '#c8a44a' }}
                  >
                    {phase.period}
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {phase.title}
                  </h3>
                  <ul className="list-none space-y-2">
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed"
                        style={{ color: '#717d96' }}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5"
                          style={{ background: 'rgba(26,138,80,0.1)', color: '#1a8a50' }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(30px,4vw,44px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Local SEO questions,{' '}
              <em style={{ color: '#c8a44a' }}>answered honestly.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: '#03080f' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(36px,4vw,54px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-1.5px',
              }}
            >
              Ready to rank on page one?
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, lineHeight: 1.7 }}
            >
              Book a free 15-minute audit. We'll show you live on the call exactly where you stand,
              what your competitors are doing, and what we'd fix first.
            </p>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 text-[14px] font-bold px-9 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#c8a44a', color: '#080f1e' }}
            >
              Book My Free Audit →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
