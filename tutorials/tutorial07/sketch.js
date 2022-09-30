function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(200, 100, 50,'blue');
    drawCircle(100, 100, 100,'hotpink');
    drawCircle(300, 100, 100,'teal');
    drawCircle(400, 100, 50, 'hotpink');
    // Exercise 2: 
    
    drawOval(100, 200, 100, 62, 'teal');
    drawOval(200, 200, 62, 100, 'hotpink');
    drawOval(300, 200, 100, 62, 'blue');
    drawOval(400, 200, 62, 100, 'teal');
  
    // Exercise 3:


    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200,400,100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);
    
    
    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
//drawCircle(300, 300, 50,'yellow');
function drawCircle(centerX,centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size * .75);
    fill('teal');
    circle(centerX, centerY, size * .5);
    fill('navy');
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX,centerY,size) {
    fill('yellow');
    circle(centerX, centerY, size); //face
    fill('black');
    let eyeWidth = size / 8;
    let eyeDistance = size / 7;
    let eyeY = centerY - eyeWidth;
    let leftEyeX = centerX - eyeDistance;
    let rightEyeX = centerX + eyeDistance;
    let mouthSize= size / 2;
    let mouthY = centerY + size / 5;
    let mouthLeftX = centerX - mouthSize / 2;
    let mouthRightX = centerX + mouthSize / 2;

    circle(leftEyeX, eyeY, eyeWidth);   //left eye
    circle(rightEyeX, eyeY, eyeWidth);  //right eye

    //line for mouth
    strokeWeight(size / 15);
    line(mouthLeftX, mouthY, mouthRightX, mouthY);
    strokeWeight(1);
}
