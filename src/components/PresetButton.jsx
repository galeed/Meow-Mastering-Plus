export default function PresetButton({ icon, name, color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all"
      style={{
        background: active ? `${color}22` : 'var(--bg-panel)',
        borderColor: active ? color : 'var(--border)',
        transform: active ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-sm font-medium" style={{ color: active ? color : 'var(--text-primary)' }}>
        {name}
      </span>
    </button>
  );
}