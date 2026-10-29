export default function Knob({ label, value = 50, min = 0, max = 100 }) {
  const angle = -135 + (value / (max - min)) * 270;
  const pct = (value / (max - min)) * 270;

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-12 h-12 rounded-full relative"
        style={{
          background: `conic-gradient(from 225deg, var(--accent) 0deg, var(--accent) ${pct}deg, var(--bg-elevated) ${pct}deg)`,
        }}
      >
        <div
          className="absolute inset-1.5 rounded-full flex items-center justify-center"
          style={{ background: 'var(--bg-panel)' }}
        >
          <div
            className="w-0.5 h-4 bg-white rounded-full origin-bottom"
            style={{ transform: `rotate(${angle}deg) translateY(-2px)` }}
          />
        </div>
      </div>
      <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{label}</span>
    </div>
  );
}