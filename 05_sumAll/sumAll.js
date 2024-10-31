const sumAll = function(n1, n2) {
    if (n1 <= 0 || n2 <= 0) return "ERROR";
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";

    let ret = 0;
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++){
        ret += i;
    }
    return ret
};

// Do not edit below this line
module.exports = sumAll;
