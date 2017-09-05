const publicRoutes = require('./public');
const authRoutes = require('./auth');
const DEFAULT_USERID = "111111111111111111111111";

module.exports = (app, passport) => {
  app.get('/', publicRoutes.index);

  app.get('/search/:title', (req, res) => {
    const title = req.params.title;
            userId = req.user && req.user.id || DEFAULT_USERID;

    console.log('/search 1: ' + title);
    const service = require('../services/googleService');

    if (false) {
      const data = service.search(title)
      .then(function (data) {
        console.log(data);
        return res.status(200).json(data);
      })
      .catch(function (err) {
        console.error(err);
      });
      console.log('/search 2', data);    
    } else {
        service.mockSearch(title).then( data => {
        return data;
      }).then( data => {
        res.status(200).send(data);
      }).catch( err  => {
        console.log('/search/:title error', err);
      });
    }
  });

  authRoutes(app, passport);
}
