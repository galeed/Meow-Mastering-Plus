import { useState } from 'react';

export default function EffectCard({ title, children, enabledDefault = true }) {
  const [enabled, setEnabled] = useState(enabledDefault);
  const [open, setOpen] = useState(true);

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ background: 'var(--bg-panel)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEnabled(!enabled)}
            className="w-8 h-4 rounded-full relative transition-colors"
            style={{ background: enabled ? 'var(--accent)' : 'var(--border)' }}
          >
            <span
              className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform"
              style={{ left: enabled ? '18px' : '2px' }}
            />
          </button>
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {open ? '⌃' : '⌄'}
        </button>
      </div>
      {open && (
        <div className={`p-4 ${enabled ? '' : 'opacity-40 pointer-events-none'}`}>
          {children}
        </div>
      )}
    </div>
  );
}