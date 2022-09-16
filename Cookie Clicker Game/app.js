//initial number of cookies    
var num = 0;

//Enter Name Prompt

window.onload = function () {
        var name = prompt("Hey There! What's your name?");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Cookie Clicker";
}

var cookie = document.getElementById("cookie");


//Cookie Click

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    // Upgrades Levels
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
  
  
    //Grandma

    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Grandma!";
    }

    //Local Bakery

    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Local Bakery!";
    }

    //Nestle

    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Nestle!";
    }

    //Oreo

    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Oreo!";
    }
}