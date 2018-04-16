var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array){
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}
