// Task 11: Write a function getDayName(dayNumber) that returns "Monday", "Tuesday", etc.

// TODO: Create a function called 'getDayName' that takes one parameter (dayNumber)
// TODO: Use a switch statement to return the day name based on the number (1-7)
// TODO: 1 = "Monday", 2 = "Tuesday", ..., 7 = "Sunday"
// TODO: Return "Invalid day" for numbers outside 1-7

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

// TODO: Export the getDayName function
module.exports = getDayName;
