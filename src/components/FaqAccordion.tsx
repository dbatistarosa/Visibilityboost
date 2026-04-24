'use client'

import { useState } from 'react'

export function FaqAccordion({ faqs, dark = false }: { faqs: [string, string][]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map(([q, a], i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden border transition-colors"
          style={{
            background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
            borderColor: open === i ? '#c8a44a' : dark ? 'rgba(255,255,255,0.08)' : '#e9eaee',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
            style={{ background: 'none' }}
          >
            <span className="font-medium text-[15px]" style={{ color: dark ? '#fff' : '#080f1e' }}>
              {q}
            </span>
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[14px] transition-all duration-300"
              style={{
                background: open === i ? '#faf5e6' : dark ? 'rgba(255,255,255,0.06)' : '#f5f6f8',
                color: open === i ? '#c8a44a' : '#a8aec0',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? 500 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p
              className="px-6 pb-5 pt-4 text-[14px] leading-relaxed border-t"
              style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#717d96', borderColor: dark ? 'rgba(255,255,255,0.06)' : '#f5f6f8' }}
            >
              {a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
