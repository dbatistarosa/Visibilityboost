import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PricingCards, type PricingPlan } from '@/components/PricingCards'

export const metadata: Metadata = {
  title: 'Pricing | Local SEO, Social Media & AI Automations | VisibilityBoost',
  description:
    'Transparent, service-specific pricing for local businesses. Local SEO from $397/mo, Social Media from $399/mo, Website Maintenance from $199/mo. Annual plans include a free website.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Honest Pricing | Local SEO, Social Media & Website Design | VisibilityBoost',
    description: 'Transparent, per-service pricing for local businesses. Local SEO from $397/mo, Social Media from $399/mo. Annual plans include a free professional website.',
    url: 'https://www.visibilityboostweb.com/pricing',
    siteName: 'VisibilityBoost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honest Pricing | Local SEO, Social Media & Website Design | VisibilityBoost',
    description: 'Transparent, per-service pricing for local businesses. Local SEO from $397/mo, Social Media from $399/mo. Annual plans include a free professional website.',
  },
}

const LOCAL_SEO_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    nickname: '"Put me on the map"',
    monthlyPrice: 397,
    annualPrice: 357,
    popular: false,
    freeWebsite: true,
    features: [
      'GBP complete setup & optimization',
      'Local keyword research (10 keywords)',
      'On-page SEO (homepage + 3 pages)',
      'Review request system setup',
      'Monthly plain-English report',
      'Email support (48-hr response)',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    nickname: '"Dominate my area"',
    monthlyPrice: 697,
    annualPrice: 627,
    popular: true,
    freeWebsite: true,
    features: [
      'Everything in Essential, plus:',
      'Citation building (30+ directories)',
      'Competitor gap analysis',
      'Content updates (2/month)',
      'Monthly strategy call (30 min)',
      'Review response management (24-hr)',
    ],
    cta: 'Start Growing →',
  },
  {
    name: 'Authority',
    nickname: '"#1 in my city"',
    monthlyPrice: 1197,
    annualPrice: 1077,
    popular: false,
    freeWebsite: true,
    features: [
      'Everything in Professional, plus:',
      'Citation building (50+ directories)',
      '2 SEO blog posts/month',
      'Link building strategy',
      'Bi-weekly strategy calls',
      'Priority support (4-hr response)',
    ],
    cta: 'Own My Market',
  },
]

const SOCIAL_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    nickname: '"Just stay active"',
    monthlyPrice: 399,
    annualPrice: 359,
    popular: false,
    freeWebsite: true,
    features: [
      '8 posts/month',
      'Facebook + Instagram',
      'Professional captions & hashtags',
      'Monthly content calendar',
      'Scheduled publishing',
      'Comment monitoring',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    nickname: '"Build real reach"',
    monthlyPrice: 799,
    annualPrice: 719,
    popular: true,
    freeWebsite: true,
    features: [
      'Everything in Starter, plus:',
      '16 posts/month',
      'Google Business Posts (weekly)',
      '2 Reels/short videos/month',
      'Monthly strategy call (30 min)',
      'Story management',
    ],
    cta: 'Grow My Presence →',
  },
  {
    name: 'Premium',
    nickname: '"Be everywhere"',
    monthlyPrice: 1499,
    annualPrice: 1349,
    popular: false,
    freeWebsite: true,
    features: [
      'Everything in Growth, plus:',
      '24 posts/month',
      '+ LinkedIn management',
      '4 Reels/videos/month',
      'Stories & highlights management',
      'Content strategy sessions',
      'Priority support (4-hr)',
    ],
    cta: 'Dominate Social',
  },
]

const MAINTENANCE_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    nickname: '"Keep it running"',
    monthlyPrice: 199,
    annualPrice: 179,
    popular: false,
    freeWebsite: true,
    features: [
      'Monthly backups & security monitoring',
      'Plugin / CMS updates',
      'Performance monitoring',
      '1 content edit/month',
      'Uptime monitoring',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    nickname: '"Active maintenance"',
    monthlyPrice: 349,
    annualPrice: 314,
    popular: true,
    freeWebsite: true,
    features: [
      'Everything in Basic, plus:',
      '2 content updates/month',
      'Speed optimization',
      'Monthly performance report',
      'Priority support (24-hr)',
    ],
    cta: 'Start Care Plan →',
  },
  {
    name: 'Elite',
    nickname: '"Hands-off growth"',
    monthlyPrice: 599,
    annualPrice: 539,
    popular: false,
    freeWebsite: true,
    features: [
      'Everything in Standard, plus:',
      'Unlimited content updates',
      '1 new landing page/month',
      'Bi-weekly performance reports',
      'Priority support (4-hr)',
    ],
    cta: 'Go Elite',
  },
]

const BILLING_FAQS: [string, string][] = [
  [
    'Is there a setup fee?',
    'No setup fees on any plan. You pay the monthly rate and we start immediately after onboarding.',
  ],
  [
    "What's the difference between monthly and annual billing?",
    "Monthly billing is flexible — cancel with 30 days notice. Annual billing is a 12-month commitment that saves you ~10% and includes a free 5-page website (a $1,497–$2,497 value).",
  ],
  [
    'Can I combine services?',
    'Yes. Many clients run Local SEO + Social Media together for a complete local presence. Each service is priced separately so you only pay for what you use.',
  ],
  [
    'Can I upgrade my plan?',
    'Yes, anytime. We prorate the difference and upgrade your services immediately — no waiting for a billing cycle.',
  ],
  [
    'What if I need to cancel?',
    "Monthly plans: cancel with 30 days notice, no penalty. Annual plans: 12-month commitment is firm (that's how the free website economics work), but reach out if circumstances change.",
  ],
  [
    'What payment methods do you accept?',
    'All major credit cards and ACH bank transfers. Billing is handled securely through Stripe.',
  ],
]

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
              <em style={{ color: '#c8a44a' }}>By service. No bundles.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 540,
                margin: '0 auto 16px',
                lineHeight: 1.7,
              }}
            >
              Every service priced separately — pay only for what you need. Toggle monthly or annual
              on each section. Annual plans include a free 5-page website.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {[
                { label: 'Local SEO', href: '#local-seo' },
                { label: 'Social Media', href: '#social-media' },
                { label: 'Website & Maintenance', href: '#website' },
                { label: 'AI Automations', href: '#ai-automations' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-[13px] font-medium border transition-all duration-200 hover:text-white hover:border-white/30"
                  style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local SEO */}
      <section id="local-seo" className="py-28" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <a
              href="/services/local-seo"
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: '#c8a44a' }}
            >
              🗺️ Local SEO ↗
            </a>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Local SEO pricing
            </h2>
            <p style={{ fontSize: 15, color: '#717d96', maxWidth: 500, margin: '10px auto 0', lineHeight: 1.7 }}>
              Google Business Profile, keyword research, citations, and on-page SEO — done for you every month.
            </p>
          </Reveal>
          <PricingCards
            plans={LOCAL_SEO_PLANS}
            accentNote="FREE 5-page website included with any annual Local SEO plan"
          />
        </div>
      </section>

      {/* Social Media */}
      <section id="social-media" className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <a
              href="/services/social-media"
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: '#c8a44a' }}
            >
              📱 Social Media ↗
            </a>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Social media pricing
            </h2>
            <p style={{ fontSize: 15, color: '#717d96', maxWidth: 500, margin: '10px auto 0', lineHeight: 1.7 }}>
              Professional content created, scheduled, and published on Facebook, Instagram, and Google every month.
            </p>
          </Reveal>
          <PricingCards
            plans={SOCIAL_PLANS}
            accentNote="FREE 5-page website included with any annual Social Media plan"
          />
        </div>
      </section>

      {/* Website & Maintenance */}
      <section id="website" className="py-28" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <a
              href="/services/website-design"
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: '#c8a44a' }}
            >
              🌐 Website Design ↗
            </a>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Website builds &amp; maintenance
            </h2>
          </Reveal>

          <Reveal className="mb-10">
            <p className="text-[12px] font-semibold tracking-[2px] uppercase text-center mb-8" style={{ color: '#a8aec0' }}>
              One-Time Builds
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                name: 'Starter Build',
                price: '$1,497',
                free: true,
                popular: false,
                features: [
                  '5-page professional website',
                  'Mobile-first design',
                  'SEO-optimized from day one',
                  'Contact form + click-to-call',
                  '2 rounds of revisions',
                  'Delivered in 2–3 weeks',
                ],
                cta: 'Book Free Audit',
              },
              {
                name: 'Professional Build',
                price: '$2,497',
                free: true,
                popular: true,
                features: [
                  'Up to 8 pages',
                  'Everything in Starter, plus:',
                  'Blog setup & styling',
                  'Custom animations',
                  '3 rounds of revisions',
                  'Priority delivery (10 days)',
                ],
                cta: 'Get Started →',
              },
              {
                name: 'Custom Build',
                price: 'From $3,997',
                free: false,
                popular: false,
                features: [
                  '10+ pages',
                  'E-commerce or booking system',
                  'Custom integrations & APIs',
                  'Unlimited revisions',
                  'Dedicated project manager',
                  'Ongoing priority support',
                ],
                cta: 'Get a Quote',
              },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-9 relative border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: b.popular ? '#080f1e' : '#fff',
                    borderColor: b.popular ? '#c8a44a' : '#e9eaee',
                    transform: b.popular ? 'translateY(-8px) scale(1.02)' : undefined,
                    boxShadow: b.popular ? '0 32px 64px rgba(8,15,30,0.2)' : undefined,
                  }}
                >
                  {b.popular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[2px] uppercase whitespace-nowrap"
                      style={{ background: '#c8a44a', color: '#080f1e' }}
                    >
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="text-[13px] font-bold tracking-[2px] uppercase mb-2" style={{ color: '#c8a44a' }}>
                    {b.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 44,
                      fontWeight: 700,
                      color: b.popular ? '#fff' : '#080f1e',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {b.price}
                  </div>
                  <div className="text-[13px] mb-3" style={{ color: b.popular ? 'rgba(255,255,255,0.35)' : '#a8aec0' }}>
                    one-time
                  </div>
                  {b.free && (
                    <div
                      className="rounded-xl p-3 mb-4 border text-[12px] font-semibold"
                      style={{ background: 'rgba(200,164,74,0.08)', borderColor: 'rgba(200,164,74,0.2)', color: '#c8a44a' }}
                    >
                      🎁 FREE with any annual marketing plan
                    </div>
                  )}
                  <div className="h-px my-4" style={{ background: b.popular ? 'rgba(255,255,255,0.08)' : '#e9eaee' }} />
                  <ul className="list-none mb-7 space-y-1">
                    {b.features.map(f => (
                      <li
                        key={f}
                        className="flex gap-2.5 items-start text-[13px] py-1.5 border-b last:border-0"
                        style={{
                          borderColor: b.popular ? 'rgba(255,255,255,0.05)' : '#f5f6f8',
                          color: b.popular ? 'rgba(255,255,255,0.6)' : '#717d96',
                        }}
                      >
                        <span
                          className="flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5 rounded-full"
                          style={{ background: 'rgba(26,138,80,0.12)', color: '#1a8a50', width: 18, height: 18 }}
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
                      b.popular
                        ? { background: '#c8a44a', color: '#080f1e', borderColor: '#c8a44a' }
                        : { background: 'transparent', color: '#080f1e', borderColor: '#e9eaee' }
                    }
                  >
                    {b.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-6">
            <p className="text-[12px] font-semibold tracking-[2px] uppercase text-center mb-2" style={{ color: '#a8aec0' }}>
              Monthly Maintenance Plans
            </p>
            <p className="text-[14px] text-center mb-10" style={{ color: '#717d96' }}>
              Keep your site fast, secure, and up to date every month.
            </p>
          </Reveal>
          <PricingCards
            plans={MAINTENANCE_PLANS}
            accentNote="FREE 5-page website included with any annual maintenance plan"
          />
        </div>
      </section>

      {/* AI Automations */}
      <section id="ai-automations" className="py-28" style={{ background: '#080f1e' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <a
              href="/services/ai-automations"
              className="text-[11px] font-semibold tracking-[3px] uppercase mb-3 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: '#c8a44a' }}
            >
              🤖 AI Automations ↗
            </a>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-1px',
              }}
            >
              AI Automations pricing
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.4)',
                maxWidth: 520,
                margin: '10px auto 0',
                lineHeight: 1.7,
              }}
            >
              Custom-built for your business. Fixed quote before we start — no hourly billing, no surprises.
              Most projects: $997–$4,997.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                range: '$997–$1,997',
                label: 'Simple Automation',
                desc: 'Single workflow — lead follow-up, review collection, or appointment reminders.',
                items: ['1 workflow automation', 'Connect 2–3 tools', '1-week build time', '30-day support'],
                popular: false,
              },
              {
                range: '$2,497–$3,997',
                label: 'Multi-Step System',
                desc: 'Multiple automations: chatbot + CRM + follow-up + booking in one integrated system.',
                items: ['2–4 connected workflows', 'Connect 4–6 tools', '2–3 week build time', '60-day support'],
                popular: true,
              },
              {
                range: 'From $4,997',
                label: 'Full AI Stack',
                desc: 'Complete automation: AI chatbot, CRM integration, reporting, and custom workflows.',
                items: ['Unlimited workflows', 'Full tool integration', '3–6 week build time', 'Ongoing priority support'],
                popular: false,
              },
            ].map((tier, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 border relative transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    background: tier.popular ? '#fff' : 'rgba(255,255,255,0.04)',
                    borderColor: tier.popular ? '#c8a44a' : 'rgba(255,255,255,0.08)',
                    transform: tier.popular ? 'translateY(-6px)' : undefined,
                    boxShadow: tier.popular ? '0 24px 48px rgba(0,0,0,0.3)' : undefined,
                  }}
                >
                  {tier.popular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[2px] uppercase whitespace-nowrap"
                      style={{ background: '#c8a44a', color: '#080f1e' }}
                    >
                      ⭐ Most Common
                    </div>
                  )}
                  <div className="text-[12px] font-bold tracking-[2px] uppercase mb-2" style={{ color: '#c8a44a' }}>
                    {tier.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 32,
                      fontWeight: 700,
                      color: tier.popular ? '#080f1e' : '#fff',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {tier.range}
                  </div>
                  <p
                    className="text-[13px] leading-relaxed mb-5 flex-1"
                    style={{ color: tier.popular ? '#717d96' : 'rgba(255,255,255,0.5)' }}
                  >
                    {tier.desc}
                  </p>
                  <div className="h-px mb-5" style={{ background: tier.popular ? '#e9eaee' : 'rgba(255,255,255,0.08)' }} />
                  <ul className="list-none space-y-2 mb-6">
                    {tier.items.map(item => (
                      <li
                        key={item}
                        className="flex gap-2.5 items-center text-[13px]"
                        style={{ color: tier.popular ? '#717d96' : 'rgba(255,255,255,0.6)' }}
                      >
                        <span
                          className="flex items-center justify-center text-[9px] font-black flex-shrink-0 rounded-full"
                          style={{ background: 'rgba(26,138,80,0.12)', color: '#1a8a50', width: 18, height: 18 }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#booking"
                    className="block w-full text-center py-3 rounded-xl font-bold text-[14px] transition-all duration-200 hover:-translate-y-0.5 border-2"
                    style={
                      tier.popular
                        ? { background: '#c8a44a', color: '#080f1e', borderColor: '#c8a44a' }
                        : { background: 'transparent', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' }
                    }
                  >
                    Get a Quote →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <a
              href="/services/ai-automations"
              className="text-[14px] font-semibold transition-colors hover:opacity-80"
              style={{ color: '#c8a44a' }}
            >
              Learn more about AI Automations →
            </a>
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
              Billing &amp; contracts, <em style={{ color: '#c8a44a' }}>explained.</em>
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
              Book a free 15-minute call. We'll look at your business, recommend the right services,
              and answer every question — zero pressure.
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
