// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require("./../models/User.model");

// router.post('/sign-in', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hash = await bcrypt.hash(password, 10);
//     console.log(username, password);
//     res.render('sign-in');
//   } catch (err) {
//     console.log(err);
//   }
// });

//module.exports = router;

//Need to finish the comparison of the provided password and the one in the DB