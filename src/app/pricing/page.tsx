import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Pricing | Local SEO & Marketing Plans | VisibilityBoost',
  description:
    'Simple, transparent pricing for local businesses. Starter at $297/month, Growth at $597/month, Authority at $997/month. No contracts, no hidden fees. Free website with annual plans.',
  alternates: { canonical: '/pricing' },
}

const PLANS = [
  {
    name: 'Starter',
    nickname: '"Put me on the map"',
    price: 297,
    popular: false,
    freeNote: null,
    features: [
      'Google Business Profile setup & optimization',
      'Local keyword research',
      '8 social media posts/month',
      'Review request system setup',
      'Monthly plain-English report',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    nickname: '"Dominate my area"',
    price: 597,
    popular: true,
    freeNote: '🎁 FREE 5-page website with annual plan',
    features: [
      'Everything in Starter, plus:',
      'Full local SEO management',
      '16 social posts/month',
      '2 Reels/short videos/month',
      'Competitor analysis',
      'Citation building (20+ dirs)',
      'Monthly 30-min strategy call',
    ],
  },
  {
    name: 'Authority',
    nickname: '"#1 in my city"',
    price: 997,
    popular: false,
    freeNote: '🎁 FREE website + SEO audit ($800 value)',
    features: [
      'Everything in Growth, plus:',
      '2 SEO blog posts/month',
      '24 social posts/month',
      '4 Reels/videos/month',
      'Link building strategy',
      'Email newsletter setup',
      'Priority support (4hr response)',
    ],
  },
]

const COMPARISON = [
  { feature: 'Google Business Profile Optimization', starter: true,  growth: true,  authority: true },
  { feature: 'Local Keyword Research',               starter: true,  growth: true,  authority: true },
  { feature: 'On-Page SEO',                          starter: 'Basic', growth: 'Full', authority: 'Full' },
  { feature: 'Social Media Posts / Month',           starter: '8',   growth: '16',  authority: '24' },
  { feature: 'Reels & Short Videos / Month',         starter: '—',   growth: '2',   authority: '4' },
  { feature: 'Review Request System',                starter: true,  growth: true,  authority: true },
  { feature: 'Citation Building',                    starter: '—',   growth: '20+ dirs', authority: '50+ dirs' },
  { feature: 'Competitor Analysis',                  starter: '—',   growth: true,  authority: true },
  { feature: 'SEO Blog Posts / Month',               starter: '—',   growth: '—',   authority: '2' },
  { feature: 'Link Building Strategy',               starter: '—',   growth: '—',   authority: true },
  { feature: 'Email Newsletter Setup',               starter: '—',   growth: '—',   authority: true },
  { feature: 'Monthly Strategy Call',                starter: '—',   growth: '30 min', authority: '45 min' },
  { feature: 'Free Website (annual plan)',           starter: true,  growth: true,  authority: true },
  { feature: 'Free SEO Audit (annual plan)',         starter: '—',   growth: '—',   authority: true },
  { feature: 'Support Response Time',                starter: '24–48 hrs', growth: '24 hrs', authority: '4 hrs' },
]

const BILLING_FAQS: [string, string][] = [
  [
    'Is there a setup fee?',
    'No setup fees on any plan. You pay the monthly rate — that\'s it. We start work immediately after onboarding.',
  ],
  [
    'What\'s the difference between monthly and annual billing?',
    'Monthly billing is flexible — cancel with 30 days notice. Annual billing is a 12-month commitment that saves you 10% (roughly one free month per year) and includes the free website.',
  ],
  [
    'Can I upgrade my plan?',
    'Yes, anytime. We prorate the difference and upgrade your services immediately. No waiting for a billing cycle.',
  ],
  [
    'What if I need to cancel?',
    'Monthly plans: cancel with 30 days notice, no penalty. Annual plans: the 12-month commitment is firm (that\'s how the economics of the free website work), but if circumstances change, reach out — we\'ll find a fair solution.',
  ],
  [
    'Do you charge extra for the free website?',
    "No. The 5-page website is completely included in your annual plan. There's no design fee, no hosting fee (for the first year), and no catch. It's genuinely free with the annual commitment.",
  ],
  [
    'What payment methods do you accept?',
    'We accept all major credit cards and ACH bank transfers. Billing is handled securely through Stripe.',
  ],
]

function CheckIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full" style={{ background: 'rgba(26,138,80,0.1)', color: '#1a8a50', fontSize: 11, fontWeight: 900 }}>
        ✓
      </span>
    )
  }
  if (value === '—' || value === false) {
    return <span style={{ color: '#d1d5e0', fontSize: 16 }}>—</span>
  }
  return <span className="text-[13px] font-medium" style={{ color: '#080f1e' }}>{value}</span>
}

export default function PricingPage() {
  return (
    <>
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
                Pricing
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
              Honest pricing.<br />
              <em style={{ color: '#c8a44a' }}>No surprises. Ever.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 520,
                margin: '0 auto 16px',
                lineHeight: 1.7,
              }}
            >
              Pick the plan that fits where you are right now. Upgrade or cancel anytime.
              No hidden fees, no locked-in contracts on monthly plans.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
              Annual plans include a free 5-page website — normally a $2,500–$5,000 build.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-28" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-9 relative transition-all duration-300 hover:-translate-y-1 border"
                  style={{
                    background: p.popular ? '#080f1e' : '#fff',
                    borderColor: p.popular ? '#c8a44a' : '#e9eaee',
                    transform: p.popular ? 'translateY(-8px) scale(1.02)' : undefined,
                    boxShadow: p.popular ? '0 32px 64px rgba(8,15,30,0.2)' : undefined,
                  }}
                >
                  {p.popular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[2px] uppercase whitespace-nowrap"
                      style={{ background: '#c8a44a', color: '#080f1e' }}
                    >
                      ⭐ Most Popular
                    </div>
                  )}
                  <div
                    className="text-[13px] font-bold tracking-[2px] uppercase mb-1.5"
                    style={{ color: '#c8a44a' }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="text-[13px] italic mb-6"
                    style={{ color: p.popular ? 'rgba(255,255,255,0.35)' : '#a8aec0' }}
                  >
                    {p.nickname}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 64,
                      fontWeight: 700,
                      color: p.popular ? '#fff' : '#080f1e',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    <sup style={{ fontSize: 28, verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>$</sup>
                    {p.price}
                  </div>
                  <div
                    className="text-[13px] mb-1.5"
                    style={{ color: p.popular ? 'rgba(255,255,255,0.35)' : '#a8aec0' }}
                  >
                    per month
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full mb-7"
                    style={{ background: 'rgba(26,138,80,0.1)', color: p.popular ? '#4ade80' : '#1a6b3c' }}
                  >
                    💚 Annual: save ${(p.price * 12 * 0.1).toFixed(0)}/yr
                  </div>
                  {p.freeNote && (
                    <div
                      className="rounded-xl p-3.5 mb-5 flex items-center gap-2 text-[13px] font-semibold border"
                      style={{
                        background: 'rgba(200,164,74,0.08)',
                        borderColor: 'rgba(200,164,74,0.15)',
                        color: '#c8a44a',
                      }}
                    >
                      {p.freeNote}
                    </div>
                  )}
                  <div className="h-px mb-6" style={{ background: p.popular ? 'rgba(255,255,255,0.08)' : '#e9eaee' }} />
                  <ul className="list-none mb-8 space-y-2">
                    {p.features.map(f => (
                      <li
                        key={f}
                        className="flex gap-2.5 items-start text-[13px] py-2 border-b last:border-0"
                        style={{
                          borderColor: p.popular ? 'rgba(255,255,255,0.05)' : '#f5f6f8',
                          color: p.popular ? 'rgba(255,255,255,0.6)' : '#717d96',
                        }}
                      >
                        <span
                          className="flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5 rounded-full"
                          style={{ background: 'rgba(26,138,80,0.1)', color: '#1a8a50', width: 18, height: 18 }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#booking"
                    className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] tracking-wide transition-all duration-200 hover:-translate-y-0.5 border-2"
                    style={
                      p.popular
                        ? { background: '#c8a44a', color: '#080f1e', borderColor: '#c8a44a' }
                        : { background: 'transparent', color: '#080f1e', borderColor: '#e9eaee' }
                    }
                  >
                    {p.popular ? 'Start Growing →' : p.name === 'Starter' ? 'Get Started' : 'Become the Authority'}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <p className="text-[14px]" style={{ color: '#a8aec0' }}>
              Not sure which plan?{' '}
              <a href="/#booking" style={{ color: '#c8a44a', fontWeight: 600 }}>
                Book a free audit
              </a>{' '}
              and we'll tell you exactly what you need — no upsell, just honest advice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(28px,4vw,42px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-0.5px',
              }}
            >
              Full feature comparison
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: '#e9eaee' }}>
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#080f1e' }}>
                    <th
                      className="text-left px-6 py-5 text-[12px] font-bold tracking-[1.5px] uppercase"
                      style={{ color: 'rgba(255,255,255,0.35)', minWidth: 240 }}
                    >
                      Feature
                    </th>
                    {['Starter', 'Growth', 'Authority'].map((name, i) => (
                      <th
                        key={name}
                        className="px-6 py-5 text-center text-[12px] font-bold tracking-[1.5px] uppercase"
                        style={{ color: i === 1 ? '#c8a44a' : 'rgba(255,255,255,0.35)', minWidth: 140 }}
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderTop: '1px solid #f0f1f5', background: i % 2 === 0 ? '#fff' : '#fafafa' }}
                    >
                      <td className="px-6 py-4 text-[13px] font-medium" style={{ color: '#080f1e' }}>
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckIcon value={row.starter} />
                      </td>
                      <td className="px-6 py-4 text-center" style={{ background: 'rgba(200,164,74,0.04)' }}>
                        <CheckIcon value={row.growth} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckIcon value={row.authority} />
                      </td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: '1px solid #e9eaee', background: '#f8f8f6' }}>
                    <td className="px-6 py-5 text-[13px] font-bold" style={{ color: '#080f1e' }}>
                      Monthly price
                    </td>
                    {PLANS.map(p => (
                      <td key={p.name} className="px-6 py-5 text-center">
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 22,
                            fontWeight: 700,
                            color: p.popular ? '#c8a44a' : '#080f1e',
                          }}
                        >
                          ${p.price}
                        </span>
                        <span className="text-[11px] ml-1" style={{ color: '#a8aec0' }}>/mo</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(28px,4vw,42px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-0.5px',
              }}
            >
              Billing & contracts, <em style={{ color: '#c8a44a' }}>explained.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={BILLING_FAQS} />
          </Reveal>
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
              Still have questions?
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, lineHeight: 1.7 }}
            >
              Book a free 15-minute call. We'll look at your business, recommend the right plan,
              and answer every question you have — zero pressure, zero pitch.
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
