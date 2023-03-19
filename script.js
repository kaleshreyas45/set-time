let startPosition = 0;
let maxAngle = 0;
let MAX = 12;
let INITIAL = 9;
let ANGLE = 30;
let isHours = true;

const numbers = document.getElementsByClassName('number')
const hoursHand = document.querySelector('.hours-hand')
const setHoursBtn = document.querySelector('.set-hours');
const setMinutesBtn = document.querySelector('.set-minutes');
const hours = document.querySelectorAll('.hours')
const minutes = document.querySelectorAll('.minutes')
const timeInMinutes = document.querySelector('.time-in-minutes')
const timeInHours = document.querySelector('.time-in-hours')


const mainFunction = function(selectedNum){
    if (selectedNum < INITIAL) {
        let difference = MAX - INITIAL + selectedNum;
        maxAngle = difference * 30;
        let angleToRotate = maxAngle - startPosition;
        hoursHand.style.transform = `rotate(${startPosition + angleToRotate}deg)`
        startPosition = maxAngle;
    }
    else {
        let difference = selectedNum - INITIAL;
        maxAngle = difference * 30;
        let angleToRotate = maxAngle - startPosition;
        hoursHand.style.transform = `rotate(${startPosition + angleToRotate}deg)`
        startPosition = maxAngle;
    }
}
setHoursBtn.addEventListener('click', () => {
    const alreadyPresentNumberInHours = Number(timeInHours.innerHTML)
    mainFunction(alreadyPresentNumberInHours)
    setHoursBtn.classList.add('active');
    setMinutesBtn.classList.remove('active')
    isHours = true;
    for (let i = 0; i < hours.length; i++) {
        hours[i].style.display = 'flex';
    }
    for (let i = 0; i < minutes.length; i++) {
        minutes[i].style.display = 'none';
    }
})
setMinutesBtn.addEventListener('click', () => {
    const alreadyPresentNumberInMinutes = Number(timeInMinutes.innerHTML)/5;
    mainFunction(alreadyPresentNumberInMinutes)
    setMinutesBtn.classList.add('active')
    setHoursBtn.classList.remove('active')
    isHours = false;
    for (let i = 0; i < hours.length; i++) {
        hours[i].style.display = 'none';
    }
    for (let i = 0; i < minutes.length; i++) {
        minutes[i].style.display = 'flex';
    }
})

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        let selectedNum;
        if (isHours) {
            selectedNum = Number(numbers[i].innerHTML);
            if(numbers[i].innerHTML.length<2){
                timeInHours.innerHTML = '0' + numbers[i].innerHTML
            }
            else{
                timeInHours.innerHTML = numbers[i].innerHTML
            }
            
        }
        else {
            timeInMinutes.innerHTML = numbers[i].innerHTML
            selectedNum = (Number(numbers[i].innerHTML)) / 5
        }
        mainFunction(selectedNum);
    })
}