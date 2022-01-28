// gettting the elements

let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let red = document.querySelector(".red");
let car = document.querySelector(".car");
let body = document.querySelector("body")
let isMoving = false;
let box = document.querySelector(".box");
let background = document.querySelector(".background");
let leftWheel = document.querySelector(".l-wheel");
let rightWheel = document.querySelector(".r-wheel");
let motion = document.querySelector(".background");

// starting condition
yellow.classList.add("start-blinking");

// defining the functions
function startMoving() {
    isMoving = true;

    leftWheel.classList.remove("stop-spinning")
    rightWheel.classList.remove("stop-spinning")

    leftWheel.classList.add("start-spinning");
    rightWheel.classList.add("start-spinning");

    box.classList.remove("stop-vibrating")
    box.classList.add("start-vibrating");

    background.classList.remove("stop-motion");
    background.classList.add("start-motion");
}

function stopMoving () {
    isMoving = false;

    leftWheel.classList.remove("start-spinning");
    rightWheel.classList.remove("start-spinning");

    leftWheel.classList.add("stop-spinning")
    leftWheel.classList.add("stop-spinning")
    
    box.classList.remove("stop-vibrating")
    box.classList.add("stop-vibrating");

    background.classList.remove("start-motion")
    background.classList.add("stop-motion");
    
}

green.addEventListener("click", () => {
    startMoving()
    
});

red.addEventListener("click", () => {
    stopMoving()
})





document.body.onkeyup = function(e){
    if(e.keyCode == 32 && !isMoving){
        startMoving()
    } else if (e.keyCode == 32 && isMoving) {
        stopMoving()
    } 
}

car.addEventListener("click", () => {
    if(!isMoving){
        startMoving()
    } else if (isMoving) {
        stopMoving()

        
    } 
})

rightWheel.addEventListener("click", () => {
    if(!isMoving){
        
        startMoving()
        
    } else if (isMoving) {
        
        stopMoving()
        
    } 
})

leftWheel.addEventListener("click", () => {
    if(!isMoving){
        
        startMoving()
        
    } else if (isMoving) {
        
        stopMoving()

        
    } 
})






