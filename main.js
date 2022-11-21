var x = parseInt((Math.random()*100) +1); 
function fn1()
{
    console.log("Input: " + myNumber);

    if(myNumber==x)
    {
        console.log("You are correct");
    }
    else if(myNumber > (x-5) && myNumber < (x+5))           
    {
        console.log("Very Hot");
    }
    else if(myNumber > (x-8) && myNumber < (x+8))              
    {
        console.log("Hot");
    }
    else if(myNumber > (x-15) && myNumber < (x+15))             
    {
        console.log("Very Warm");
    }
    else if(myNumber > (x-20) && myNumber < (x+20))             
    {
        console.log("Warm");
    }
    else if(myNumber > (x-30) && myNumber < (x+30))             
    {
        console.log("Cool");
    }
    else if(myNumber > (x-40) && myNumber < (x+40))             
    {
        console.log("Very Cool");
    }
    else if(myNumber > (x-55) && myNumber < (x+55))             
    {
        console.log("Cold");
    }
    else{
        console.log("Very Cold");
    }
}

function initialize()
{
    console.log("random Number is " + x); 

    numberOutput = document.getElementById("numberout");
    negativeButton = document.getElementById("negativebtn");

    myNumber = 50; 
    negativesAllowed = false; 
    display(); 
}

function addOne()
{ 
    if (!(myNumber>=100))
    {
        myNumber++;
    }
    display(); 
}

function subtractOne()
{
 myNumber--; 
 if(myNumber<0)
 {
     myNumber = 0; 
 }
 display(); 
}


function display()
{
 numberOutput.innerHTML = myNumber; 
}

