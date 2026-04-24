'use client'

import { useState } from 'react'

export type PricingPlan = {
  name: string
  nickname: string
  monthlyPrice: number
  annualPrice: number
  popular?: boolean
  freeWebsite?: boolean
  features: string[]
  cta: string
}

type Props = {
  plans: PricingPlan[]
  dark?: boolean
  accentNote?: string
}

export function PricingCards({ plans, dark, accentNote }: Props) {
  const [annual, setAnnual] = useState(false)

  const bg = dark ? '#03080f' : '#f8f8f6'
  const cardLight = dark ? 'rgba(255,255,255,0.04)' : '#fff'
  const textMuted = dark ? 'rgba(255,255,255,0.4)' : '#a8aec0'

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span
          style={{
            fontSize: 14,
            fontWeight: annual ? 400 : 600,
            color: annual ? textMuted : dark ? '#fff' : '#080f1e',
          }}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(v => !v)}
          className="relative rounded-full transition-colors duration-200"
          style={{ width: 48, height: 24, background: annual ? '#1a8a50' : '#d1d5e0' }}
          aria-label="Toggle billing"
        >
          <span
            className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
            style={{ left: annual ? 28 : 4 }}
          />
        </button>
        <span
          style={{
            fontSize: 14,
            fontWeight: annual ? 600 : 400,
            color: annual ? dark ? '#fff' : '#080f1e' : textMuted,
          }}
        >
          Annual
          <span
            className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold"
            style={{ background: 'rgba(26,138,80,0.15)', color: '#1a6b3c' }}
          >
            Save ~10%
          </span>
        </span>
      </div>

      {annual && accentNote && (
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold border"
            style={{
              background: 'rgba(200,164,74,0.07)',
              borderColor: 'rgba(200,164,74,0.2)',
              color: '#c8a44a',
            }}
          >
            🎁 {accentNote}
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice
          const savings = (plan.monthlyPrice - plan.annualPrice) * 12
          const cardBg = plan.popular ? '#080f1e' : cardLight
          const cardBorder = plan.popular ? '#c8a44a' : dark ? 'rgba(255,255,255,0.08)' : '#e9eaee'
          const textColor = plan.popular ? '#fff' : dark ? '#fff' : '#080f1e'
          const subColor = plan.popular ? 'rgba(255,255,255,0.35)' : textMuted
          const featColor = plan.popular ? 'rgba(255,255,255,0.6)' : '#717d96'
          const divColor = plan.popular ? 'rgba(255,255,255,0.08)' : dark ? 'rgba(255,255,255,0.06)' : '#e9eaee'

          return (
            <div
              key={i}
              className="rounded-2xl p-9 relative border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: cardBg,
                borderColor: cardBorder,
                transform: plan.popular ? 'translateY(-8px) scale(1.02)' : undefined,
                boxShadow: plan.popular ? '0 32px 64px rgba(8,15,30,0.25)' : undefined,
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[2px] uppercase whitespace-nowrap"
                  style={{ background: '#c8a44a', color: '#080f1e' }}
                >
                  ⭐ Most Popular
                </div>
              )}

              <div className="text-[13px] font-bold tracking-[2px] uppercase mb-1" style={{ color: '#c8a44a' }}>
                {plan.name}
              </div>
              <div className="text-[13px] italic mb-6" style={{ color: subColor }}>
                {plan.nickname}
              </div>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 64,
                  fontWeight: 700,
                  color: textColor,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                <sup style={{ fontSize: 28, verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>
                  $
                </sup>
                {price}
              </div>
              <div className="text-[13px] mb-3" style={{ color: subColor }}>
                per month{annual ? ', billed annually' : ''}
              </div>

              {annual && savings > 0 && (
                <div
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: 'rgba(26,138,80,0.1)',
                    color: plan.popular ? '#4ade80' : '#1a6b3c',
                  }}
                >
                  💚 You save ${savings}/yr
                </div>
              )}

              {annual && plan.freeWebsite && (
                <div
                  className="rounded-xl p-3 mb-4 border text-[12px] font-semibold"
                  style={{
                    background: 'rgba(200,164,74,0.08)',
                    borderColor: 'rgba(200,164,74,0.2)',
                    color: '#c8a44a',
                  }}
                >
                  🎁 FREE 5-page website included
                </div>
              )}

              <div className="h-px my-5" style={{ background: divColor }} />

              <ul className="list-none mb-8 space-y-1">
                {plan.features.map(f => (
                  <li
                    key={f}
                    className="flex gap-2.5 items-start text-[13px] py-1.5 border-b last:border-0"
                    style={{ borderColor: divColor, color: featColor }}
                  >
                    <span
                      className="flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5 rounded-full"
                      style={{ background: 'rgba(26,138,80,0.12)', color: '#1a8a50', width: 18, height: 18 }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/#booking"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] tracking-wide transition-all duration-200 hover:-translate-y-0.5 border-2"
                style={
                  plan.popular
                    ? { background: '#c8a44a', color: '#080f1e', borderColor: '#c8a44a' }
                    : dark
                    ? { background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }
                    : { background: 'transparent', color: '#080f1e', borderColor: '#e9eaee' }
                }
              >
                {plan.cta}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
