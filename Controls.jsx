// Controls.jsx
// Timer controls: start, pause, reset, skip break
import React from 'react';

const Controls = ({ isRunning, onStart, onPause, onReset, onSkip, mode }) => (
  <div className="controls">
    {isRunning ? (
      <button onClick={onPause}>Pause</button>
    ) : (
      <button onClick={onStart}>{mode === 'break' ? 'Resume Break' : 'Start'}</button>
    )}
    <button onClick={onReset}>Reset</button>
    {mode === 'break' && <button onClick={onSkip}>Skip Break</button>}
  </div>
);

export default Controls;
