const reverseString = function(str) {
    let arr = str.split("");
    arr = arr.reverse();
    arr = arr.join('');
    return arr;
};

// Do not edit below this line
module.exports = reverseString;
