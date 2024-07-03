const removeFromArray = function(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arguments.length > 1) {
            let matchFound = false;
            for (let j = 1; j < arguments.length; j++) {
                if (arr[i] === arguments[j]) {
                    matchFound = true;
                } 
            }

            if (matchFound === true) {
                //dont push into new array
            } else {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
