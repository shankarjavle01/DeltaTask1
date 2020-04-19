let boxes=document.querySelectorAll('.box')
let startBtn=document.querySelectorAll('.start')
let resetBtn=document.querySelectorAll('.reset')
let counter=0

document.getElementById("start").onclick=startGame;
document.getElementById("reset").onclick=resetGame;


function startGame(){
    boxes.forEach((box)=>{
        box.onclick=()=>{
            currentNumber=Number(box.textContent)
            if(currentNumber===counter+1){
                box.textContent=""
                counter++;
                if(currentNumber===boxes.length){
                    alert("you won")
                }
    
            }
        }
    })
}

function resetGame(){
    window.location.reload();
}