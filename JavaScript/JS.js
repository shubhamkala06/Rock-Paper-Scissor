function computer_choice(){
    let choice = Math.floor((Math.random()*10))%3;
    return choice;
}

function restart(){
    uScore = 0;
    cScore = 0;
    updateScore();
    document.querySelector('.result').textContent="";
    document.querySelector('.round').textContent="";
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile)=>{
        tile.addEventListener('click',action);
    })
}

function updateScore(){
    const user = document.querySelector('.userScore');
    const comp = document.querySelector('.compScore');
    user.textContent = uScore;
    comp.textContent = cScore;
    if(uScore<5 && cScore<5){
        return;
    }
    else{
        if(uScore == 5){
            document.querySelector('.result').textContent="User Won!!";
            document.querySelector('.result').style.color='green';
            document.querySelectorAll('.tile').forEach((tile)=>{
                tile.removeEventListener('click',action);
            })
            setTimeout(restart,10000);
        }
        else{
            document.querySelector('.result').textContent="Computer Won!!";
            document.querySelector('.result').style.color='red';
            document.querySelectorAll('.tile').forEach((tile)=>{
                tile.removeEventListener('click',action);
            })
            setTimeout(restart,10000);
        }
    }
}

function fight(user,computer){
    if(user == computer){
        console.log(`Draw`);
        document.querySelector('.round').textContent = `Both drew same hand`;
        updateScore();
        return;
    }
    if(user == 0){
        switch(computer){
            case 2:{
                console.log(`You Win`);
                uScore+=1;
                document.querySelector('.round').textContent = `Rock breaks Scissors`;
                document.querySelector('.round').setAttribute('style','color:green;');
                updateScore();
                return;
            }
            case 1:{
                console.log(`You Lose`);
                cScore+=1;
                document.querySelector('.round').textContent = `Paper stops Rock`;
                document.querySelector('.round').setAttribute('style','color:red;');
                updateScore();
                return;
            }
        }
    }
    else if(user == 1){
        switch(computer){
            case 2:{
                console.log(`You Lose`);
                cScore+=1;
                document.querySelector('.round').textContent = `Scissors cuts Paper`;
                document.querySelector('.round').setAttribute('style','color:red;');
                updateScore();
                return;
            }
            case 0:{
                console.log(`You Win`);
                uScore+=1;
                document.querySelector('.round').textContent = `Paper stops Rock`;
                document.querySelector('.round').setAttribute('style','color:green;');
                updateScore();
                return;
            }
        }
    }
    else{
        switch(computer){
            case 0:{
                console.log(`You Lose`);
                cScore+=1;
                document.querySelector('.round').textContent = `Rock breaks Scissors`;
                document.querySelector('.round').setAttribute('style','color:red;');
                updateScore();
                return;
            }
            case 1:{
                console.log(`You Win`);
                uScore+=1;
                document.querySelector('.round').textContent = `Scissors cuts Paper`;
                document.querySelector('.round').setAttribute('style','color:green;');
                updateScore();
                return;
            }
        }
    }
}

function action(e){
    let user= +(e.target.getAttribute("data-choice"));
    let comp = computer_choice();
    document.querySelector('.round').setAttribute('style','color:white;');
    fight(user, comp);
}

const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile)=>{
    tile.addEventListener('click',action);
})

let uScore = 0;
let cScore = 0;


document.querySelector('.restart').addEventListener('click',restart);