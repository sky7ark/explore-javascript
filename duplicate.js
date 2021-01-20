var arr = [12,13,45,67,89,34,34,12,35];
var uniqueNum = [];
for(i = 0; i < arr.length; i++){
    var element = arr[i];
    console.log(element);
    var index = uniqueNum.indexOf(element);
    console.log(index);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);