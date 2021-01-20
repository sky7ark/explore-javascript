// Count Words

var speech = "i am Kazi Salith Ur Rahman love my life";
var count = speech.length;
console.log("Length: ",count);
var increase = 0;
for(i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        increase++;
    }
}
increase++;
console.log("Total words: ",increase);
