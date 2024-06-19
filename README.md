# Event Countdown Timer

This is an Angular application that allows users to set an event name and date, and displays a countdown timer showing the time remaining until the event.

## Features

- **Responsive Design**: The app works seamlessly in both portrait and landscape modes.
- **Dynamic Text Resizing**: The displayed text automatically resizes to fill the entire width of the screen, ensuring it fits in one line without line breaks.
- **Real-time Countdown**: The countdown timer starts from the current time and displays the remaining time to the specified end date in the format: Days, Hours(h), Minutes(m), Seconds(s).
- **Persistent Data**: The event name and end date are saved locally in real time and persist between page reloads, ensuring that the countdown continues from where it left off.
- **Reusable Text Fit Solution**: The solution for fitting text into an element is reusable and can be applied to other components as needed.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- Angular CLI (>=13.x)
- `date-fns` library for date manipulation

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/amol0900/FrontendChallenge.git
cd FrontendChallenge
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Install date-fns
The project depends on the date-fns library for date manipulation. Install it using npm:
```sh
npm install date-fns
```

### 4. Start the development server
```sh
ng serve
```
Open your browser and navigate to http://localhost:4200.

### Deployment
https://grand-dieffenbachia-df1370.netlify.app/

## Suggestions
To make this app production-ready, I would:

- Add unit and integration tests to ensure functionality.
- Implement more robust error handling, covering various cases such as invalid input.
- Ensure the app meets accessibility standards (WCAG).
- Perform cross-browser compatibility testing to ensure consistent performance across different browsers.
- Add additional features to enhance user engagement, such as timezone support, notifications/reminders, and the ability to manage multiple countdowns.
- Review and improve the user experience (UX), potentially adding buttons for actions like save and clear.

