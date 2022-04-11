'use strict';


const cylindr = {
    radius: 30,
    height: 20,
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    },
    get surfaceArea() {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
}


function getResult(firstValue, secondValue, sign) {
    switch (sign) {
        case '+' :
            return firstValue + secondValue;

        case '-' :
            return firstValue - secondValue;

        case '/' :
            if (secondValue === 0) {
                return undefined;
            }
            return firstValue / secondValue;

        case '*' :
            return firstValue * secondValue;

    }
}


function isCharPresent(string, symbol) {

    for (let i = 0; i < string.length; i++) {

        if (string[i] === symbol) {
            return true;
        }
    }

    return false;

}


function charIndexOf(string, symbol) {

    for (let i = 0; i < string.length; i++) {

        if (string[i] === symbol) {
            return i;
        }

    }
    return -1;

}
