const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routers/routes');
const AuthController  = require('./controllers/faceBookController.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = express.Router();
const cors = require('cors');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/QuizAppDB");

var protectedAction = function(req, res) {
  res.send("Here's some protected information!");
}


router.route('/facebook_auth')
  .post(AuthController.facebookAuth);
router.route('/protected')
  .get([AuthController.requireAuth, protectedAction]);

app.use(morgan('combined'));
app.use('/v1', router);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app)

module.exports = app;
