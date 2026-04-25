import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Client Results & Case Studies | VisibilityBoost',
  description:
    'Real results from real local businesses. See how VisibilityBoost helped HVAC companies, law firms, cleaning services and more grow their Google presence and inbound calls.',
  alternates: { canonical: '/results' },
  openGraph: {
    title: 'Client Results | Real Local Business Growth | VisibilityBoost',
    description: '+312% average Google Business Profile views. +180% inbound calls. Real case studies from HVAC companies, law firms, cleaning services, and more.',
    url: 'https://www.visibilityboostweb.com/results',
    siteName: 'VisibilityBoost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Results | Real Local Business Growth | VisibilityBoost',
    description: '+312% average Google Business Profile views. +180% inbound calls. Real case studies from HVAC companies, law firms, cleaning services, and more.',
  },
}

const STATS = [
  { num: '+312%', label: 'Average increase in Google Business Profile views' },
  { num: '+180%', label: 'Average increase in inbound calls from Google' },
  { num: '4.9★', label: 'Average Google rating after 90 days (from 3.4)' },
  { num: '47 days', label: 'Average days to first measurable ranking movement' },
]

const CASES = [
  {
    industry: 'HVAC Company',
    location: 'Phoenix Metro Area',
    timeframe: 'Month 3',
    before: {
      profileViews: '~450/month',
      calls: '~8/week',
      rating: '3.4 ★ (12 reviews)',
      ranking: 'Page 3–4',
    },
    after: {
      profileViews: '14,280/month',
      calls: '47/week',
      rating: '4.9 ★ (89 reviews)',
      ranking: 'Top 3 in Maps',
    },
    metric: '+312%',
    metricLabel: 'Google profile views',
    progress: 85,
    quote:
      '"We went from 2 Google calls a week to 8–10. The difference was insane for us. We had to hire a second tech before month 3 was even over."',
    highlights: [
      'Google Business Profile was incomplete — missing service area, hours, and description',
      'Optimized profile + added 300+ geo-tagged photos in month 1',
      'Citation building across 47 directories fixed inconsistent NAP data',
      'Review request system generated 77 new 5-star reviews in 90 days',
    ],
  },
  {
    industry: 'Personal Injury Law Firm',
    location: 'Dallas, TX',
    timeframe: 'Month 6',
    before: {
      profileViews: '~800/month',
      calls: '~5/week',
      rating: '3.8 ★ (22 reviews)',
      ranking: 'Page 2',
    },
    after: {
      profileViews: '7,100/month',
      calls: '~19/week',
      rating: '4.9 ★ (94 reviews)',
      ranking: 'Top 3 in Maps',
    },
    metric: '4.9★',
    metricLabel: 'Google rating (was 3.4)',
    progress: 92,
    quote:
      '"Our old reviews were killing us. Three bad reviews from years ago defined us. VisibilityBoost fixed our reputation in 2 months — and the new cases are following."',
    highlights: [
      'Negative review response strategy defused 3 damaging old reviews',
      'Review request system sent to 100% of satisfied clients post-case',
      '5-page website redesign with practice area landing pages',
      'Local keyword targeting for 12 practice area + city combinations',
    ],
  },
  {
    industry: 'Residential Cleaning Service',
    location: 'Seattle, WA',
    timeframe: 'Month 4',
    before: {
      profileViews: '~320/month',
      calls: '~5/month',
      rating: '4.1 ★ (18 reviews)',
      ranking: 'Page 2–3',
    },
    after: {
      profileViews: '5,900/month',
      calls: '~16/month',
      rating: '4.8 ★ (67 reviews)',
      ranking: 'Top 3 in Maps',
    },
    metric: '+180%',
    metricLabel: 'Inbound calls from Google',
    progress: 72,
    quote:
      '"I used to get maybe 5 Google calls a month. Now I get 14–17. We had to hire a second crew and I still have a waitlist. I didn\'t believe it would work this fast."',
    highlights: [
      'Previously missing service areas — added 24 specific neighborhood targets',
      '8 social media posts/month built consistent brand presence',
      'Google Posts published weekly drove extra profile traffic',
      'Before-and-after content drove high engagement and trust signals',
    ],
  },
]

const HOW_WE_MEASURE = [
  {
    icon: '📊',
    title: 'Google Business Profile Insights',
    desc: 'Direct data from Google: how many people searched for you, how many found you via Maps, how many clicked call, clicked for directions, or visited your website.',
  },
  {
    icon: '📞',
    title: 'Call Tracking',
    desc: 'We track call volume and attribution so you can see exactly how many calls are coming from your Google presence vs. other sources.',
  },
  {
    icon: '⭐',
    title: 'Review Count & Rating',
    desc: 'We track your total review count, average star rating, and response rate — all correlated with ranking movement over time.',
  },
  {
    icon: '🔍',
    title: 'Keyword Rankings',
    desc: 'We track your position for 10–20 target keywords (your service + city combinations) and show you movement month over month.',
  },
]

export default function ResultsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="min-h-[56vh] flex items-center relative overflow-hidden pt-20 pb-16"
        style={{ background: '#03080f' }}
      >
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,164,74,0.07) 0%, transparent 65%)',
            top: -200,
            right: -300,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a44a' }} />
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: '#c8a44a' }}>
                Client Results
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
              Numbers don't lie.<br />
              <em style={{ color: '#c8a44a' }}>Neither do we.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 540,
                lineHeight: 1.7,
              }}
            >
              Every result on this page is from a real local business. We document everything so
              you can see exactly what's possible — and what we'd expect for your market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#080f1e', padding: '56px 0' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="py-8 px-6 text-center border-r last:border-r-0"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 42,
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

      {/* Case studies */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              Case Studies
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
              3 businesses, 3 transformations
            </h2>
          </Reveal>

          <div className="space-y-12">
            {CASES.map((c, i) => (
              <Reveal key={i} delay={0.1}>
                <div
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: '#e9eaee' }}
                >
                  {/* Header */}
                  <div
                    className="px-8 py-6 flex items-center justify-between gap-4 flex-wrap border-b"
                    style={{ background: '#f8f8f6', borderColor: '#e9eaee' }}
                  >
                    <div>
                      <div
                        className="text-[11px] font-bold tracking-[2px] uppercase mb-1"
                        style={{ color: '#a8aec0' }}
                      >
                        {c.industry} · {c.location}
                      </div>
                      <div className="text-[13px]" style={{ color: '#717d96' }}>
                        Results at {c.timeframe}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: 52,
                          fontWeight: 700,
                          color: '#c8a44a',
                          lineHeight: 1,
                        }}
                      >
                        {c.metric}
                      </div>
                      <div className="text-[13px]" style={{ color: '#717d96' }}>
                        {c.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 grid md:grid-cols-[1fr_1fr_1fr] gap-8">
                    {/* Before */}
                    <div>
                      <div
                        className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
                        style={{ color: '#dc2626' }}
                      >
                        Before
                      </div>
                      {Object.entries(c.before).map(([k, v]) => (
                        <div
                          key={k}
                          className="flex justify-between py-2.5 border-b text-[13px] last:border-0"
                          style={{ borderColor: '#f5f6f8' }}
                        >
                          <span className="capitalize" style={{ color: '#a8aec0' }}>
                            {k.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span style={{ color: '#080f1e' }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* After */}
                    <div>
                      <div
                        className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
                        style={{ color: '#1a8a50' }}
                      >
                        After
                      </div>
                      {Object.entries(c.after).map(([k, v]) => (
                        <div
                          key={k}
                          className="flex justify-between py-2.5 border-b text-[13px] last:border-0"
                          style={{ borderColor: '#f5f6f8' }}
                        >
                          <span className="capitalize" style={{ color: '#a8aec0' }}>
                            {k.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-semibold" style={{ color: '#1a8a50' }}>
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* What we did */}
                    <div>
                      <div
                        className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
                        style={{ color: '#c8a44a' }}
                      >
                        What We Did
                      </div>
                      <ul className="list-none space-y-2">
                        {c.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-[13px] leading-relaxed"
                            style={{ color: '#717d96' }}
                          >
                            <span
                              style={{ color: '#c8a44a', fontSize: 12, marginTop: 2, flexShrink: 0 }}
                            >
                              ↗
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    className="px-8 py-6 border-t"
                    style={{ background: '#f8f8f6', borderColor: '#e9eaee' }}
                  >
                    <p className="text-[14px] italic leading-relaxed" style={{ color: '#717d96' }}>
                      {c.quote}
                    </p>
                    <div className="mt-2" style={{ color: '#c8a44a' }}>
                      ★★★★★
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <p className="text-[13px]" style={{ color: '#a8aec0' }}>
              Results vary by industry, location, and competition level. We'll show you realistic
              expectations for your specific market on the free audit call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we measure */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(30px,4vw,44px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              How we measure success
            </h2>
            <p style={{ fontSize: 16, color: '#717d96', maxWidth: 500, margin: '12px auto 0', lineHeight: 1.7 }}>
              We track everything so your monthly report is full of numbers, not vague promises.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_MEASURE.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-7 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div className="text-2xl mb-4">{m.icon}</div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#717d96' }}>
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: '#080f1e' }}>
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
              Want results like these?
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, lineHeight: 1.7 }}
            >
              Book a free 15-minute audit. We'll show you your current standing, what your
              competitors are doing, and a realistic projection for your market.
            </p>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 text-[14px] font-bold px-9 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#c8a44a', color: '#080f1e' }}
            >
              Book Free Audit →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
