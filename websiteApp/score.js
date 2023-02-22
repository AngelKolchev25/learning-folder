document.getElementById("0").addEventListener("click", scoring());
document.getElementById("1").addEventListener("click", scoring());
document.getElementById("2").addEventListener("click", scoring());
document.getElementById("3").addEventListener("click", scoring());


function scoring () {

let scoreValue = 0;
let result = document.getElementById('result');
let score = document.getElementById('scoreH');
if(result.innerHTML == 'CORRECT'){
    scoreValue += 10;
    score.innerHTML = scoreValue;
}else{
    if(result.innerHTML == 'WRONG'){
    scoreValue -= 10;
    score.innerHTML = scoreValue;
    }
}
if(scoreValue == 100){return scoreValue}
// let scoreValue = document.createTextNode();
// score.appendChild(scoreValue);
}