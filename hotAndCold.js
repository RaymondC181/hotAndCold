function initialize()
    {   
        var randNum = 0;
        display(); 
    }
    function display()
    {
        randNum.innerHTML = parseInt((Math.random()*100)+1); 
        var imput = document.getElementsByName("numImput")[0].value;
        randNum.innerHTML = imput; 
    }


