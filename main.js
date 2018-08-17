function setDate() {
    const now = new Date();
    // gets seconds, minutes and hours of current time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    //converts seconds, minutes and hours to 360 degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // console.log(seconds);
};

// hand selectors
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


setInterval(setDate, 1000);