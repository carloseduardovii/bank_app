const express = require('express');
const { Sequelize } = require('sequelize');

//models
const { User } = require('./models/user.model');
const { Transfer } = require('./models/transfer.model');

//routes
const { userRouter } = require('./routes/user.routes');
const { transferRouter } = require('./routes/transfer.routes');

//utils
// const { database } = require('./utils/database');

//init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// database
//   .authenticate()
//   .then(() => console.log('Database authenticated successfully'))
//   .catch((err) => console.log(err));

// User.hasMany(Transfer, { foreignKey: 'id' });
// Transfer.belongsTo(User);

// database
//   .sync()
//   .then(() => console.log('Database synced'))
//   .catch((err) => console.log(err));

//endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/transfer', transferRouter);

// Spin up server
// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Express app running on port ${PORT}`);
// });

module.exports = { app };
