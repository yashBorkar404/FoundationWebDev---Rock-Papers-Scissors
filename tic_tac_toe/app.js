let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0=true;
const showWinner = (winner)=>{
    msg.innerText= `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
}
const disableButtons=()=>{
    for(let box of boxes){
        box.disabled=true
    }
} 
const enableButtons=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
} 
const resetGame = ()=>{
    turn0=true;
    enableButtons();
    msgContainer.classList.add("hide")
    
}
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]                   
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText= "O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
    })

})
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner is",boxes[pattern[0]].innerText)
                showWinner(pos1val);
                

        }
        
    }
            
 }
}
newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)