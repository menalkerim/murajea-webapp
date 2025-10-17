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
