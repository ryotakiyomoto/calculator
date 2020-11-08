'use strict';

let input = document.querySelector('input');
let getNumber = "";

const append = (btnNumbre) => {
    getNumber += btnNumbre;　　
    input.value = getNumber;
}

const update = () => {
    getNumber = '';
    input.value = '';
};

let plusNumber = 0;
let plusCount = 0;
const plus = () => {
    plusCount++;
    plusNumber += Number(getNumber)
  update();
}

let minasNumber = 0;
let minasCount = 0
const minas = () => {
    minasCount++;
    if (minasCount === 1) {
        minasNumber += Number(getNumber)
        update();
    } else {
        minasNumber -= Number(getNumber)
        update();
    }
}

let multiplyNumber = 0;
let multiplyCount = 0;
const multiply = () => {
    multiplyCount++;
    if (multiplyCount === 1) {
        multiplyNumber += Number(getNumber)
       update();
    } else {
        multiplyNumber *= Number(getNumber)
       update();
    }
}

let divisionNumber = 0;
let divisionCount = 0;
const division = () => {
    divisionCount++;
    if (divisionCount == 1) {
        divisionNumber += Number(getNumber)
       update();
    } else {
        divisionNumber /= Number(getNumber)
      update();
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
   update();
    plusNumber = 0;
    plusCount = 0;
    minasNumber = 0;
    minasCount = 0;
    multiplyNumber = 0;
    multiplyCount = 0;
    divisionNumber = 0;
    divisionCount = 0;
}
