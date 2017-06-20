
module.exports = {

    fbLogin(req, res, next) {
        
        const FACEBOOK_APP_ID = '246893679122461';
        const FACEBOOK_APP_SECRET = '030a7484970c9f483922790ce4e4be00';
        const fboptns = {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: 'http://localhost:8080/auth/facebook/callback'
        };
        const fbcallback = function (accessToken, refreshToken, profile, cb) {
            console.log(accessToken, refreshToken, profile)
        };

    }
}