// control btn in website 

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.value = '';
}

function clearList() {
    taskList.innerHTML = '';
}
// clock function 
function displayDigitalClock() {
    var clockElement = document.getElementById("clock");
    var ampmElement = document.getElementById("ampm");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours.toString().padStart(2, "0") + ":" +
        minutes.toString().padStart(2, "0") + ":" +
        seconds.toString().padStart(2, "0");
    clockElement.textContent = timeString;

    if (hours >= 12) {
        ampmElement.textContent = "PM";
    } else {
        ampmElement.textContent = "AM";
    }
}
setInterval(displayDigitalClock, 1000);
displayDigitalClock();
