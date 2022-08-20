'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection
 * @return  
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in any input and returns that input unchanged.
 * 
 * @param {Any value} value: Function takes in any input value.
 * @returns {Any value} value: Function
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: takes in any value and returns the type
 * 
 * @param {Any value} value: Takes in any input value.
 * @returns {A string} :type of datatype returned as a 
 */
function typeOf(value){ 
    if (typeof value === 'string'){
        return 'string';
    } if (value === true || value === false){
        return 'boolean';
    } if (Array.isArray(value)){        
        return 'array';
    } if (value === undefined){
        return 'undefined';      
    } if (value === null){
        return 'null';
    } if (!isNaN(value)){
        return 'number'
    } if (typeof value === 'function'){
        return 'function';
    } if (typeof value === 'object'){
        return 'object';
    }
} 
module.exports.typeOf = typeOf;

/**
 * first: takes in array and number and verifies if 'arr' is an ARRAY.
 * IF NOT- an empty array is returned.
 * Then it tests IF 'num' is given.
 * IF NOT- return first element in array.
 * ELSE- return the first number of elements in 'arr' specified by 'num'
 */
function first(arr, num){ 
    //IF array is not an array return []
    if (!Array.isArray(arr)){ 
        return [];
    } else if (!num){ //if no num given as argument return first element
        return arr[0];
    } 
    return arr.splice(0, num); // else return first num of elements
}
module.exports.first = first;

/**
 * last: tests IF 'arr' is not an array, return []
 * IF 'num' is not given or not a number, return just the last element in <array>.
 * Otherwise, return the last <number> items of <array>
 */
 function last(arr, num){
    //test for neg num &&
    //IF array is not an array return []
    if (!Array.isArray(arr) || num <= 0){
        return [];
    } if (num > arr.length){
        return arr;
    }
      if (!num || num > arr.length){
        return arr[arr.length - 1];
    } if (num >= 0){
    return arr.slice(-num);
    }
}
module.exports.last = last;

/**
 * indexOf: Tests if a given value 'val' exists in given array 'arr'
 * -and returns the index number of the match in 'arr' to 'val.
 * -if not return -1
 * 
 * @param {Array} arr: The given array to check for instances of given value in.
 * @param {value} val: given value to check given array for
 * @return {number} :IF value exists in given array return it's index value.
 * Otherwise return -1
 */



function indexOf(arr, val){
    var output;
    for (let i = 0; i < arr.length; i++){
        if (val === arr[i]){
            return i;
        }       
    }
    return -1;
}
module.exports.indexOf = indexOf; 