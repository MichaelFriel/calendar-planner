$(document).ready(function() {

const currentDate = dayjs();
const formattedDate = currentDate.format("dddd, MMMM D, YYYY");
const currentDateEL = document.querySelector('#currentDay')
const descriptionEL = document.querySelector('.description');

let currentDateEl = $("#currentDay");
$(currentDateEl).html(formattedDate);

const times = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
let schedule = "";

// HTML Input

for (let i=9; i < times.length; i++) {
schedule += `
 <div class="row time-block">
        <div class="col-1 hour">
          <strong>${times[i]}</strong>
      </div>
            <textarea class="col-10 description" id="input-${times[i]}"></textarea>
              <button class="col-1 saveBtn" id ="btn-${times[i]}"><i class="fas fa-save" ></i></button>
          </div> `;
}

$('#schedule').html(schedule);

// Save Data 
$('.saveBtn').click(function () {
    let buttonID = $(this).attr('id');
    let time = buttonID.replace('btn-', ''); // Is there a way to use jQuery here?
    let timeData = $()

    let description = $('#input-' + time).val();
    let key = 'Schedule - ' + time;

    localStorage.setItem(key, description);
})

// Colour changing

// Find a way to associate current time with an index in the times array.
// Add to the for loop, to add a class to the row of either past, present or future.
// Possibly pass an additional item into local storage, which is the time in 24hr format. 








// let totalSchedule = JSON.parse(localStorage.getItem ("Schedule") || "[]");
// let time = time;
// let description = descriptionEL.value

// return;
// }

// totalSchedule.push({
//     time;
//     description
// })

});




