function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n%i == 0){
            return "Not a prime"
        }
    }
    return "A prime"
}

var res = isPrime(2);
console.log(res)