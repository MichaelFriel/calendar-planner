$(document).ready(function() {


const currentDate = dayjs();
const currentHour = dayjs().hour();
console.log(currentHour);
const formattedDate = currentDate.format("dddd, MMMM Do, YYYY");
let descriptionStored = ''

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
        <textarea class="col-10 description" id="input-${times[i]}" data-time="${i}">${descriptionStored}</textarea>
            <button class="col-1 saveBtn" id ="btn-${times[i]}"><i class="fas fa-save" ></i></button>
        </div> `;
}

$('#schedule').html(schedule);

// Add colours depending on time.

let allSchedules = document.querySelectorAll('.description')

for (let i=0; i < allSchedules.length; i++) {

  let timeData = allSchedules[i].dataset.time;

if (timeData < currentHour) {
    allSchedules[i].classList.add("past");
} else if (
    timeData == currentHour) {
        allSchedules[i].classList.add("present");
} else if (
    timeData > currentHour) {
        allSchedules[i].classList.add("future");
    }

}

// Save Data in local storage.

$('.saveBtn').click(function () {
    let buttonID = $(this).attr('id');
    let time = buttonID.replace('btn-', ''); 

    let description = $('#input-' + time).val();
    let key = 'Schedule - ' + time;

    localStorage.setItem(key, description);


})

// load description text upon page reload

function init () {

        var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    
        times.forEach(function(time) {
            var scheduleLocal = localStorage.getItem("Schedule - " + time);
            $('#input-' + time).val(scheduleLocal);
        });
    }


    init ()


});




