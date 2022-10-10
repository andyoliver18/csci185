// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;
let counter = 0;

function check() {
    // your code here.
  counter++;
  var input = document.getElementById('guess').value;
  var img = document.createElement("img");
  input = Number(input);

  
    if(input > secret){

        alert ('Too high');
    }
    else if(input < secret){
        alert('Too low');
    }
    else {
        
        alert('You are correct!');
        document.querySelector('#celebrate').className = '';
       
        
    }
    document.querySelector('#num-guesses').innerHTML = 'You have guessed ' + counter + ' times';

    console.log("your code here!");
}