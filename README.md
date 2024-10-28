# Science Experiment Collaborator

Welcome to **Science Experiment Collaborator**, an interactive Twitch extension that allows science streamers to share live experiments with viewers. This tool promotes real-time engagement in scientific research, enabling viewers to make predictions, control experimental parameters, and view live data visualizations alongside the streamer.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Configuration](#configuration)
7. [Future Improvements](#future-improvements)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Overview

This project aims to make scientific research accessible and engaging on Twitch, providing tools for science streamers to involve their audience in real-time data collection and analysis. It leverages Twitch’s API and interactivity features to create a collaborative environment for both researchers and viewers.

## Features

- **Real-Time Data Visualization**: Viewers can see experiment data displayed live through interactive charts.
- **Prediction and Voting**: Viewers can make predictions or vote on experiment outcomes, creating a collaborative science experience.
- **Viewer “Lab Assistant” Role**: Active viewers earn badges or recognition, rewarding participation and deepening community engagement.
- **Stream Together**: Allows multiple science streamers to collaborate in experiments and share results with combined viewer interactions.

## Folder Structure

```plaintext
twitch-science-experiment-collaborator/
├── public/                  # Frontend files served to viewers
│   ├── index.html           # Main HTML file for the viewer interface
│   ├── script.js            # Client-side JavaScript for interactivity
│   └── styles.css           # Optional CSS for styling the interface
├── src/                     # Source files for the backend server and API
│   ├── server.js            # Main server file (Express server setup)
│   ├── api/                 # API routes and controllers
│   │   ├── auth.js          # Authentication-related routes and logic
│   │   └── predict.js       # Route handling for viewer predictions and interactions
│   ├── services/            # Services for handling API calls, data processing, etc.
│   │   └── twitchService.js # Service for handling Twitch API requests
│   └── models/              # Database models (if using a database)
│       └── prediction.js    # Model for storing viewer predictions
├── config/                  # Configuration files
│   └── .env                 # Environment variables (Twitch API keys, secret keys)
├── logs/                    # Log files (optional)
├── data/                    # Data files for mock data or initial testing
├── tests/                   # Test files for unit and integration testing
├── README.md                # Project documentation
├── package.json             # Project dependencies and scripts
└── package-lock.json        # Locked versions of dependencies
```

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine
- **Twitch Developer Account** with a registered application. You’ll need a **Client ID** and **Client Secret**.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/twitch-science-experiment-collaborator.git
   cd twitch-science-experiment-collaborator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `config/` folder with your Twitch credentials:

   ```plaintext
   CLIENT_ID=your_client_id
   CLIENT_SECRET=your_client_secret
   REDIRECT_URI=http://localhost:3000/auth
   ```

4. Run the server:

   ```bash
   node src/server.js
   ```

The server will start at `http://localhost:3000`.

## Usage

1. **Login**: Go to `http://localhost:3000/login` to begin the Twitch authentication flow.
2. **Viewer Interface**: Access `public/index.html` in your browser to interact with the experiment, submit predictions, and view live data.
3. **API Endpoints**: The server includes various endpoints for handling viewer predictions and Twitch authentication.

### Testing Viewer Interaction

To simulate viewer interactions:
- Open the `index.html` file in a browser to see the viewer dashboard.
- Use the prediction button to make a simulated prediction.
- Observe real-time data visualizations, updated via the experiment’s backend.

## Configuration

Make sure to set up your `.env` file with the following variables:

- `CLIENT_ID`: Your Twitch Client ID.
- `CLIENT_SECRET`: Your Twitch Client Secret.
- `REDIRECT_URI`: Your redirect URI for OAuth (set to `http://localhost:3000/auth` for local testing).

## Future Improvements

This is an ongoing project with potential enhancements, including:
- **Expanded Data Controls**: Allow viewers more control over experimental parameters.
- **Enhanced Data Visualization**: Add more complex, multi-layered data visualizations.
- **Interactive Glossary**: Real-time explanations and definitions for complex scientific terms.
- **Virtual Lab Assistant Roles**: Introduce badges or roles for frequent viewers to reward engagement.

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

