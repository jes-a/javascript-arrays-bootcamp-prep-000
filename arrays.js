var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray() {
  var add2 = [1];
  add2.unshift("foo");
  return add2;
}
