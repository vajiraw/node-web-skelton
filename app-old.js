const express =  require('express')
const app = express()
const dotenv = require('dotenv').config();
const passport = require('passport')
const connectDB = require('./config/db')

require('./passport-config')(passport)   
const session = require('express-session'); 

connectDB()


https://github.com/bradtraversy/storybooks

//app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     name: 'google-auth-session',  
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true },
//   keys: ['key1', 'key2']
// }))

app.use( session({ 
	secret: 'cookie_secret',
	name:   'kaas',
	// store:  new RedisStore({
	// 	host: '127.0.0.1',
	// 	port: 6379
	// }),
	proxy:  true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(q,s)=>{
    s.send('Hi all');
})

app.get('/auth/google', passport.authenticate('google', { scope: [ 'email'] }));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

// my
app.get( '/auth/google/success',
    passport.authenticate( 'google', (q,s)=>{
        s.send('Hi from gooogle')
    }));

    app.get( '/auth/google/failure',
    passport.authenticate( 'google', (q,s)=>{
        s.send('Hi error from gooogle')   
    }));

app.listen(process.env.PORT,()=>{
    console.log('server starred '+process.env.PORT);
})


//https://medium.com/nerd-for-tech/google-oauth2-0-authentication-using-node-js-and-passportjs-1a77f42b1111


//https://medium.com/@prashantramnyc/node-js-with-passport-authentication-simplified-76ca65ee91e5

//https://github.com/barberboy/passport-google-oauth2-example/blob/master/app.js

  