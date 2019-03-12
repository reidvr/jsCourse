//Challenge 1

var markHeight = 1.53; //meters
var markWeight = 75; //kg
var markBMI = markWeight / (markHeight * markHeight);

var johnHeight = 1.89; //meters
var johnWeight = 105; //kg
var johnBMI = johnWeight / (johnHeight * johnHeight);

//Challenge 2
var mikesGame1Score = 1;
var mikesGame2Score = 1;
var mikesGame3Score = 1;
var mikesAverageScore =
  (mikesGame1Score + mikesGame2Score + mikesGame3Score) / 3;

var johnsGame1Score = 1;
var johnsGame2Score = 1;
var johnsGame3Score = 1;
var johnsAverageScore =
  (johnsGame1Score + johnsGame2Score + johnsGame3Score) / 3;

var maryGame1Score = 1;
var maryGame2Score = 1;
var maryGame3Score = 1;
var maryAverageScore =
  (johnsGame1Score + johnsGame2Score + johnsGame3Score) / 3;

var totalBills = [];

function Bill(Bill) {
  this.bill = Bill;
  this.calcTip = function() {
    let tipFraction = 0;

    if (this.bill > 200) tipFraction = 0.1;
    //10%
    else if (this.bill > 50) tipFraction = 0.15;
    //15%
    else tipFraction = 0.2; //20%

    tipAmount = Math.round(this.bill * tipFraction * 100) / 100; //rounds to two DP
    this.tip = tipAmount;
    return tipAmount;
  };
  this.calcTip();
  this.totalBill = this.bill + this.tip;
}

var johnsBills = [
  new Bill(124),
  new Bill(48),
  new Bill(268),
  new Bill(180),
  new Bill(42)
]; //dollars

var marksBills = [new Bill(77), new Bill(375), new Bill(110), new Bill(45)]; //dollars

for (let i = 0; i < johnsBills.length; i++) {
  console.log("Johns bill: " + johnsBills[i].totalBill);
}

for (let i = 0; i < marksBills.length; i++) {
    console.log("Marks bill: " + marksBills[i].totalBill);
  }


function Person(firstName, lastName, height, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;
  this.weight = weight;
  this.calcBMI = function() {
    this.BMI = this.weight / (this.height * this.height);
  };
}

var john = new Person("John", "Smith", 1.83, 105);
var mark = new Person("Mark", "Gilly", 1.65, 83);
john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(
    "John's BMI is higher than Marks: " + john.BMI + " : " + mark.BMI
  );
} else if (john.BMI < mark.BMI) {
  console.log("Marks BMI is higher than Johns: " + mark.BMI + " : " + john.BMI);
} else {
  console.log("John and Mark have equal BMI's: " + john.BMI + " : " + mark.BMI);
}
