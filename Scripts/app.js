// custom javascript

// self-executing anonymous function

// IIFE - Immediately Invoked Function Expression
(function(){
    
   console.log("App Started..."); 
   
   // variable declaration and Initialization
   
   var randomNumber = 0;
   
    randomNumber = Math.floor((Math.random() * 10) + 1);
   
   console.log(randomNumber);
})();