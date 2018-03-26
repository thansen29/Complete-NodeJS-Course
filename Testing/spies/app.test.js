const expect = require('expect');
const rewire = require('rewire');
const app = rewire('./app');

// app.__set__
// app.__get__

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call saveUser with user object', () => {
    const email = "tom@example.com";
    const password = "password";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  })

})
