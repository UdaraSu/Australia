const sequelize = require("../config/db");
const User = require("./userModel");
const Ticket = require("./ticketModel");

sequelize.sync({ alter: true }) // Sync models to database
  .then(() => console.log("Models synced to database"))
  .catch((err) => console.log("Error syncing models: " + err));

module.exports = { User, Ticket };
