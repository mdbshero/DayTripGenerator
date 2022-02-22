"use strict";
//Day Trip Generator
//As a user, I want a destination to be randomly selected for my day trip. 5x
//As a user, I want a restaurant to be randomly selected for my day trip. 5x
//As a user, I want a mode of transportation to be randomly selected for my day trip. 5x
//As a user, I want a form of entertainment to be randomly selected for my day trip. 5x
//As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things. 15x
//As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections. 10x
//As a user, I want to display my completed trip in the console/alert. 10x
//As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing! 10

let destinations = ['Cool Springs', 'East Nashville', 'Broadway', 'Spring Hill', 'Green Hills', 'Huntsville', 'Columbia', 'Murfreesboro'];
let restaurants = ['Chauhan', 'Emmy Squared', 'International Market', 'Tansuo', 'House of Cards', 'The Mockingbird', 'Loveless Cafe', 'Pemrose'];
let transportation = ['automobile', 'bus', 'Uber', 'Lyft', 'bike', 'train', 'helicoptor'];
let entertainment = ['honkey tonk', 'magic show', 'Grand ol Opry show', 'musical', 'park', 'sporting event', 'music show', 'museum'];

//Create random number generator to use for arrays -- will use "array".length for maxArrayValue
function randomNumberGen (maxArrayValue) {
    let randomNumber = Math.random() * maxArrayValue;
    return Math.floor(randomNumber);
};

//Create function that uses random num generator to select random items in each array
function randomArrayGen (tripChoices) {
    let randomTripChoice = randomNumberGen (tripChoices.length);
    return tripChoices[randomTripChoice];
};

//Randomized day trip array creation.
function createRandomTrip (){
    let randDestination = randomArrayGen(destinations);
    let randRestaurants = randomArrayGen(restaurants);
    let randTransportation = randomArrayGen(transportation);
    let randEntertainment = randomArrayGen(entertainment);

    let tripInitialSelection = [];
    tripInitialSelection.push(randDestination);
    tripInitialSelection.push(randRestaurants);
    tripInitialSelection.push(randTransportation);
    tripInitialSelection.push(randEntertainment);

    return tripInitialSelection;
};
let iTrip = createRandomTrip(); //captures inital trip creation

//Create function that displays the array selections in a sentence.
function showTripSelections (randomizedTripArray) {
    randomizedTripArray = iTrip;
    let tripTextDisplay = `You will travel to ${randomizedTripArray[0]}. You will eat at ${randomizedTripArray[1]}. You will travel by ${randomizedTripArray[2]}. Your day's entertainment will be going to a ${randomizedTripArray[3]}.`;
    return tripTextDisplay;
};

//Create function that prompts user what to re-select from arrays.

function tripReselect (newChoice){
    let reselect = iTrip;
    newChoice = prompt("Which selection would you like to change? Select 1 for destinations, 2 for restaurants, 3 for transportation, 4 for entertainment, or 5 for none").toLowerCase();
    switch(newChoice){
        case "1":
            reselect[0] = randomArrayGen(destinations);
            break;
        case "2":
            reselect[1] = randomArrayGen(restaurants);
            break;
        case "3":
            reselect[2] = randomArrayGen(transportation);
            break;
        case "4":
            reselect[3] = randomArrayGen(entertainment);
            break;
        case "5":
            break;
        default:
            tripReselect(newChoice);
    }
    reselect = (showTripSelections());
    return reselect;
}


//Create function that asks user if they accept the completed trip or want to reselect.

function userQuery (userPrompt){
    let showTripSelectionsInsert = showTripSelections();
    userPrompt = prompt(`Your current trip plan is as follows: ${showTripSelectionsInsert} Would you like to make any changes? Please enter yes or no.`).toLowerCase();
    switch(userPrompt){
        case "no":
            alert (`Your final trip selections are as follows. ${showTripSelectionsInsert}`);
            console.log(showTripSelectionsInsert);
            break;
        case "yes":
            let showTripSelectionsInsertNew = tripReselect();
            alert (`Your new trip selections are as follows. ${showTripSelectionsInsertNew}`);
        default:
            userQuery(userPrompt);
    }
}



//Creat a function that introduces and runs the program.

function runAll (){
    alert ("Welcome to your random day trip generator!");
    userQuery();
};

runAll();