const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

 drawElmo(100, 100, 150, '#0bc9cd', true); 
 drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
 drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
 drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
 drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawElmo(x, y,size, color, hasNose){
    fill(color);
    circle(x, y, size);
    fill('white');
    circle(x+(size*-.12), y-(size*.2), size*.2);
    circle(x+(size*.12), y-(size*.2), size*.2);
    fill('black');
    circle(x+(size*-.12), y-(size*.2), size*.05);
    circle(x+(size*.12), y-(size*.2), size*.05);
    

    if (hasNose==false){
        circle(0,0,0);
    }
    else if (hasNose==true){
    fill('#db5461');
    ellipse(x, y, size/5, size/3);
    }

}