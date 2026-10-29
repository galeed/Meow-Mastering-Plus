export default function Header({ activeTab, setActiveTab, hasAudio }) {
  const tabs = [
    { id: 'mastering', label: '🎛️ Mastering Pro' },
    { id: 'finishing', label: '✨ Toques Finales' },
  ];

  return (
    <header
      className="flex items-center justify-between px-6 py-3 border-b"
      style={{ background: 'var(--bg-panel)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">🎵</span>
        <h1 className="font-bold text-lg tracking-tight">MASTERLAB</h1>
      </div>

      <nav className="flex gap-2 p-1 rounded-xl" style={{ background: 'var(--bg-primary)' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: activeTab === tab.id ? 'var(--accent)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <button
        disabled={!hasAudio}
        className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity disabled:opacity-40"
        style={{
          background: hasAudio ? 'var(--success)' : 'var(--bg-elevated)',
          color: hasAudio ? '#000' : 'var(--text-secondary)',
        }}
      >
        ⬇️ Exportar
      </button>
    </header>
  );
}
