const express = require(‘express’);
const app = require(‘../app’);
const router = express.Router();
const bcrypt = require(‘bcrypt’);
const User = require(“./../models / User.model”)
//const registerRouters = require(‘./register.router’);
/* GET home page */
router.get(‘/’, (req, res) => {
   res.render(‘index’);
 });
/* Register page */
router.get(‘/register’, (req, res) => {
  const { password, username } = req.body;
console.log(password, username);
res.render(‘register’);
});
router.post(‘/register’, async (req, res) => {
  const { password, username } = req.body;
const hash = await bcrypt.hash(password, 10);
const user = new User({
  username,
  password: hash
})
await user.save();
console.log(username, password);
res.render(‘register’);
});
/* Sign in page */
router.get(‘/sign-in’, (req, res) => {
  res.render(‘sign -in’);
});
router.post(‘/sign-in’, (req, res) => {
  //Don’t forget to add in async before req/res
  const { username, password } = req.body;
try {
  //const hash = await bcrypt.hash(password, 10);
  console.log(username, password);
  //Need to finish the comparison of the provided password and the one in the DB
  res.render(‘sign -in’);
} catch (err) {
  console.log(err);
}
});
module.exports = router;