import { LogoIcon } from './LogoIcon'

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Local SEO',               href: '/services/local-seo' },
      { label: 'Google Business Profile', href: '/services/local-seo' },
      { label: 'Social Media',            href: '/services/social-media' },
      { label: 'Website Design',          href: '/services/website-design' },
      { label: 'AI Automations',          href: '/services/ai-automations' },
      { label: 'Review Management',       href: '/services/local-seo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '/#how' },
      { label: 'Results',      href: '/results' },
      { label: 'Pricing',      href: '/pricing' },
      { label: 'FAQ',          href: '/faq' },
      { label: 'Book Audit',   href: '/#booking' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@visibilityboost.com', href: 'mailto:hello@visibilityboost.com' },
      { label: 'Book a Call',               href: '/#booking' },
      { label: 'LinkedIn',                  href: '#' },
      { label: 'Instagram',                 href: '#' },
      { label: 'Facebook',                  href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      style={{
        background: '#03080f',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <a href="/" className="inline-flex items-center gap-3 mb-4">
              <LogoIcon />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                Visibility<span style={{ color: '#c8a44a' }}>Boost</span>
              </span>
            </a>
            <p
              className="text-[14px] leading-relaxed max-w-[260px]"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              We make local businesses impossible to ignore. Local SEO, social media, and web design
              — all in one place, at a price that makes sense.
            </p>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <h4
                className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 space-y-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] transition-colors hover:text-[#c8a44a]"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between items-center flex-wrap gap-4 pt-7 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2026 VisibilityBoost LLC · All rights reserved · Serving local businesses across the
            United States
          </p>
          <div className="flex gap-3">
            {['in', 'ig', 'fb', 'X'].map(s => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center border text-[14px] transition-all hover:text-[#c8a44a]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
