const sequelize = require("./../config/connection");
console.log(sequelize);
const { User, Organization } = require("../models");

const userData = require("./userData.json");
const organizationData = require("./organizationData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Organization.bulkCreate(organizationData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
