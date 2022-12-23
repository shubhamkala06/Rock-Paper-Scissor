function computer_choice(){
    let choice = Math.floor((Math.random()*10))%3;
    if(choice == 0 ){
        return "ROCK";
    }
    if(choice == 1){
        return "PAPER";
    }
    if(choice == 2){
        return "SCISSOR";
    }
}

function user_choice(){
    let choice = prompt("Choose Your Weapon(Rock/Paper/Scissor):").toUpperCase();
    let flag = ValidateChoice(choice);
    if(!flag){
        console.log("Wrong Weapon");
        location.reload();
    }
    else{
        return choice;
    }
}

function ValidateChoice(x){
    if(x=="ROCK"|| x=="PAPER"|| x=="SCISSOR")
        return 1;
    else
        return 0;
}

function fight(user,computer){
    if(user == computer){
        console.log(`Round ${n}:- Draw`);
        return;
    }
    if(user == "ROCK"){
        switch(computer){
            case "SCISSOR":{
                UScore += 1;
                console.log(`Round ${n}:- You Win`);
                return;
            }
            case "PAPER":{
                CScore += 1;
                console.log(`Round ${n}:- You Lose`);
                return;
            }
        }
    }
    else if(user == "PAPER"){
        switch(computer){
            case "SCISSOR":{
                CScore += 1;
                console.log(`Round ${n}:- You Lose`);
                return;
            }
            case "ROCK":{
                UScore += 1;
                console.log(`Round ${n}:- You Win`);
                return;
            }
        }
    }
    else{
        switch(computer){
            case "ROCK":{
                CScore += 1;
                console.log(`Round ${n}:- You Lose`);
                return;
            }
            case "PAPER":{
                UScore += 1;
                console.log(`Round ${n}:- You Win`);
                return;
            }
        }
    }
}




let UScore = 0;
let CScore = 0;
let n = 1;

while(n<6){
    let CChoice = computer_choice();
    let UChoice = user_choice();
    fight(UChoice, CChoice);
    n++;
}


if(CScore == UScore){
    while(CScore == UScore){
        console.log(`Death Round`);
        console.log(`Choose Wisely or You may Lose`);
        let CChoice = computer_choice();
        let UChoice = user_choice();
        fight(UChoice, CChoice);
        n++;
    }
}

if(UScore>CScore){
    console.log(`You Won!`);
}
else{
    console.log(`You Lost!`);
}
    

