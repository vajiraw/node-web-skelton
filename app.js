const express = require('express')
const app = new express()
require('dotenv').config()
const passport = require('passport')
const moment = require('moment'); // require
const morgan = require('morgan')
const path = require('path')
const {engine} = require('express-handlebars')
const connectDB = require('./config/db')
const session = require('express-session')

require('./config/passport')(passport)



connectDB() 
const port = process.env.PORT

app.engine('.hbs', engine({defaultLayout:'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,  
}))

// set passport mddleware
app.use(passport.initialize())
app.use(passport.session())


//static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes 
app.use('/',require('./routes/index'))
app.use('/auth', require('./routes/auth'))
  
// for dev logins
app.use(morgan('dev'))

 
app.get('/', (req, res) => {
  res.send('GET request to the homepage')    
})


app.listen(port,(err) =>{
    if (err) console.log("Error in server setup")
    console.log(`server run in port ${port} at `+moment().format('LTS') );
})

