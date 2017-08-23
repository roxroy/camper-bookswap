module.exports.index = function(req, res){
  res.render('public/index', {user: "Great User",title:"homepage"});
};

module.exports.about = function(req, res){
  res.render('public/about', {title:"about page"});
};