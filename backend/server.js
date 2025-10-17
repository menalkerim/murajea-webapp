const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

fetch('http://localhost:3000/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
// Sample data
const users = [
  { id: 1, name: 'Ali', email: 'ali@example.com' },
  { id: 2, name: 'Sara', email: 'sara@example.com' },
];

// Controller function
const getUsers = (req, res) => {
  res.json(users);
};

module.exports = { getUsers };

