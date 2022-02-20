"use strict";
//Day Trip Generator
//As a user, I want a destination to be randomly selected for my day trip. 5
//As a user, I want a restaurant to be randomly selected for my day trip. 5
//As a user, I want a mode of transportation to be randomly selected for my day trip. 5
//As a user, I want a form of entertainment to be randomly selected for my day trip. 5
//As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things. 15
//As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections. 10
//As a user, I want to display my completed trip in the console/alert. 10
//As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing! 10

let destinations = ['Cool Springs', 'East Nashville', 'Broadway', 'Spring Hill', 'Green Hills'];
let restaurants = ['Chauhan', 'Emmy Squared', 'International Market', 'Tansuo', 'House of Cards'];
let transportation = ['automobile', 'bus', 'Uber', 'Lyft'];
let entertainment = ['honkey tonk', 'magic show', 'Grand ol Opry show', 'musical'];

//Create random number generator to use for arrays -- will use array.length for maxArrayValue
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
let iTrip = createRandomTrip();
console.log(iTrip);
//Create function that displays the array selections in a sentence.
function showTripSelections (randomizedTripArray) {
    randomizedTripArray = iTrip;
    let tripTextDisplay = `Your day trip has been generated! You will travel to ${randomizedTripArray[0]}. You will eat at ${randomizedTripArray[1]}. You will travel by ${randomizedTripArray[2]}. Your day's entertainment will be going to a ${randomizedTripArray[3]}.`;
    return tripTextDisplay
};

console.log(showTripSelections());

//Create function that prompts user if they want to re-select from arrays.

function tripReselect (newChoice){
    let reselect = iTrip;
    newChoice = prompt("Which selection would you like to change? destinations, restaurants, transportation, entertainment, or none").toLowerCase();
    switch(newChoice){
        case "destinations":
            reselect[0] = randomArrayGen(destinations);
            break;
        case "restaurants":
            reselect[1] = randomArrayGen(restaurants);
            break;
        case "transportation":
            reselect[2] = randomArrayGen(transportation);
            break;
        case "entertainment":
            reselect[3] = randomArrayGen(entertainment);
            break;
        case "none":
            break;
        default:
            tripReselect(newChoice);
    }
    return reselect;
}

console.log(tripReselect(destinations));

//Create function that allows user to input what to reselect.
