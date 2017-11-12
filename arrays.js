var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var add1 = [1];
  return ["foo", ...add1]
}

function destructivelyAddElementToBeginningOfArray() {
  var add2 = [1];
  add2.unshift("foo");
  return add2;
}
