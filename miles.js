var car1 = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var car2 = {
  milesPerGallon: 15,
  gallonsInTank: 4
};

var route1 = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

function Car(milesPerGallon, gallonsInTank){
  this.milesPerGallon = milesPerGallon;
  this.gallonsInTank = gallonsInTank;
}

function Route(miles, destination, location){
  this.miles = miles;
  this.destination = destination;
  this.location = location;
}

var car3 = new Car(11, 1);
var car4 = new Car(30, 4);

var route2  = new Route(50, "Parker", "Home Sweet Home");
var route3  = new Route(1, "Target", "Land of Bargains");

function canReach(car, route){
  if (car.milesPerGallon * car.gallonsInTank >= route.miles) {
    return true;
  }else{
    return false;
  }
}

console.log(canReach(car4, route3),   //=> true
            canReach(car3, route2),   //=> false
            canReach(car1, route1),   //=> false
            canReach(car2, route2));  //=> true
