let gameBtn = document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let newBtn= document.querySelector("#new-btn");
let msgDiv= document.querySelector(".msg-div");
let msgParagraph =document.querySelector("p");

let turn0 = true;


const pattenWinning =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= ()=>{
    turn0 = true;
    enableBtn();
    msgDiv.classList.add("hide");

}


gameBtn.forEach ((box) =>{
    box.addEventListener("click",() =>{
        if (turn0){
            box.innerText= "0";   
            turn0= false;
        }else{
            box.innerText="X"
            turn0= true;
        }
        box.disabled= true;

        checkWinner();
    });
});

const disableBtn =() =>{
    for(let box of gameBtn){
        box.disabled =true;
    }
};

const enableBtn =() =>{
    for(let box of gameBtn){
        box.disabled =false;
        box.innerText= "";

    }
};

const showWinner = (winner) => {
  msgParagraph.innerText =`Congratulations, Winner is ${winner}`;
  msgDiv.classList.remove("hide");
  disableBtn();
};


const checkWinner = () => {
    for( let pattern of pattenWinning){
        let valuePos1 = gameBtn[pattern[0]].innerText;
        let valuePos2 = gameBtn[pattern[1]].innerText;
        let valuePos3 = gameBtn[pattern[2]].innerText;
        if(valuePos1 !="" && valuePos2 != "" && valuePos3 !=""){
            if( valuePos1===valuePos2 && valuePos2===valuePos3){
                showWinner(valuePos1);
            }
        }
    }

}
 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);

