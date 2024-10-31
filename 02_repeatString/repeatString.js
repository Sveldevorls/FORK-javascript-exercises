const repeatString = function(s, n) {
    if (n < 0) return "ERROR"
    
    let ret = "";
    for (let i = 0; i < n; i++) {
        ret += s;
    }
    return ret
};

// Do not edit below this line
module.exports = repeatString;
