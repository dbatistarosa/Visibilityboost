import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Local Marketing Services | VisibilityBoost',
  description:
    'Local SEO, social media management, and website design for small businesses. Everything you need to dominate your local market — starting at $297/month.',
  alternates: { canonical: '/services' },
}

const SERVICES = [
  {
    icon: '🗺️',
    title: 'Local SEO & Google Domination',
    href: '/services/local-seo',
    desc: 'Get to the top of Google when people in your city search for your service. We handle your Google Business Profile, local citations, on-page SEO, and review strategy.',
    highlights: [
      'Google Business Profile full optimization',
      'Local keyword research & on-page SEO',
      'Citation building (50+ directories)',
      'Review management & response system',
      'Monthly ranking reports',
    ],
    cta: 'Learn about Local SEO →',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    href: '/services/social-media',
    desc: 'Consistent, professional content on Facebook, Instagram, and Google Posts — created, scheduled, and published by us every single month.',
    highlights: [
      '8–24 posts/month (plan dependent)',
      'Facebook, Instagram & Google Posts',
      'Short-form video / Reels editing',
      'Caption writing & hashtag strategy',
      'Community engagement monitoring',
    ],
    cta: 'Learn about Social Media →',
  },
  {
    icon: '🌐',
    title: 'Website Design',
    href: '/services/website-design',
    desc: 'A fast, mobile-first website built to convert visitors into calls. Included free with any annual plan — no catch, no gimmicks.',
    highlights: [
      '5-page professional website',
      'Mobile-first, fast-loading design',
      'Contact form + click-to-call button',
      'SEO-optimized from day one',
      'You own it completely, forever',
    ],
    cta: 'Learn about Website Design →',
  },
]

export default function ServicesPage() {
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
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,164,74,0.08) 0%, transparent 65%)',
            top: -200,
            right: -200,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a44a' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[3px] uppercase"
                style={{ color: '#c8a44a' }}
              >
                All Services
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
              Everything you need to<br />
              <em style={{ color: '#c8a44a' }}>dominate your local market.</em>
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
              Three services, one agency, one monthly price. No juggling vendors. No surprise bills.
              No tech headaches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div className="p-9 flex-1">
                    <div
                      className="rounded-xl flex items-center justify-center text-2xl mb-5"
                      style={{ background: 'rgba(200,164,74,0.08)', width: 52, height: 52 }}
                    >
                      {s.icon}
                    </div>
                    <h2
                      className="mb-3"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#080f1e',
                      }}
                    >
                      {s.title}
                    </h2>
                    <p className="mb-6 text-[14px] leading-relaxed" style={{ color: '#717d96' }}>
                      {s.desc}
                    </p>
                    <ul className="list-none space-y-1.5">
                      {s.highlights.map(h => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-[13px]"
                          style={{ color: '#717d96' }}
                        >
                          <span style={{ color: '#c8a44a', fontSize: 11 }}>↗</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-9 pb-9">
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors group-hover:opacity-80"
                      style={{ color: '#c8a44a' }}
                    >
                      {s.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why all three */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
                marginBottom: 16,
              }}
            >
              Why all three work <em style={{ color: '#c8a44a' }}>better together</em>
            </h2>
            <p style={{ fontSize: 16, color: '#717d96', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              When someone finds you on Google, they check your social and your website within
              seconds. All three need to make a strong impression.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: '1',
                icon: '🔍',
                title: 'Google finds you',
                desc: "Local SEO puts you in front of people actively searching for your service right now. Without it, you're invisible to 97% of potential customers.",
              },
              {
                n: '2',
                icon: '📲',
                title: 'Social builds trust',
                desc: 'Customers check your Instagram and Facebook before calling. Active, professional content turns a search result into a phone call.',
              },
              {
                n: '3',
                icon: '🏆',
                title: 'Website converts them',
                desc: "Your website is your digital storefront. A fast, professional site turns a curious visitor into a booked customer — not someone who bounces.",
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border" style={{ background: '#fff', borderColor: '#e9eaee' }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{ background: 'rgba(200,164,74,0.1)' }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#717d96' }}>
                    {step.desc}
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
              Not sure where to start?
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, lineHeight: 1.7 }}
            >
              Book a free 15-minute audit call. We'll look at your current online presence and tell
              you exactly what's holding you back — no pitch, just honest data.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
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
                View Pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
