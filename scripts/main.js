var _goodCount = 0;
var goodElement = document.getElementById("goodOutput");
function goodChoice() {
    _goodCount++;
    goodElement.innerText = _goodCount;
}

var _badCount = 0;
var badElement = document.getElementById("badOutput");
function badChoice() {
    _badCount++;
    badElement.innerText = _badCount;
}

var _dayCount = 0;
var dayElement = document.getElementById("dayOutput");

function dayGoing(){
    _dayCount = _goodCount-_badCount;
    dayElement.innerText =_dayCount;
    dayGoingColor(_dayCount);
}

function dayGoingColor(_dayCount){
    if(_dayCount == 0){
        document.getElementById('dayOutput').style.color = "black";  
    } else if (_dayCount < 0) {
        document.getElementById('dayOutput').style.color = "red";
    } else if(_dayCount > 0){
        document.getElementById('dayOutput').style.color = "green";
    }
}