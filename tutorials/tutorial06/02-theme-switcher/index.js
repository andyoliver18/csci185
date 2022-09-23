const defaultTheme = ev => {
    document.querySelector("div.content").style.backgroundColor='inherit';
    document.querySelector("h1").style.color='inherit';
    document.querySelector("header").style.backgroundColor='#CCC';
    document.querySelector("p").style.color='inherit';
    
};

const oceanTheme = ev => {
    document.querySelector("div.content").style.backgroundColor='#99cccc';
    document.querySelector("header").style.backgroundColor='#434a6c';
    document.querySelector("h1").style.color="white";
    document.querySelector("p").style.color='#434a6c';
    
};

const desertTheme = ev => {
    document.querySelector("div.content").style.backgroundColor='#EFDEC2';
    document.querySelector("header").style.backgroundColor='#A8651E';
    document.querySelector("h1").style.color="#EFDEC2";
    document.querySelector("p").style.color='#A8651E';
};

const highContrastTheme = ev => {
    document.querySelector("div.content").style.backgroundColor='white';
    document.querySelector("header").style.backgroundColor='black';
    document.querySelector("h1").style.color="white";
    document.querySelector("p").style.color='black';
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/