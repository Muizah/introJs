alert("Welcome to restaurant by Maeena.\nWhat would you be getting today?");
alert(
  "menu1 = Monster-500 and Item 7 with chicken-800\nmenu2 = Monster-500 and Item 7 mix with extra rice-1000\nmenu3 = Monster-500 and Item 7 with beef-600\nmenu4 = Monster-500 and Engine Burger bread and akara-250\nmenu5 = Monster-500 and Ewa Goin with bread-450\nmenu6 = Soft Drink-150 and Item 7 with chicken-800\nmenu7 = Soft Drink-150 and Item 7 mix with extra rice-1000\nmenu8 = Soft Drink-150 and Item 7 with beef-600\nmenu9 = Soft Drink-150 and Engine Burger bread and akara-250\nmenu10 = Soft Drink-150 and Ewa Goin with bread-450\nmenu11 = Fearless-250 and Item 7 with chicken-800\nmenu12 = Fearless-250 and Item 7 mix with extra rice-1000\nmenu13 = Fearless-250 and Item 7 with beef-600\nmenu14 = Fearless-250 and Engine Burger bread and akara-250\nmenu15 = Fearless-250 and Ewa Goin with bread-450"
);

var choice = prompt("Choose from 1 - 15.");
choice = parseInt(choice);

var menu1 = "Monster (500) and Item 7 With Chicken (800)";
var menu2 = "Monster (500) and Item 7 Mix With Extra Rice (1000)";
var menu3 = "Monster (500) and Item 7 With Beef (600)";
var menu4 = "Monster (500) and Engine Burger Bread And Akara (250)";
var menu5 = "Monster (500) and Ewa Goin With Bread (450)";
var menu6 = "Soft Drink (150) and Item 7 With Chicken (800)";
var menu7 = "Soft Drink (150) and Item 7 Mix With Extra Rice (1000)";
var menu8 = "Soft Drink (150) and Item 7 With Beef (600)";
var menu9 = "Soft Drink (150) and Engine Burger Bread And akara (250)";
var menu10 = "Soft Drink (150) and Ewa Goin With Bread (450)";
var menu11 = "Fearless (250) and Item 7 With Chicken (800)";
var menu12 = "Fearless (250) and Item 7 Mix With Extra Rice (1000)";
var menu13 = "Fearless (250) and Item 7 With Beef (600)";
var menu14 = "Fearless (250) and Engine Burger Bread And Akara (250)";
var menu15 = "Fearless (250) and Ewa Goin With Bread (450)";

// var m1 = "1300";
// var m2 = "1500";
// var m3 = "1100";
// var m4 = "750";
// var m5 = "950";
// var m6 = "950";
// var m7 = "1150";
// var m8 = "750";
// var m9 = "400";
// var m10 = "600";
// var m11 = "1050";
// var m12 = "1250";
// var m13 = "850";
// var m14 = "500";
// var m15 = "700";

if (choice === 1) {
  console.log("Your order for today would be", menu1, "\nTotal = 1300");
} else if (choice === 2) {
  console.log("Your order for today would be", menu2, "\nTotal = 1500");
} else if (choice === 3) {
  console.log("Your order for today would be", menu3, "\nTotal = 1100");
} else if (choice === 4) {
  console.log("Your order for today would be", menu4, "\nTotal = 750");
} else if (choice === 5) {
  console.log("Your order for today would be", menu5, "\nTotal = 950");
} else if (choice === 6) {
  console.log("Your order for today would be", menu6, "\nTotal = 950");
} else if (choice === 7) {
  console.log("Your order for today would be", menu7, "\nTotal = 1150");
} else if (choice === 8) {
  console.log("Your order for today would be", menu8, "\nTotal = 750");
} else if (choice === 9) {
  console.log("Your order for today would be", menu9, "\nTotal = 400");
} else if (choice === 10) {
  console.log("Your order for today would be", menu10, "\nTotal = 600");
} else if (choice === 11) {
  console.log("Your order for today would be", menu11, "\nTotal = 1050");
} else if (choice === 12) {
  console.log("Your order for today would be", menu12, "\nTotal = 1250");
} else if (choice === 13) {
  console.log("Your order for today would be", menu13, "\nTotal = 850");
} else if (choice === 14) {
  console.log("Your order for today would be", menu14, "\nTotal = 500");
} else if (choice === 15) {
  console.log("Your order for today would be", menu15, "\nTotal = 700");
} else if (choice < 1) {
  console.log("Incorrect order number.");
} else if (choice > 15) {
  console.log("Incorrect order number.");
}

var total = prompt("Enter the total of your ordered.");
money = parseInt(money);

var money = prompt("Enter the amount of money in Naira with you.");
money = parseInt(money);

var change = money - total;
if (change === 0) {
  console.log("Thank you for your patronage and have a nice day!");
} else
  alert(
    "Collect your change of " +
      change +
      " over the counter.\nThank you for your patronage and have a nice day!"
  );
