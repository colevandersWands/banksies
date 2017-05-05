// when one file 'export's and the other 'require's, it's like this:
//    the exporting file constructs and object of any sort
//    it makes that object available for export with 'module.exports ='
//    the requiring file 'require's the exporting file
//    the value of that 'require' statement is now equal to what the... 
//			other file exported.  almost always an object
//	  the 'require'ing file has use of the imported object just like any other
//
// access:  the 'requiring' file has access only to what was exported.
// 			the returned object has access to everything in the module file
//		    this is an example of a closure

const express = require('express');
const app = express();


app.listen(3000, () => {
  console.log('listening on 3000');
});

// modify this 'require' statement to call the right example
const howdy = require('./howdy6');

	console.log(howdy)