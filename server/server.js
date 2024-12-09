const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());  // to parse incoming JSON requests
app.use(cors());          // to allow cross-origin requests

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/llp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Importing Models
const Lesson = require('./models/Lesson');
const Quiz = require('./models/Quiz');
const Progress = require('./models/Progress');
const User = require('./models/User');

// Routes
// Example route to get lessons
app.get('/api/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find(); // Fetch all lessons from the database
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lessons' });
  }
});

// Example route to get quiz questions
app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from the database
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

// Example route to get user progress
app.get('/api/progress/:userId', async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId }); // Find progress by userId
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
