const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();
require('dotenv').load();
require('./auth/passport')(passport);

const dbUri = process.env.MONGO_URI || 'mongodb://localhost/bookswap';
mongoose.Promise = Promise;
mongoose.connect(dbUri, {
  useMongoClient: true,
});

app.use(morgan('combined'))
app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(expressValidator());

app.use(session({
  secret: 'secretSauce2017',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public/build')))

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  next();
});

routes(app, passport);

//authRoutes(app, passport);
//apiRoutes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'),  { user: req.user });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
