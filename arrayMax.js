var marks = [12,14,54,32,76,23,98,56,34,65,23,15];
// var max = Math.max(marks);
// console.log(max);
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest number is: ",max);
var min = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element < min){
        min = element;
    }
}
console.log("Lowest number is: ",min);