let header = document.getElementById('header-container');
header.style.backgroundColor = '#2C5530';

let container = document.getElementById('header-container');
container.style.backgroundColor = 'black'

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#739E82';

let emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = '#FF9F1C';
}

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#739E82';

let noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = '#FF9F1C';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#2C5530';
