let User = require('../models/user');

const mapItem = (item) => {
  return {
    id : item._id,
    username: item.username,
    city: item.city,
  }
}

const addNew = (profile, cb) => {
  const newUser = new User();

  newUser.username = profile.username;
  newUser.password = newUser.generateHash(profile.password);

  newUser.save((err) => {
    if (err) {
      throw err;
    }
    cb(newUser);
  });
};

const update = (profile, cb) => {
  return User.findOne({ 'username': profile.username })
    .exec((err, user) => {
      if (err) {
        throw err;
      }
      user.city = profile.city;

      user.save((err) => {
        if (err) {
          throw err;
        }
        cb(user);
      });
      
    });
};

const getOne = (username) => {
  return User.findOne({ 'username': username })
    .exec((err, user) => {
      if (err) {
        throw err;
      }

      if (user) {
        return mapItem(user);
      }
    });
};

module.exports = {
  getOne,
  addNew,
  update,
}