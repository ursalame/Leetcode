var isNumber = function(s) {
    return !isNaN(parseFloat(s)) && (s>0||s<=0);
};

console.log(isNumber(" "));