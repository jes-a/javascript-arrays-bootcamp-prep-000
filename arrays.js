var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray() {
  var c = [1]
  c.unshift("foo")
  return c
}
