var datAxios = {};
var app = {
	dimension: 3,
	repopulateBoard: function (newBoardState) {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var i = 0; i < this.dimension; i++) {
			row = board[i].children;
			for(var j = 0; j < this.dimension; j++) {
				column = row[j];
				column.innerHTML = newBoardState[i][j];
			};	
		};
	},
	initialize: function() {
		console.log('hi');		
		datAxios = axios.create({
		  baseURL: 'http://localhost:3001'
		});
		var dimension = 3; // hardcoding it
		datAxios.post('/buildBoard', {data: {boardDimension: dimension} })  // axios call to build board with dimension
			.then(function (response) {
				console.log('board built');
			})
			.catch(function (error) {
			  console.log(error);
			});
		var firstPlayer = true;
		datAxios.post('/setFirstPlayer', {data: {playerState: true} })  // axios call to initialize player
			.then(function (response) {
				console.log('player set');
			})
			.catch(function (error) {
				console.log(error);
			});
		this.buildBoard(this.dimension); // build view board
	},
	buildBoard: function() {
		var board = document.getElementById('ticTacBoard');
		var row;
		var cell;
		for(var i = 0; i < this.dimension; i++) {
			row = board.insertRow(i);
			row.setAttribute('row', i);
			for(var j = 0; j < this.dimension; j++) {
				cell = row.insertCell(j); 
				cell.innerHTML = null;
				cell.setAttribute('column', j);
				cell.setAttribute('onclick', 'app.play(this)');
			};
		};
	},
	play: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		datAxios.get('/getNextPlayer') // axios call to get next player
			.then(function (response) {
				return datAxios.post('/addMove', { // axios call to place move
						data: {
							row: row,
							column: column,
							player: response.data.nextPlayer
						}	
					})
			}).
			then(function(response) {
				if (response.data.success) {
					return datAxios.get('/getBoardState') // axios call to get board
				} else {
					alert(response.data.error);
				}
			})
			.then(function(response) {
				app.repopulateBoard(response.data.boardState)
			})
			.then(function(response) {
				return datAxios.post('/togglePlayer') // axios call to switch player
			})
			.catch(function (error) {
				if(error) {	
					console.log(error);
				}
			});
	}
};








