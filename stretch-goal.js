// Require newCases function so you can get cases for that day.
// Make function that takes in two dates along with data for arguments.
// Make two variables using the newCases function using date1/date2 with data for the argument 
// Use variable that will take the last two and subtract to get the total difference from those two dates.
// Return caseDifferences 


const newCases = require('./get-new-cases-by-day');

const caseDifference = function (date1, date2, data) {
    const dateResult1 = newCases(date1, data);
    const dateResult2 = newCases(date2, data);
    const caseDifferences = dateResult2 - dateResult1;

    return caseDifferences;

}

module.exports = caseDifference;

