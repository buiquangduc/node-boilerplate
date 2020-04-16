const Joi = require('@hapi/joi');

function create(req, res, next) {
  const schema = Joi.object({
    content: Joi.string().required(),
  });

  const validate = schema.validate(req.body);
  const validateError = validate.error;

  if (validateError) {
    return res.status(400).send({message: validateError.details[0].message});
  }

  next();
}

function update(req, res, next) {
  const schema = Joi.object({
    content: Joi.string().required(),
  });

  const validate = schema.validate(req.body);
  const validateError = validate.error;

  if (validateError) {
    return res.status(400).send({message: validateError.details[0].message});
  }

  next();
}

function getSingle(req, res, next) {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const validate = schema.validate(req.params);
  const validateError = validate.error;

  if (validateError) {
    return res.status(400).send({message: validateError.details[0].message});
  }

  next();
}

function remove(req, res, next) {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const validate = schema.validate(req.body);
  const validateError = validate.error;

  if (validateError) {
    return res.status(400).send({message: validateError.details[0].message});
  }

  next();
}

module.exports = {
  create,
  update,
  getSingle,
  remove,
};