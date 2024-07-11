let xChoice, yChoice;

function choosing(rps){
    document.getElementById("playChoice").innerHTML = xChoice;
    yChoice = document.getElementById("playChoice").innerHTML;
    document.getElementById("gambar").src = "image/" + rps + ".jpg";
}
    //function for player choice
function player(){
        xChoice = document.getElementById("yourChoice").value;
        switch (xChoice) {
            case 'Rock' :
                choosing('Rock');
                break;
            case 'Paper':
                choosing('Paper');
                break;
            case 'Scissor':
                choosing('Scissor');
                break;
        }    

    //for computer choice
    let compChoice;
    
    let computer = Math.random();
    if (computer <= 0.33) {
	    compChoice = 'Rock';
    } else if (computer >= 0.66) {
	    compChoice = 'Scissor';
    } else {
	    compChoice = 'Paper';
    }
    document.getElementById("compChoice").innerHTML = compChoice;
    document.getElementById("gambar1").src = "image/" + compChoice + ".jpg";

    switch (xChoice) {
    	case compChoice :
    		result = ' TIE!';
    		break;
    	case 'Rock':
    		result = (compChoice == 'Scissor')? ' WIN!' : ' LOSE!';
    		break;
    	case 'Scissor':
    		result = (compChoice == 'Paper')? ' WIN!' : ' LOSE!';
    		break;
    	case 'Paper':
	    	result = (compChoice == 'Rock')? ' WIN!' : ' LOSE!';
    		break;
    }
    document.getElementById("result").innerHTML = result;
}

function tryagain(){
    location.reload();
}