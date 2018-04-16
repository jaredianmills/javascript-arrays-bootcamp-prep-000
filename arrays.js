var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  [element, ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}

addElementToBeginningOfArray(chocolateBars, 'mounds')
