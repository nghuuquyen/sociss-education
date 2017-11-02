class Person {
  constructor(name = '', age) {
    this.name = name;
    this.age  = age;
  }
  
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }
}


module.exports = Person;
