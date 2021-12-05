alert("Welcome to restaurant by Maeena.\nWhat would you be getting today?");
alert(
  "menu1 = Monster-500 and Item 7 with chicken-800\nmenu2 = Monster-500 and Item 7 mix with extra rice-1000\nmenu3 = Monster-500 and Item 7 with beef-600\nmenu4 = Monster-500 and Engine Burger bread and akara-250\nmenu5 = Monster-500 and Ewa Goin with bread-450\nmenu6 = Soft Drink-150 and Item 7 with chicken-800\nmenu7 = Soft Drink-150 and Item 7 mix with extra rice-1000\nmenu8 = Soft Drink-150 and Item 7 with beef-600\nmenu9 = Soft Drink-150 and Engine Burger bread and akara-250\nmenu10 = Soft Drink-150 and Ewa Goin with bread-450\nmenu11 = Fearless-250 and Item 7 with chicken-800\nmenu12 = Fearless-250 and Item 7 mix with extra rice-1000\nmenu13 = Fearless-250 and Item 7 with beef-600\nmenu14 = Fearless-250 and Engine Burger bread and akara-250\nmenu15 = Fearless-250 and Ewa Goin with bread-450"
);

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

var money = prompt("Enter the amount of money in Naira with you.");
money = parseInt(money);
if (money === 400) {
  console.log("With 400, you can buy", menu9);
} else if (money === 500) {
  console.log("With 500, you can buy", menu14);
} else if (money === 600) {
  console.log("With 600, you can buy", menu10);
} else if (money === 700) {
  console.log("With 700, you can buy", menu15);
} else if (money === 750) {
  console.log("With 750, you can buy", menu4, "or", menu8);
} else if (money === 850) {
  console.log("With 850, you can buy", menu13);
} else if (money === 950) {
  console.log("With 950, you can buy", menu5, "or", menu6);
} else if (money === 1050) {
  console.log("With 1050, you can buy", menu11);
} else if (money === 1100) {
  console.log("With 1100, you can buy", menu3);
} else if (money === 1150) {
  console.log("With 1150, you can buy", menu7);
} else if (money === 1250) {
  console.log("With 1250, you can buy", menu12);
} else if (money === 1300) {
  console.log("With 1300, you can buy", menu1);
} else if (money === 1500) {
  console.log("With 1500, you can buy", menu2);
} else if (money < 400) {
  console.log("Sorry, you can't get anything from the menu.");
}

var change = prompt("Are you to collect any change?\nYes or No.");
if (change == "yes") {
  console.log(
    "Collect your change over the counter.\nThank you for your patronage and have a nice day!"
  );
} else if (change == "no") {
  console.log("Thank you for your patronage and have a nice day!");
}
