'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { ScrollTop } from '@/components/ScrollTop'

/* ── Ticker ── */
function Ticker() {
  const items = ['Local SEO','Google Business Profile','Social Media Management','Free Website with Annual Plan','Citation Building','Review Management','Monthly Plain-English Reports','No Long-Term Contracts','Results in 30–60 Days']
  const doubled = [...items, ...items]
  return (
    <div className="ticker-wrap" style={{ background: '#c8a44a', padding: '14px 0', overflow: 'hidden' }}>
      <div className="ticker-inner" style={{ animation: 'ticker 30s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-8 text-[11px] font-bold tracking-[2px] uppercase" style={{ color: '#080f1e' }}>
            {item}
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(8,15,30,0.3)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16" style={{ background: '#03080f' }}>
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,164,74,0.1) 0%, transparent 65%)', top: -200, right: -200 }} />
      <div className="absolute pointer-events-none" style={{ width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,47,88,0.5) 0%, transparent 70%)', bottom: -100, left: -100 }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-7 animate-fadeUp">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a44a', animation: 'pulse-gold 2s infinite' }} />
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: '#c8a44a' }}>
                Local SEO · Social Media · Web Design
              </span>
            </div>

            <h1 className="animate-fadeUp delay-2 mb-7" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(48px,6vw,76px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-2px' }}>
              We make your<br />
              business{' '}
              <span className="relative inline-block" style={{ color: '#c8a44a' }}>
                impossible
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-[2px] progress-bar" style={{ background: '#c8a44a' }} />
              </span>
              <br />
              to <em>ignore.</em>
            </h1>

            <p className="animate-fadeUp delay-3 mb-11" style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 520 }}>
              When someone in your city searches for your service,{' '}
              <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>they should find you first.</strong>{' '}
              We handle the Google stuff, the social media, and the website —
              so you can focus on running your business.
            </p>

            <div className="animate-fadeUp delay-4 flex gap-3 flex-wrap mb-10">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#c8a44a', color: '#080f1e', boxShadow: '0 4px 16px rgba(200,164,74,0.2)' }}
              >
                Book Free Audit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-4 rounded-lg transition-all duration-200 hover:text-white border"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.12)', background: 'transparent' }}
              >
                See Packages
              </a>
            </div>

            <div className="animate-fadeUp delay-5 flex items-center gap-4 flex-wrap">
              <div>
                <div style={{ color: '#c8a44a', fontSize: 16, lineHeight: 1 }}>★★★★★</div>
                <div className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Trusted by <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>local businesses</strong></div>
              </div>
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} />
              <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}><strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>No contracts.</strong> Cancel anytime.</div>
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} />
              <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Results in <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>30–60 days</strong></div>
            </div>
          </div>

          {/* Right — Results Card */}
          <div className="hidden md:block animate-fadeUp delay-5">
            <div className="rounded-2xl p-8 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="text-[11px] font-bold tracking-[2px] uppercase mb-6" style={{ color: '#c8a44a' }}>
                📊 Live Client Results — This Month
              </div>
              {[
                { icon: '🔍', label: 'Google Profile Views', value: '14,280', delta: '+312%' },
                { icon: '📞', label: 'Inbound Calls from Google', value: '47 calls', delta: '+180%' },
                { icon: '⭐', label: 'Google Star Rating', value: '4.9 ★', delta: 'was 3.4' },
                { icon: '📱', label: 'Social Reach This Month', value: '28,400', delta: '+94%' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b last:border-0 last:pb-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0 text-xl" style={{ background: 'rgba(200,164,74,0.12)' }}>{r.icon}</div>
                  <div>
                    <div className="text-[12px] mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.label}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{r.value}</div>
                  </div>
                  <div className="ml-auto text-[12px] font-bold px-2 py-1 rounded" style={{ color: '#4ade80', background: 'rgba(26,138,80,0.1)' }}>{r.delta}</div>
                </div>
              ))}
              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex justify-between text-[11px] mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <span>Google Ranking Progress</span>
                  <span style={{ color: '#c8a44a' }}>Page 1 ↑</span>
                </div>
                <div className="rounded h-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded progress-bar" style={{ width: '82%', background: 'linear-gradient(90deg, #c8a44a, #debb71)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Problem ── */
function Problem() {
  const pains = [
    'Your Google listing is incomplete — missing photos, wrong hours, no description. Google buries it.',
    'You have 3–10 reviews while competitors have 200+. Customers trust numbers.',
    'Social media is dead or inconsistent. People check it before they call. Silence = distrust.',
    'No time to fix any of this — you\'re busy running your actual business. That\'s what we\'re for.',
  ]
  return (
    <section id="problem" className="py-24" style={{ background: '#f8f8f6' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color: '#c8a44a' }}>The Problem</p>
            <h2 className="mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#080f1e', letterSpacing: '-1px', lineHeight: 1.05 }}>
              Your competitors are getting<br />your customers <em style={{ color: '#c8a44a' }}>right now.</em>
            </h2>
            <p className="mb-4" style={{ fontSize: 16, fontWeight: 300, color: '#717d96', lineHeight: 1.8 }}>
              97% of people search Google before calling a local business. If you're not showing up on the first page — those calls, those jobs, that revenue is going to someone else.
            </p>
            <p style={{ fontSize: 16, fontWeight: 300, color: '#717d96', lineHeight: 1.8 }}>
              <strong style={{ color: '#080f1e', fontWeight: 500 }}>That's not a small thing.</strong> Every day you're not visible is a day your competitors are taking customers that should be yours.
            </p>
            <ul className="mt-7 list-none">
              {pains.map((p, i) => (
                <li key={i} className="flex gap-3.5 py-3.5 border-b last:border-0" style={{ borderColor: '#e9eaee' }}>
                  <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0 mt-0.5" style={{ background: 'rgba(220,38,38,0.08)', color: '#dc2626' }}>✕</div>
                  <div className="text-[14px] leading-relaxed" style={{ color: '#717d96' }} dangerouslySetInnerHTML={{ __html: p.replace(/(.+?)(—)(.+)/, '<strong style="color:#080f1e;font-weight:500">$1</strong>$2$3') }} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border shadow-xl" style={{ borderColor: '#e9eaee', background: '#fff' }}>
              <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ background: '#f5f6f8', borderColor: '#e9eaee' }}>
                <span className="text-[13px]" style={{ color: '#a8aec0' }}>🔍</span>
                <div className="flex-1 rounded-full px-3.5 py-1.5 text-[13px] border" style={{ background: '#fff', borderColor: '#d2d5de', color: '#080f1e' }}>plumber near me</div>
              </div>
              {[
                { pos: '#1 Result — Google Maps', name: "Mike's Plumbing Co. ⭐ 4.9 (312 reviews)", url: '✓ mikesplumbing.com · Opens at 7AM', desc: 'Emergency plumbing 24/7. Serving your city for 15 years. Licensed & insured.', yours: false },
                { pos: '#2 Result', name: 'Pro Plumbing Services ⭐ 4.7 (189 reviews)', url: '✓ proplumbing.com · Open now', desc: 'Fast, reliable, affordable. Free estimates. Serving residential and commercial clients.', yours: false },
                { pos: '#8 Result — Page 2+', name: 'Your Business Name ⭐ 3.4 (7 reviews)', url: '✓ yourbusiness.com · Hours not listed', desc: 'We provide quality plumbing services.', yours: true },
              ].map((r, i) => (
                <div key={i} className="px-5 py-4 border-b last:border-0" style={{ borderColor: '#f5f6f8', background: r.yours ? 'linear-gradient(90deg,rgba(200,164,74,0.06),transparent)' : undefined, borderLeft: r.yours ? '2px solid #c8a44a' : undefined }}>
                  <div className="text-[10px] font-bold tracking-wide uppercase mb-1" style={{ color: '#a8aec0' }}>
                    {r.pos}
                    {r.yours && <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-black" style={{ background: '#c8a44a', color: '#080f1e' }}>This is you</span>}
                  </div>
                  <div className="text-[14px] font-semibold mb-0.5" style={{ color: '#1a73e8' }}>{r.name}</div>
                  <div className="text-[11px] mb-1" style={{ color: '#188038' }}>{r.url}</div>
                  <div className="text-[12px] leading-relaxed" style={{ color: '#717d96' }}>{r.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-center mt-5 text-[13px]" style={{ color: '#a8aec0' }}>
              70% of clicks go to the top 3 results. <strong style={{ color: '#080f1e' }}>We get you there.</strong>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Stats ── */
function Stats() {
  const stats = [
    { num: '97', suffix: '%', label: 'of people search\nGoogle before calling' },
    { num: '+312', suffix: '%', label: 'avg increase in\nGoogle profile views' },
    { num: '47', suffix: '', label: 'days to first\nmeasurable results' },
    { num: '$0', suffix: '', label: 'you do — we handle\neverything for you' },
  ]
  return (
    <section style={{ background: '#080f1e', padding: '80px 0' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="py-10 px-8 text-center border-r last:border-r-0 border-b md:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 56, fontWeight: 700, color: '#c8a44a', lineHeight: 1, marginBottom: 8 }}>
                  {s.num}{s.suffix}
                </div>
                <div className="text-[13px] font-light leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { n: '1', emoji: '📋', title: 'We Audit Your Presence', body: 'Book a free 15-minute call. We look at your Google listing, your reviews, your social media, and your website. We find exactly what\'s holding you back — and show you, live on the call.' },
    { n: '2', emoji: '🔧', title: 'We Fix & Build Everything', body: 'We optimize your Google Business Profile, build your local SEO foundation, set up your social media system, and — if you\'re on an annual plan — build your website.' },
    { n: '3', emoji: '📈', title: 'You Watch the Numbers Grow', body: 'Every month you get a plain-English report: how many people found you on Google, how many called, how your reviews improved. No tech jargon. Just results.' },
  ]
  return (
    <section id="how" className="py-28" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>How It Works</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#080f1e', letterSpacing: '-1px', marginBottom: 16 }}>
            Simple as <em style={{ color: '#c8a44a' }}>1, 2, 3.</em>
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: '#717d96', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            No complicated onboarding. No tech talk. You'll be up and running in less than a week.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute h-px" style={{ top: 48, left: '20%', right: '20%', background: 'linear-gradient(90deg, transparent, #c8a44a, transparent)' }} />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="text-center p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#c8a44a] group" style={{ borderColor: '#e9eaee' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative border" style={{ background: '#faf5e6', borderColor: 'rgba(200,164,74,0.2)' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 700, color: '#c8a44a' }}>{s.n}</span>
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow" style={{ background: '#fff' }}>{s.emoji}</span>
                </div>
                <h3 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#080f1e' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#717d96', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Services ── */
function Services() {
  return (
    <section id="services" className="py-28" style={{ background: '#080f1e' }}>
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>Our Services</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#fff', letterSpacing: '-1px' }}>
            Everything you need.<br /><em style={{ color: '#c8a44a' }}>Nothing you don't.</em>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured */}
          <Reveal className="md:col-span-2">
            <div className="rounded-2xl p-9 border grid md:grid-cols-[1fr_auto] gap-8 items-start group hover:-translate-y-1 transition-all duration-300" style={{ background: 'rgba(200,164,74,0.05)', borderColor: 'rgba(200,164,74,0.15)' }}>
              <div>
                <div className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: 'rgba(200,164,74,0.1)', width: 52, height: 52 }}>🗺️</div>
                <h3 className="mb-2.5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#fff' }}>Local SEO & Google Domination</h3>
                <p className="mb-4" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>When someone in your city searches for your service, your name appears first. We handle everything that makes Google trust and rank you.</p>
                <ul className="list-none space-y-1.5">
                  {['Google Business Profile full optimization','Local keyword research & on-page SEO','Citation building (50+ directories)','Review management & response system','Competitor analysis & gap strategy','Monthly ranking reports'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <span style={{ color: '#c8a44a', fontSize: 11 }}>↗</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right hidden md:block">
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 72, fontWeight: 700, color: 'rgba(200,164,74,0.12)', lineHeight: 1 }}>#1</div>
                <div className="text-[12px] mt-1.5" style={{ color: 'rgba(255,255,255,0.25)' }}>our goal<br />for you</div>
              </div>
            </div>
          </Reveal>

          {[
            { icon: '📱', title: 'Social Media Management', desc: 'Consistent, professional content on the platforms where your customers actually are. We create, schedule, and post everything — you just approve.', items: ['8–24 posts/month (plan dependent)','Facebook, Instagram & Google Posts','Short-form video / Reels editing','Caption writing & hashtag strategy','Community engagement monitoring'] },
            { icon: '🌐', title: 'Website Design', desc: 'A fast, beautiful, mobile-first website built to convert visitors into calls. Included free with any annual plan — no catch.', items: ['5-page professional website','Mobile-first, fast-loading design','Contact form + click-to-call','SEO-optimized from day one','You own it completely, forever'] },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="rounded-2xl p-9 border hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="absolute bottom-0 left-0 h-0.5 group-hover:w-full w-0 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #c8a44a, transparent)' }} />
                <div className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: 'rgba(200,164,74,0.1)', width: 52, height: 52 }}>{s.icon}</div>
                <h3 className="mb-2.5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#fff' }}>{s.title}</h3>
                <p className="mb-4" style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{s.desc}</p>
                <ul className="list-none space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <span style={{ color: '#c8a44a', fontSize: 11 }}>↗</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Packages ── */
function Packages() {
  const plans = [
    {
      name: 'Starter', nickname: '"Put me on the map"', price: 297, popular: false,
      freeNote: null,
      features: ['Google Business Profile setup & optimization','Local keyword research','8 social media posts/month','Review request system setup','Monthly plain-English report','Email support'],
    },
    {
      name: 'Growth', nickname: '"Dominate my area"', price: 597, popular: true,
      freeNote: '🎁 FREE 5-page website with annual plan',
      features: ['Everything in Starter, plus:','Full local SEO management','16 social posts/month','2 Reels/short videos/month','Competitor analysis','Citation building (20+ dirs)','Monthly 30-min strategy call'],
    },
    {
      name: 'Authority', nickname: '"#1 in my city"', price: 997, popular: false,
      freeNote: '🎁 FREE website + SEO audit ($800 value)',
      features: ['Everything in Growth, plus:','2 SEO blog posts/month','24 social posts/month','4 Reels/videos/month','Link building strategy','Email newsletter setup','Priority support (4hr response)'],
    },
  ]
  return (
    <section id="packages" className="py-28" style={{ background: '#f8f8f6' }}>
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>Pricing</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#080f1e', letterSpacing: '-1px', marginBottom: 16 }}>
            Honest pricing.<br /><em style={{ color: '#c8a44a' }}>No surprises.</em>
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: '#717d96', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Pick the plan that fits where you are right now. Upgrade or cancel anytime. No hidden fees, ever.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
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
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[2px] uppercase whitespace-nowrap" style={{ background: '#c8a44a', color: '#080f1e' }}>
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-[13px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: '#c8a44a' }}>{p.name}</div>
                <div className="text-[13px] italic mb-6" style={{ color: p.popular ? 'rgba(255,255,255,0.35)' : '#a8aec0' }}>{p.nickname}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 64, fontWeight: 700, color: p.popular ? '#fff' : '#080f1e', lineHeight: 1, marginBottom: 4 }}>
                  <sup style={{ fontSize: 28, verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>$</sup>{p.price}
                </div>
                <div className="text-[13px] mb-1.5" style={{ color: p.popular ? 'rgba(255,255,255,0.35)' : '#a8aec0' }}>per month</div>
                <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full mb-7" style={{ background: 'rgba(26,138,80,0.1)', color: p.popular ? '#4ade80' : '#1a6b3c' }}>
                  💚 Annual: save ${(p.price * 12 * 0.1).toFixed(0)}/yr
                </div>
                {p.freeNote && (
                  <div className="rounded-xl p-3.5 mb-5 flex items-center gap-2 text-[13px] font-semibold border" style={{ background: 'rgba(200,164,74,0.08)', borderColor: 'rgba(200,164,74,0.15)', color: '#c8a44a' }}>
                    {p.freeNote}
                  </div>
                )}
                <div className="h-px mb-6" style={{ background: p.popular ? 'rgba(255,255,255,0.08)' : '#e9eaee' }} />
                <ul className="list-none mb-8 space-y-2">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-2.5 items-start text-[13px] py-2 border-b last:border-0" style={{ borderColor: p.popular ? 'rgba(255,255,255,0.05)' : '#f5f6f8', color: p.popular ? 'rgba(255,255,255,0.6)' : '#717d96' }}>
                      <span className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5" style={{ background: 'rgba(26,138,80,0.1)', color: '#1a8a50', width: 18, height: 18 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] tracking-wide transition-all duration-200 hover:-translate-y-0.5 border-2"
                  style={p.popular
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
            Not sure which plan? <a href="#booking" style={{ color: '#c8a44a', fontWeight: 600 }}>Book a free audit</a> and we'll tell you exactly what you need — no upsell, just honest advice.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Results ── */
function Results() {
  const cards = [
    { biz: 'HVAC Company · Month 3', big: '+312%', what: 'Google profile views', pct: 85, quote: '"We went from 2 Google calls a week to 8–10. The difference was insane for us."' },
    { biz: 'Law Firm · Month 6', big: '4.9★', what: 'Google rating (was 3.4)', pct: 92, quote: '"Our old reviews were killing us. VisibilityBoost fixed our reputation in 2 months."' },
    { biz: 'Cleaning Service · Month 4', big: '+180%', what: 'Inbound calls from Google', pct: 72, quote: '"I used to get maybe 5 Google calls a month. Now I get 14–17. We had to hire a second crew."' },
  ]
  return (
    <section id="results" className="py-24" style={{ background: '#03080f' }}>
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>Real Results</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#fff', letterSpacing: '-1px', marginBottom: 16 }}>
            Numbers don't lie.<br /><em style={{ color: '#c8a44a' }}>Neither do we.</em>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.4)', maxWidth: 560, lineHeight: 1.7 }}>
            Every result below is from a real local business. We document everything so you can see exactly what's possible.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(200,164,74,0.2)]" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="text-[11px] font-bold tracking-[2px] uppercase mb-5 flex items-center gap-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  <span className="w-7 h-7 rounded-full inline-block" style={{ background: 'rgba(200,164,74,0.15)' }} />
                  {c.biz}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 52, fontWeight: 700, color: '#c8a44a', lineHeight: 1, marginBottom: 6 }}>{c.big}</div>
                <div className="text-[13px] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.what}</div>
                <div className="rounded h-1 overflow-hidden mb-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded progress-bar" style={{ width: `${c.pct}%`, background: 'linear-gradient(90deg, #c8a44a, #debb71)' }} />
                </div>
                <div className="flex justify-between text-[11px] mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  <span>Before</span><span>After</span>
                </div>
                <div className="text-[13px] italic leading-relaxed pt-4 border-t" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.06)' }}>{c.quote}</div>
                <div className="mt-2 text-[12px]" style={{ color: '#c8a44a' }}>★★★★★</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-6">
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.2)' }}>Results vary by industry, location, and competition. We'll show you realistic expectations for your specific market on our free audit call.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Booking Form ── */
function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['fname','lname','email','business']
    const newErrors: Record<string,boolean> = {}
    required.forEach(id => {
      const el = document.getElementById(id) as HTMLInputElement
      if (!el?.value.trim()) newErrors[id] = true
    })
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setSubmitted(true)
  }

  const inputStyle = (id: string) => ({
    width: '100%', background: 'rgba(255,255,255,0.05)', border: `1px solid ${errors[id] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 10, padding: '13px 16px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#fff', outline: 'none',
  })

  return (
    <section id="booking" className="py-28" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_520px] gap-16 lg:gap-20 items-start">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>Free Audit Call</p>
            <h2 className="mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#080f1e', letterSpacing: '-1px', lineHeight: 1.05 }}>
              Let's find your<br /><em style={{ color: '#c8a44a' }}>hidden opportunities.</em>
            </h2>
            <p className="mb-8" style={{ fontSize: 15, fontWeight: 300, color: '#717d96', lineHeight: 1.8 }}>
              In 15 minutes, we'll look at your Google presence live and show you exactly what's missing, what your competitors are doing better, and what we'd fix first. No pitch. Just honest data.
            </p>
            <ul className="list-none">
              {[
                '100% free — no credit card, no obligation',
                '15-minute call, we do all the analysis',
                'You\'ll leave with 3 things to fix even if you don\'t work with us',
                'No pushy sales tactics — ever',
                'We respond within 2 business hours',
              ].map(p => (
                <li key={p} className="flex items-center gap-3 py-3 border-b last:border-0 text-[14px]" style={{ borderColor: '#f5f6f8', color: '#080f1e' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0" style={{ background: 'rgba(26,138,80,0.08)', color: '#1a8a50' }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl p-11 border" style={{ background: '#080f1e', borderColor: 'rgba(255,255,255,0.06)' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Book Your Free Audit</h3>
                  <p className="text-[13px] mb-8" style={{ color: 'rgba(255,255,255,0.35)' }}>We'll reply within 2 business hours with your audit link.</p>
                  <div className="grid grid-cols-2 gap-3.5 mb-4.5">
                    {[{id:'fname',label:'First Name',placeholder:'John'},{id:'lname',label:'Last Name',placeholder:'Smith'}].map(f => (
                      <div key={f.id}>
                        <label className="block text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{f.label} *</label>
                        <input id={f.id} type="text" placeholder={f.placeholder} style={inputStyle(f.id)} />
                      </div>
                    ))}
                  </div>
                  {[
                    {id:'email',label:'Business Email',placeholder:'john@yourbusiness.com',type:'email'},
                    {id:'phone',label:'Phone Number',placeholder:'(555) 000-0000',type:'tel'},
                    {id:'business',label:'Business Name',placeholder:'Smith Plumbing LLC',type:'text'},
                  ].map(f => (
                    <div key={f.id} style={{ marginBottom: 16 }}>
                      <label className="block text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{f.label} {f.id !== 'phone' ? '*' : ''}</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder} style={inputStyle(f.id)} />
                    </div>
                  ))}
                  <div style={{ marginBottom: 16 }}>
                    <label className="block text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Your Industry</label>
                    <select style={{ ...inputStyle(''), cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>
                      <option value="">Select your business type...</option>
                      {['Plumbing / HVAC / Electrical','Legal Services','Medical / Dental / Health','Cleaning Services','Landscaping / Lawn Care','Construction / Contracting','Accounting / Finance','Real Estate','Restaurant / Food','Retail / Shop','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label className="block text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Biggest Marketing Challenge</label>
                    <textarea placeholder="e.g. We don't show up on Google, we have no reviews..." style={{ ...inputStyle(''), resize: 'vertical', minHeight: 80 }} />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-extrabold text-[14px] tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: '#c8a44a', color: '#080f1e' }}
                  >
                    Book My Free Audit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <p className="text-center text-[11px] mt-3" style={{ color: 'rgba(255,255,255,0.2)', lineHeight: 1.6 }}>🔒 We never share your information.</p>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5" style={{ background: 'rgba(26,138,80,0.15)', color: '#4ade80' }}>✓</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, color: '#fff', marginBottom: 12 }}>You're Booked!</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>We'll send your audit link within 2 business hours. Check your email — and your spam folder just in case.<br /><br /><strong style={{ color: 'rgba(255,255,255,0.6)' }}>While you wait:</strong> take a screenshot of your Google Business Profile. We'll look at it together on the call.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    ['How fast will I see results?','Most clients see measurable movement in their Google profile views and rankings within 30–60 days. Review improvements typically happen in 45–90 days. Full SEO results compound over 3–6 months — that\'s just how Google works, and anyone who promises overnight results is lying to you.'],
    ['Do I have to sign a long contract?','Month-to-month plans have no contract — cancel with 30 days notice. Annual plans are 12-month commitments (which is what unlocks the free website), but you save significantly and we\'re confident you\'ll love the results.'],
    ['What exactly is included in the free website?','A professionally designed, mobile-first, 5-page website: Home, About, Services, Testimonials/Reviews, and Contact. Fully SEO-optimized from day one. You own it completely — files, domain access, everything.'],
    ['Will I need to do a lot of work?','Almost none. We\'ll need a 30-minute kickoff call at the start, your logo, and access to your Google and social media accounts. After that, we do everything.'],
    ['Do I own my accounts if I cancel?','Absolutely, 100%. Every account we manage belongs to you. We never hold anything hostage. If you cancel, we transfer everything to you within 5 business days of final payment.'],
    ['Can you guarantee Google rankings?','No — and we\'d be lying if we did. Nobody controls Google\'s algorithm. What we can guarantee is consistent, professional execution of proven local SEO practices and honest monthly reporting.'],
    ['What industries do you work with?','We work with any local B2B service business: plumbers, HVAC, electricians, lawyers, accountants, chiropractors, dentists, cleaners, landscapers, contractors, real estate agents, and more.'],
    ['How is VisibilityBoost different from other agencies?','Three things: (1) Plain English — no tech jargon. (2) You own everything we create from day one. (3) We\'re priced for local businesses — most agencies charge $1,500–$5,000/month for what we do at $297–$997.'],
  ]
  return (
    <section id="faq" className="py-24" style={{ background: '#f8f8f6' }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase mb-3.5" style={{ color: '#c8a44a' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px,4vw,52px)', fontWeight: 600, color: '#080f1e', letterSpacing: '-1px' }}>
            Questions we hear<br /><em style={{ color: '#c8a44a' }}>all the time.</em>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map(([q, a], i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <div className="rounded-2xl overflow-hidden border transition-colors" style={{ background: '#fff', borderColor: open === i ? '#c8a44a' : '#e9eaee' }}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-6 py-5 text-left gap-4" style={{ background: 'none' }}>
                  <span className="font-medium text-[15px]" style={{ color: '#080f1e' }}>{q}</span>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[14px] transition-all duration-300" style={{ background: open === i ? '#faf5e6' : '#f5f6f8', color: open === i ? '#c8a44a' : '#a8aec0', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
                  <p className="px-6 pb-5 pt-4 text-[14px] leading-relaxed border-t" style={{ color: '#717d96', borderColor: '#f5f6f8' }}>{a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="py-28 text-center relative overflow-hidden" style={{ background: '#080f1e' }}>
      <div className="absolute pointer-events-none" style={{ top: -200, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,164,74,0.1) 0%, transparent 70%)' }} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border text-[12px] font-semibold tracking-wide uppercase" style={{ background: 'rgba(200,164,74,0.08)', borderColor: 'rgba(200,164,74,0.2)', color: '#c8a44a' }}>
            🚀 Limited spots available each month
          </div>
          <h2 className="mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(42px,5vw,68px)', fontWeight: 600, color: '#fff', letterSpacing: '-2px', lineHeight: 1.05 }}>
            Your competitors<br />won't wait. <em style={{ color: '#c8a44a' }}>Neither should you.</em>
          </h2>
          <p className="mb-11 mx-auto" style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)', maxWidth: 540, lineHeight: 1.7 }}>
            Every month you're invisible on Google is revenue you're leaving on the table. Let's fix that — starting with a free, no-obligation audit call this week.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#booking" className="inline-flex items-center gap-2 text-[15px] font-bold px-9 py-4.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#c8a44a', color: '#080f1e', padding: '18px 36px' }}>
              Book Free Audit Now →
            </a>
            <a href="mailto:hello@visibilityboost.com" className="inline-flex items-center gap-2 text-[15px] font-medium px-7 py-4.5 rounded-xl border transition-all duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)', padding: '18px 28px' }}>
              Email Us Instead
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── PAGE ── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Problem />
      <Stats />
      <HowItWorks />
      <Services />
      <Packages />
      <Results />
      <Booking />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollTop />
    </>
  )
}
