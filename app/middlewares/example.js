const sequelize = require('../common/db');
const _ = require('lodash');

async function updateUnique(req, res, next) {
  try {
    const {content} = req.body;
    const id = _.has(req, 'body.id')
      ? _.get(req, 'body.id')
      : _.get(req, 'params.id');

    const existModel = await sequelize.models.example.findOne({
      where: {
        content,
      },
    });

    if (existModel && existModel.id !== id) {
      res.status(400).send({message: 'Content is not unique'});
    }

    next();
  } catch (err) {
    res.status(401).send({message: 'Invalid request.'});
  }
}

async function createUnique(req, res, next) {
  try {
    const {content} = req.body;

    const existModel = await sequelize.models.example.findOne({ where: { content }})

    if (existModel) {
      return res.status(400).send({message: 'Content is not unique'});
    }

    next();
  } catch (err) {
    return res.status(401).send({message: 'Invalid request.'});
  }
}

module.exports = {
  updateUnique,
  createUnique,
};
