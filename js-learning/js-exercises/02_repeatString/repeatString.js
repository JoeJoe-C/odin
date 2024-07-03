const repeatString = function( str, n) {
    let ERROR_STRING = 'ERROR';
    if (n < 0) {
        return ERROR_STRING;
    }

    let returnString = '';
    for (let i = 0; i < n; i++) {
        returnString += str;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
