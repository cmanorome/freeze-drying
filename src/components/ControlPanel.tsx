import React from 'react';
import { Play, Pause, RotateCcw, SkipForward, SkipBack, Gauge } from 'lucide-react';
import { ProcessPhase } from '../App';

interface ControlPanelProps {
  currentPhase: ProcessPhase;
  setCurrentPhase: (phase: ProcessPhase) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  isMobile?: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  currentPhase,
  setCurrentPhase,
  speed,
  setSpeed,
  isMobile = false
}) => {
  const phases: { key: ProcessPhase; label: string; duration: string }[] = [
    { key: 'initial', label: 'Initial State', duration: 'Room Temperature' },
    { key: 'freezing', label: 'Freezing', duration: '2-4 hours' },
    { key: 'primary-drying', label: 'Primary Drying', duration: '12-48 hours' },
    { key: 'secondary-drying', label: 'Secondary Drying', duration: '4-12 hours' },
    { key: 'complete', label: 'Complete', duration: 'Final State' }
  ];

  const getCurrentPhaseIndex = () => phases.findIndex(p => p.key === currentPhase);

  const goToNextPhase = () => {
    const currentIndex = getCurrentPhaseIndex();
    if (currentIndex < phases.length - 1) {
      setCurrentPhase(phases[currentIndex + 1].key);
    }
  };

  const goToPreviousPhase = () => {
    const currentIndex = getCurrentPhaseIndex();
    if (currentIndex > 0) {
      setCurrentPhase(phases[currentIndex - 1].key);
    }
  };

  const resetAnimation = () => {
    setCurrentPhase('initial');
  };

  if (isMobile) {
    return (
      <div className="bg-[#2B3D42] rounded-lg p-4 border border-[#69AEB1]">
        <h3 className="text-lg font-bold mb-3 text-[#138196]">Controls</h3>
        
        {/* Essential Controls - Horizontal layout for mobile */}
        <div className="space-y-3">
          {/* Phase Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPhase}
              disabled={getCurrentPhaseIndex() === 0}
              className="flex items-center gap-1 bg-[#69AEB1] hover:bg-[#A6D8C3] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium text-[#2B3D42]"
            >
              <SkipBack size={14} />
              Previous
            </button>
            
            <div className="flex-1 text-center text-sm text-[#F5F9F8]">
              Step {getCurrentPhaseIndex() + 1} of {phases.length}
            </div>
            
            <button
              onClick={goToNextPhase}
              disabled={getCurrentPhaseIndex() === phases.length - 1}
              className="flex items-center gap-1 bg-[#69AEB1] hover:bg-[#A6D8C3] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium text-[#2B3D42]"
            >
              Next
              <SkipForward size={14} />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetAnimation}
            className="flex items-center gap-2 bg-[#F26A4B] hover:bg-[#F26A4B]/80 px-4 py-2 rounded text-sm transition-colors justify-center w-full text-[#F5F9F8] font-medium"
          >
            <RotateCcw size={16} />
            Reset to Start
          </button>

          {/* Speed Control - Compact */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Gauge size={14} className="text-[#A6D8C3]" />
              <span className="text-sm text-[#A6D8C3]">Speed: {speed}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.5"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-[#138196] rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Quick Phase Selection - Mobile friendly */}
          <div className="grid grid-cols-5 gap-1 mt-3">
            {phases.map((phase, index) => (
              <button
                key={phase.key}
                onClick={() => setCurrentPhase(phase.key)}
                className={`p-2 rounded text-xs font-medium transition-colors ${
                  currentPhase === phase.key
                    ? 'bg-[#F26A4B] text-[#F5F9F8]'
                    : 'bg-[#138196] text-[#F5F9F8] hover:bg-[#69AEB1]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop version (simplified manual navigation)
  return (
    <div className="bg-[#2B3D42] rounded-lg p-6 border border-[#69AEB1]">
      <h3 className="text-xl font-bold mb-4 text-[#138196]">Navigation Controls</h3>
      
      {/* Navigation Controls */}
      <div className="space-y-4">
        {/* Manual Phase Navigation */}
        <div className="flex gap-2">
          <button
            onClick={goToPreviousPhase}
            disabled={getCurrentPhaseIndex() === 0}
            className="flex items-center gap-2 bg-[#69AEB1] hover:bg-[#A6D8C3] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-1 text-[#2B3D42] font-medium"
          >
            <SkipBack size={16} />
            Previous Phase
          </button>
          
          <button
            onClick={goToNextPhase}
            disabled={getCurrentPhaseIndex() === phases.length - 1}
            className="flex items-center gap-2 bg-[#69AEB1] hover:bg-[#A6D8C3] px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-1 text-[#2B3D42] font-medium"
          >
            Next Phase
            <SkipForward size={16} />
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetAnimation}
          className="w-full flex items-center gap-2 bg-[#F26A4B] hover:bg-[#F26A4B]/80 px-4 py-2 rounded transition-colors justify-center text-[#F5F9F8] font-medium"
        >
          <RotateCcw size={16} />
          Reset to Beginning
        </button>

        {/* Speed Control */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Gauge size={16} className="text-[#A6D8C3]" />
            <span className="text-sm text-[#A6D8C3]">Animation Speed: {speed}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#138196] rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Phase Selection */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-3 text-[#138196]">Jump to Phase</h4>
        <div className="space-y-2">
          {phases.map((phase, index) => (
            <button
              key={phase.key}
              onClick={() => setCurrentPhase(phase.key)}
              className={`w-full text-left p-3 rounded border transition-colors ${
                currentPhase === phase.key
                  ? 'bg-[#F26A4B] border-[#F26A4B] text-[#F5F9F8]'
                  : 'bg-[#138196]/30 border-[#69AEB1] text-[#F5F9F8] hover:bg-[#69AEB1]/30'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{index + 1}. {phase.label}</div>
                  <div className="text-sm opacity-75">{phase.duration}</div>
                </div>
                {currentPhase === phase.key && (
                  <div className="w-2 h-2 bg-[#A6D8C3] rounded-full animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel; 