

const currentDate = dayjs();
const formattedDate = currentDate.format("dddd, MMMM D, YYYY");
const currentDateEL = document.querySelector('#currentDay')
console.log(formattedDate);

let currentDateEl = $("#currentDay");
$(currentDateEl).html(formattedDate);

// Add Current Date to HTML
// document.getElementById("currentDay").innerHTML = ("Today is " + formattedDate);



