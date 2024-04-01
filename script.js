// Constants defining property details
const beds = 6;
const reviewScore = 4.0;
const costPerNight = 130;
const pool = true;
const country = "Italy";

// User requirements
const minBeds = 6;
const minReviewScore = 4.0;
const maxCostPerNight = 170;
const needPool = true;
const inCountry = "Italy";

// Selecting HTML elements
const listItemArray = document.querySelectorAll("li");

// Variables for matching and messages
let match = true;
let saving;
let message;

// Checking property against user requirements
if (beds < minBeds) {
  match = false;
}
if (reviewScore < minReviewScore) {
  match = false;
}
if (needPool && !pool) {
  match = false;
}
if (inCountry !== country) {
  match = false;
}
if (costPerNight > maxCostPerNight) {
  match = false;
} else {
  saving = maxCostPerNight - costPerNight;
}

// Creating message for matching property
if (match) {
  message = "This property is a match!";
  if (saving > 0) {
    message = message + " It is $" + saving + " cheaper than your maximum.";
  }
}

// Displaying message on webpage
if (match) {
  document.getElementById('message').innerText = message;
} else {
  document.getElementById('message').innerText = "Sorry, this property is not suitable.";
}

// Updating HTML elements with property and user requirements details
listItemArray[0].innerHTML = "Beds: " + beds;
listItemArray[1].innerHTML = "Review Score: " + reviewScore;
listItemArray[2].innerHTML = "Cost: " + costPerNight;
listItemArray[3].innerHTML = "Pool: " + ((pool) ? "Yes" : "No");
listItemArray[4].innerHTML = "Location: " + country;
listItemArray[5].innerHTML = "Minimum beds: " + minBeds;
listItemArray[6].innerHTML = "Minimum Review Score: " + minReviewScore;
listItemArray[7].innerHTML = "Maximum Cost: " + maxCostPerNight;
listItemArray[8].innerHTML = "Must Have Pool: " + ((needPool) ? "Yes" : "No");
listItemArray[9].innerHTML = "Location: " + inCountry;
