var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addToArray = array;
  var newArray = [element, ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}

console.log(addElementToBeginningOfArray(chocolateBars, 'mounds'))
