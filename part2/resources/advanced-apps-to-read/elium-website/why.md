fastness ideas
	caching in the backend
	pjax
	asyncloader in the frontend
	and browserify in the backend

globals - makes sense
	loads js and keeps in global scope between requests

fastness principles proposed
	cache site in global scope - redis could be cleaner
	pjax

static/routes/index.js  line 22
	send statically rendered page if from pjax
	not if not


so he complicatedly redisigned caching and component-style frontend-refreshing

other things 
	centralize config on global vars