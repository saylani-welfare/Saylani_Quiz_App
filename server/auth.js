// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	// const FACEBOOK_APP_ID = '246893679122461'
	// const  FACEBOOK_APP_SECRET = '030a7484970c9f483922790ce4e4be00';
	 facebook :{
		clientID: '246893679122461',
		clientSecret: '030a7484970c9f483922790ce4e4be00',
		callbackURL: 'http://localhost:8080/auth/facebook/callback'
	}


};