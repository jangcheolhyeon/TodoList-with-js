const canvas = document.querySelector("#canvas_js");
const eachColor = document.getElementsByClassName("color_js");
const stick = document.querySelector("#stick_js");
const mode = document.querySelector("#fillbtn");

let painting = false;
let paintMode = false;

canvas.width = "500";
canvas.height = "500";

let ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;


canvas.addEventListener("mousemove", canvasOn);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", paintCanvas);
canvas.addEventListener("contextmenu", handleCM);

function handleCM(event){
    event.preventDefault();
}

function paintCanvas(){
    if(paintMode){
        ctx.fillRect(0,0,500,500); 
    }
}

function canvasOn(event){
    let locationX = event.offsetX;
    let locationY = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(locationX, locationY);
        //console.log(locationX, locationY);

    }
    else{
        ctx.lineTo(locationX, locationY);
        ctx.stroke();
    }
    
}

function stopPainting(){
    painting = false;
}

function startPainting(event){
    painting = true;
    //console.log(event.offsetX, event.offsetY);
}

function handleColorClick(event){
    console.log(event.target.style);
    let color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

let newArray = Array.from(eachColor);
newArray.forEach(colors => colors.addEventListener("click", handleColorClick));
/*
newArray.forEach(function(colors){
    colors.addEventListener("click", handleColorClick);
});
*/
function handleStick(event){
    ctx.lineWidth = event.target.value;
}

stick.addEventListener("input", handleStick);

function handleMode(){
    if(paintMode){
        mode.innerText = "FILL";
        paintMode = false;   
    }
    else{
        mode.innerText = "PAINT";
        paintMode = true;
    }
}

mode.addEventListener("click", handleMode);

