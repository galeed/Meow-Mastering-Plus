import { useEffect, useRef } from 'react';

export default function Waveform({ audioFile, height = 260, showAB = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.fillStyle = '#141418';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#22222a';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }

    const mid = height / 2;
    const drawWave = (color, scale) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const t = x / width;
        const amp =
          Math.sin(t * 120) * 0.3 +
          Math.sin(t * 47) * 0.4 +
          Math.sin(t * 13) * 0.3;
        const y = mid + amp * mid * 0.8 * scale;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    drawWave('rgba(138,138,149,0.35)', 1);
    if (showAB) drawWave('rgba(79,140,255,0.9)', 0.85);
  }, [audioFile, showAB]);

  return (
    <div className="px-6 py-4">
      <canvas
        ref={canvasRef}
        width={1400}
        height={height}
        className="w-full rounded-xl border"
        style={{ borderColor: 'var(--border)', height }}
      />
    </div>
  );
}