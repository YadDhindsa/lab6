/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35; //default rate is set to 35
let numberofdays = 0;
let totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Function to update number of days and cost when a day is clicked
function updateDaySelection(day) {
  if (day.classList.contains('clicked')) {
    day.classList.remove('clicked');
    numberofdays--;
  } else {
    day.classList.add('clicked');
    numberofdays++;
  }
  calculateCost();
}

// Add event listeners to each day button
let days = document.querySelectorAll('.day-selector li');
days.forEach(function(day) {
  day.addEventListener('click', function() {
    updateDaySelection(day);
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById('clear-button');
if (clearButton) {
  clearButton.addEventListener('click', function() {
    days.forEach(function(day){
      day.classList.remove('clicked');
    });
    numberofdays = 0;
    calculateCost();
  });
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDay = document.getElementById('half');
let fullDay = document.getElementById('full');

if (halfDay) {
  halfDay.addEventListener('click', function() {
    costPerDay = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    calculateCost();
  });
}
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

if (fullDay) {
  fullDay.addEventListener('click', function() {
    costPerDay = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    calculateCost();
  });
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() 
{
    totalCost = numberofdays * costPerDay;
    document.getElementById('calculated-cost').innerHTML = totalCost;
}

