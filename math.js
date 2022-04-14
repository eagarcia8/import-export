function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2, reverse) {
    if (reverse) {
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

function quotient(num1, num2, reverse) {
    if (reverse) {
        return num2 / num1;
    } else {
        return num1 / num2;
    }
}

const secretPassword = "123456";

function product(num1, num2) {
    return num1 * num2;
}

module.exports = {
    addTwoNumbers: add,
    subtract: subtract,
    product,
    quotient,
    secretPassword
}