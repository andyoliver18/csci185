const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}
let width = 50;
let itLives = true;
const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;
const p1 = {
    x: 100,
    y: 100,
    size: 200,
    speed: 3,
    
};
const balls = [
    { x: 100, y: 200, d: 50, speed: 8, dead:false},
    { x: 800, y: 400, d: 50, speed: 4, dead:false},
]

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
function drawLandscapeObject(x, y, size){
    //body
    fill('orange');
    circle(x + size * 2, y, size * 2);
    //craters
    fill ('yellow');
    circle(x + size * 1.5, y + size * .5, size * .1);
    fill ('yellow');
    circle(x + size * 2.5, y + size * -.2, size * .2);
    //ellipse
    fill('tan');
    ellipse(x+(size*2), y+(size*.06),size*3.5, size*.14);
    fill('yellow');
    ellipse(x+(size*2), y+(size*.06),size*2.5, size*.09);
}
counter = 0;

function draw(){
    clear();
    if(p1.x > canvasWidth - 100){
        
        p1.x -= (canvasWidth + 500);
    }
    
    p1.x += p1.speed;

    circle(balls[1].x, balls[1].y, balls[1].d);
    balls[0].y += 5 * Math.cos(counter / 30);
    balls[0].x += 3;
    counter++;
    balls[1].y += 1 * Math.sin(counter / 40);

    if (balls[0].x > canvasWidth + 100) {
        balls[0].x = -100;
    }

    

    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
       circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
        let intersects = checkIntersection(balls[0], bubble);
        if (intersects){
            balls[0].dead = true;
            
        }
        console.log(intersects);
    }

    

    // message:

    drawLandscapeObject(p1.x, p1.y, p1.size);
    drawLandscapeObject(200,500,100);
    drawLandscapeObject(800,600,20);
    
    drawCreature(balls[1].x, balls[1].y, balls[1].d, 'chocolate', 'red');
    drawCreature(x, y, 100, 'pink', 'pink');
    if(balls[0].dead!= true){
    drawCreature(balls[0].x, balls[0].y, balls[0].d, 'red', 'blue');
    
     }
    
   
    
    
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 10;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 10;
    }
    else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 10;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 10;
    } else if (ev.code == 'Space') {
        shoot();
    }

  
}
function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}
function checkIntersection(pig, bullet) {
    let distance = dist(pig.x, pig.y, bullet.x,bullet.y);
    if(distance < (pig.d / 2 + 4)){
        return true;
    }
    else{
        return false;
    }
//    let verticalIntersection = false;
//    let horizontalIntersection = false;

//    if (bulletY > bottomY){
//      verticalIntersection = true;

//    }
//    if (bulletX > leftX && bulletX < right){
//     horizontalIntersection = true;
//    }
//    if(horizontalIntersection && vertical){
//     return true; 
//    }
//    else {
//     return false;
//    }
}

document.addEventListener('keydown', moveController);