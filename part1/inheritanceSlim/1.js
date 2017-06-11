/*
how did this happen?  
all objects inherit from a single other object
builtin types (arr, object, funciton, ...) inherit from builtin objects
this is a special case of using the keyword 'new'

using the keyword 'new' is a way for you to decide an object's prototype
the new object inherits from the function's '.prototype' method

console log a new array, and a new custom object
.__proto__, but don't ever reassign this in a program
*/

