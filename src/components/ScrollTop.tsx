'use client'

import { useEffect, useState } from 'react'

export function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold z-50 transition-all duration-200 hover:-translate-y-0.5"
      style={{ background: '#c8a44a', color: '#080f1e' }}
    >
      ↑
    </button>
  )
}
