var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addToArray = array;
  var newArray = [element, ...addToArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}
