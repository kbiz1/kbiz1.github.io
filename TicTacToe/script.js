function playXandO(elem) {
    let currentlyPlayingLabel = document.getElementById('currentlyPlaying');

    if (currentlyPlaying == "x") {
        if (elem.innerHTML != "") {} else {
            elem.innerHTML = "X";
            currentlyPlaying = "o";
            currentlyPlayingLabel.innerHTML = "Currently Playing: " + "O";
            checkIfWon();
        }
    } else {
        if (elem.innerHTML != "") {} else {
            elem.innerHTML = "O";
            currentlyPlaying = "x";
            currentlyPlayingLabel.innerHTML = "Currently Playing: " + "X";
            checkIfWon();
        }
    }
}

function resetEverything() {
    var griditems = document.getElementsByClassName('grid-item');
    var press2PlayAgain = document.getElementById('press2PlayAgain');
    document.getElementById('grid1').innerHTML = "";
    document.getElementById('grid2').innerHTML = "";
    document.getElementById('grid3').innerHTML = "";
    document.getElementById('grid4').innerHTML = "";
    document.getElementById('grid5').innerHTML = "";
    document.getElementById('grid6').innerHTML = "";
    document.getElementById('grid7').innerHTML = "";
    document.getElementById('grid8').innerHTML = "";
    document.getElementById('grid9').innerHTML = "";

    press2PlayAgain.style.visibility = "hidden";

    for (var i = 0; i < griditems.length; i++) {
        griditems[i].style.pointerEvents = "all";
    }
}

function checkIfWon() {
    var grid1 = document.getElementById('grid1');
    var grid2 = document.getElementById('grid2');
    var grid3 = document.getElementById('grid3');
    var grid4 = document.getElementById('grid4');
    var grid5 = document.getElementById('grid5');
    var grid6 = document.getElementById('grid6');
    var grid7 = document.getElementById('grid7');
    var grid8 = document.getElementById('grid8');
    var grid9 = document.getElementById('grid9');
    var griditems = document.getElementsByClassName('grid-item');
    var press2PlayAgain = document.getElementById('press2PlayAgain');

    if (grid1.innerHTML == "O" && grid2.innerHTML == "O" && grid3.innerHTML == "O" || grid1.innerHTML == "X" && grid2.innerHTML == "X" && grid3.innerHTML == "X") {
        alert(grid1.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid4.innerHTML == "O" && grid5.innerHTML == "O" && grid6.innerHTML == "O" || grid4.innerHTML == "X" && grid5.innerHTML == "X" && grid6.innerHTML == "X") {
        alert(grid4.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid7.innerHTML == "O" && grid8.innerHTML == "O" && grid9.innerHTML == "O" || grid7.innerHTML == "X" && grid8.innerHTML == "X" && grid9.innerHTML == "X") {
        alert(grid7.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid1.innerHTML == "O" && grid4.innerHTML == "O" && grid7.innerHTML == "O" || grid1.innerHTML == "X" && grid4.innerHTML == "X" && grid7.innerHTML == "X") {
        alert(grid1.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid2.innerHTML == "O" && grid5.innerHTML == "O" && grid8.innerHTML == "O" || grid2.innerHTML == "X" && grid5.innerHTML == "X" && grid8.innerHTML == "X") {
        alert(grid2.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid3.innerHTML == "O" && grid6.innerHTML == "O" && grid9.innerHTML == "O" || grid3.innerHTML == "X" && grid6.innerHTML == "X" && grid9.innerHTML == "X") {
        alert(grid3.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid1.innerHTML == "O" && grid5.innerHTML == "O" && grid9.innerHTML == "O" || grid1.innerHTML == "X" && grid5.innerHTML == "X" && grid9.innerHTML == "X") {
        alert(grid1.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }

    if (grid3.innerHTML == "O" && grid5.innerHTML == "O" && grid7.innerHTML == "O" || grid3.innerHTML == "X" && grid5.innerHTML == "X" && grid7.innerHTML == "X") {
        alert(grid3.innerHTML + " has won this round");

        for (var i = 0; i < griditems.length; i++) {
            griditems[i].style.pointerEvents = "none";
            press2PlayAgain.style.visibility = "visible";
        }
    }
}