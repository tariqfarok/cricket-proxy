// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Allow all cross-origin requests (for React to access it)
app.use(cors());

// Route to fetch live cricket data
app.get('/live', async (req, res) => {
  try {
    const response = await fetch('https://api.cricketdata.org/v4/live', {
      headers: {
        apikey: '1f14ac9d-126a-481e-8e47-a62a95b90184', // ← your API key here
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching cricket data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
});
