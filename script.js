console.log("Welcome to Tic Tac Toe");

let bgMusic = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let reset = document.querySelector("#reset");
let turn = "X";
let isGameOver = false;

const changeTurn = ()=> {
    return turn === "X"?"O":"X";
}

const checkWin = ()=> {
    let boxtexts = document.getElementsByClassName("boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(it=> {
        if((boxtexts[it[0]].innerText === boxtexts[it[1]].innerText) && 
        (boxtexts[it[1]].innerText === boxtexts[it[2]].innerText) && (boxtexts[it[0]].innerText !== "")) {
            
            document.querySelector(".info").innerText = boxtexts[it[0]].innerText+" WIN";
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            isGameOver = true;
        } 
    });
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(it=> {
    it.addEventListener("click", ()=> {
        let boxText = it.querySelector(".boxtext");
        if(boxText.innerText === '') {
            turnMusic.play();
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            
            if(! isGameOver) document.querySelector(".info").innerText = "Turn for "+turn;
        }
    });
});

reset.addEventListener("click", ()=> {
    let boxTexts = document.getElementsByClassName("boxtext");
    Array.from(boxTexts).forEach(it=> {
        it.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
});