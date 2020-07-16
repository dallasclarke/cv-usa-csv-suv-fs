// Require in our date from csv file.
// Link functions from back-end that we will be using in the front.
// Create command variable that takes userInput for new or total.
// Make variable that uses getRows function for our file data to be 2D array.
// If statement to check if command equals to new or total and if so console log the function the will give the user the data. The function takes the users dates and file data to return results.
// Else statement to console log message telling the user what to enter to get data.



const fs = require('fs');
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8');


const casesByDay = require('./get-new-cases-by-day.js');
const getRows = require('./get-rows.js');
const totalCasesByDay = require('./get-total-cases-by-day.js');


let command = process.argv[2];
let userDates = process.argv[3];
const fileData = getRows(file);


if (command === 'new') {
    console.log(casesByDay(userDates, fileData))
} 
else if (command === 'total') {
    console.log(totalCasesByDay(userDates, fileData))
} 
else {
    console.log('Please Enter the following:')
    console.log('New/total plus the date(Year,Month,Day), to find new cases that day or the total up to that date');
}