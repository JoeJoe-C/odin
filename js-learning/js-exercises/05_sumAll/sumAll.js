const sumAll = function(n1, n2) {
    if (typeof n1 !== "number"|| typeof n2 !== 'number' || n1 < 0 || n2 < 0) {
        return "ERROR";
    } else {
        //check which param is smaller
        let sum = 0;
        let lower = n1;
        let higher = n2;

        if (n1 >= n2) {
            lower = n2;
            higher = n1;
        } 

        for (let i = lower; i <= higher; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
