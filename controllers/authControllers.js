import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import { generateToken } from '../utils.js';

// Signup
export const register = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),

    })

    // save user and return response      
    const user = await newUser.save();

    return res.send({ data: user, code: 201 });

  } catch (err) {
    res.status(500).send(err);
  }
};

// Login
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send({ message: 'User not found!' })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      res.status(400).send({ message: 'Invalid login credentials!' })
    }

    // const token = jwt.sign({
    //   user_id: user._id,
    //   email: user.email,
    //   username: user.username
    // },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: '7 days'
    //   }
    // );
    const token = generateToken(user)
    return res.send({ data: user, token, code: 200 });

  } catch (err) {
    res.status(500).send(err);
  }
};