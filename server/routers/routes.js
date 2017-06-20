//Controllers
const authentication = require('../controllers/authentication');
const programControllers = require('../controllers/programControllers');
const batchControllers = require('../controllers/batchControllers');
const CourseControllers = require('../controllers/courseControllers');
const QuizControllers = require('../controllers/quizControllers');
const auth = require('../auth.js')

const port = process.env.PORT || 8080;
const session = require('express-session');
const FacebookStrategy = require('passport-facebook');

//middlewares
const ErrMiddleware = require('../middlewares/errMiddleware');

//Passport To Authenticate
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false })


function routes(app, passport) {

    //create Admin
    app.post('/api/createAdmin', authentication.createAdmin);
    app.use(ErrMiddleware);

    //Admin authentication when login
    app.post('/api/adminLogin', requireLogin, authentication.authenticateAdmin);

    //API's for Program
    app.post('/api/addProgram', programControllers.addProgram);
    app.use(ErrMiddleware);
    app.delete('/api/deleteProgram/:id', programControllers.deleteProgram);
    app.use(ErrMiddleware);

    //API's for Batches
    app.get('/api/getAllPrograms', batchControllers.getAllPrograms);
    app.use(ErrMiddleware);
    app.post('/api/addBatch', batchControllers.addBatch);
    app.use(ErrMiddleware);

    //API's for courses
    app.get('/api/getAllBatches', CourseControllers.getAllBatches);
    app.use(ErrMiddleware);
    app.post('/api/addCourse', CourseControllers.addCourse);
    app.use(ErrMiddleware);
    app.delete('/api/deleteCourse/:id', CourseControllers.deleteCourse);
    app.use(ErrMiddleware);

    //API's for Quizes
    app.get("/api/getAllCourses", QuizControllers.getAllCourses);
    app.use(ErrMiddleware);
    app.post('/api/makeQuiz', QuizControllers.makeQuiz);
    app.use(ErrMiddleware);

    //Facebook login

    // app.use(session({
    //     secret: 'asdsadasda',
    //     resave: true,
    //     saveUninitialized: true
    // }));

    // const FACEBOOK_APP_ID = '246893679122461';
    // const FACEBOOK_APP_SECRET = '030a7484970c9f483922790ce4e4be00';
    // const fboptns = {
    //     clientID: FACEBOOK_APP_ID,
    //     clientSecret: FACEBOOK_APP_SECRET,
    //     callbackURL: 'http://localhost:8080/auth/facebook/callback'
    // };
    // const fbcallback = function (accessToken, refreshToken, profile, cb) {
    //     console.log(accessToken, refreshToken, profile)
    // };

    // app.use(() => {
    //     passport.use(new FacebookStrategy(fboptns, fbcallback));
    // })

    // app.get('/', passport.authenticate('facebook'));

    // app.get('/auth/facebook/callback', passport.authenticate('facebook', function (err, user, info) {
    //     console.log(err, user, info)
    // }))
}

module.exports = routes