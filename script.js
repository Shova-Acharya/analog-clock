const currentSec = document.querySelector(".secline");
const currentMin = document.querySelector(".minline");
const currentHour = document.querySelector(".hourline");

function time(){
    const date = new Date();
    const hour = date.getHours() * 30; //360/12
    const min = date.getMinutes() * 6; //360/60
    const sec = date.getSeconds() * 6; //360/60

    currentSec.style.transform = `rotate(${sec}deg)`;
    currentMin.style.transform = `rotate(${min}deg)`;
    currentHour.style.transform = `rotate(${hour}deg)`;
   
    
    //console.log(sec);
    //console.log(min);
    console.log(hour);
    setTimeout(time,1000);   
}

time();

