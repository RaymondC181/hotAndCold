var x = parseInt((Math.random()*99) +1)+1; 
function fn1()
{
    console.log("Input: " + myNumber);     //<-- 

    if(document.getElementById("guesses").innerHTML==0)
    {
        alert("You ran out of turns");
        reset();
    }
    else{
        document.getElementById("guesses").innerHTML--; 
    }


    if(myNumber==x)
    {
        document.getElementById("log").innerHTML += "\nYou are correct" ;
        alert("You are correct"); 
        reset(); 
    }
    else if(myNumber > (x-5) && myNumber < (x+5))           
    {
        document.getElementById("log").innerHTML += "\nVery Hot" ;
    }
    else if(myNumber > (x-8) && myNumber < (x+8))              
    {
        document.getElementById("log").innerHTML += "\nHot" ;
    }
    else if(myNumber > (x-15) && myNumber < (x+15))             
    {
        document.getElementById("log").innerHTML += "\nVery Warm" ;
    }
    else if(myNumber > (x-20) && myNumber < (x+20))             
    {
        document.getElementById("log").innerHTML += "\nWarm" ;
    }
    else if(myNumber > (x-30) && myNumber < (x+30))             
    {
        document.getElementById("log").innerHTML += "\nCool" ;
    }
    else if(myNumber > (x-40) && myNumber < (x+40))             
    {
        document.getElementById("log").innerHTML += "\nVery Cool" ;
    }
    else if(myNumber > (x-55) && myNumber < (x+55))             
    {
        document.getElementById("log").innerHTML += "\nCold" ;
    }
    else{
        document.getElementById("log").innerHTML += "\nVery Cold" ;
    }
}

function initialize()
{
    console.log("random Number is " + x);    //<-- 

    numberOutput = document.getElementById("numberout");

    myNumber = 50; 
    display(); 
}

function addOne()
{ 
    if (!(myNumber>=100))
    {
        myNumber++;
    }
    if(myNumber >100)
    {
        myNumber=100;
    }
    display(); 
}

function subtractOne()
{
 myNumber--; 
 if(myNumber<1)
 {
     myNumber = 1; 
 }
 display(); 
}


function display()
{
 numberOutput.innerHTML = myNumber; 
}

function reset()
{
    console.clear();
    document.getElementById("guesses").innerHTML=5;
    x = parseInt((Math.random()*100) +1);
    document.getElementById("log").innerHTML = "";
    initialize(); 
}

function addFive()
{ 
    if (!(myNumber>=100))
    {
        myNumber+=5;
    }
    if(myNumber >100)
    {
        myNumber=100;
    }
    display(); 
}

function subtractFive()
{
 myNumber-=5; 
 if(myNumber<1)
 {
     myNumber = 1; 
 }
 display(); 
}

function addTen()
{ 
    if (!(myNumber>=100))
    {
        myNumber+=10;
    }
    if(myNumber >100)
    {
        myNumber=100;
    }
    display(); 
}

function subtractTen()
{
 myNumber-=10; 
 if(myNumber<1)
 {
     myNumber = 1; 
 }
 display(); 
}

function add25()
{ 
    if (!(myNumber>=100))
    {
        myNumber+=25;
    }
    if(myNumber >100)
    {
        myNumber=100;
    }
    display(); 
}

function subtract25()
{
 myNumber-=25; 
 if(myNumber<1)
 {
     myNumber = 1; 
 }
 display(); 
}


