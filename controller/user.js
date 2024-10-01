
let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 25 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 30 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 28 }
  ];

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

const createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users[userIndex] = { id: parseInt(req.params.id), ...req.body };
  res.json(users[userIndex]);
};

const deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
