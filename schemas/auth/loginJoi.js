const Joi = require("joi");
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;
const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": `"Email" is a required field`,
    "string.empty": `"Email" cannot be an empty field`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `"Password" is a required field`,
    "string.empty": `"Password" cannot be an empty field`,
  }),
});

module.exports = loginSchema;
