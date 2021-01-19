function isLarge(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
var res = isLarge(100,1000,01);
console.log(res, "is bigger");

//max function
var x = 10;
var y = 20;
var max = Math.max(x,y);
console.log(max, "is bigger");