const authentication = require('../controllers/authentication');
const AdminMiddleware = require('../middlewares/adminMiddleware');
const Unathorize = require('../middlewares/adminMiddleware');
const passportService = require('../services/passport');
const passport = require('passport');

const requireLogin = passport.authenticate('local', { session: false })


function routes(app) {

    //create Admin
    app.post('/api/createAdmin', authentication.createAdmin);
    app.use(AdminMiddleware);

    //Admin authentication when login
    app.post('/api/adminLogin', requireLogin, authentication.authenticateAdmin);
}

module.exports = routes