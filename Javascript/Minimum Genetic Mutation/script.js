var availableMutations = function (str, bank) {
    var strArr = str.split("");
    var availableIndexes = [];

    bank.forEach(function (e, index) {
        var diff = e.split("").filter(function (e, i) {
            return e !== strArr[i];
        }).length;

        if (diff == 1) {
            availableIndexes.push(index);
        }
    });

    return availableIndexes;

};

var mutate = function (start, end, bank, n) {
    if (bank.length === 0) return -1;
    var indexes = availableMutations(start, bank);
    var solutions = [];
    for (var i = 0; i < indexes.length; ++i) {
        var current = bank[indexes[i]];
        if (current === end) {
            return n + 1;
        } else {
            var tBank = bank.slice(0);
            tBank.splice(indexes[i], 1);
            var r = mutate(current, end, tBank, n + 1);
            if (r > -1) solutions.push(r);
        }
    }

    return (solutions.length) ? solutions.reduce(function (a, b, i, arr) {
            return Math.min(a, b);
        }) : -1;

};

var countMutations = function (start, end, bank, n) {
    if (bank.indexOf(end) === -1) return -1;
    return mutate(start, end, bank, 0);

};

var minMutation = function (start, end, bank) {
    return countMutations(start, end, bank, 0);
};

var ret = minMutation(
    "AAAACCCC",
    "CCCCCCCC",
    ["AAAACCCA","AAACCCCA","AACCCCCA","AACCCCCC","ACCCCCCC","CCCCCCCC","AAACCCCC","AACCCCCC"]);

console.log(ret);