"use strict";

let number = 0;
const numArr = [0];

count();

function count() {
  console.log(numArr);
  number++;
  numArr.unshift(number);
  setTimeout(count, 1000);
  if (number > 9) {
    numArr.length = 9;
  }
}
