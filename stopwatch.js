/*const timerEl = document.getElementById('timer')

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
    var action = button.getAttribute('action')

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
*/

"use strict"
var hour = 0
var minute = 0
var second = 0 
var millisecond = 0

var cron


function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10)
  }
  
  function pause() {
    clearInterval(cron)
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second').innerText = '00'
    document.getElementById('millisecond').innerText = '000'
  }

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0
      second++
    }
    if (second == 60) {
      second = 0
      minute++
    }
    if (minute == 60) {
      minute = 0
      hour++
    }
    document.getElementById('hour').innerText = returnData(hour)
    document.getElementById('minute').innerText = returnData(minute)
    document.getElementById('second').innerText = returnData(second)
    document.getElementById('millisecond').innerText = returnData(millisecond)
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }


