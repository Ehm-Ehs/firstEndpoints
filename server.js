const express = require('express');
const logger = require('./middleware/logger.js');
const userRoutes = require('./route/user.js');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
