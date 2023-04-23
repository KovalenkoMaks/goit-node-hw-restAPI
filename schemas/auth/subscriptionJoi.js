const Joi = require("joi");
const subscriptionType = ["starter", "pro", "business"];
const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionType)
    .required(),
});

module.exports = subscriptionSchema;
