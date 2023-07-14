const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
require("dotenv").config()
const jwt = require('jsonwebtoken');
const {User} = require('../model/user.model');

userRouter.post('/signup', async (req, res) => {
  try {
    const { username,email, password, age } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a salt
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);

    // Hash the password
    const hashed_password = bcrypt.hashSync(password, salt);

    const user = new User({ username,email, password: hashed_password,age});
    await user.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});


userRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Compare the password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Wrong password' });
      }
  
      // Create a JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      });

      res.json({ msg:"login successful",token,username:user.username});
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
  });


  module.exports={
    userRouter
  }