// ? 1. Install Node.js, TypeScript and VS Code on your computer.
// * completed
// ? 2.  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
const Person = "eric";
console.log(`Hello ${Person}, would you like to learn some Python today?`);
// ?  3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(Person.toLowerCase(), "Person Name Lower Case");
console.log(Person.toUpperCase(), "Person Name Upper Case");
console.log(
  Person.charAt(0).toUpperCase() + Person.substring(1, Person.length),
  "Person Name Title Case"
);
// ?  4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// ?     Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(
  `Albert Einstein once said, "A person who never made a mistake never tried anything new."`
);
// ? 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_person = "Albert Einstein";
console.log(
  `${famous_person} once said, "A person who never made a mistake never tried anything new."`
);
// ? 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const ToBeStripName = "\t\n Hammad Aslam \t\n";
console.log(ToBeStripName.trim());

// ? 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// ? 8. You should create four lines that look like this:
console.log("_____________________________________________");
console.log("5 + 3 = ", 5 + 3);
console.log("_____________________________________________");
console.log("_____________________________________________");
console.log("4 * 2 = ", 4 * 2);
console.log("_____________________________________________");
console.log("_____________________________________________");
console.log("12 - 4 = ", 12 - 4);
console.log("_____________________________________________");
console.log("_____________________________________________");
console.log("16 / 2 = ", 16 / 2);
console.log("_____________________________________________");
// ? 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message
const Favorite_Number = 8;
console.log("My Favorite Number is ", Favorite_Number);
// ? 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// ? 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const FriendsName = ["Abdullah", "Zain", "Abid", "Mubashir"];
console.log(FriendsName[0], "FriendsName");
console.log(FriendsName[1], "FriendsName");
console.log(FriendsName[2], "FriendsName");
console.log(FriendsName[3], "FriendsName");
// ? 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
console.log(`Hi ${FriendsName[0]}`, "FriendsName");
console.log(`Hi ${FriendsName[1]}`, "FriendsName");
console.log(`Hi ${FriendsName[2]}`, "FriendsName");
console.log(`Hi ${FriendsName[3]}`, "FriendsName");
// ? 13. our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const Favorite_Mode_Of_Commute = ["Honda Motorcycle", "Bus", "Bike", "Car"];
Favorite_Mode_Of_Commute.map((SingleModeOfCommute) => {
  return console.log(
    `I would like to own a ${SingleModeOfCommute} motorcycle.`
  );
});
// ? 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("Invitation to Dinner");
const Guest_For_Dinner = ["Abdullah", "Zain", "Abid", "Mubashir"];
Guest_For_Dinner.map((SingleGuestMessage) => {
  return console.log(`I would like to invite ${SingleGuestMessage} .`);
});
// ? 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
console.log("Invitation to Dinner New List");
Guest_For_Dinner[0] = "Haider";
Guest_For_Dinner.map((SingleGuestMessage) => {
  return console.log(`I would like to invite ${SingleGuestMessage} .`);
});
// ? 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
console.log("New Guest Entry");
Guest_For_Dinner.unshift("Majid");
Guest_For_Dinner.splice(Math.ceil(Guest_For_Dinner.length / 2), 0, "Asif");
Guest_For_Dinner.push("Saqib");
Guest_For_Dinner.map((SingleGuestMessage) => {
  return console.log(`I would like to invite ${SingleGuestMessage} .`);
});
// ? 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
while (Guest_For_Dinner.length > 2) {
  console.log(`Sorry ${Guest_For_Dinner.pop()}, Seats Are Fulled`);
}
Guest_For_Dinner.map((SingleGuestMessage) => {
  return console.log(`You are Only Invited ${SingleGuestMessage} .`);
});
Guest_For_Dinner.pop();
Guest_For_Dinner.pop();

console.log("Guest:", Guest_For_Dinner);
// ? 17. Seeing the World: Think of at least five places in the world you’d like to visit.
let placesToVisit = ["Denmark", "Tsushima", "Madrid", "Machu Picchu", "Bali"];
console.log("Places", placesToVisit.join(", "));
console.log("Sorted Data", placesToVisit.slice().sort().join(", "));
console.log("Previous Entry Order", placesToVisit.join(", "));
console.log("Reverse Order", placesToVisit.slice().sort().reverse().join(", "));
placesToVisit.reverse();
console.log("Reverse Order", placesToVisit.join(", "));
console.log(
  "Previous Entry Order",
  placesToVisit.slice().sort().reverse().join(", ")
);
console.log("Sorted Order", placesToVisit.sort().join(","));
console.log(placesToVisit.sort((a, b) => b.localeCompare(a)));
console.log(placesToVisit.join(", "));
console.log(`Number of people invited to dinner: ${Guest_For_Dinner.length}`);
// ? 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let mountains = ["Mount Everest", "K2", "Kangchenjunga"];
let rivers = ["Ravi", "Jhelum", "Indus"];
let countries = ["Russia", "China", "Malaysia"];
let cities = ["New York", "Karachi", "Texas"];
let languages = ["JavaScript", "C#", "TypeScript"];
// ? 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let person1 = { name: "hammad", age: 22 };
let person2 = { name: "saad", age: 20 };
let person3 = { name: "abdul qadir", age: 16 };
let fruits = ["apple", "banana", "orange"];
// ? 22.  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// ? 23.  Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
let Num1 = 5;
let Num2 = 10;

console.log(Num1 == Num2);
console.log(Num1 != Num2);
console.log("Test 3: Is Num1 greater than Num2?");
console.log(Num1 > Num2);
console.log("Test 4: Is Num1 less than or equal to Num2?");
console.log(Num1 <= Num2);
console.log("Test 5: Is Num1 less than 10 AND Num2 greater than 5?");
console.log(Num1 < 10 && Num2 > 5);
console.log("Test 6: Is Num1 equal to 5 OR Num2 equal to 15?");
console.log(Num1 == 5 || Num2 == 15);
let car = "Subaru";
console.log("Test 7: Is car equal to 'subaru'?");
console.log(car.toLowerCase() == "subaru".toLowerCase());
console.log("Test 8: Is car not equal to 'Toyota'?");
console.log(car != "Toyota");
console.log("Test 9: Is 10 equal to 10?");
console.log(10 == 10);
console.log("Test 10: Is 5 not equal to 8?");
console.log(Num1 != Num2);
// ? 24. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";
if (alien_color == "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the alien!"
  );
} else {
  console.log("You missed the alien. No points earned.");
}
// ?  27. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and

if (alien_color == "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the alien!"
  );
} else {
  console.log("You missed the alien. 10 points earned.");
}
if (alien_color != "green") {
  console.log("You missed the alien. 10 points earned.");
} else {
  console.log(
    "Congratulations! You just earned 5 points for shooting the alien!"
  );
}
// ? 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 22;

if (age < 2) {
  console.log("this age slab is for a baby.");
} else if (age >= 2 && age < 4) {
  console.log("this age slab is for a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("this age slab is for a kid.");
} else if (age >= 13 && age < 20) {
  console.log("this age slab is for a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("this age slab is for an adult.");
} else {
  console.log("this age slab is for an elder.");
}
