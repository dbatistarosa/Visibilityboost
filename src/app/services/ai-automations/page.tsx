import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'AI Automations for Local Businesses | VisibilityBoost',
  description:
    'Custom AI automations built for your local business — chatbots, lead follow-up, appointment booking, review collection, and workflow automation. Custom pricing per project.',
  alternates: { canonical: '/services/ai-automations' },
  openGraph: {
    title: 'AI Automations for Local Businesses | VisibilityBoost',
    description: 'Custom AI systems for lead follow-up, appointment booking, review collection, and workflow automation. Built once, works forever. Projects from $997–$4,997.',
    url: 'https://www.visibilityboostweb.com/services/ai-automations',
    siteName: 'VisibilityBoost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automations for Local Businesses | VisibilityBoost',
    description: 'Custom AI systems for lead follow-up, appointment booking, review collection, and workflow automation. Built once, works forever. Projects from $997–$4,997.',
  },
}

const USE_CASES = [
  {
    icon: '🤖',
    title: 'AI Chatbot for Your Website',
    desc: 'A 24/7 chatbot that answers customer questions, qualifies leads, and books appointments — even when you\'re on the job. Trained on your services, prices, and FAQ.',
    example: 'A plumber gets lead capture and appointment booking at 2 AM without lifting a finger.',
  },
  {
    icon: '📧',
    title: 'Automated Lead Follow-Up',
    desc: 'Every new lead gets an immediate, personalized reply via email or text — within seconds. Nurture sequences keep them warm until they\'re ready to book.',
    example: 'A landscaper follows up with 100% of their website inquiries automatically.',
  },
  {
    icon: '⭐',
    title: 'Review Collection Automation',
    desc: 'After every job, an automated text or email asks for a Google review — at the right time, with the right message. No manual follow-up required.',
    example: 'An HVAC company went from 12 reviews to 87 reviews in 4 months.',
  },
  {
    icon: '📅',
    title: 'Appointment & Booking Automation',
    desc: 'Automated scheduling that syncs with your calendar, sends confirmations, reminders, and follow-ups — cutting no-shows and saving hours every week.',
    example: 'A dentist reduced no-shows by 40% with automated reminders.',
  },
  {
    icon: '🔄',
    title: 'Business Workflow Automation',
    desc: 'Connect your CRM, invoicing, and job management tools to eliminate manual data entry. When a lead comes in, it flows through your entire system automatically.',
    example: 'A contractor auto-creates estimates and sends them within minutes of a new inquiry.',
  },
  {
    icon: '📊',
    title: 'AI-Powered Reporting',
    desc: 'Automated weekly or monthly reports that pull data from Google Analytics, your CRM, and social media — delivered to your inbox with plain-English summaries.',
    example: 'A salon owner gets a Monday morning summary of last week\'s bookings, revenue, and reviews.',
  },
]

const HOW_IT_WORKS = [
  {
    n: '1',
    title: 'Discovery Call',
    desc: 'We spend 45 minutes understanding your business workflows, biggest time drains, and where customers are falling through the cracks.',
  },
  {
    n: '2',
    title: 'Custom Proposal',
    desc: 'We map out exactly what automation will save you the most time and revenue. You get a clear scope, timeline, and flat project price.',
  },
  {
    n: '3',
    title: 'Build & Test',
    desc: 'We build your automation, connect your tools, and test every scenario before going live. Typically 1–3 weeks depending on complexity.',
  },
  {
    n: '4',
    title: 'Launch & Support',
    desc: 'Go live with a full walkthrough. We monitor the first 30 days and make adjustments until everything runs perfectly.',
  },
]

const FAQS: [string, string][] = [
  [
    'What does AI automation cost?',
    'Every project is custom — pricing depends on complexity, the number of tools we need to connect, and ongoing maintenance. Most projects fall between $997 and $4,997. We always give you a fixed price before we start — no surprises.',
  ],
  [
    'Do I need any technical knowledge?',
    'None. We handle everything — setup, integrations, testing, and training. You just tell us what you want automated and we build it. We also give you a simple walkthrough so you understand what\'s running.',
  ],
  [
    'What tools and software do you work with?',
    'We integrate with most popular business tools: Google Workspace, CRMs (HubSpot, GoHighLevel, Jobber), booking systems (Calendly, Acuity), email platforms (Mailchimp, ActiveCampaign), and more. Ask us about your specific stack.',
  ],
  [
    'Is there ongoing maintenance?',
    'Optional. After the build, you own the automation. We offer a monthly maintenance plan ($99–$199/mo) that covers monitoring, updates when your tools change, and new feature additions. Or you can manage it yourself.',
  ],
  [
    'How quickly will I see results?',
    'Typically immediately. Lead follow-up automations start working the day they go live. SEO and organic results take longer — but AI automations tend to have instant, measurable impact on response times and conversion rates.',
  ],
]

const BASE_URL = 'https://www.visibilityboostweb.com'

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE_URL}/services/` },
        { '@type': 'ListItem', 'position': 3, 'name': 'AI Automations', 'item': `${BASE_URL}/services/ai-automations/` },
      ],
    },
    {
      '@type': 'Service',
      'name': 'AI Automations for Local Businesses',
      'serviceType': 'AI Automation',
      'description': 'Custom AI automation systems for local businesses — lead follow-up, appointment booking, review collection, chatbots, and workflow automation. Projects priced from $997 to $4,997.',
      'provider': { '@id': `${BASE_URL}/#business` },
      'areaServed': { '@type': 'Country', 'name': 'United States' },
      'offers': [
        { '@type': 'Offer', 'name': 'Simple Automation', 'price': '997', 'priceCurrency': 'USD' },
        { '@type': 'Offer', 'name': 'Multi-Step System', 'price': '2497', 'priceCurrency': 'USD' },
        { '@type': 'Offer', 'name': 'Full AI Stack', 'price': '4997', 'priceCurrency': 'USD' },
      ],
    },
  ],
}

export default function AiAutomationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
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
            background: 'radial-gradient(circle, rgba(200,164,74,0.07) 0%, transparent 65%)',
            top: -200,
            right: -150,
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
                AI Automations
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
              Work smarter.<br />
              <em style={{ color: '#c8a44a' }}>Let AI handle the rest.</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 560,
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              Custom AI automations built for your business — from lead follow-up to appointment
              booking to review collection. We build it once, it works for you forever.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', marginBottom: 32 }}>
              Custom pricing per project. Most builds: $997–$4,997. Free discovery call to scope your project.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/#booking"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#c8a44a', color: '#080f1e' }}
              >
                Book Free Discovery Call →
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-4 rounded-lg border transition-all duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                View All Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#080f1e', padding: '48px 0' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { num: '2 min', label: 'avg response time with automated follow-up vs. 2+ hours manually' },
              { num: '+40%', label: 'fewer no-shows with automated appointment reminders' },
              { num: '24/7', label: "your AI chatbot works even when you're on a job" },
              { num: '1–3 wks', label: 'typical build time from kickoff to go-live' },
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
                  <div className="text-[12px] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              What We Build
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
              Six automations that pay<br />
              <em style={{ color: '#c8a44a' }}>for themselves fast.</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col"
                  style={{ borderColor: '#e9eaee' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 flex-shrink-0"
                    style={{ background: 'rgba(200,164,74,0.08)' }}
                  >
                    {uc.icon}
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
                    {uc.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed mb-4 flex-1" style={{ color: '#717d96' }}>
                    {uc.desc}
                  </p>
                  <div
                    className="rounded-lg p-3 text-[12px] leading-relaxed border-l-2"
                    style={{
                      background: 'rgba(200,164,74,0.05)',
                      borderLeftColor: '#c8a44a',
                      color: '#a8831e',
                    }}
                  >
                    <span className="font-semibold">Example: </span>{uc.example}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
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
              Custom pricing.<br />
              <em style={{ color: '#c8a44a' }}>Fixed quote before we start.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#717d96', maxWidth: 540, margin: '12px auto 0', lineHeight: 1.7 }}>
              Every automation is scoped and priced to your specific needs. No hourly billing,
              no surprises — you know the total before we touch a single line of code.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                range: '$997–$1,997',
                label: 'Simple Automation',
                desc: 'Single workflow: lead follow-up sequence, review collection, or appointment reminder system.',
                items: ['1 workflow automation', 'Connect 2–3 tools', '1-week build time', '30-day support included'],
              },
              {
                range: '$2,497–$3,997',
                label: 'Multi-Step System',
                desc: 'Multiple connected automations: chatbot + CRM + follow-up + booking in one integrated system.',
                items: ['2–4 connected workflows', 'Connect 4–6 tools', '2–3 week build time', '60-day support included'],
                popular: true,
              },
              {
                range: 'From $4,997',
                label: 'Full AI Stack',
                desc: 'Complete business automation: AI chatbot, full CRM integration, reporting, and custom workflows.',
                items: ['Unlimited workflows', 'Full tool integration', '3–6 week build time', 'Ongoing priority support'],
              },
            ].map((tier, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 border relative transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    background: tier.popular ? '#080f1e' : '#fff',
                    borderColor: tier.popular ? '#c8a44a' : '#e9eaee',
                    transform: tier.popular ? 'translateY(-6px)' : undefined,
                    boxShadow: tier.popular ? '0 24px 48px rgba(8,15,30,0.18)' : undefined,
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
                      color: tier.popular ? '#fff' : '#080f1e',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {tier.range}
                  </div>
                  <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{ color: tier.popular ? 'rgba(255,255,255,0.5)' : '#717d96' }}>
                    {tier.desc}
                  </p>
                  <div className="h-px mb-5" style={{ background: tier.popular ? 'rgba(255,255,255,0.08)' : '#e9eaee' }} />
                  <ul className="list-none space-y-2 mb-6">
                    {tier.items.map(item => (
                      <li key={item} className="flex gap-2.5 items-center text-[13px]" style={{ color: tier.popular ? 'rgba(255,255,255,0.6)' : '#717d96' }}>
                        <span className="flex items-center justify-center text-[9px] font-black flex-shrink-0 rounded-full" style={{ background: 'rgba(26,138,80,0.12)', color: '#1a8a50', width: 18, height: 18 }}>✓</span>
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
                        : { background: 'transparent', color: '#080f1e', borderColor: '#e9eaee' }
                    }
                  >
                    Get a Quote →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <p className="text-[14px]" style={{ color: '#a8aec0' }}>
              Not sure what you need? Book a free 45-minute discovery call and we'll map out the exact automations that will save you the most time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
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
              Live in 1–3 weeks
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border"
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
                  <h3 className="mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 19, fontWeight: 600, color: '#fff' }}>
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
              AI automation questions, <em style={{ color: '#c8a44a' }}>answered.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20" style={{ background: '#f8f8f6' }}>
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: '#c8a44a' }}>
              Related Services
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(28px,3.5vw,40px)',
                fontWeight: 600,
                color: '#080f1e',
                letterSpacing: '-1px',
              }}
            >
              Pair AI Automations with more services
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🗺️', title: 'Local SEO', href: '/services/local-seo', desc: 'Drive more leads to automate — rank higher on Google and fill your pipeline.' },
              { icon: '📱', title: 'Social Media Management', href: '/services/social-media', desc: 'Combine consistent social content with automated follow-up for maximum impact.' },
              { icon: '🌐', title: 'Website Design', href: '/services/website-design', desc: 'A fast, conversion-ready website is the best place to deploy your AI chatbot.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <a
                  href={s.href}
                  className="block p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  style={{ background: '#fff', borderColor: '#e9eaee' }}
                >
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 19, fontWeight: 600, color: '#080f1e' }}>
                    {s.title}
                  </h3>
                  <p className="text-[13px] mb-4 leading-relaxed" style={{ color: '#717d96' }}>{s.desc}</p>
                  <span className="text-[13px] font-bold" style={{ color: '#c8a44a' }}>Learn more →</span>
                </a>
              </Reveal>
            ))}
          </div>
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
              Let's automate your business.
            </h2>
            <p
              className="mb-9 mx-auto"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, lineHeight: 1.7 }}
            >
              Book a free 45-minute discovery call. We'll walk through your business and show you
              exactly which automations will save the most time and make you the most money.
            </p>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 text-[14px] font-bold px-9 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#c8a44a', color: '#080f1e' }}
            >
              Book Free Discovery Call →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
