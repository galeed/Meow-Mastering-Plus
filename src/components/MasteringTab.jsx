import FileLoader from './FileLoader';
import TransportBar from './TransportBar';
import Waveform from './Waveform';
import EffectCard from './EffectCard';
import Knob from './Knob';
import MeterBar from './MeterBar';

export default function MasteringTab({ audioFile, setAudioFile }) {
  return (
    <div className="flex flex-col">
      <FileLoader audioFile={audioFile} onLoad={setAudioFile} />
      <TransportBar disabled={!audioFile} />

      <div className="px-6">
        <Waveform audioFile={audioFile} height={260} showAB />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 px-6 py-4">
        <EffectCard title="EQ 5 Bandas">
          <div className="flex justify-around">
            <Knob label="Low" value={45} />
            <Knob label="LowMid" value={60} />
            <Knob label="Mid" value={50} />
            <Knob label="HiMid" value={55} />
            <Knob label="High" value={65} />
          </div>
        </EffectCard>

        <EffectCard title="Compresor Multibanda">
          <div className="flex justify-around">
            <Knob label="Threshold" value={40} />
            <Knob label="Ratio" value={30} />
            <Knob label="Attack" value={20} />
            <Knob label="Release" value={70} />
          </div>
        </EffectCard>

        <EffectCard title="Saturación Armónica">
          <div className="flex justify-around">
            <Knob label="Drive" value={35} />
            <Knob label="Tone" value={50} />
            <Knob label="Mix" value={25} />
          </div>
        </EffectCard>

        <EffectCard title="Limitador True Peak">
          <div className="flex justify-around">
            <Knob label="Ceiling" value={95} />
            <Knob label="Release" value={60} />
          </div>
        </EffectCard>
      </div>

      <div
        className="flex items-center gap-6 px-6 py-3 border-t"
        style={{ background: 'var(--bg-panel)', borderColor: 'var(--border)' }}
      >
        <MeterBar label="LUFS" value={-9.2} unit=" LUFS" min={-30} max={0} warn={-12} danger={-8} />
        <MeterBar label="True Peak" value={-1.0} unit=" dBTP" min={-6} max={0} warn={-2} danger={-0.5} />
        <MeterBar label="Dynamic Range" value={7} unit="" min={0} max={20} warn={15} danger={18} />
      </div>
    </div>
  );
}