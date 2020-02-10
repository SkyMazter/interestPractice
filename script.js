let initial = null;
let x = null;
let year  = 1;
$("button").click(function(){
    initial = document.getElementById("test").value;
    initial = parseInt(initial);
    x = parseInt(initial);
    x = x * 1.12;
    x = Math.floor(x);
    while(x <= 1000000){
        x = x + initial;
        console.log(x);
        x = x * 1.12;
        console.log(x);
        x = Math.floor(x);
        console.log(x);
        year = year + 1;
        console.log(year);
    }
    console.log(x);
    $("#result").text("You will be a millionaire in "+year+" years with a balance of "+x);

   return x, year
})
