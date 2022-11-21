var x = parseInt((Math.random()*101) +1); 
function fn1()
{
    var str = document.getElementById("text1").value; 
    console.log("Value inside text box is: " + str);
    if(str==x)
    {
        console.log("You are correct");
    }
    else if(str > (x-5) && str < (x+5))              //(x > low && x < high)
    {
        console.log("Very Hot");
    }
    else if(str > (x-8) && str < (x+8))              
    {
        console.log("Hot");
    }
    else if(str > (x-15) && str < (x+15))             
    {
        console.log("Very Warm");
    }
    else if(str > (x-20) && str < (x+20))             
    {
        console.log("Warm");
    }
    else if(str > (x-30) && str < (x+30))             
    {
        console.log("Cool");
    }
    else if(str > (x-40) && str < (x+40))             
    {
        console.log("Very Cool");
    }
    else if(str > (x-55) && str < (x+55))             
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

