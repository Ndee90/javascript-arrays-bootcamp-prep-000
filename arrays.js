

var chocolateBars = ["snickers", "hundred grand", "kitkat",'skittles'];

var addElementToBeginningOfArray = function(array, element){
  var newArray = [element,...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
 return array
}

var addElementToEndOfArray = function(array,element){
   var newArray = [...array,element];
  return newArray;
}

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
 return array
}

var accessElementInArray = function(array, index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array,index){
    array.shift();
    return array

}

var removeElementFromBeginningOfArray = function(array){
return  array.slice(1);

}

var destructivelyRemoveElementFromEndOfArray = function(array) {
array.pop;
return array;
}
