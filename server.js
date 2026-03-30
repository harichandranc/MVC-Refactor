const express = require('express');
const app = express();

app.use(express.json());

// routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

// home route
app.get('/', (req, res) => {
  res.send('✅ Task API (MVC) running');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
