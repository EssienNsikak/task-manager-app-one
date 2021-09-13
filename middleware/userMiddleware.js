import Joi from '@hapi/joi';



export const validateUpdateUser = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().optional().min(2).max(30),
    email: Joi.string().optional().email().lowercase()
      .max(50),
    password: Joi.string().optional().min(6).max(25),
    profilePicture: Joi.string().optional(),
    userId: Joi.string().required()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
