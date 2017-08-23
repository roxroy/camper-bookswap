const publicRoutes = require('./public');
const authRoutes = require('./auth');

module.exports = (app) => {
  app.get('/', publicRoutes.index);
  app.get('/about', publicRoutes.about);

  app.get('/login', authRoutes.login);
  app.get('/signup', authRoutes.signup);
}
