const elements = {
    minutes : document.querySelector(".part.first"),
    seconds : document.querySelector(".part.second"),
    control : document.querySelector("#control"),
    reset   : document.querySelector(".reset"),
  };

var remainingSeconds=120;
var interval=null;
 
function updateInterface(){
    const minute= Math.floor(remainingSeconds / 60).toString().padStart(2, "0")
    
    elements.minutes.textContent=minute;
    const second= (remainingSeconds % 60).toString().padStart(2, "0")
    
    elements.seconds.textContent=second;


}

function updateControls(){
    if(interval!==null){
        document.getElementById("control").src="play.png"
    }
    else if(interval===null){
        document.getElementById("control").src="pause1.png"
    }
}
elements.control.addEventListener('click', ()=>{
    if(interval===null){
    countDown();
    updateControls();
    }
    else{
        stop();
        updateControls();
    }

})
elements.reset.addEventListener("click", ()=>{
    const inputMinutes=prompt("Enter number of minutes")
    remainingSeconds=inputMinutes *60;
    stop();
    updateInterface();

    countDown();
    updateControls();
    
})
function stop(){
    clearInterval(interval);
    interval=null;
    updateControls();
}

function countDown(){
    if(interval!==null || remainingSeconds==0){return;}
    interval= setInterval(() => {
        remainingSeconds--;
        updateInterface();
        if(remainingSeconds==0){
            stop();
        }
        
    }, 1000);
}


updateInterface();
countDown();

updateControls();