# Pomodoro Timer & Task List App

A productivity application designed to enhance focus and task management using the Pomodoro Technique, combined with an integrated to-do list for each work session. This Single Page Application (SPA) is built with React, Vite, HTML, CSS, and JavaScript, focusing on a clean user interface and client-side data persistence.

# DEMO
  * Check src folder for images

## Features

*   **Pomodoro Timer:**
    *   Configurable work (default: 25 minutes) and break (default: 5 minutes) intervals.
    *   Visual countdown timer.
    *   Automatic cycling between work and break sessions.
    *   Controls to start, pause, reset the timer, and skip to the next session.
*   **Integrated Task List:**
    *   Add tasks specific to the current Pomodoro work session.
    *   Mark tasks as complete.
    *   Delete tasks.
*   **User Feedback:**
    *   Audio cues (notifications) at the end of each work/break session.
    *   Visual indication of the current session type (Work/Break).
*   **Data Persistence:**
    *   Tasks for the current session are saved to `localStorage`.
    *   Current timer state (time remaining, current session type) is persisted in `localStorage`.
    *   Pomodoro session count is tracked and saved locally.
*   **User Interface:**
    *   Clean, intuitive, and motivating design.
    *   Responsive layout for various screen sizes (if implemented).

## Technologies Used

*   **Frontend:**
    *   **React 19:** For building the user interface with components, managing state, and handling interactions.
    *   **JavaScript (ES6+):** For application logic, timer functionality, and task management.
    *   **HTML5:** For the application structure.
    *   **CSS3:** For styling and layout (mention if you used specific techniques like Flexbox, Grid, or a methodology).
*   **Build Tool:**
    *   **Vite:** For fast development server and optimized production builds.
*   **Linting:**
    *   **ESLint:** With plugins for React Hooks and React Refresh to ensure code quality and consistency.
*   **Local Storage:** For client-side data persistence.
