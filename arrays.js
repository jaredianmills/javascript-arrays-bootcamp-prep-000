var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  var addToBeginning = [element, ...newArray];
  return addToBeginning;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = array;
  var addToEnd = [...newArray, element]
}
