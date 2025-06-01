# Pomodoro Timer & Task List Combo

A productivity tool that combines a Pomodoro timer (25 min work, 5 min break) with a simple to-do list for each session. Built with React and Vite.

## Features
- Pomodoro timer with work/break cycles
- Add, complete, and delete tasks for the current session
- Audio cues at session end
- LocalStorage for tasks, timer state, and session count
- Clean, motivating UI

## Usage
1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Start the app:**
   ```powershell
   npm run dev
   ```
3. **Open in browser:**
   Visit the local URL shown in the terminal (usually http://localhost:5173)

## Components
- `TimerDisplay` — Shows timer and session type
- `Controls` — Start, pause, reset, skip break
- `TaskList` & `TaskItem` — Manage your to-do list

---
Built with [Vite](https://vitejs.dev/) & [React](https://react.dev/).
