'use client'

import { useEffect, useState } from 'react'
import { LogoIcon } from './LogoIcon'

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how' },
  { label: 'Services',     href: '/services' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Results',      href: '/results' },
  { label: 'FAQ',          href: '/faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const hasBg = scrolled || open

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 ${
          hasBg ? 'bg-[#080f1e]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
        }`}
      >
        <a href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.3px',
            }}
          >
            Visibility<span style={{ color: '#c8a44a' }}>Boost</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#booking"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
            style={{ background: '#c8a44a', color: '#080f1e' }}
          >
            Book Free Audit →
          </a>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            aria-label="Toggle navigation"
          >
            <span
              className="block h-0.5 bg-white rounded transition-all duration-300 origin-center"
              style={{ width: 20, transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block h-0.5 bg-white rounded transition-all duration-300"
              style={{ width: 16, opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-white rounded transition-all duration-300 origin-center"
              style={{ width: 20, transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed top-[72px] inset-x-0 z-40 md:hidden border-t"
          style={{ background: 'rgba(8,15,30,0.97)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <ul className="list-none m-0 p-0 px-6 py-3">
            {NAV_LINKS.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[15px] font-medium border-b transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="/#booking"
                onClick={() => setOpen(false)}
                className="block w-full text-center text-[14px] font-bold px-5 py-3.5 rounded-lg"
                style={{ background: '#c8a44a', color: '#080f1e' }}
              >
                Book Free Audit →
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
