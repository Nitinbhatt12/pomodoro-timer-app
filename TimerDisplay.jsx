// TimerDisplay.jsx
// Displays the current timer and session type
import React from 'react';

const TimerDisplay = ({ minutes, seconds, mode }) => (
  <div className="timer-display">
    <h2>{mode === 'work' ? 'Work Session' : 'Break'}</h2>
    <div className="time">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
  </div>
);

export default TimerDisplay;
