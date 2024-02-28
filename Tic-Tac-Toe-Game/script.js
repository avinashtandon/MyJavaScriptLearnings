let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let turno = true;
const winningpatter = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxex.forEach((box) =>{ 
    box.addEventListener("click",() =>{
        if(turno === true){
            box.innerHTML = "X";
            turno = false;
        }else{
            box.innerHTML = "O";
            turno = true;
        }
        box.disabled = true; // After a box is clicked, it is disabled. This line ensures that the box cannot be clicked again
        checkWinner(); // Checking if someone has won the game after every move.
    })
})