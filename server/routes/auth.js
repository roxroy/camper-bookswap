module.exports.login = (req, res) => {
  res.render('auth/login', {title:"login page"});
};

module.exports.signup = (req, res) => {
  res.render('auth/signup', {title:"signup page"});
};