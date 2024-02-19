// ? 1. Install Node.js, TypeScript and VS Code on your computer.
// * completed
// ? 2.  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Person = "eric";
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
// ? 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits = ["apple", "banana", "strawberry"];
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
} else {
  console.log("You don't like kiwis.");
}
if (favorite_fruits.includes("pineapple")) {
  console.log("You really like pineapples!");
} else {
  console.log("You don't like pineapples.");
}
// ? 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["admin", "eric", "julia", "john", "sarah"];

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
// ? 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
  usernames = [];
}

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
// ? 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users = ["john", "sarah", "emma", "mike", "alice"];
let new_users = ["sarah", "MIKE", "peter", "julia", "emma"];
let current_users_lower = current_users.map((user) => user.toLowerCase());
for (let new_user of new_users) {
  let new_user_lower = new_user.toLowerCase();
  if (current_users_lower.includes(new_user_lower)) {
    console.log(
      `Sorry, the username "${new_user}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`Congratulations! The username "${new_user}" is available.`);
  }
}
// ? 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalEnding;
  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}
// ? 34.  Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

let pizzas = ["Mexican", "Fajita", "Supreme"];

for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("Pizza is one of my favorite foods. I really love pizza!");
// ? 35.  Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
const animals = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
  console.log(animal);
}

for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
// ? 36 . T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirts(size: string, message: string): void {
  console.log(`The shirt is ${size} size and has the message: "${message}".`);
}
make_shirts("medium", "I love TypeScript!");

// ? 37 . Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size = "Large", message = "I love TypeScript") {
  console.log("Size: " + size + ", Message: " + message);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Hello, World!");

// ? 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Unknown") {
  console.log(city + " is in " + country + ".");
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris");

// ? 39.City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Paris", "France");
console.log(city1);
console.log(city2);
console.log(city3);
// ? 40 Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(
  artist_name: string,
  album_title: string,
  number_of_tracks?: number
) {
  let album = {
    artist: artist_name,
    title: album_title,
    tracks: 0
  };
  if (number_of_tracks) {
    album.tracks = number_of_tracks;
  }
  return album;
}

let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 12);
let album3 = make_album("Artist 3", "Album 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
// ? 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicians = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller"
];

show_magicians(magicians);

// ? 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(magician + " the Great");
  }
  return greatMagicians;
}

let magicianss: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller"
];
let greatMagicians: string[] = make_great(magicianss);
show_magicians(greatMagicians);
// ? 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let originalMagicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller"
];
let unchangedMagicians: string[] = make_great([...originalMagicians]); // Create a copy of the original array
show_magicians(originalMagicians);
show_magicians(unchangedMagicians);

// ? 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function make_sandwich(...toppings: string[]): void {
  console.log("Sandwich with the following toppings:");
  for (let topping of toppings) {
    console.log("- " + topping);
  }
}
make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
// ? 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function describe_car(
  manufacturer: string,
  model: string,
  ...features: string[]
): object {
  let car: any = {
    Manufacturer: manufacturer,
    Model: model
  };
  for (let feature of features) {
    let [key, value] = feature.split(":");
    car[key.trim()] = value.trim();
  }
  return car;
}

let carInfo: object = describe_car(
  "Toyota",
  "Camry",
  "Color: Red",
  "Year: 2022",
  "Navigation: Yes"
);
console.log(carInfo);
