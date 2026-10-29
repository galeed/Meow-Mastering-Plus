import { useState } from 'react';
import Header from './components/Header';
import MasteringTab from './components/MasteringTab';
import FinishingTab from './components/FinishingTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('mastering');
  const [audioFile, setAudioFile] = useState(null);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasAudio={!!audioFile}
      />
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'mastering' ? (
          <MasteringTab audioFile={audioFile} setAudioFile={setAudioFile} />
        ) : (
          <FinishingTab audioFile={audioFile} setAudioFile={setAudioFile} />
        )}
      </main>
    </div>
  );
}
