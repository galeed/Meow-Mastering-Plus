import { useState } from 'react';
import FileLoader from './FileLoader';
import Waveform from './Waveform';
import PresetButton from './PresetButton';

const PRESETS = [
  { id: 'universal', icon: '🌐', name: 'Universal', color: '#4f8cff' },
  { id: 'fire', icon: '🔥', name: 'Fire', color: '#ff7a45' },
  { id: 'clarity', icon: '💎', name: 'Clarity', color: '#22d3a5' },
  { id: 'tape', icon: '📼', name: 'Tape', color: '#c9a36b' },
];

export default function FinishingTab({ audioFile, setAudioFile }) {
  const [preset, setPreset] = useState('universal');
  const [intensity, setIntensity] = useState(50);
  const [eq, setEq] = useState({ low: 50, mid: 50, high: 50 });

  return (
    <div className="flex flex-col">
      <FileLoader audioFile={audioFile} onLoad={setAudioFile} />

      <div className="px-6 py-4">
        <Waveform audioFile={audioFile} height={150} showAB={false} />
      </div>

      <div className="px-6 py-4">
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
          Elige tu estilo:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRESETS.map((p) => (
            <PresetButton key={p.id} {...p} active={preset === p.id} onClick={() => setPreset(p.id)} />
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-between text-sm mb-2">
          <span style={{ color: 'var(--text-secondary)' }}>Intensidad</span>
          <span style={{ color: 'var(--text-primary)' }}>
            {intensity < 33 ? 'Light' : intensity < 66 ? 'Normal' : 'Heavy'}
          </span>
        </div>
        <input
          type="range" min={0} max={100} value={intensity}
          onChange={(e) => setIntensity(+e.target.value)}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { key: 'low', label: 'Graves' },
          { key: 'mid', label: 'Medios' },
          { key: 'high', label: 'Agudos' },
        ].map(({ key, label }) => (
          <div key={key}>
            <div className="flex justify-between text-sm mb-2">
              <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
              <span style={{ color: 'var(--text-primary)' }}>{eq[key]}</span>
            </div>
            <input
              type="range" min={0} max={100} value={eq[key]}
              onChange={(e) => setEq({ ...eq, [key]: +e.target.value })}
              className="w-full accent-blue-500"
            />
          </div>
        ))}
      </div>

      <div className="px-6 py-6">
        <button
          disabled={!audioFile}
          className="w-full py-3 rounded-xl font-semibold text-sm disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          🎧 Escuchar resultado
        </button>
      </div>
    </div>
  );
}