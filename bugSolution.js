const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  // Error handling for invalid userId
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... rest of your code
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});