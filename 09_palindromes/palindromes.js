const palindromes = function (str) {
    let isAlphnum = e => ((48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57) ||
                          (65 <= e.charCodeAt(0) && e.charCodeAt(0) <= 90) ||
                          (97 <= e.charCodeAt(0) && e.charCodeAt(0) <= 122));

    let processedStrArr = str.toLowerCase().split('').filter(c => isAlphnum(c));
    let [l, r] = [0, processedStrArr.length-1]

    while (l < r) {
        if (processedStrArr[l] != processedStrArr[r]) return false;
        l++;
        r--;
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
