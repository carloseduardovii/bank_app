//app
const { app } = require('./app');

//models
const { User } = require('./models/user.model');
const { Transfer } = require('./models/transfer.model');

//utils
const { database } = require('./utils/database');

//Authenticate DataBase credentials
database
  .authenticate()
  .then(() => console.log('Database authenticated successfully'))
  .catch((err) => console.log(err));

//Tables conection
User.hasMany(Transfer, { foreignKey: 'id' });
Transfer.belongsTo(User);

//Sync sequelize models
database
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

// Spin up server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
