var readlineSync = require("readline-sync");
const chalk = require("chalk");

let userScore = 0;
let userName = readlineSync.question(chalk.cyan("What is Your Name ? "));
console.log(
  chalk.bgWhite.blue(
    `Welcome ${userName}, Let's Play the quiz ! How well You Know Tanay, By Answering 3 right answer you would enter Level 2 \n -------------------- \n `
  )
);

const quesArr = [
  {
    ques:
      "Is HTML a programming language ? \n a) Yes \n b) No \n Your Answer :- ",
    ans: "a",
  },
  {
    ques:
      "What is one of the reasons Java is different to Javascript ?  \n a) Java is compiled before it runs and isn't limited to being on a web browser. \n b) Javascript is compiled before it runs and isn't limited to being on a web browser. \n c) Javascript is barely used anymore since Java came out. \n Your Answer :- ",
    ans: "b",
  },
  {
    ques:
      "What is the newest version of HTML being developed ? \n a) HTML4 \n b) HTML3 \n c) HTML5 \n Your Answer :- ",
    ans: "c",
  },
  {
    ques:
      "What does HTML stand for ? \n a) Hyper type marked language \n b) Hyper text markup language \n c) Hyped terrain mock language \n Your Answer :- ",
    ans: "b",
  },
  {
    ques:
      "What does CSS stand for ? \n a) Cascading Style Sheet \n b) Complex Style Syntax \n c) Complete Sound Sheet \n Your Answer :- ",
    ans: "a",
  },
  {
    ques:
      "Choose the correct HTML tag for the largest heading ? \n a) <heading> \n b) <h6> \n c) <head> \n Your Answer :- ",
    ans: "b",
  },
  {
    ques:
      "Which of these tags are all <table> tags ? \n a) <table><head><tfoot> \n b) <table><tr><td> \n c) <table><tr><tt> \n Your Answer :- ",
    ans: "b",
  },
];

for (let i = 0; i < quesArr.length; i++) {
  if (userScore === 3) {
    console.log(
      chalk.blue.bold(
        "Great, It seems like you know him very well !, You entered Level 2"
      )
    );
  }
  let userAns = readlineSync.question(chalk.bold(quesArr[i].ques));
  if (userAns == quesArr[i].ans) {
    userScore++;
    console.log(chalk.green("You are right and you score is " + userScore));
  } else {
    console.log(chalk.red("your answer is wrong"));
  }
}
