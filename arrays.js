var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  var a = ["a"]
  a.unshift("b")
  return a
}
