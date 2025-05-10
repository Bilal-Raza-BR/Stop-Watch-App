var min =0;
var sec =0;
var msec =0;

var getMin = document.getElementById('min');
var getSec = document.getElementById('sec');
var getMsec = document.getElementById('msec');

var timer;
    
function start(){
    timer= setInterval(function(){
        msec++
        getMsec.innerHTML = msec
        if(msec >= 100){
            sec++;
            getSec.innerHTML = sec;
            msec =0
        }
        else if(sec >= 60){
            min++;
            getMin.innerHTML = min;
            sec = 0
        }
    },10)
    document.getElementById('start').disabled = true
   
}

function stop(){
clearInterval(timer)
document.getElementById('start').disabled = false
}

function reset(){
    min =0;
     sec =0;
    msec =0;
    getMsec.innerHTML = msec
    getSec.innerHTML = sec;
    getMin.innerHTML = min;

}
