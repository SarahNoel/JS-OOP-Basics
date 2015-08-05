//kids
var child1 = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

function Child(height, name, age){
  this.height = height;
  this.name = name;
  this.age = age;
}

var child3 = new Child(10, "Andre", 12);
var child4 = new Child(2, "Kylie", 1);



//rides
var ride1 = {
  minHeight: 3,
  maxHeight: 7
};

function Ride(minHeight, maxHeight){
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
}
var ride2 = new Ride(4, 7);
var ride3 = new Ride(2, 10);


function canRide(child, ride){
    if(child.height >= ride.minHeight && child.height <= ride.maxHeight){
      return true;
    }else{
      return false;
    }
}

console.log(canRide(child2, ride1),  //=> true
            canRide(child3, ride2),  //=> false
            canRide(child4, ride3)); //=> true

