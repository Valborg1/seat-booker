const seedUsers = require('./user-seeds');
const seedProductions = require('./production-seeds');
const seedShowings = require('./showing-seeds');
const seedTickets = require('./ticket-seeds');
const seedCarts = require('./cart-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedProductions();
  console.log('\n----- PRODUCTIONS SEEDED -----\n');

  await seedShowings();
  console.log('\n----- SHOWINGS SEEDED -----\n');

  await seedTickets();
  console.log('\n----- TICKETS SEEDED -----\n');

  await seedCarts();
  console.log('\n----- CARTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
