// Factory pattern
var peopleFactory = function(name, age, county) {
  var temp = {};

  temp.name = name;
  temp.age = age;
  temp.county = county;

  temp.printPerson = function() {
    console.log(temp.name + ", " + temp.age + ", " + temp.county);
  };
  return temp;
};

var person1 = peopleFactory("Bill", 34, "Surrey");
var person2 = peopleFactory("Jim", 66, "Sussex");

person1.printPerson();
person2.printPerson();

//Constructor pattern
var PeopleConstructor = function(name, age, county) {
  this.name = name;
  this.age = age;
  this.county = county;

  this.printPerson = function() {
    console.log(this.name + ", " + this.age + ", " + this.county);
  };
};

var person1 = new PeopleConstructor("Ben", 33, "Kent");
var person2 = new PeopleConstructor("Jeff", 18, "Somerset");
person1.printPerson();
person2.printPerson();

//Prototype pattern
var peopleProto = function() {

};
peopleProto.prototype.name = "no name";
peopleProto.prototype.age = 0;
peopleProto.prototype.county = "no county";
peopleProto.prototype.printPerson = function() {
  console.log(this.name + ", " + this.age + ", " + this.county);
}

var person1 = new peopleProto();

// person1.name = "Jack"; to check 'hasOwnProperty'
person1.age = 30;
person1.county = "Shropshire";

console.log(person1.printPerson());
console.log('name' in person1);
console.log(person1.hasOwnProperty("name"));

// Dynamic prototype pattern
var peopleDynamicProto = function(name, age, county) {

  this.name = name;
  this.age = age;
  this.county = county;

  if(typeof this.printPerson !== 'function') { // using this if statement means that method is built once for new objects
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(this.name + ", " + this.age + ", " + this.county);
    };
  }
};

var person1 = new peopleDynamicProto('Mary', 23, 'Essex');
person1.printPerson();
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));
