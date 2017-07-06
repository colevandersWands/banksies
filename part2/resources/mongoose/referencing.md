[mongoose docs](http://mongoosejs.com/docs/populate.html)  
[helpful stackoverflow](https://stackoverflow.com/questions/24096546/mongoose-populate-vs-object-nesting)  
  
key things  
  	one-to-many data relationships.   
  	- one object of one type needs multiple objects of another 
  	object inclusion
  	- directly nesting objects
  	var team = {
  		players: [
  			0: {
  				name: 'tim',
  				position: 'middle tumbler'
  			},
  			1: {
  				name: 'mit',
  				position: 'tubler middle'
  			}
  		]
  	}
  	populate - better version of object inclusion
  	- mongoose method for making this work
