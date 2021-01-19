var arr = [1, 3, 4, 6, 33, 66, 22, 44, 88, 33, 34];

function getArraySum(num) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

var res = getArraySum(arr);
console.log("total: ", res);