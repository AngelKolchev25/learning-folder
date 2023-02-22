const q1 = {
    question:"What's your dogs name?",
    answers:['Nero','Magare','Konj', 'Pile'],
    key: '0'
};
const q2 = {
    question:'Who is Thralls dad?',
    answers:['Eitrigg','Orgrim','Rexxar','Durotan'],
    key: '3'
};
const q3 = {
    question:'What does Medivh mean in Thalassian?',
    answers:['Keeper of Secrets','Iron Fist','Demon','Apothecary'],
    key: '0'
};
const q4 = {
    question:'What is the name of the first royal family of Silvermoon?',answers:['Moonseeker','Sunstrider','Moonstrider','Sunseeker'],
    key: '1'
};
const q5 = {
    question:'Who was the last elven king of Quelthalas?',
    answers:['Lorthemar','Liadrin','Pathaleon','Anasterian'],
    key: '3'
};
const q6 = {
    question:'Who founded the kingdom of Quelthalas?',
    answers:['Dathremar','Pathaleon','Liadrin','Theron'],
    key: '0'
};
const q7 = {
    question:'What was  Dathremar Sunstriders signature weapon?',
    answers:['MeloFelorn','LeloMeforn','Relo Rerorn','FeloMelorn'],
    key: '3'
};
const q8 = {
    question:'Where is Janeiros point?',
    answers:['Outland','Azeroth','Northrend','Argus'],
    key: '1'
};
const q9 = {
    question:'The Council of Three Hammers is comprised of the Wildhammer, Dark Iron and?',
    answers:['Bronzebeard','Stoutheart','Stonefist','Stormpike'],
    key: '0'
};
const q10 = {
    question:'Who can you pickpocket the Grim Guzzler key from?',
    answers:['Plugger','Gersthan','Grebmar','Grizzle'],
    key: '0'
};
const q11 = {
    question: 'The Kolkkar tribe reside in which zone?',
    answers:['Badlands','Barrens','Desolace','Borean Tundra'],
    key: '2'
};
const q12 = {
    question: 'Dalaran is located in which zone?',
    answers:['Crystalsong Forest','Grizzly Hills','Elwynn Forest'],
    key: '1'
}

questions =[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];

function getObjectQuestion () {
    document.getElementById('result').innerHTML = '';
    let randomNum = Math.floor(Math.random()*11); //random number
    let randomQuestion = questions[randomNum].question;

    document.getElementById('pQ').innerHTML = ''; //to delete previous

    paragraph = document.getElementById('pQ');
    question = document.createTextNode(randomQuestion);
    paragraph.appendChild(question);
    localStorage.setItem('questionKey', questions[randomNum].key);
    localStorage.setItem('questionNumber', randomNum)

    questionList = document.getElementById('answerList');
    for(i=0; i<4; i++){
        let listItem  = questionList.children.item(i);
        listItem.textContent = questions[randomNum].answers[i];
    }


    
}