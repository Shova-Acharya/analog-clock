
const currentSec = document.querySelector(".secline");
const currentMin = document.querySelector(".minline");
const currentHour = document.querySelector(".hourline");

function time(){
    const date = new Date();
    
    const sec = date.getSeconds(); 
    const min = date.getMinutes(); 
    const hour = date.getHours();  

    const secDeg = sec * 6; //360/60
    const minDeg = min *6; //360/60
    const hourDeg = (hour * 30) + (0.5 * min); //360/12, 30/60

    currentSec.style.transform = `rotate(${secDeg}deg)`;
    currentMin.style.transform = `rotate(${minDeg}deg)`;
    currentHour.style.transform = `rotate(${hourDeg}deg)`;
   
    
    console.log(sec);
    //console.log(min);
    //console.log(hour);
   
}
let tick = setInterval(time, 1000)

function stopFunction(){
    console.log("stop");
    clearInterval(tick);
    
}

function startFunction(){
    console.log("start");
    tick = setInterval(time, 1000);
    return tick;   
}





