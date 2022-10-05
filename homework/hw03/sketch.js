function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
     drawCreature(800, 500, 200, 'pink', 'orange');
     drawCreature(487, 155, 101, 'red', 'green');
     drawCreature(454, 423, 141, 'brown', 'yellow');
    drawCreature(333, 227, 99, 'purple', 'blue');
    drawCreature(117, 314, 91, 'grey', 'black');
    
    
    drawGrid(canvasWidth, canvasHeight);



}

// define your drawCreature function here:


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

