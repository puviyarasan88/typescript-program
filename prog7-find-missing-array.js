var findMissingArray = function (num, count) {
    var missArray = [];
    for (var index = 1; index < count; index++) {
        num.includes(index) ? missArray.push() : "";
    }
    return missArray;
};
console.log(findMissingArray([1, 3, 4], 8));
