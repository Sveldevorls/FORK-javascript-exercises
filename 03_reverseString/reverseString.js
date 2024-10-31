const reverseString = function(s) {
    let ret = "";
    for (let i = s.length-1; i > -1; i-- ){
        ret += s[i];
    }
    return ret
};

// Do not edit below this line
module.exports = reverseString;
