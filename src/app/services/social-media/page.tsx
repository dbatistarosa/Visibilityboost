import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { PricingCards, type PricingPlan } from '@/components/PricingCards'

export const metadata: Metadata = {
  title: 'Social Media Management for Local Businesses | VisibilityBoost',
  description:
    'We create, schedule, and post professional content on Facebook, Instagram, and Google Posts every month — so your local business stays visible and trusted on social media.',
  alternates: { canonical: '/services/social-media' },
}

const WHAT_WE_CREATE = [
  {
    icon: '🖼️',
    title: 'Branded Static Posts',
    desc: 'Professional graphics featuring your services, promotions, before-and-after results, and seasonal content — all matching your brand colors and voice.',
  },
  {
    icon: '🎬',
    title: 'Short-Form Video & Reels',
    desc: 'Growth and Authority plans include 2–4 Reels per month. We edit the footage (you send a quick phone video) into professional short-form content that gets real reach.',
  },
  {
    icon: '💬',
    title: 'Captions & Hashtags',
    desc: 'Every post has a human-written caption — no AI slop. We write in your business voice with local hashtags, calls to action, and engagement hooks.',
  },
  {
    icon: '📅',
    title: 'Scheduled Publishing',
    desc: 'We schedule every post at the optimal time for your audience and market. You approve the content calendar monthly — or just let us run it.',
  },
  {
    icon: '📣',
    title: 'Google Business Posts',
    desc: 'Most businesses ignore Google Posts — a free traffic channel. We publish weekly Google Business updates to drive extra profile views and conversions.',
  },
  {
    icon: '👥',
    title: 'Comment Monitoring',
    desc: 'We monitor your posts for comments and messages and flag anything that needs your direct response — keeping your community engaged without you babysitting it.',
  },
]

const PLATFORMS = [
  {
    name: 'Facebook',
    icon: '📘',
    why: 'Still the most-used platform for local service businesses. Your customers 35–65+ are here daily. Reviews, posts, and ads all live here.',
    posts: '4–12/month',
  },
  {
    name: 'Instagram',
    icon: '📸',
    why: 'Visual trust-building. Your portfolio, your team, your results. Younger customers (25–45) check Instagram before calling any local business.',
    posts: '4–12/month',
  },
  {
    name: 'Google Posts',
    icon: '🔍',
    why: 'Appears directly on your Google Business Profile and in Maps results. Most agencies ignore this — we publish weekly for extra organic visibility.',
    posts: 'Weekly',
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

const FAQS: [string, string][] = [
  [
    'Do you need my social media passwords?',
    'We connect via official business manager tools — no passwords needed. For Facebook and Instagram, we use Meta Business Suite. For Google Posts, we use your Google Business Profile manager access.',
  ],
  [
    'What if I don\'t like the content you create?',
    "Every month you get a content calendar to review before anything is published. You can request changes — tone, topic, image style. We iterate until you're happy. Nothing goes live without your approval.",
  ],
  [
    'Do I need to send you anything?',
    "Occasionally we'll ask for photos of your work, your team, or your location — real content performs better than stock photos. A quick phone photo is totally fine. We edit and make it look professional.",
  ],
  [
    'Will social media actually bring in customers?',
    "Directly, it varies. Social media's biggest job is trust — when someone Googles you and then checks your Instagram, they should see an active, professional business. Dormant or missing social media costs you conversions from people who found you on Google.",
  ],
  [
    'Can I post on my own too?',
    "Absolutely. Our content runs alongside anything you want to post. Many clients like to share behind-the-scenes content or customer shoutouts — we just handle the consistent, professional foundation.",
  ],
]

export default function SocialMediaPage() {
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
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,164,74,0.07) 0%, transparent 65%)',
            top: -150,
            left: -200,
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
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: '#c8a44a' }}>
                Social Media
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
              Social media that actually<br />
              <em style={{ color: '#c8a44a' }}>builds your business.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 540,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Customers check your social media before they call. We make sure what they find builds
              trust — not doubt. Consistent, professional content, every month, done for you.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/#booking"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#c8a44a', color: '#080f1e' }}
              >
                Book Free Audit →
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

      {/* Why it matters */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color: '#c8a44a' }}>
                Why It Matters
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(30px,4vw,44px)',
                  fontWeight: 600,
                  color: '#080f1e',
                  letterSpacing: '-1px',
                  lineHeight: 1.1,
                }}
              >
                Silence on social media is a trust killer.
              </h2>
              <p className="mb-4" style={{ fontSize: 15, color: '#717d96', lineHeight: 1.8 }}>
                When a potential customer finds your business on Google, the next thing they do is
                check your Facebook or Instagram. If your last post was from 2022 — or you don't
                have one at all — a percentage of them won't call.
              </p>
              <p style={{ fontSize: 15, color: '#717d96', lineHeight: 1.8 }}>
                Consistent social media doesn't just look good. It signals that you're active,
                professional, and busy. That's the difference between a call and a bounce.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '78%', desc: 'of local customers check social media before choosing a business' },
                  { stat: '3×', desc: 'more trust for businesses with active, professional social profiles' },
                  { stat: '+94%', desc: 'average increase in social reach for our clients in 3 months' },
                  { stat: '8–24', desc: 'posts per month we publish — you just approve the content calendar' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border"
                    style={{ background: '#fff', borderColor: '#e9eaee' }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 36,
                        fontWeight: 700,
                        color: '#c8a44a',
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {s.stat}
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#717d96' }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24" style={{ background: '#080f1e' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              Platforms
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(30px,4vw,44px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-1px',
              }}
            >
              Where we show up for you
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {PLATFORMS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl border h-full"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p className="mb-4 text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {p.why}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                    style={{ background: 'rgba(200,164,74,0.1)', color: '#c8a44a' }}
                  >
                    {p.posts}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we create */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              What We Create
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(30px,4vw,44px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Every type of content,<br />
              <em style={{ color: '#c8a44a' }}>handled.</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_CREATE.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#717d96' }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              Pricing
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
              Social media pricing.<br />
              <em style={{ color: '#c8a44a' }}>Built for local businesses.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#717d96', maxWidth: 500, margin: '12px auto 0', lineHeight: 1.7 }}>
              Monthly for flexibility. Annual saves ~10% and includes a free 5-page website.
            </p>
          </Reveal>
          <PricingCards
            plans={SOCIAL_PLANS}
            accentNote="FREE 5-page website included with any annual plan"
          />
          <Reveal className="text-center mt-10">
            <p className="text-[14px]" style={{ color: '#a8aec0' }}>
              Not sure which plan?{' '}
              <a href="/#booking" style={{ color: '#c8a44a', fontWeight: 600 }}>
                Book a free audit
              </a>{' '}
              — we'll look at your current social presence and recommend the right tier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: '#fff' }}>
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
              Social media questions, <em style={{ color: '#c8a44a' }}>answered.</em>
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
                fontSize: 'clamp(34px,4vw,52px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-1.5px',
              }}
            >
              Let's build your social presence.
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, lineHeight: 1.7 }}
            >
              Book a free audit — we'll show you exactly what your social presence looks like to
              potential customers right now.
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
