'use strict';

let input = document.querySelector('input');
let getNumber = "";

const append = (btnNumbre) => {
    getNumber += btnNumbre;
    input.value = getNumber;
}

let plusNumber = 0;
let plusCount = 0;
const plus = () => {
    plusCount++;
    plusNumber += Number(getNumber)
    getNumber = '';
}

let minasNumber = 0;
let minasCount = 0
const minas = () => {
    minasCount++;
    if (minasCount === 1) {
        minasNumber += Number(getNumber)
        getNumber = '';
    } else {
        minasNumber -= Number(getNumber)
        getNumber = '';
    }
}

let multiplyNumber = 0;
let multiplyCount = 0;
const multiply = () => {
    multiplyCount++;
    if (multiplyCount === 1) {
        multiplyNumber += Number(getNumber)
        getNumber = '';
    } else {
        multiplyNumber *= Number(getNumber)
       getNumber = '';
    }
}

let divisionNumber = 0;
let divisionCount = 0;
const division = () => {
    divisionCount++;
    if (divisionCount == 1) {
        divisionNumber += Number(getNumber)
        getNumber = '';
    } else {
        divisionNumber /= Number(getNumber)
        getNumber = '';
    }
}

const equal = () => {
    if (plusCount > 0) {
        plus()
        input.value = plusNumber;
    } else if (minasNumber > 0) {
        minas()
        input.value = minasNumber;
    } else if (multiplyNumber > 0) {
        multiply();
        input.value = multiplyNumber;
    } else if (divisionCount > 0) {
        division()
        input.value = divisionNumber;
    }
}

const signChangeKey = () => {
    if (input.value > 0) {
        input.value = '-' + input.value
    } else if (input.value < 0) {
        input.value = input.value.slice(1)
    }
}

const persent = () => {
    input.value = (input.value / 100)
}

const reset = () => {
    getNumber = '';
    input.value = '';
    plusNumber = 0;
    plusCount = 0;
    minasNumber = 0;
    minasCount = 0;
    multiplyNumber = 0;
    multiplyCount = 0;
    divisionNumber = 0;
    divisionCount = 0;
}
