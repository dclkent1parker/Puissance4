

/* Ask how many rows and cols the player wants */ 
var nbRow= parseInt(prompt("Choose the number of rows (4 at least)"));
if (nbRow<4){
    nbRow= parseInt(prompt("Please, choose a number after 4"))
}
var nbCol= parseInt(prompt("Choose the number of columns (4 at least)"));
if (nbCol<4){
    nbRow= parseInt(prompt("Please, choose a number after 4"))
}

function createRows(){
    

}

((var row=document.createElement("table"))*nbRow);


















/* Récupération de notre tableau HTML dans un array 2D */ 
// var grid=[
//     [cell[0], cell[1], cell[2], cell[3], cell[4], cell[5], cell[6]],
//     [cell[7], cell[8], cell[9], cell[10], cell[11], cell[12], cell[13]],
//     [cell[14], cell[15], cell[16], cell[17], cell[18], cell[19], cell[20]],
//     [cell[21], cell[22], cell[23], cell[24], cell[25], cell[26], cell[27]],
//     [cell[28], cell[29], cell[30], cell[31], cell[32], cell[33], cell[34]],
//     [cell[35], cell[36], cell[37], cell[38], cell[39], cell[40], cell[41]],
//     [cell[42], cell[43], cell[44], cell[45], cell[46], cell[47], cell[48]]
// ];



var grid2=[
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

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
    if(turns == 49){
    modal.style.display="block";
    resetButton.style.display="block";
    textModal.innerHTML="Draw!";}
}

function compareRows(){
    for(y=6 ; y >=0 ; y--){
        var consecutive=0;
        for(x=6; x >=0 ; x--){
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
    for(y=0 ; y <= 6 ; y++){
        var consecutive=0;
        for(x=0; x <=6 ; x++){
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
    for(var y=0 ; y <=3 ; y++){
        for(var x=0; x <=3 ; x++){
            if(grid2[y][x]==player && grid2[y+1][x+1]==player && grid2[y+2][x+2]==player && grid2[y+3][x+3]==player){
                console.log("Player "+player+" wins");
                victory();
                break;
            }
        }
    }
}

function compareDiagonal2(){
    for(y=0 ; y <= 3 ; y++){
        for(x=6; x >=3 ; x--){
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
            for(i=6 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.transition="500ms";
                    grid[i][col].style.backgroundColor="#e10c00ff";
                    grid2[col][i]=1;
                    yourTurnP2.style.display="block";
                    yourTurnP1.style.display="none";
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
            for(i=6 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.transition="500ms";
                    grid[i][col].style.backgroundColor="#ffb000ff";
                    grid2[col][i]=2;
                    yourTurnP1.style.display="block";
                    yourTurnP2.style.display="none";
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

