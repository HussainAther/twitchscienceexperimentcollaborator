// Import required modules
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serves static files from the public directory

// Twitch OAuth Configuration
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// In-memory storage for predictions (for simplicity)
let predictions = [];

// Route for starting the authentication process
app.get('/login', (req, res) => {
  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=user:read:email`;
  res.redirect(authUrl);
});

// Route to handle Twitch OAuth redirect
app.get('/auth', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('Authorization code missing');

  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      },
    });

    const accessToken = response.data.access_token;
    res.send(`Access Token received: ${accessToken}`);
  } catch (error) {
    console.error('Error obtaining access token:', error.response.data);
    res.status(500).send('Error obtaining access token');
  }
});

// API route to handle viewer predictions
app.post('/api/predict', (req, res) => {
  const { prediction } = req.body;
  if (typeof prediction === 'undefined') {
    return res.status(400).json({ status: 'Error', message: 'Prediction data missing' });
  }

  // Save prediction to in-memory storage
  predictions.push(prediction);
  console.log('Prediction received:', prediction);
  
  // Respond with success
  res.json({ status: 'Prediction received', prediction });
});

// API route to fetch all predictions (for viewing or debugging)
app.get('/api/predictions', (req, res) => {
  res.json(predictions);
});

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Science Experiment Collaborator server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

