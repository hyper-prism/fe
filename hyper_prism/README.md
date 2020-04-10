This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify







var header = document.querySelector(".header");  
var input = document.querySelector(".input"); 
var button = document.querySelector("button"); 
var triangle = document.querySelector(".triangle"); 
var restart = document.querySelector(".restart"); 
var turns = 0; 
var burns = 0;
var selector = 0; 
var score = 0; 
var numbers = document.querySelector(".numbers"); 

var nextRound = document.querySelector(".round2"); 





var game2 = function(){
  triangle.style.animationIterationCount = 0; 
  nextRound.style.opacity = "1"; 
  nextRound.style.transition = "1s"; 
}

function buttonInput(){
  if(choice1.style.background == "green"){
   selector = 1; 
} else if(choice2.style.background == "green") {
   selector = 2; 
} else if(choice3.style.background == "green") {
   selector = 3; 
} else {
 selector = 0;  
}
}


function submit(){
 buttonInput(); 
 var random = Math.floor(Math.random() * 3) + 1; 
 header.textContent = random;
  if(random == selector){
   turns += 1; 
    if(turns === 1 && burns === 0){
      correct1();
    }else if(turns === 2 && burns === 0){
      correct2();
    }else if(turns === 3 && burns === 0){  //-------------winner
      score += 9; 
      correct3();  
      input.placeholder = score; 
      game2(); 
    }else if (turns === 1 && burns === 1){
      original(); 
    }else if ( turns === 2 && burns === 1){
      correct1(); 
    }else if (turns === 3 && burns === 1){
      correct2(); 
    }else if (turns === 4 && burns === 1){ //------------winner 
      score += 7; 
      correct3();
      input.placeholder = score;  
      game2(); 
    }else if (turns === 1 && burns === 2){
      loss(); 
    }else if (turns === 2 && burns === 2){
      original(); 
    }else if (turns === 3 && burns === 2){
      correct1(); 
     } else if(turns === 4 && burns === 2){
      correct2(); 
     } else if(turns === 5 && burns === 2){  //--------------winner
      correct3();
      score += 5; 
      input.placeholder = score; 
      game2(); 
     } else if(turns === 1 && burns === 3){
       loss2(); 
     } else if(turns === 2 && burns === 3){
       loss(); 
     }else if(turns === 3 && burns === 3){
       original(); 
     }else if(turns === 4 && burns === 3) {
       correct1(); 
     }else if(turns === 5 && burns === 3){
       correct2(); 
     }else if(turns === 6 && burns === 3){ //------------winner
       correct3(); 
       score += 3; 
       input.placeholder = score; 
       game2(); 
     }else if(turns === 2 && burns === 4){
      loss2(); 
     }else if(turns === 3 && burns === 4){
      loss(); 
     }else if(turns === 4 && burns === 4){
      original(); 
     }else if(turns === 5 && burns === 4){
      correct1(); 
     }else if(turns === 6 && burns === 4){
      correct2(); 
     }else if(turns === 7 && burns === 4){ //-------------------winner
      score++; 
      correct3(); 
      input.placeholder = score; 
      game2(); 
     }   
  }else{ 
    burns += 1; 
     if(burns === 1 && turns === 0){
      loss();  
    }else if ( burns === 2 && turns === 0){
      loss2(); 
    }else if(burns === 3 && turns === 0){ //-----------loser
      loss3();
      input.placeholder = "You're as Intuitive as a Toaster"; 
    }else if(burns === 1 && turns === 1){
      original(); 
    }else if(burns === 2 && turns === 1){
      loss(); 
    }else if(burns === 3 && turns === 1){
      loss2(); 
    }else if(burns === 4 && turns === 1){  //--------------loser
      loss3(); 
      input.placeholder = "Pretty Unimpressive, My Friend";
    }else if(burns === 1 && turns === 2){
     correct1(); 
    }else if(burns === 2 && turns === 2){
      original(); 
    }else if(burns === 3 && turns === 2){
      loss(); 
    }else if(burns === 4 && turns === 2){
      loss2();
    }else if(burns === 5 && turns === 2){  //--------------loser
      loss3(); 
      input.placeholder = "Hyper Loser";
    }else if(burns === 2 && turns === 3){
      correct1(); 
    }else if(burns === 3 && turns === 3){
      original(); 
    }else if(burns === 4 && turns === 3){
     loss(); 
    }else if(burns === 5 && turns === 3){
     loss2(); 
    }else if(burns === 6 && turns === 3){  //--------------loser
     loss3(); 
     input.placeholder = "Not Bad. Not Good Either"; 
    }else if(burns === 2 && turns === 4){
     correct2(); 
    }else if(burns === 3 && turns === 4){
     correct1(); 
    }else if(burns === 4 && turns === 4){
     original(); 
    }else if(burns === 5 && turns === 4){
     loss(); 
    }else if(burns === 6 && turns === 4){
     loss2(); 
    }else if(burns === 7 && turns === 4){
     loss3(); 
     input.placeholder = "Ya Faught Hard, Kid!"; 
    }
     else{
      loss3(); 
      input.placeholder = "This is painful to watch"; 
     };
  } 
 }; 


restart.addEventListener("click", function(){
 turns = 0; 
 burns = 0; 
 score = 0; 
 original(); 
 header.textContent = "Hyper Prism"; 
 input.placeholder = "Enter Guess"; 
 choice1.style.background = "black";
 choice1.style.borderColor = "green";
 choice2.style.background = "black";
 choice2.style.borderColor = "green";  
 choice3.style.background = "black"; 
 choice3.style.borderColor = "green";  
});
 


nextRound.addEventListener("click", function(){
triangle.style.opacity = "1";  
triangle.style.animationIterationCount = "infinite"; 
original();
this.style.opacity = "0"; 
this.style.transition = "2s"; 
header.textContent = "Round 2"; 
header.style.transition = "1s"; 
turns = 0;
burns = 0; 
input.placeholder = score; 
}); 


triangle.style.opacity = "1";  
triangle.style.animationIterationCount = "infinite"; 
original();
this.style.opacity = "0"; 
this.style.transition = "2s"; 
header.textContent = "Round 2"; 
header.style.transition = "1s"; 
turns = 0;
burns = 0; 
input.placeholder = score; 




.container{
    background: url(hyper-prism.png);
    background-position: center; 
    background-size: cover; 
    height: -webkit-fill-available;
    width: 100%;    
    max-width: 100%;
}