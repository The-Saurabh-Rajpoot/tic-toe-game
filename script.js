let table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
let numOfPlay = 0;


function clicker(cell) {
  let row = cell.parentNode.rowIndex;
  let column = cell.cellIndex;


  
    if (table[row][column] == "") {
        table[row][column] = currentPlayer;
        cell.innerHTML = currentPlayer;
        numOfPlay++;

        if(gameOwner()){
            document.getElementById("gameOwn").innerHTML=`Match own by ${currentPlayer}`;
          }
        else if(gameTie()){
            document.getElementById("game-tie").innerHTML =`game is tie`
        }else{
            if (currentPlayer == "X") {
                currentPlayer = "O";
              } else {
                currentPlayer = "X";
              }
              document.getElementById("turn").innerHTML=`It is your turn '${currentPlayer}'`
        }
      }
     
  }




function gameOwner(){
    for(let i=0;i<3;i++){
        if(table[i][0]===currentPlayer && table[i][1]===currentPlayer && table[i][2]===currentPlayer ){
            return true;
        }
    }

    for(let i=0;i<3;i++){
        if(table[0][i]===currentPlayer && table[1][i]===currentPlayer && table[i][2]===currentPlayer ){
            return true;
        }
    }

    
        if(table[0][0]===currentPlayer && table[1][1]===currentPlayer && table[2][2]===currentPlayer ){
            return true;
        }
    
        if(table[2][0]===currentPlayer && table[1][1]===currentPlayer && table[0][2]===currentPlayer ){
            return true;
        }
}

function gameTie(){
   if(numOfPlay==9){
    return true
   }
   return false;
}

function reset(){

    table = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      currentPlayer='X';
      numOfPlay=0;

      let cells=document.getElementsByClassName("box");
      for(i=0;i<cells.length;i++){
        cells[i].innerHTML="";
      }
      document.getElementById("turn").innerHTML="";
      document.getElementById("gameOwn").innerHTML="";
      document.getElementById("game-tie").innerHTML =""
}