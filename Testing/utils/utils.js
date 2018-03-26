module.exports.add = (a, b) =>  a + b;

module.exports.asyncAdd = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
};

module.exports.square = (num) => num * num;

module.exports.asyncSquare = (num, cb) => {
  setTimeout(() => {
    cb(num * num);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
