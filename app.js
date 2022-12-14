// game logic
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		// Function start
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function penentu wiener
				winner(this.innerText,computerChoice)
				
				// gameover abis 9 moves
				if(moves == 9){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function penentu winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Eh?'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Try again loser';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = '...'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Hahaha';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Hmph...';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'L + ratio';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'im gonna cancel you	';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function gameover
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'GG Banh'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Take the L';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = "I'll never forgive you!!!";		
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}
	playGame();
	
}


game();
