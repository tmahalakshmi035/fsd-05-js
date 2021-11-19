//creat event listener for all buttons
let buttons = document.querySelectorAll(".question-btn");
console.log(buttons);

function hideAllQuestionText(){
    let questionTexts = document.querySelectorAll('.question-text');
    console.log(questionTexts);
    questionTexts.forEach(function(questionText){
        questionText.style.dispaly = 'none';
    });
}

function printMe(button) {
  button.addEventListener("click", function(){
    let currentElement = this,
      questionWrapperElement = currentElement.parentNode.parentNode,
      questionTextElement = questionWrapperElement.querySelector(".question-text");
       //hide all question-text
      hideAllQuestionText();
       //show the element
     questionTextElement.style.display = 'block';
  });
}

buttons.forEach(printMe);
 //get('hello');it execute get
// console.log(get);it send the get