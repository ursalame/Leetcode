/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var str = [];
    for (var i = 1, msg = ""; i <= n; ++i, msg = "") {
        if (i % 3 === 0) {
            msg += "Fizz";
        }
        if (i % 5 === 0) {
            msg += "Buzz";
        }

        str.push(msg || i.toString());
    }

    return str;
};