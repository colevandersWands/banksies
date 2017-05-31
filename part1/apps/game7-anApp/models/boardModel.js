var boardModel = { 
	name: 'boardState',
	boardState: [],
	setBoardState: function(newState) {
			this.boardState = newState;
		},
	getBoardState: function() {
			return this.boardState;
		},
	addMove: function(row, column, nextPlayer) {
			var success = true;
			if(this.boardState[row][column] == null) {	
				if(nextPlayer) {
					this.boardState[row][column] = 'x';
				} else {
					this.boardState[row][column] = 'o';
				};
			} else {
				success = false;
			};
			return success;
		}
	};