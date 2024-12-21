let userScore=0;
let compScore=0;
const genCompChoice= () =>{
    const options=["rock","paper","scissors"]
    let idx = Math.floor(Math.random()*10)%3;
    return options[idx]                          
}
const drawGame = () =>{
    console.log("game was drawn")
    let messg=document.querySelector("#msg")
    messg.innerText="It's a Draw!"
    messg.style.backgroundColor="grey"

}

const playGame = (userChoice) => {
    console.log("user choice: ",userChoice)
    let compChoice=genCompChoice()
    console.log("Computer choice: ",compChoice)
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "rock" && compChoice ==="paper" || userChoice === "paper" && compChoice ==="scissors" || userChoice === "scissors" && compChoice ==="rock"  ){
            userWin = false
            let messg=document.querySelector("#msg")
            messg.innerText=`Computer Wins! ${compChoice} beats Your ${userChoice}`
            messg.style.backgroundColor="red"
            compScore++;
        }else{
            userWin=true;
            let messg=document.querySelector("#msg")
            messg.innerText=`User Wins! Your ${userChoice} beats ${compChoice} `
            messg.style.backgroundColor="green"
            userScore++;
        }
    }
}
    
const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
        document.querySelector("#comp-score").innerText=compScore;
        document.querySelector("#user-score").innerText=userScore;
        })
})
const reset=document.querySelector("#reset-btn")
reset.addEventListener("click",() =>{
    let messg=document.querySelector("#msg")
    if(userScore>compScore){
        messg.innerText=`Yay !! You Win! Your ${userScore} beats Computer's ${compScore} `
        messg.style.backgroundColor="green"
    }else if(compScore>userScore){
        messg.innerText=`Oops !! You Lose! Your ${userScore} loses to Computer's ${compScore} `
        messg.style.backgroundColor="red"
    }else{
        messg.style.backgroundColor="grey"
        messg.innerText=`Wow !! It's a draw! Your ${userScore} is no better than Computer's  ${compScore} `
    }
    compScore=0;
    userScore=0;
    document.querySelector("#comp-score").innerText=compScore;
    document.querySelector("#user-score").innerText=userScore;

})
