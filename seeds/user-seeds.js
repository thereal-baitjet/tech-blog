const { User } = require('../models');

const userData = [
  {
    username: "Juan",
    email: "email@email.com",
    password: "password1234"
  },
  {
    username: "Terry",
    email: "email@email.com",
    password: "password1234"
  },
  {
    username: "Lisa",
    email: "email@email.com",
    password: "password1234"
  },
  {
    username: "Goku",
    email: "email@email.com",
    password: "password1234"
  },
];

const seedUsers = () => User.bulkCreate(userData);

//  seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
