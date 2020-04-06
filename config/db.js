/* eslint-disable no-unused-vars */
const Example = require('../app/models/Example');
const sequelize = require('../app/common/db');

const updateRelationships = () => {};

const createDatabase = async () => {
  await sequelize.sync({});
};

module.exports = {
  updateRelationships,
  createDatabase,
};
