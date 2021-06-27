const gameBoard = document.querySelector('#game-board')
const boxes = document.querySelectorAll('.box')
const restartBtn = document.querySelector('#restart-button')
const display = document.querySelector('#display')
const playerOne = document.querySelector('#playerOne')
const playerTwo = document.querySelector('#playerTwo')

let turn = 0
let player1Score = 0
let player2Score = 0

gameBoard.onclick = startGame
restartBtn.onclick = restartGame

// classList short
function $(node) {
	return node.classList
}

function startGame(e) {
	if($(e.target).contains('O') || $(e.target).contains('X')) {
		return null
	} 
	
	if (turn % 2 === 0) {
		$(e.target).add('X')
		$(playerOne).remove('active')
		$(playerTwo).add('active')
	} else {
		$(e.target).add('O')
		$(playerOne).add('active')
		$(playerTwo).remove('active')
	}
	turn ++

	if(checkWinner('X')) {
		display.textContent = 'player 1 win'
		playerOne.textContent = 'Player 1: ' + ++player1Score
		gameBoard.onclick = null
	}
	if(checkWinner('O')) {
		display.textContent = 'player 2 win'
		playerTwo.innerHTML = 'Player 2: ' + `<strong>${++player2Score}</strong>`
		gameBoard.onclick = null
	}
}

function checkWinner(player) {
	//checking rows
	if ($(boxes[0]).contains(player) && $(boxes[1]).contains(player) && $(boxes[2]).contains(player)) {
		return {winner: player}
	}
	if ($(boxes[3]).contains(player) && $(boxes[4]).contains(player) && $(boxes[5]).contains(player)) {
		return {winner: player}
	}
	if ($(boxes[6]).contains(player) && $(boxes[7]).contains(player) && $(boxes[8]).contains(player)) {
		return {winner: player}
	}

	
	//checking columns
	if ($(boxes[0]).contains(player) && $(boxes[3]).contains(player) && $(boxes[6]).contains(player)) {
		return {winner: player}
	}
	if ($(boxes[1]).contains(player) && $(boxes[4]).contains(player) && $(boxes[7]).contains(player)) {
		return {winner: player}
	}
	if ($(boxes[2]).contains(player) && $(boxes[5]).contains(player) && $(boxes[8]).contains(player)) {
		return {winner: player}
	}


	//checking diagonals
	if ($(boxes[0]).contains(player) && $(boxes[4]).contains(player) && $(boxes[8]).contains(player)) {
		return {winner: player}
	}
	if ($(boxes[2]).contains(player) && $(boxes[4]).contains(player) && $(boxes[6]).contains(player)) {
		return {winner: player}
	}

	return null

}

function restartGame() {
	boxes.forEach(e => {
		$(e).remove('O')
		$(e).remove('X')
		}
	)

	display.textContent = 'tic-tac-toe game'
	gameBoard.onclick = startGame

	turn = 0
}
