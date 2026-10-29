export default function MeterBar({ label, value, unit = '', min = -30, max = 0, warn, danger }) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const color =
    value >= (danger ?? Infinity) ? 'var(--danger)' :
    value >= (warn ?? Infinity) ? 'var(--warning)' :
    'var(--success)';

  return (
    <div className="flex-1">
      <div className="flex justify-between text-[11px] mb-1" style={{ color: 'var(--text-secondary)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--text-primary)' }}>{value}{unit}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}