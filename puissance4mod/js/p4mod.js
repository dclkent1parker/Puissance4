

/* Ask how many rows and cols the player wants */ 
var nbRow= parseInt(prompt("Choose the number of rows and columns (between 4 and 20)"));
if (nbRow<4 | nbRow>20){
    nbRow= parseInt(prompt("Please, choose a number of rows and columns between 4 and 20 included"))
}
var nbCol= nbRow;


/* create the table depending on the player's choices */
var table= document.getElementById("table");
var n=0;
function createTable(){
    for(i=0; i<=nbRow-1 ; i++){
        var row = table.insertRow();
        row.setAttribute("id", "row"+i)
        for(y=0 ; y<=nbCol-1 ; y++){
            var cell = row.insertCell();
            n++;
            cell.setAttribute("id", "cell"+n);
            cell.setAttribute("class", "cells"+y)
            cell.setAttribute('onclick',"check("+y+")");
        }
    }
}

createTable();

/* create 2d array depending on the number of rows and columns */

var grid2=[];

for(i=0 ; i <= nbCol-1 ; i++){
    grid2[i] = new Array ();
    for(j=0 ; j<= nbRow-1 ; j++){
        grid2[i].push(0);
    }
};




/* create 2d array including the table's cells */ 
var grid=[];
var cell= document.getElementsByTagName("td");
var nbCells= nbCol*nbRow;
var n=0; 
for(i=0 ; i <= nbCol-1 ; i++){
    grid[i] = new Array ();
    for(j=0 ; j<= nbRow-1 ; j++){
        grid[i].push(cell[n]);
        n++;
    }
};

console.log(grid)
console.log(grid2)






var resetButton = document.getElementById("newGame");
resetButton.addEventListener("click",
    function resetGame(){
        location.reload();
});


var player1=1;
var player2=2;
var player=player1;
var yourTurnP1= document.getElementById("player1");
var yourTurnP2= document.getElementById("player2");
var modal = document.getElementById("modal");
var modalcontent = document.getElementById("modalContent");
var textModal= document.getElementById("textModal");
var turns = 0;

function victory(){
    modal.style.display="block";
    resetButton.style.display="block";
    textModal.innerHTML="Player "+player+" wins";
}

function wrongColumn(){
    modal.style.display="block";
    textModal.innerHTML="Choose another column"; 
    resetButton.style.display="none";
    modal.addEventListener("click",
        function(){
            modal.style.display="none";
        }
    )
    
}
function draw(){
    if(turns == nbCells){
    modal.style.display="block";
    resetButton.style.display="block";
    textModal.innerHTML="Draw!";}
}

function compareRows(){
    for(y=nbCol-1 ; y >=0 ; y--){
        var consecutive=0;
        for(x=nbRow-1; x >=0 ; x--){
            if(grid2[x][y] == player){
                consecutive++;
                    if(consecutive==4){
                        victory();
                        break;
                    }
            }
            else{
                consecutive=0;
            }
        }
    }
}
function compareCols(){
    for(y=0 ; y <= nbCol-1 ; y++){
        var consecutive=0;
        for(x=0; x <=nbRow-1 ; x++){
            if(grid2[y][x] == player){
                consecutive++;
                    if(consecutive==4){
                        victory();
                        break;
                    }
            }
            else{
                consecutive=0;
            }
        }
    }
}


function compareDiagonal1(){
    for(var y=0 ; y <=nbCol-4 ; y++){
        for(var x=0; x <=nbRow-4 ; x++){
            if(grid2[y][x]==player && grid2[y+1][x+1]==player && grid2[y+2][x+2]==player && grid2[y+3][x+3]==player){
                console.log("Player "+player+" wins");
                victory();
                break;
            }
        }
    }
}

function compareDiagonal2(){
    for(y=0 ; y <= nbCol-4 ; y++){
        for(x=nbRow-1; x >=nbRow-4 ; x--){
            if(grid2[y][x]==player && grid2[y+1][x-1]==player && grid2[y+2][x-2]==player && grid2[y+3][x-3]==player){
                console.log("Player "+player+" wins");
                victory();
                break;
            }
        }
    }
}

function check(col){
    if(player==player1){
        if(grid2[col][0]==0){
            for(i=nbRow-1 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.transition="500ms";
                    grid[i][col].style.backgroundColor="#e10c00ff";
                    grid2[col][i]=1;
                    yourTurnP2.style.display="block";
                    yourTurnP1.style.display="none";
                    table.style.boxShadow="0 0 20px  #ffb000ff, 0 0 20px #ffb000ff";
                    compareDiagonal1();
                    compareDiagonal2();
                    compareRows();
                    compareCols();
                    turns++;
                    draw();
                    player=player2;
                    break;
                }
            }
        }
        else{
            wrongColumn();
        }
    }else{
        if(grid2[col][0]==0){
            for(i=nbRow-1 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.transition="500ms";
                    grid[i][col].style.backgroundColor="#ffb000ff";
                    grid2[col][i]=2;
                    yourTurnP1.style.display="block";
                    yourTurnP2.style.display="none";
                    table.style.boxShadow="0 0 20px  #e10c00ff, 0 0 20px #e10c00ff"
                    compareDiagonal1();
                    compareDiagonal2();
                    compareRows();
                    compareCols();
                    turns++;
                    draw();
                    player=player1;      
                    break;
                }
            }
        }
        else{
            wrongColumn();
        }}
    }

