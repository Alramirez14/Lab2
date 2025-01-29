// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

var sentence = "How many vowels do you think are in this one?";
// Your solution goes here.

//create function to increment value for each vowel detected

//code help from freecodecamp.org

function countVowels(str) { 
    let vowelcount = 0; 
    const vowels = ["a", "e", "i", "o", "u"]; 
    for (let char of str) { 
      if (vowels.includes(char)) { 
        vowelcount++; 
      }
    }
    return "There are " + (vowelcount) + " vowels in \"" + str + "\""
  }

//runs function on sentence
countVowels(sentence)
//runs function on user input
input = prompt("Please type a sentence");
countVowels(input)



// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here

//code help from Gemini and geeksforgeeks.org
//the function below checks whether all numbers in array are odd

function checkifallodd(arr) {
    for (let num of arr){
        if (num % 2 === 0) { //if one or more is even
            return arr.reduce((a, b) => a + b, 1); //add them
        }
    }
    return arr.reduce((a, b) => a * b, 1); //if not, multiply!
 }


checkifallodd(second)


// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here

function checkifsame(arr){
    if (arr.reduce((a,b) => a +b)== 21){ //if sums to 21
        return true;
    } 
    else if (arr.reduce((a,b) => a == b)) { //if numbers are the same
        return "Split";
    }
    else {
        return false; //false case, neither of the above are true
    }

}

checkifsame(p)
checkifsame(q)
checkifsame(r)

// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

for (var i = 1; i < 101; i++) { //sets up a for loop from 1 to 100 and preps to iterate
    if (i % 3 == 0 && i % 5 == 0) { //if divisible by 3 and 5 (important to check this first)
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0) { //then if div only by 5
        console.log("Buzz");
    }
    else if (i % 3 == 0) { //then if div only by 3
        console.log("Fizz");
    }
    else {
        console.log(i); //then if not divisible by either, just print the number
    }
}

//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

//Your solution goes here
var car = {}; //creates var "car"
car.make = 'Ford'; //the next few lines set up the properties
car.model = 'Contour';
car.year = 1998;
car.color = 'Blue';
car.start = function(){ //this is the fun part, run it yourself!
    var answer
    answer = prompt("If you are ready to race, type yes")
    if (answer.toUpperCase() == "YES") {
        console.log("*Mario Voice* Let's a go! *burnout noises*") 
    }
    else {
        console.log("Nevermind then...")
    }
}
car.start()




//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

function jsAjax(){
    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('data/airports.geojson');
    fetch(request)
    .then(response =>response.json())
    .then(data => {
        console.log(data.features.length);
    })
    .catch(error => console.error('Error: ', error))
    //Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    
    //Step 3: use Fetch to retrieve the data and set up callback functions

};

//Step 4: define your callback functions
// You'll need to process the data in some way. First, from geojson to json... then to find the answer.
// Loops are helpful here.

//here is for types:
function jsAjax(){
var request = new Request('data/airports.geojson');
fetch(request)
  .then(response => response.json())
  .then(data => {
    var civiliancount = 0;  // Initialize civiliancount
    for (let i = 0; i < data.features.length; i++) {
      if (!data.features[i].properties.type.includes("military") 
        && !data.features[i].properties.type.includes("spaceport")) {
        civiliancount++;  // Increment count for civilian airports if type doesn't include military or spaceport
      }
    }
    console.log("There are " + data.features.length + " total airports")
    console.log("There are " + civiliancount + " civilian airports");  // Return the result after loop is complete
  })
  .catch(error => console.error('Error: ', error));
}



//Step 5: send the final answer to the console.log()

//fetch request demo from in class


// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
var pops = ['59920', '652500', '176650', '56470'];

// Start the function and set the arrays as args
function makecitytable(arr1, arr2) {
  var table = document.createElement("table"); // adds table

  // Create and append the header row
  var headerRow = document.createElement("tr");
  headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");
  table.appendChild(headerRow);

  // Create and append data rows referencing index of array
  for (var i = 0; i < arr1.length; i++) {
    var rowHtml = "<tr><td>" + arr1[i] + "</td><td>" + arr2[i] + "</td></tr>";
    table.insertAdjacentHTML('beforeend', rowHtml);
  }

  // Append the table to mydiv
  var mydiv = document.getElementById("mydiv"); 
  mydiv.appendChild(table);

  return table; // Returning table just in case
}

// Run the function
var table = makecitytable(cities, pops);

//I have tested this several times with variable success. This version finally works, and I'll turn in an HTML to demonstrate. 


// (Optional) Log the table to the console for debugging
// There are many ways to get this added to the <div id="mydiv"></div> of the associated (imaginary) website.
// This can happen in the function, it can happen as a return of the function, etc.
// The general structure should look something like:

// one way I like is to have the function return the contents of the table and call the function as I create a new variable that's directly fed into the element...
// this relies on 'method chaining' and is NOT NECESSARY
// if you're not sure what I mean, don't worry. It's definitely not the only way. 
// Review Chapter 2 of your work book for SEVERAL other ways.