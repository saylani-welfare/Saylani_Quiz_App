

const passport = require('passport');
const FacebookStrategy = require('passport-facebook');



const FACEBOOK_APP_ID = '246893679122461';
  const  FACEBOOK_APP_SECRET = '030a7484970c9f483922790ce4e4be00';
const fboptns ={
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback'
};
const fbcallback = function(accessToken,refreshToken,profile,cb){
    console.log(accessToken,refreshToken,profile)
};

passport.use(new FacebookStrategy(fboptns, fbcallback));












// var LocalStrategy   = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;

// // load up the user model
// var User = require('./models/user');

// // load the auth variables
// var configAuth = require('./auth');

// // expose this function to our app using module.exports
// module.exports = function(passport) {

// const fboptns ={
//     clientID: '246893679122461',
//     clientSecret: '030a7484970c9f483922790ce4e4be00',
//     callbackURL: 'http://localhost:8080/auth/facebook/callback'
// };
// const fbcallback = function(accessToken,refreshToken,profile,cb){
//     console.log(accessToken,refreshToken,profile)
// };

// passport.use(new FacebookStrategy(fboptns, fbcallback));




	
//     // passport.serializeUser(function(user, done) {
//     //     done(null, user.id);
//     // });

//     // // used to deserialize the user
//     // passport.deserializeUser(function(id, done) {
//     //     User.findById(id, function(err, user) {
//     //         done(err, user);
//     //     });
//     // });

   

   
//     // passport.use(new FacebookStrategy({

//     //     // pull in our app id and secret from our auth.js file
//     //     clientID        : configAuth.facebook.clientID,
//     //     clientSecret    : configAuth.facebook.clientSecret,
//     //     callbackURL     : configAuth.facebook.callbackURL

//     // },

//     // facebook will send back the token and profile
//     // function(token, refreshToken, profile, done) {

//     //     // asynchronous
//     //     process.nextTick(function() {

//     //         // find the user in the database based on their facebook id
//     //         User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

//     //             // if there is an error, stop everything and return that
//     //             // ie an error connecting to the database
//     //             if (err)
//     //                 return done(err);

//     //             // if the user is found, then log them in
//     //             if (user) {
//     //                 return done(null, user); // user found, return that user
//     //             } else {
//     //                 // if there is no user found with that facebook id, create them
//     //                 var newUser            = new User();

//     //                 // set all of the facebook information in our user model
//     //                 newUser.facebook.id    = profile.id; // set the users facebook id                   
//     //                 newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
//     //                 newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//     //                 newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

//     //                 // save our user to the database
//     //                 newUser.save(function(err) {
//     //                     if (err)
//     //                         throw err;

//     //                     // if successful, return the new user
//     //                     return done(null, newUser);
//     //                 }); 
//     //             }

//     //         });
//     //     });

//     // }));

// };