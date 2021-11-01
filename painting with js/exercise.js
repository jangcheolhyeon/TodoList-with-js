const canvas = document.querySelector("#canvas_js");
let eachColor = document.getElementsByClassName("color_js");
let ctx = canvas.getContext('2d');


ctx.strokeStyle = "black";
ctx.lineWidth = "2.5";
canvas.width = "500";
canvas.height = "500";

let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function mouseMoveOn(event){
    let Xlocation = event.offsetX;
    let Ylocation = event.offsetY;
    //console.log(Xlocation, Ylocation);
    if(!painting){
        ctx.beginPath();
        //ctx.moveTo(Xlocation, Ylocation);
    }
    else{
        ctx.lineTo(Xlocation, Ylocation);
        ctx.stroke();
    }
}

canvas.addEventListener("mousemove", mouseMoveOn);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("mouseup", stopPainting);

function eachColorEvent(){
    console.log("1");
}

let newArray = Array.from(eachColor);
newArray.forEach((color) => color.addEventListener("click", HandleColorClick));

function HandleColorClick(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
}
