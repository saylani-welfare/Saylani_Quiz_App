//Controllers
const authentication = require('../controllers/authentication');
const programControllers = require('../controllers/programControllers');
const batchControllers = require('../controllers/batchControllers');

//middlewares
const ErrMiddleware = require('../middlewares/errMiddleware');

//Passport To Authenticate
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false })


function routes(app) {

    //create Admin
    app.post('/api/createAdmin', authentication.createAdmin);
    app.use(ErrMiddleware);

    //Admin authentication when login
    app.post('/api/adminLogin', requireLogin, authentication.authenticateAdmin);

    //API's for Program
    app.post('/api/addProgram', programControllers.addProgram);
    app.use(ErrMiddleware);
    app.get('/api/getAllPrograms', programControllers.getAllPrograms);
    app.use(ErrMiddleware);

    //API's for Batches
    app.post('/api/addBatch', batchControllers.addBatch);
    app.use(ErrMiddleware);

}

module.exports = routes