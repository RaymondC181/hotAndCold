
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let number = (Math.random() * 101)+1;


function run()
{
    let input = document.getElementById(userimput)
    if (input == number)
    {
        output.innerhtml = "you gussed right, your number was $(number)"
    }
    if (input > number)
    {
        output.innerhtml = "you guessed too high"
    }
    else
    {
        output.innerhtml = "you guessed too low"
    }
}




