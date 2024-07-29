module.exports = function reverse(number) {
    const reversedString = number.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString);
    return reversedNumber;
}
