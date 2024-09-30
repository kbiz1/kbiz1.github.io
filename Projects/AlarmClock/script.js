setInterval(()=> {
    let currentTime = new Date();

    document.getElementById("hour").innerHTML = ('0' + currentTime.getHours()).slice(-2);
    document.getElementById("minute").innerHTML = ('0' + currentTime.getMinutes()).slice(-2);
    document.getElementById("seconds").innerHTML = ('0' + currentTime.getSeconds()).slice(-2);
    document.getElementById("minuteContainer").style.animation = "";
    document.getElementById("hourContainer").style.animation = "";
    //document.getElementById("secondsContainer").style.animation = "";
},1000)

let date = new Date();
let sec = date.getSeconds();
let millisecs = date.getMilliseconds();
// time animation for minutes
setTimeout(()=> {
    setInterval(()=> {
        document.getElementById("minuteContainer").style.animation = "flip 1s linear";
        console.log("flipped minutes");
    }, 60 * 1000);
    console.log("began flipping minutes");
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

// time animation for seconds, kind of unpleasant to look at so currently disabled
/* setTimeout(()=> {
    setInterval(()=> {
        document.getElementById("secondsContainer").style.animation = "flip 0.2s linear";
        console.log("flipped seconds");
    }, 1000);
    document.getElementById("secondsContainer").style.animation = "flip 0.3s linear";
    console.log("began flipping seconds");
}, 1000 - millisecs)*/