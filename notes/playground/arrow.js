const square = num => num * num;
console.log(square(9));

const user = {
  name: 'Tom',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi I'm ${this.name}`)
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi I'm ${this.name}`);
  }
};

user.sayHi(1,2,3);
