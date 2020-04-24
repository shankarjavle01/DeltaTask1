let boxes=document.querySelectorAll('.box')
let nums=[]
let ended=false

document.getElementById("start").onclick=initialize;
document.getElementById("reset").onclick=resetGame;

function initialize(){
    startGame();
    time();
}
function resetGame(){
    bestTime();
   
}
function startGame(){
    tableSize=boxes.length;
    newFunction()
    for(let i=0;i<tableSize;i++){
        boxes[i].innerHTML='<span draggable="true">'+'<h1>'+nums[i] +'</h1>'+'</span>';
    }
    game();

}

function newFunction() {
    shuffeledarray(1, tableSize + 1)
}

function shuffeledarray(from,to){
    for(i=from;i<to;i++){
        nums[i-from]=i;
    }
    for(var i=to-from;i;i--){
        j=Math.floor(Math.random()*i);
        [nums[i-1],nums[j]]=[nums[j],nums[i-1]];
    }
}
let newNumber=0;
let counter=0;
let innerText;
function game(){
    boxes.forEach((box)=>{
        box.onclick=()=>{
            currentNumber=Number(box.textContent)
            if(currentNumber===counter+1 && counter<20){
                newNumber=currentNumber+20;
                box.innerHTML='<span draggable="true">'+'<h1>'+newNumber +'</h1>'+'</span>';
                counter++;
    
            }
            else if(currentNumber===counter+1 && counter>=20){
                box.style.visibility="hidden"
                counter++;
                if(currentNumber===2*(boxes.length)){
                    document.getElementById('win').style.visibility="visible"
                    ended=true;
                    
                }
            }
        }
    })
}

function time(){
    let seconds=0;
    let timer=setInterval(function(){
    seconds++;
    document.getElementById('timer').innerHTML='Time : ' + seconds +' seconds';
    if(ended){
        clearInterval(timer);
    }
    if(localStorage==null){
        localStorage.setItem('bestTime',seconds);
    }
    else if(localStorage.getItem('bestTime')>seconds){
        localStorage.setItem('bestTime',seconds);
    }
},1000);
}
function bestTime(){
    var bestTimes=localStorage.getItem('bestTime')
    console.log(bestTimes);
    document.getElementById('bestTime').innerHTML='Best time : ' + bestTimes + ' seconds';
}
