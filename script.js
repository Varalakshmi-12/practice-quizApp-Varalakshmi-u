const questions = [
      {
        question: "What does DOM stand for?",
        choices: [
          "Document Object Model",
          "Data Object Management",
          "Digital Ordinance Model",
          "Desktop Oriented Mode"
        ],
        correctAnswer: 0
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
      },
      {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        choices: ["push()", "pop()", "append()", "add()"],
        correctAnswer: 0
      }
    ];

    const question =document.getElementById("question-id");
    const answerButtons =document.querySelectorAll(".buttons");
    const feedBack = document.getElementById("feed-back");
    const nextQuestion = document.getElementById("next-question");
    const scoreElement =document.getElementById("score");

    
    let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestion(currentQuestionIndex){
    let currentQuestion = questions[currentQuestionIndex]
    question.textContent=currentQuestion.question;
    feedBack.textContent="";



    answerButtons.forEach((btn ,i )=>{
        btn.textContent = currentQuestion.choices[i];
        btn.disabled=false;

    });
}
     //let score=0;
    answerButtons.forEach((btn ,index )=>{
        btn.addEventListener("click",()=> handleAnswer(index));
    });
    
    function handleAnswer(selectedIndex){
                const correctIndex=questions[currentQuestionIndex].correctAnswer;
            
            if (selectedIndex === correctIndex){
                feedBack.textContent ="correct";
                score++;
            }
            else{
                feedBack.textContent ="incorrect";
            }
            answerButtons.forEach(btn=>btn.disabled=true);
        }
            
        
            //btn.disabled=true;
        //});//feedBack.textContent="";
    //});
//};
 
//displayQuestion(currentQuestionIndex);



    nextQuestion.addEventListener("click",()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
    

        displayQuestion(currentQuestionIndex);
        }else{
            
            question.textContent = "Quiz Finished!";
    feedBack.textContent = "";
    scoreElement.textContent = `You got ${score} out of ${questions.length}`;
    answerButtons.forEach(btn => {
      btn.style.display = "none"; // optionally hide buttons
    });
    nextQuestion.disabled = true; // disable next button after quiz ends
  }
        
        
     

    });


    displayQuestion(currentQuestionIndex);




    



    