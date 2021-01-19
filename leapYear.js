function isLeapYear(year) {
    const res = ((year % 400) && ((year % 100) || year % 4));
    if (res == 0) {
        return true;
    }
    else {
        return false;
    }
}

var output = isLeapYear(1700);
console.log(output);
