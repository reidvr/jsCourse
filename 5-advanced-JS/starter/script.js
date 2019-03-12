function Question(question, answers, correctAIndex) {
  this.question = question;
  this.answers = answers;
  this.correctAIndex = correctAIndex;
   
}

Question.prototype.display = function(){

}
Question.prototype.display = function(){
  console.log(this.question);
  for (let index = 0; index < this.answers.length; index++) {
    console.log((index + 1) + ': ' + this.answers[index]);
    
  }
}

Question.prototype.displayOneLine = function(){
  var qString = this.question;
  for (let index = 0; index < this.answers.length; index++) {
    qString += ((index + 1) + ': ' + this.answers[index]);
    
  }
  return qString;
}

Question.prototype.checkAnswer = function(answer){
    
    console.log(answer == (this.correctAIndex + 1) ?  'Correct' : 'Incorrect');
    return(answer == (this.correctAIndex + 1));
}

var animalsQ = new Question('What is the fastest land Animal?',
['Cheetah', 'Grey Hound', 'Spring Box'], 0);

var spaceQ = new Question('What is the 5th planet from the sun?',
['Mars', 'Venus', 'Jupiter'], 2);

var questions = [animalsQ, spaceQ];

var keepScore = (function(){
  var sc = 0;
  return function(correct){
    if(correct){
      sc++;
    }
    return sc;
  }
})();

var score = 0;
function displayRandomQ(questionsArr){
  //Store a random question
  var question = questionsArr[Math.floor(Math.random() * questionsArr.length)];
  question.display();
  var answer = prompt(question.displayOneLine());
  console.log(keepScore(question.checkAnswer(answer)));
}


displayRandomQ(questions);


