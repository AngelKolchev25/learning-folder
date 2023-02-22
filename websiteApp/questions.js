let questionOne = 'How old are you?';
let questionTwo = 'Where were you born?';
let questionThree = 'where do you live?';
questions = [questionOne,questionTwo,questionThree]
questionOneAnswers = [24,25,26,27]

function getQuestion () {
    
    let randomNum = Math.floor(Math.random()*10); //TEMPORARILY DISABLED 
    let randomQuestion = questions[0];
    document.getElementById("pQ").innerHTML = ""; //to clear previous

    randoP = document.getElementById('pQ');
    ques = document.createTextNode(randomQuestion);
    randoP.appendChild(ques);

    questionList = document.getElementById('answerList');
    for(i=0; i<questionOneAnswers.length; i++){
        let listItem = questionList.children.item(i);
        listItem.textContent = questionOneAnswers[i];
    }

}

