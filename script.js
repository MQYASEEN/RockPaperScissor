let score=JSON.parse(localStorage.getItem('score')) || {wins:0,loose:0,tie:0};

function game(pickSelection){
let computerMove=pickComputermove();
let result='';
let ourMove=pickSelection;
if(ourMove==='rock'){
if(computerMove==='rock'){
	result='Tie';
}
else if(computerMove==='paper'){
	result='You Loose';
}
else if(computerMove==='scissor'){
	result='You Win';
}
}

else if(ourMove==='paper'){
if(computerMove==='rock'){
	result='You Win';
}
else if(computerMove==='paper'){
	result='Tie';
}
else if(computerMove==='scissor'){
	result='You Loose';
}
}

else if(ourMove==='scissor'){
if(computerMove==='rock'){
	result='You Loose';
}
else if(computerMove==='paper'){
	result='You Win';
}
else if(computerMove==='scissor'){
	result='Tie';
}
}
if(result==='You Win'){
	score.wins+=1;
}else if(result==='You Loose'){
	score.loose+=1;
}else if(result==='Tie'){
	score.tie+=1;
}
updateScore();
localStorage.setItem('score',JSON.stringify(score));


document.querySelector('#result').innerHTML=`${result}`;

document.querySelector('#move').innerHTML=`You Pick <img src="images/${ourMove}.png" class="moveStyle"> Computer Pick <img src="images/${computerMove}.png" class="moveStyle">`;
}


function updateScore(){
document.querySelector('#score').innerHTML=`Wins:${score.wins},Loose:${score.loose},Tie:${score.tie}`;


}
function pickComputermove(){
const randomMove=Math.random();

if(randomMove>=0 && randomMove<1/3){
computerMove='rock';
}
else if(randomMove>=1/3 && randomMove<2/3){
computerMove='paper';
}
else if(randomMove>=2/3 && randomMove<1){
computerMove='scissor';
}
return(computerMove);
}