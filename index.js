let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let result=document.querySelector('.result');


// Player X and Player o
let turn_o=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // Player o;
        if(turn_o){    
           box.innerText='O';
           turn_o=false;

        } else{
            // Player X;
            box.innerText='X';
            turn_o=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

function disablebox(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enable(){
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
}


function checkWinner(){
    for(let pattern of winPatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;



       if(pos1 !=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2 && pos2==pos3) {
            result.classList.remove('hide');
            result.innerText=`Congratulations 
            Player ${pos1} wins!`;
            disablebox();
       }
    }
}
}

function resett(){
    reset.addEventListener("click",()=>{
        enable(); 
        result.classList.add('hide');
    });

}
resett();