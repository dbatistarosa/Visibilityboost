'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoIcon } from './LogoIcon'

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how' },
  { label: 'Services',     href: '/services' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Results',      href: '/results' },
  { label: 'FAQ',          href: '/faq' },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const spring = { type: 'spring' as const, stiffness: 400, damping: 30 }

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
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 ${
          hasBg ? 'bg-[#080f1e]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
        }`}
      >
        <a href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px' }}>
            Visibility<span style={{ color: '#c8a44a' }}>Boost</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((item, i) => (
            <li key={item.label}>
              <motion.a
                href={item.href}
                className="text-[13px] font-medium text-white/60"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.07 }}
                whileHover={{ color: '#ffffff', y: -1 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.a
            href="/#booking"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-bold px-5 py-2.5 rounded-lg"
            style={{ background: '#c8a44a', color: '#080f1e' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.55 }}
            whileHover={{ y: -2, scale: 1.03, boxShadow: '0 6px 20px rgba(200,164,74,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Free Audit →
          </motion.a>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            aria-label="Toggle navigation"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={spring}
              className="block h-0.5 bg-white rounded"
              style={{ width: 20 }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={spring}
              className="block h-0.5 bg-white rounded"
              style={{ width: 16 }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={spring}
              className="block h-0.5 bg-white rounded"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed top-[72px] inset-x-0 z-40 md:hidden border-t"
            style={{ background: 'rgba(8,15,30,0.97)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease }}
          >
            <ul className="list-none m-0 p-0 px-6 py-3">
              {NAV_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease, delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-[15px] font-medium border-b transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease, delay: NAV_LINKS.length * 0.05 }}
                className="pt-4 pb-2"
              >
                <a
                  href="/#booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center text-[14px] font-bold px-5 py-3.5 rounded-lg"
                  style={{ background: '#c8a44a', color: '#080f1e' }}
                >
                  Book Free Audit →
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
