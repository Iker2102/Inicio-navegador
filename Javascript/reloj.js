function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourAngle = (hours % 12) * 30 + minutes * 0.5; 
    const minuteAngle = minutes * 6; 
    const secondAngle = seconds * 6; 

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(updateClock, 1000);

updateClock();