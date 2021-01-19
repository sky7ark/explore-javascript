function fibonacci(n){
    var fibo = [0, 1];
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacci(n-1); //find out the series until nth element
        var nthelement = fibo[n-1] + fibo[n-2];
        fibo.push(nthelement);
        return fibo;
    }
}
var output = fibonacci(10);
console.log(output)