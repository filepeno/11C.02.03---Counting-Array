"use strict";

let number = 0;

count();

function count() {
  console.log(number);
  number++;
  setTimeout(count, 1000);
}
