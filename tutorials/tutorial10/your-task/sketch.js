const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const palette = [ '#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71', 'red','white','lightgray','hotpink','indigo','green'];


let primaryColor= 'white';
let secondaryColor = 'white';

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    

    drawGrid(canvasWidth, canvasHeight);
}
function drawCreature(x, y, size, primaryColor, secondaryColor) {

    //circles
    fill(secondaryColor);
  
    circle(x+(size*.4), y-(size*.5), size*.5); 

    fill(secondaryColor);
  
    circle(x-(size*.4), y-(size*.5), size*.5); 
    fill(primaryColor);
  
    circle(x, y, size);//head 300, 300, 300
    //eyes

    fill('black');
  
    circle(x+(size*.167), y-(size*.167), size*.1);
    fill('black');
  
    circle(x-(size*.167), y-(size*.167), size*.1);
    
    //ovals
    fill(primaryColor);
  
    ellipse(x, y+(size*.04), size*.5, size*.233);

  
   ellipse(x+(size*.07), y+(size*.04), size*.033, size*.1);

    ellipse(x-(size*.07), y+(size*.04), size*.033, size*.1);

    
}


function randInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function mouseClicked() {
    const idx = randInt(0, palette.length - 2);

   primaryColor = palette[idx];
   secondaryColor = palette[idx];
    console.log(primaryColor);
    console.log(secondaryColor);
}


function draw() {
    clear();
    drawCreature(370, 314, 300, primaryColor, secondaryColor);
    textAlign(CENTER);
    text("Click to change the pig color.", canvasWidth/2, canvasHeight/2);
    
}

