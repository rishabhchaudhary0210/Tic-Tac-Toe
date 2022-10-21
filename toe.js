let music = new Audio("sounds/Pattern-Display-Sound.wav");
let gameOver = new Audio("sounds/negative_beeps-6008.mp3");
let gamewin = new Audio("sounds/good-6081.mp3");
let isgameOver = false;
let turn = "X";
let count=0;
function changeTurn(){
    count++;
    if(turn==="X"){
        return "O";
    }
    else{
        return "X";
    }

}

function checkWin(){
    let textBox = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,-6.7,0],
        [3,4,5,0,3.3,0],
        [6,7,8,0,13.3,0],
        [0,3,6,-10,3.3,90],
        [1,4,7,0.1,3.3,90],
        [2,6,8,10.1,3.3,90],
        [0,4,8,0.1,3.3,45],
        [2,4,6,0.1,3.3,-45]
    ];
    wins.forEach(e=>{
        if((textBox[e[0]].innerText===textBox[e[1]].innerText)&&(textBox[e[1]].innerText===textBox[e[2]].innerText)&&(textBox[e[0]].innerText!=="")){
            gamewin.play();
            document.getElementsByClassName("info")[0].innerText = textBox[e[0]].innerText + " WON !!!";
            isgameOver = true;
            let line = document.getElementById("line");
            line.style.visibility="visible";
            line.style.width="30vw";
            line.style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.getElementById("reset").innerHTML = "Play Again";
            for(var i=0;i<box.length;i++){
                document.querySelectorAll(".box")[i].style.pointerEvents='none';
            }
        }
    });
}

document.getElementById("reset").addEventListener("click",()=>{
    location.reload();
});

let box = document.getElementsByClassName("box");
// console.log(box.length);
for(var i=0;i<box.length;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",handleClick);
}

function handleClick(){
    music.play();
    boxText = this.querySelector(".boxtext");
    // console.log(boxText);
    // this.innerHTML=changeTurn();
    boxText.innerText=turn;
    checkWin();
    turn = changeTurn();
    this.style.pointerEvents='none';
    if(isgameOver==false){
        document.getElementsByClassName("info")[0].innerHTML="Turn for " + turn ;
        if(count == 9){
            document.getElementsByClassName("info")[0].innerHTML="GAME OVER !!!" ;
            gameOver.play();
            document.getElementsByClassName("gameInfo")[0].style.width="36vw";
            document.getElementById("reset").innerHTML = "Play Again";
            for(var i=0;i<box.length;i++){
                document.querySelectorAll(".box")[i].style.pointerEvents='none';
            }
        }
    }
}


