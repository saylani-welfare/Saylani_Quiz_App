var jwt = require('jwt-simple'),
    User = require('../models/user'),
    axios = require('axios'),
    SECRET = require('../config').SECRET;


function tokenForUser (user) {
  var obj = {
    sub: user._id,
    iat: new Date().getTime()
  };
  return jwt.encode(obj, SECRET);
}

exports.requireAuth = function(req, res, next) {
  var authHeader = req.get('Authorization');
  var jwtToken = jwt.decode(authHeader, SECRET);
  var user_id = jwtToken.sub;
  User.findById(user_id, function(err, user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error("User not found.")); }
    req.user = user;
    next();
  });
}

exports.facebookAuth = function(req, res, next) {
  var token = req.body.token;
  axios.get(`https://graph.facebook.com/v2.8/me`).then(function (response) {
    var facebook_id = response.data.id;
    var name = response.data.name;
    var email = response.data.email;
    User.find({facebook_id: response.data.id}, function(err, users) {
      user = users[0];
      if (err) { return next(err); }
      if (!user) {
        var user = new User({
          facebook_id: facebook_id,
          email: email,
          name: name
        });
        user.save(function(err) {
          if (err) { return next(err); }
          res.json({token: tokenForUser(user)});
        });
      } else {
        res.json({token: tokenForUser(user)});
      }
    });
  }).catch(function(error) {
    return next(error);
  });
}




// module.exports = {

//     fbLogin(req, res, next) {
        
//         const FACEBOOK_APP_ID = '246893679122461';
//         const FACEBOOK_APP_SECRET = '030a7484970c9f483922790ce4e4be00';
//         const fboptns = {
//             clientID: FACEBOOK_APP_ID,
//             clientSecret: FACEBOOK_APP_SECRET,
//             callbackURL: 'http://localhost:8080/auth/facebook/callback'
//         };
//         const fbcallback = function (accessToken, refreshToken, profile, cb) {
//             console.log(accessToken, refreshToken, profile)
//         };

//     }
// }