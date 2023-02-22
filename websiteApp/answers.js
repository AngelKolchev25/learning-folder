// import {q1} from './objectQuestions.js'; DOES NOT WORK. MODULES??
const odgovori = {q1:0,q2:3,q3:0,q4:1,q5:3,q6:0,q7:3,q8:1,q9:0,q10:0,q11:2};
const odgovoriArray = ['0','3','0','1','3','0','3','1','0','2','2']

function answers (clicked) {

    let randomQuestion = document.getElementById('pQ');
    console.log(randomQuestion)
    let qNum = localStorage.getItem('questionNumber');
    console.log(qNum);
    let qKey = localStorage.getItem('questionKey');
    console.log(qKey);

    identifier = odgovoriArray[qNum];
    console.log(identifier);
    let scoreValue = 0;
    let score = document.getElementById('scoreH');

    if(clicked == identifier){
        document.getElementById('result').innerHTML = ''; //delete previous
        scoreValue = parseInt(document.getElementById('scoreH').innerHTML);
        let result = document.getElementById('result');
        let value = document.createTextNode('CORRECT');
        result.appendChild(value);
        scoreValue += 10;
        score.innerHTML = scoreValue;
    }else{
        document.getElementById('result').innerHTML = '';
        scoreValue = parseInt(document.getElementById('scoreH').innerHTML);
        let result = document.getElementById('result');
        let value = document.createTextNode('WRONG');
        result.appendChild(value);
        scoreValue -= 10;
        score.innerHTML = scoreValue;
    }
}
    
  /*  let found = questionsArray.find(element => element == qKey)
    console.log(found) */
    
  
  /*  if(clicked == odgovori.q1){
        document.getElementById('result').innerHTML = ''; //delete previous

        let result = document.getElementById('result');
        let value = document.createTextNode('CORRECT');
        result.appendChild(value);
    }else{
        document.getElementById('result').innerHTML = '';

        let result = document.getElementById('result');
        let value  = document.createTextNode('WRONG');
        result.appendChild(value);
    } */
