var controller = {
	view: {},
	models: {},
	setView: function(newView) {
			this.view = newView;
		},	
	addModel: function(newModel) {
			this.models[newModel.name] = newModel;
		},	
	play: function(box) {
			var row = box.parentElement.getAttribute('row');
			var column = box.getAttribute('column');
			var nextPlayer = this.models.playerState.getNextPlayer();
			console.log(nextPlayer)
			var validMove = this.models.boardState.addMove(row, column, nextPlayer);
			if(validMove) {
				var newBoard = this.models.boardState.getBoardState();
				this.view.repopulateBoard(newBoard);
				this.models.playerState.togglePlayer();				
			} else {
				alert('foo\'. you cant do that');
			};
		}
}

// challenge:  modify play and addMove to work by callback