import { useState } from 'react';

export default function TransportBar({ disabled }) {
  const [playing, setPlaying] = useState(false);
  const [ab, setAb] = useState('master');

  return (
    <div className="flex items-center justify-between px-6 py-2">
      <div className="flex items-center gap-3">
        <button
          disabled={disabled}
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          {playing ? '⏸' : '▶️'}
        </button>
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          00:00 / 00:00
        </span>
      </div>

      <div className="flex items-center gap-1 p-1 rounded-lg" style={{ background: 'var(--bg-panel)' }}>
        {['original', 'master'].map((mode) => (
          <button
            key={mode}
            onClick={() => setAb(mode)}
            className="px-3 py-1 rounded-md text-xs font-medium capitalize"
            style={{
              background: ab === mode ? 'var(--bg-elevated)' : 'transparent',
              color: ab === mode ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            {mode === 'original' ? 'A' : 'B'}
          </button>
        ))}
      </div>
    </div>
  );
}