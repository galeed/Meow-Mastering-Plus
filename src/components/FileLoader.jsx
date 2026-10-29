import { useRef } from 'react';

export default function FileLoader({ audioFile, onLoad }) {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (file && file.type.includes('audio')) onLoad(file);
  };

  return (
    <div
      className="flex items-center gap-4 px-6 py-3 border-b"
      style={{ background: 'var(--bg-panel)', borderColor: 'var(--border)' }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
      }}
    >
      <button
        onClick={() => inputRef.current?.click()}
        className="px-4 py-2 rounded-lg text-sm font-medium border"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
      >
        📁 Cargar WAV
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {audioFile ? (
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--text-primary)' }}>{audioFile.name}</span>
          {' · '}
          {(audioFile.size / 1024 / 1024).toFixed(1)} MB
        </div>
      ) : (
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Arrastra un archivo aquí o haz clic en Cargar
        </span>
      )}
    </div>
  );
}