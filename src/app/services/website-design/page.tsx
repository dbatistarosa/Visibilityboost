import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Free Website Design for Local Businesses | VisibilityBoost',
  description:
    'A fast, professional, 5-page website included free with any VisibilityBoost annual plan. Mobile-first, SEO-optimized, and you own it completely — forever.',
  alternates: { canonical: '/services/website-design' },
}

const PAGES_INCLUDED = [
  { icon: '🏠', name: 'Home', desc: 'Hero section with your value prop, services overview, and primary call-to-action.' },
  { icon: '👤', name: 'About', desc: 'Your story, your team, your credentials. Builds the human trust that converts.' },
  { icon: '🔧', name: 'Services', desc: 'Dedicated pages for each of your services with clear descriptions and pricing.' },
  { icon: '⭐', name: 'Testimonials', desc: 'Showcases your Google reviews and client results to build social proof.' },
  { icon: '📞', name: 'Contact', desc: 'Contact form, click-to-call button, address map embed, and business hours.' },
]

const FEATURES = [
  { icon: '📱', title: 'Mobile-First Design', desc: 'Built for phones first — over 60% of local searches happen on mobile. Your site loads fast and looks perfect on every screen.' },
  { icon: '⚡', title: 'Fast Load Times', desc: 'Optimized images, clean code, and no bloat. A 1-second delay in load time reduces conversions by 7%. We do not let that happen.' },
  { icon: '🔍', title: 'SEO-Optimized', desc: 'Every page has proper title tags, meta descriptions, headings, and schema markup baked in from day one — not bolted on afterward.' },
  { icon: '📞', title: 'Built to Convert', desc: 'Click-to-call buttons, contact forms, and strategic CTAs placed where customers are most likely to act.' },
  { icon: '🎨', title: 'Custom Design', desc: 'Not a template. Designed around your brand colors, your fonts, and your market — looks like a $5,000 website at a fraction of the cost.' },
  { icon: '🔒', title: 'You Own Everything', desc: 'Files, code, domain access — everything belongs to you the moment we deliver it. No hostage-taking. No ongoing "platform fees."' },
]

const PROCESS = [
  { n: '1', title: 'Discovery Call', desc: 'We spend 30 minutes understanding your business, your customers, and what makes you different from competitors in your area.' },
  { n: '2', title: 'Design & Build', desc: 'We design and build your site in 10–14 business days. You\'ll see a staging preview before anything goes live.' },
  { n: '3', title: 'Review & Refine', desc: 'Two rounds of revisions included. We adjust copy, layout, colors, or images until it\'s exactly right.' },
  { n: '4', title: 'Launch & Handover', desc: 'We deploy to your domain and hand over full access. You own the code, the hosting account, and every file.' },
]

const FAQS: [string, string][] = [
  [
    'Which annual plan includes the free website?',
    'All three annual plans (Starter, Growth, and Authority) include a free 5-page website. Authority plan also includes a full SEO audit valued at $800. Month-to-month plans do not include the website.',
  ],
  [
    'Do I need to provide a domain name?',
    "If you already have one, great — we'll use it. If not, we'll help you register one (cost is typically $12–15/year, paid to the registrar). We set everything up for you.",
  ],
  [
    'What if I already have a website?',
    "If your existing site is solid, we optimize it rather than rebuild. If it's outdated or slow, we rebuild it. We'll tell you honestly on the audit call which approach makes more sense.",
  ],
  [
    'Will my website rank on Google?',
    "Your new site is SEO-optimized from day one — proper structure, meta tags, schema, fast load times. Combined with our local SEO work on your Google Business Profile and citations, your site is positioned to rank. SEO is a process, not a switch, but you're starting from a much stronger foundation.",
  ],
  [
    'What happens to my website if I cancel?',
    "It's yours. Full stop. You get the complete source code, all image files, and access to every account we set up. We don't hold it ransom or add hidden clauses. Cancel with 30 days notice and we hand everything over.",
  ],
  [
    'Can I add pages later?',
    "Yes. After handover you own the code and can make changes yourself, hire any developer, or ask us for additional pages at our standard rate. There's no lock-in.",
  ],
]

export default function WebsiteDesignPage() {
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
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,164,74,0.09) 0%, transparent 65%)',
            bottom: -100,
            right: -100,
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
                Website Design
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
              A website that converts.<br />
              <em style={{ color: '#c8a44a' }}>Free with any annual plan.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 540,
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              5 pages. Mobile-first. SEO-optimized. Built to turn visitors into phone calls.
              Included at no extra cost when you sign annually.
            </p>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 32,
              }}
            >
              Normally a $2,500–$5,000 build. Free with your annual commitment.
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
                See Annual Plans
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              5 Pages Included
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
              Everything a local business needs,<br />
              <em style={{ color: '#c8a44a' }}>nothing it doesn't.</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-4">
            {PAGES_INCLUDED.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: '#717d96' }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              Built Right
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
              What makes our websites different
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="p-8 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: '#080f1e',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#717d96' }}>
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: '#080f1e' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              The Process
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
              Live in 2–3 weeks
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border relative"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'rgba(200,164,74,0.12)', border: '1px solid rgba(200,164,74,0.2)' }}
                  >
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 700, color: '#c8a44a' }}>
                      {step.n}
                    </span>
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {step.desc}
                  </p>
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
                fontSize: 'clamp(28px,4vw,42px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-0.5px',
              }}
            >
              Website design questions, <em style={{ color: '#c8a44a' }}>answered.</em>
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
              Get your free website.
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, lineHeight: 1.7 }}
            >
              Book a free audit call and we'll show you exactly what your current website is costing
              you in lost customers.
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
                href="/pricing"
                className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-4 rounded-lg border transition-all duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                View Annual Plans
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
