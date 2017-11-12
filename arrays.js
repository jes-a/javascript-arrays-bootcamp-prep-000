var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(1, "foo") {
  var a = [1]
  a.unshift("foo")
  return a
}
