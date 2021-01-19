function factorial(num){
    var calc = 1;
    var i = 1;
    while(i<=num){
        calc = calc * i;
        i++;
    }
    return calc
}

var output = factorial(10);
console.log(output)

console.log("factorial in recursive way")

function start(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
     
}
var output = start(10);
console.log(output);

