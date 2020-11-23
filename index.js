var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(chalk.bold.rgb(255,255,0)(`Please enter your name: `));

var scoreBoard = [{
  name:"Nithya",
  score:3
},
{
  name:"Sriman",
  score:5
},
{
  name:"Uthra",
  score:5
},
{
  name:"Sruthi",
  score:10
}]
var score = 0;
var questionBank = [
  {
    question : `1.Javascript is a _________ programming language

a:Synchronous
b:Asynchronous\n`,
    answer : "a"
  },
  {
    question : `2.Which of the following is a JS Framework?

a:React
b:Angular
c:Vue
d:All of the above\n`,
    answer : "d"
  },
  {
    question : `3.Undefined and not defined are same in Javascript.

a:true
b:false\n`,
    answer : "b"
  },
  {
    question : `4.What is the output of the following program?
    console.log(x);
    var x = 7;

a:7
b:undefined\n`,
    answer : "b"
  },
  {
    question : `5.What is the output of the following program?
    console.log(10>9);

a:true
b:false
c:1
d:0\n`,
    answer : "a"
  }
]


console.log(chalk`\n{bold Hi {bgBlue ${playerName}}, Welcome to {bgBlue JAVASCRIPT QUIZ by Sruthi}!}\n`);
console.log(
  chalk.bold.bgGreen.black ("Rules:")+chalk.bold(" Choose the right option, if you choose the correct answer, you will gain 2 points and for the wrong answer, there will be a negative marking of -1.\nIf you want to exit the quiz, press \"e\".\n")+chalk.green.bold("All the best!\n")
)

//call currentLeaderBoard
currentLeaderBoard();

var start = readlineSync.question(chalk.bold.green("Shall we go to quiz?(Y/N) "));
if(start.toLowerCase()==="y"){
  //loop to play the game 
  for(var i=0;i<questionBank.length;i++){
  var returnedAns=play(questionBank[i].question,questionBank[i].answer);
  if(returnedAns === "e"){
    break;
  }
}
}



// console.log(questionBank[0].question);
//function to play the game
function play(question,answer){
  var playerAnswer = readlineSync.question(chalk`\n{cyanBright.bold ${question}}`);
  console.log(chalk`{bold You selected {rgb(255,0,255) ${playerAnswer}}}`)
  if(playerAnswer.toLowerCase()===answer){
    console.log(chalk`{bgGreen.black.bold Bravo,You are right!}`);
    score+=2;
  }
  else if(playerAnswer === "e"){
    return "e"
  }
  else{
    console.log(chalk`{bgRed.bold Oops,You are wrong!}`);
    console.log(chalk`{bold The right answer is {green "option ${answer}"}}`)
    score-=1;
  }
  console.log(chalk`{bold Your current score : ${score}}`)
  console.log("_____________________________________________\n")
  
}



console.log(chalk`{bgRgb(255,255,0).black.bold Your final score : ${score}}\n`);

if(hasBeaten(score)==1){
  console.log(chalk.bgRgb(255,255,0).black.bold("Hurray!You have beaten the highest score!\n")+chalk.bold("Send your screenshot to sruthiragupathy@gmail.com to update the leaderboard.\n"));
}
else if(hasBeaten(score)==2){
  console.log(chalk.bgRgb(255,255,0).black.bold("Hurray!You are one among the top 3 players now!\n")+chalk.bold("Send your screenshot to sruthiragupathy@gmail.com to update the leaderboard.\n"));
}

console.log(chalk.bold.rgb(255,255,0)("Thanks for playing...\nHope you have learnt something!"));

//function to calculate top 3 scores
function currentLeaderBoard(){
  scoreBoard.sort((personOne,personTwo)=>(personTwo.score-personOne.score))
  console.log(chalk.bgRgb(255,255,0).black.bold("CURRENT LEADERBOARD "));
  for(var i=0;i<3;i++){
    console.log(chalk`{bold [${i+1}] ${scoreBoard[i].name} : ${scoreBoard[i].score}}`)
  }

  
}

function hasBeaten(score){
  for(var i=0;i<3;i++){
    if(i==0 & score>=scoreBoard[i].score){
      return 1;
    }
    else if(score>=scoreBoard[i].score){
      return 2;
    }
  }
}