let rounds = 0;
let compguess = () => Math.floor(Math.random() * 2) == 1? true : false;
let outcome = () => Math.floor(Math.random() * 2) == 0? false: true;
console.log(outcome());
let userchoice;
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let disoutcome = document.querySelector("#result")
let userscore = 0;
let compscore = 0;
let userpt = document.querySelector("#userpt");
let comppt = document.querySelector("#comppt");
let a,b;
let winner = document.querySelector("#won");
let gameno = 1;

play = (compchoice, result) => {

    switch (compchoice) {
        case true:
            comp.innerText = "Heads";
            break;
        case false:
            comp.innerText = "Tails";
            break;
        default:
            comp.innerHTML = "<h2>Invalid</h2>";
    }
    
    switch (result) {
        case true:
            disoutcome.innerText = "Heads";
            break;
        case false:
            disoutcome.innerText = "Tails";
            break;
        default:
            disoutcome.innerHTML = "<h2>Invalid</h2>";
    }

    if (userchoice == result) {
        userscore++;
    }

    if (compchoice == result) {
        compscore++;
    }

    userpt.innerText = userscore;
    comppt.innerText = compscore;
}

function won() {
    if (rounds == 5) {
        if (userscore > compscore) {
            winner.innerText = "You won";
        } else if (userscore == compscore) {
            winner.innerText = "It's a tie";
        } else {
            winner.innerText = "Computer won";
        }
        rounds = 0;
    }
    if (rounds == 0) {
        userscore = 0;
        compscore = 0;
    }
    if (rounds == 1) {
        gameno++;
        winner.innerText = " ";
    }    
}


function counterH() {
    userchoice = true;
    user.innerText = "Heads";
    a = compguess();
    b = outcome();
    play(a, b);
    rounds++;
    won();
    console.log(rounds);
}

function counterT() {
    userchoice = false;
    user.innerText = "Tails";
    a = compguess();
    b = outcome();
    play(a, b);
    rounds++;
    won(); 
    console.log(rounds);
}



