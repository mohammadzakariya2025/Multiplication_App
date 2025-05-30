const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input")

const formE1 = document.getElementById("form")

let score=0;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formE1.addEventListener("submit", ()=>{
    const userAns = +inputEl.value 
    // console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        score++;
        console.log(score);
    }else{
        score--;
        console.log(score);
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify)
}