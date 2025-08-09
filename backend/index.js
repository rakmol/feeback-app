const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let feedbacks = [];

app.get('/', (req, res) => {
  res.send('Feedback API is running');
});

app.post('/api/feedback', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }

  const feedback = { id: Date.now(), name, message };
  feedbacks.push(feedback);
  res.status(201).json(feedback);
});

app.get('/api/feedback', (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
