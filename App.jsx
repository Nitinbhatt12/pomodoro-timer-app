import React, { useState, useEffect, useRef } from 'react';
import TimerDisplay from './TimerDisplay';
import TaskList from './TaskList';
import Controls from './Controls';
import './App.css';

const App = () => {
  // Timer state
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'work');
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('timeLeft');
    return saved ? Number(saved) : 25 * 60;
  });
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(() => Number(localStorage.getItem('cycleCount')) || 0);

  // Custom timer settings
  const [customWork, setCustomWork] = useState(() => Number(localStorage.getItem('customWork')) || 25);
  const [customBreak, setCustomBreak] = useState(() => Number(localStorage.getItem('customBreak')) || 5);

  // Task state
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Timer logic
  const timerRef = useRef();
  useEffect(() => {
    localStorage.setItem('mode', mode);
    localStorage.setItem('timeLeft', timeLeft);
    localStorage.setItem('cycleCount', cycleCount);
  }, [mode, timeLeft, cycleCount]);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem('customWork', customWork);
    localStorage.setItem('customBreak', customBreak);
  }, [customWork, customBreak]);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft === 0) {
      // Play audio cue
      const audio = new window.Audio('positive-audio.mp3');
      audio.play();
      if (mode === 'work') {
        setMode('break');
        setTimeLeft(customBreak * 60);
        setCycleCount(c => c + 1);
      } else {
        setMode('work');
        setTimeLeft(customWork * 60);
      }
      setIsRunning(false);
      return;
    }
    timerRef.current = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft, mode, customWork, customBreak]);

  // Timer controls
  const handleStart = () => {
    if (tasks.length === 0) {
      alert('Please add at least one task before starting the timer.');
      return;
    }
    setIsRunning(true);
  };
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'work' ? customWork * 60 : customBreak * 60);
  };
  const handleSkip = () => {
    setIsRunning(false);
    setMode('work');
    setTimeLeft(customWork * 60);
  };

  // Task controls
  const handleAddTask = text => {
    setTasks(ts => [...ts, { id: Date.now(), text, completed: false }]);
  };
  const handleToggleTask = (id, newText, isEdit) => {
    setTasks(ts => ts.map(t => {
      if (t.id === id) {
        if (isEdit && newText) return { ...t, text: newText };
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };
  const handleDeleteTask = id => {
    setTasks(ts => ts.filter(t => t.id !== id));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="app-container">
      <h1>PomodoroTimer</h1>
      <TimerDisplay minutes={minutes} seconds={seconds} mode={mode} />
      <Controls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onSkip={handleSkip}
        mode={mode}
      />
      <TaskList
        tasks={tasks}
        onAdd={handleAddTask}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
      <div className="session-info">Pomodoro cycles: {cycleCount}</div>
      <div className="timer-settings">
        <label>
          Work (min):
          <input
            type="number"
            min="1"
            max="90"
            value={customWork}
            onChange={e => {
              setCustomWork(Number(e.target.value));
              if (mode === 'work') setTimeLeft(Number(e.target.value) * 60);
            }}
          />
        </label>
        <label>
          Break (min):
          <input
            type="number"
            min="1"
            max="10"
            value={customBreak}
            onChange={e => {
              setCustomBreak(Number(e.target.value));
              if (mode === 'break') setTimeLeft(Number(e.target.value) * 60);
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
