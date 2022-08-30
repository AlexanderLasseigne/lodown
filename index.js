'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection
 *   
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
 * @returns {Any value} value: Function returns input value unchanged. 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: takes in any value and returns the type
 * 
 * @param {Any value} value: Takes in any input value.
 * @returns {A string} :type of datatype returned as a string
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

/**
 * contains: Takes in list and a value. 
 * Returns true or false base on if the value is present in the list.
 * 
 * @param {array} arr: the input list
 * @param {value} value: input value to check list for.
 * @return {boolean}: true or false.
 */
 function contains(arr, value){
    return (_.indexOf(arr, value) !== -1) 
        ? true
        : false;
}
module.exports.contains = contains; 

/**
 * unique: Returns a new array with all duplicates removed.
 * 
 * @param {array} arr: passed in to have duplicates removed.
 * @return {array} narr: the new array with duplicates of arr removed.
 */
function unique(arr){
    var narr = []; 
    for (let i = 0; i < arr.length; i++){ 
        if (_.indexOf(narr, arr[i]) === -1){
            narr.push(arr[i]);
        }
    }
    return narr; //returns narr
}
module.exports.unique = unique;

/**
 * filter: each element in array is passed through given function.
 * It will form a new array of all those elements which satisfy the 
 * condition passed from the array. 
 * 
 * @param {array} arr: array to have every element inspected to pass function
 * @param {function} func: given function to test each element against and
 * return a new array of elements which pass.
 * @return {array} narr: the new array of only the elements which passd 
 * the condition of function func
 */
 function filter(arr, func){
    let narr = [];
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            narr.push(arr[i]);
        }               
    }
    return narr;
}
module.exports.filter = filter;

/**
 * reject: each element in array is passed through given function.
 * It will form a new array of all those elements which DO NOT satisfy the 
 * condition passed from the array. 
 * 
 * @param {array} arr: array to have every element inspected passed in function
 * @param {function} func: given function to test each element against and
 * return a new array of elements which fail.
 * @return {array} narr: the new array of only the elements which failed 
 * the condition of function func
 */
 function reject(arr, func){
    let narr = [];
    for (let i = 0; i < arr.length; i++){
        if (!func(arr[i], i, arr)){
            narr.push(arr[i]);
        }
    }
    return narr;
}
module.exports.reject = reject;

/**
 * partition: each element in array is passed through given function.
 * all elements which pass condition of function get pushed into a 
 * truthy array and those that fail pushed into falsy array then 
 * both those arrays are pused into a new array which is returned.
 * @param {array} arr: array to have every element inspected passed in function
 * @param {function} func: given function to test each element against
 * @return {array} output: an array containing an array of passed elements and 
 * an array of elements which did NOT pass function.  
 */
 function partition(arr, func){ 
    var output = []; 
    var arrT = []; 
    var arrF = []; 
    for (let i = 0; i <  arr.length; i++){
       if (func(arr[i], i, arr)){
          arrT.push(arr[i]); 
        } else {
            arrF.push(arr[i])
          }         
    }
    output.push(arrT, arrF);
    return output;
}
module.exports.partition = partition;

/**
 * map: Produces a new array of values by mapping each value in a collection through 
 * a transformation function (func) that is passed three 
 * arguments: the value, then the index (or key) of the iteration, and finally 
 * a reference to the entire list.
 * @param {array or object} coll: list which contains some elements
 * @param {function} func: transformative function executed on every 
 * element of the list. func takes parameters of element, index or key, 
 * and the collection or list.
 * @return {array} output: new array of values decided by func
 */
 function map(coll, func){
    var output = [];
    if (_.typeOf(coll) === 'array'){
        for (let i = 0; i < coll.length; i++){
        output.push(func(coll[i], i, coll));
        }
    } else {_.typeOf(coll) === 'object'  
        for (let key in coll){
            output.push(func(coll[key], key, coll))
        }
      }
    return output; 
}
module.exports.map = map;

/**
 * pluck: returns new array of values of a given property.
 * @param {array} arrObj: list
 * @param {property} prop: property name
 * @return {array} :of property values specified with prop 
 */
 function pluck(arrObj, prop){
    return _.map(arrObj, function(e){ 
        return e[prop]; 
    })     
}
module.exports.pluck = pluck;

/**
 * every: used to return the each element of the given list. 
 * @param {object or array} collection: a list
 * @param {function} func: executed on each element of list 
 * @return {any value} :each element of the collection
 */
 function every(collection, func){
   
    // determine if 'collection' is an ARRAY
    if (Array.isArray(collection)){
        // IF 'collectin' is an ARRAY then begin to iterate to have access
        // to every ELLEMENT in the ARRAY
        for (let i = 0; i < collection.length; i++){
            if (typeof func === 'function'){
            // determine if the current element in colleciton is falsy with func            
                if (!func(collection[i], i, collection)){
                    return false; 
                } 
            } else {
                    if (!collection[i]){
                        return false;
                    } 
                } 
        }    
        // Test to verify collection is an object
    }   else if (typeof collection === 'object' && collection !== null){  // test if collection is an object
            // Begin FOR IN LOOP to access every key in object 'collection'
            for (let key in collection){
                //test if function exists
                if (typeof func === 'function'){
                    if (!func(collection[key], key, collection)){
                        return false; // incriment our countA by one if ELEMENT in ARRAY is TRUTHY.
                    } 
                } else {
                    if (!collection[key]){
                        return false;
                    } 
                  }
            }
        }
return true; 
}
module.exports.every = every;

/**
 * some: Returns true if any of the values in the list pass the 
 * given functions test. returns true and stops iterating the list 
 * if a true element is found. false if nothing true.
 * @param {object or array} collection: given thing
 * @param {function} func: tests each element in colleciton 
 * @return {boolean} true if all tests pass. false if one fail
 */
 function some(collection, func){
    if (Array.isArray(collection)){
        // IF 'collectin' is an ARRAY then begin to iterate to have access
        // to every ELLEMENT in the ARRAY
        for (let i = 0; i < collection.length; i++){
            if (typeof func === 'function'){
            // determine if the current element in colleciton is true with func            
                if (func(collection[i], i, collection)){
                    return true; 
                } 
            } else {
                    if (collection[i]){
                        return true;
                    } 
                } 
        }    
        // Test to verify collection is an object
    }   else if (typeof collection === 'object' && collection !== null){  // test if collection is an object
            // Begin FOR IN LOOP to access every key in object 'collection'
            for (let key in collection){
                //test if function exists
                if (typeof func === 'function'){
                    if (!func(collection[key], key, collection)){
                        return true; // 
                    } 
                } else {
                    if (!collection[key]){
                        return true;
                    } 
                  }
            }
        }
    return false;
}
 module.exports.some = some;

 /**
  * reduce:  reduce boils down a list of values into a single value,
  * It passes each element in passed in list to func which does an
  * accumulation process of what func specifies.
  * @param {array} array: list given
  * @param {function} func: does some process to combine all elements into one
  * @param {value} seed: a starting point for the accumulator that is combining
  * or changing the values
  * @return {value} acc: accumulated or combined items
  */
  function reduce(array, func, seed){
    // declare var acc as accumulator/ return value
    var acc;
    //test for seed presence
    if (seed !== undefined){
        acc = seed; //IF present/ acc shall equal seed
     // begin iterating array  
    for (let i = 0; i < array.length; i++){
        // assign or reassign accumulator variable to passed in function func
        acc = func(acc, array[i], i);
        }
    } else {
        acc = array[0]; //IF seed NOT present/ acc shall equal 1st element||value in array
        //iterate
        for (let i = 1; i < array.length; i++, array){ //Direction didn't mention a 4th parameter of the array in Objectives: 1)
            // assign or reassign accumulator variable to passed in function func
            acc = func(acc, array[i], i, array);
            }  
        } 
    return acc;
}
module.exports.reduce = reduce;

/**
 * extend: takes in an OBJECT and another 1 or more OBJECTS and 
 * Shallowly copy all of the properties in the source objects over 
 * to the destination object, and return the destination object. 
 * Any nested objects or arrays will be copied too
 * @param {object} destin: destination object 
 * @param {objects} obs: 1 or more objects to have all properties copied from. 
 * @return {object} destin: destination object with additional properties
 */
 function extend(destin, ...obs){
    return Object.assign(destin, ...obs)
 }
 module.exports.extend = extend;