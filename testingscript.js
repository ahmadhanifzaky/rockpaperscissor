alert("RPS Game Testing")

let repeat = 1;
while(repeat === 1) {
    let player = '';
    player = prompt("Your Choice : Rock/Paper/Sciccor");

    let computer = Math.random();
    let compChoice = '';

    if (computer <= 0.33) {
	    compChoice = 'Rock'
    } else if (computer >= 0.66) {
	    compChoice = 'Sciccor';
    } else {
	    compChoice = 'Paper';
    } 
    let result;

    switch (player) {
    	case compChoice :
    		result = 'TIE!';
    		break;
    	case 'Rock':
    		result = (computer === 'Sciccor')? 'WIN!' : 'LOSE!';
    		break;
    	case 'Sciccor':
    		result = (computer === 'Paper')? 'WIN!' : 'LOSE!';
    		break;
    	case 'Paper':
	    	result = (computer === 'Rock')? 'WIN!' : 'LOSE!';
    		break;
    }

    repeat = confirm('Player : ' + player + '\nComputer : ' + compChoice + '\n' + result + '\n Repeat?')
}