module.exports.index = function(req, res){
  res.render('index', {user: "Great User",title:"homepage"});
};

module.exports.about = function(req, res){
  res.render('about', {title:"about page"});
};