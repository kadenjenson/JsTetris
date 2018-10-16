let canvas = [
	[0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 11, 11, 0, 0, 0],
	[0, 0, 0, 11, 11, 0, 0, 0]
];

function drawCanvas() {
	document.getElementById('canvas').innerHTML = "";
	for ( var i = 0; i < canvas.length; i++ ) {
		for ( var x = 0; x < canvas[i].length; x++ ) {
			if ( canvas[i][x] === 0 ) {
				document.getElementById('canvas').innerHTML += "<div class='empty block'></div>";
			} else if ( canvas[i][x] === 1 || canvas[i][x] === 11 ) {
				document.getElementById('canvas').innerHTML += "<div class='square block'></div>";
			}
		}
		document.getElementById('canvas').innerHTML += "<br>";
	}
}

function moveBlocks() {
	var canMove = true;
	for ( var i = 0; i < canvas.length; i++ ) {
		for ( var x = 0; x < canvas[i].length; x++ ) {
			if ( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
				if ( i === canvas.length-1 || canvas[i+1][x] > 10 ) {
					canMove = false;
					stop();
				}
			}
		}
	}
	if(canMove) {
		for ( var i = canvas.length-1; i>=0; i-- ) {
			for ( var x = 0; x < canvas[i].length; x++ ) {
				if( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
					canvas[i+1][x] = canvas[i][x];
					canvas[i][x] = 0;
				}
			}
		}
	}
}

function moveBlocksLeft() {
	var canMove = true;
	for ( var i = 0; i < canvas.length; i++ ) {
		for ( var x = 0; x < canvas[i].length; x++ ) {
			if ( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
				if ( x === 0 || canvas[i][x-1] > 10 ) {
					canMove = false;
				}
			}
		}
	}
	if(canMove) {
		for ( var i = canvas.length-1; i>=0; i-- ) {
			for ( var x = 0; x < canvas[i].length; x++ ) {
				if( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
					canvas[i][x-1] = canvas[i][x];
					canvas[i][x] = 0;
				}
			}
		}
	}
}

function moveBlocksRight() {
	var canMove = true;
	for ( var i = 0; i < canvas.length; i++ ) {
		for ( var x = 0; x < canvas[i].length; x++ ) {
			if ( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
				if ( x === 7 || canvas[i][x+1] > 10 ) {
					canMove = false;
				}
			}
		}
	}
	if(canMove) {
		for ( var i = canvas.length-1; i>=0; i-- ) {
			for ( var x = canvas[i].length; x >= 0; x-- ) {
				if( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
					canvas[i][x+1] = canvas[i][x];
					canvas[i][x] = 0;
				}
			}
		}
	}
}

function stop() {
	for ( var i = 0; i < canvas.length; i++ ) {
		for ( var x = 0; x < canvas[i].length; x++ ) {
			if( canvas[i][x] > 0 && canvas[i][x] < 10 ) {
				canvas[i][x] = canvas[i][x] + 10;
			}
		}
	}
	canvas[0] = [0, 0, 0, 1, 1, 0, 0, 0];
	canvas[1] = [0, 0, 0, 1, 1, 0, 0, 0];
}

document.onkeydown = function(e) {
	if( e.keyCode === 37 ) {
		moveBlocksLeft();
	} else if ( e.keyCode === 39 ) {
		moveBlocksRight();
	}
	drawCanvas();
}

function gameLoop() {
	moveBlocks();
	drawCanvas();
	setTimeout(gameLoop, 1000);
}

drawCanvas();
gameLoop();






