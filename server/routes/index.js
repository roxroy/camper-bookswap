const publicRoutes = require('./public');
const authRoutes = require('./auth');


module.exports = (app, passport) => {
  app.get('/', publicRoutes.index);

  app.get('/search', (req, res) => {
    console.log('/search 1');
    const service = require('../services/googleService');

    const data = service.search('professional javascript')
    .then(function (data) {
      console.log(data);
      return res.status(200).json(data);
    })
    .catch(function (err) {
      console.error(err);
    });
    console.log('/search 2', data);    
    }
  );

  authRoutes(app, passport);
}
