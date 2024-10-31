const removeFromArray = function(...args) {
    const inArr = args[0]
    const toRemove = new Set(args.slice(1));
    const ret = [];

    for (e of inArr) {
        if (!toRemove.has(e)) ret.push(e);
    }
    return ret


};

// Do not edit below this line
module.exports = removeFromArray;
