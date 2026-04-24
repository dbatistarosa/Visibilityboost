export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size, background: '#c8a44a', borderRadius: size * 0.22 }}
      className="flex items-end justify-center gap-[3px] pb-[6px] px-[8px] flex-shrink-0"
    >
      <div style={{ width: 4, height: size * 0.28, background: '#080f1e', borderRadius: 2 }} />
      <div style={{ width: 4, height: size * 0.44, background: '#080f1e', borderRadius: 2 }} />
      <div style={{ width: 4, height: size * 0.6,  background: '#080f1e', borderRadius: 2 }} />
    </div>
  )
}
