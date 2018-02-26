module.exports = function getZerosCount(number) {
    var x1 = number;
    var x2;
    var count = 0;
    do {
        x2 = Math.floor(x1/5);
        count += x2;
        x1 = x2;
    } while (x1>1);
    return count;
}
