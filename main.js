var x = parseInt((Math.random()*101) +1); 
function fn1()
{
    var str = document.getElementById("text1").value; 
    console.log("Value inside text box is: " + str);
    if(str==x)
    {
        console.log("You are correct");
    }
}

function initialize()
{
    console.log("random Number is " + x); 
}
