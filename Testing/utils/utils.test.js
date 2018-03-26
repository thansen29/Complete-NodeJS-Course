const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {


  it('should square a number', () => {
    const result = utils.square(5);
    expect(result).toBe(25).toBeA('number');
  });

  it('should add two numbers', () => {
    const result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
  });

  it('verify first and last names are set', () => {
    const user = {
      firstName: '',
      lastName: ''
    };

    const fullName = utils.setName(user, 'Tom Hansen');
    expect(fullName).toInclude({
      firstName: 'Tom',
      lastName: 'Hansen'
    }).toBeA('object')
  });

  
  //async example
  describe("Async tests", () => {
    it('should async square a number', (done) => {
      utils.asyncSquare(4, (result) => {
        expect(result).toBe(16).toBeA('number');
        done();
      });
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })


})
