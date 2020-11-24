// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require("./../models/User.model");

// router.get('/register', (req, res) => {
//   const { password, username } = req.body;
//   console.log(password, username);
//   res.render('register');
// });

// router.post('/register', async (req, res) => {
//   const { password, username, email } = req.body;
//   const hash = await brcrypt.hash(password, 10);
//   const user = new User({
//     username,
//     password: hash
//   })
//   await user.save();
//   console.log(username, password);
//   res.render('register');
// });

// module.exports = router;

