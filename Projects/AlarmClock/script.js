setInterval(()=> {
    let currentTime = new Date();

    document.getElementById("hour").innerHTML = ('0' + currentTime.getHours()).slice(-2);
    document.getElementById("minute").innerHTML = ('0' + currentTime.getMinutes()).slice(-2);
    document.getElementById("minuteContainer").style.animation = "";
    document.getElementById("hourContainer").style.animation = "";
},1000)

let date = new Date();
let sec = date.getSeconds();
// time animation for minutes
setTimeout(()=> {
    setInterval(()=> {
        document.getElementById("minuteContainer").style.animation = "flip 1s linear";
        console.log("flipped minutes2");
    }, 60 * 1000);
    console.log("flipped minutes1");
    document.getElementById("minuteContainer").style.animation = "flip 1s linear";
}, (60 - sec) * 1000);

// time animation for hours
var delay = 60 * 60 * 1000;
var start = delay - (date.getMinutes() * 60 + date.getSeconds()) * 1000 + date.getMilliseconds();
setTimeout(function hoursAnimation() {
    document.getElementById("hourContainer").style.animation = "flip 1s linear";
    setTimeout(hoursAnimation, delay);
    console.log("flipped hours");
}, start);