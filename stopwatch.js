const timerEl = document.getElementById('timer')

var intervalId = 0;
var timer = 0;


function formatTime(time){
    var hours = Math.floor(time % 360000)
    var minutes = Math.floor((time % 360000) / 6000)
    var seconds = Math.floor((time % 360000) / 100)
    var hundredths = time % 100

    return `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}${seconds.toString().padStart(2, '0')}${hundredths.toString().padStart(2, '0')}`;
}
function setTimer(time){
    timerEl.innerHTML = formatTime(time)
}
function play(){
    var bottom = document.getElementById('play')
    var action = document.querySelector('action')

    clearInterval(interalId)
    if(action == 'start' || action == 'continue'){
        intervalId = setInterval(() =>{
            timer += 1
        }, 10)
        button.getAttribute('action', 'pause')
        button.innerHTML = 'pause'
    } else if(action == 'pause'){
        button.getAttribute('action', 'play')
        button.innerHTML = 'play'
    }

}

function setTimer(time){
    timerEl.innerHTML = formatTime(time)
}
document.getElementById('play').addEventListener('click', play)