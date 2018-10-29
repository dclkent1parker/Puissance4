
var cell = document.getElementsByTagName("td");

/* Récupération de notre tableau HTML dans un array 2D */ 
var grid=[
    [cell[0], cell[1], cell[2], cell[3], cell[4], cell[5], cell[6]],
    [cell[7], cell[8], cell[9], cell[10], cell[11], cell[12], cell[13]],
    [cell[14], cell[15], cell[16], cell[17], cell[18], cell[19], cell[20]],
    [cell[21], cell[22], cell[23], cell[24], cell[25], cell[26], cell[27]],
    [cell[28], cell[29], cell[30], cell[31], cell[32], cell[33], cell[34]],
    [cell[35], cell[36], cell[37], cell[38], cell[39], cell[40], cell[41]],
    [cell[42], cell[43], cell[44], cell[45], cell[46], cell[47], cell[48]]
];



var grid2=[
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];


// /* Fonction pour obtenir une colonne */ 
// function getCol(grid, col){
//     var column = [];
//     for(var i=0; i<grid.length; i++){
//        column.push(grid[i][col]);
//     }
//     return column;
//  }

// /* variables contenant chacunes une colonne définie */ 
//  var col0 = getCol(grid, 0);
//  var col1 = getCol(grid, 1);
//  var col2 = getCol(grid, 2);
//  var col3 = getCol(grid, 3);
//  var col4 = getCol(grid, 4);
//  var col5 = getCol(grid, 5);
//  var col6 = getCol(grid, 6);


// /* Add Event Listener sur une colonne */ 

// function columnP1(col,nbcell){
// for(var i = 0; i < col.length ; i++){
//     col[i].addEventListener('click', 
//     function(){
//         cell[nbcell].style.backgroundColor="red";
//     })
// }}
// function columnP2(col,nbcell){
//     for(var i = 0; i < col.length ; i++){
//         col[i].addEventListener('click', 
//         function(){
//             cell[nbcell].style.backgroundColor="yellow";
//         })
//     }}

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

function compare(){
    for(var y=0 ; y <= 6 ; y++){
        var consecutive=0; 
        for(var x=0; x <=6 ; x++){
            if(grid2[y][x] == player){
                consecutive++;
                if(consecutive == 4){
                    console.log("Player "+player+" wins");
                    break;
                }}
            else if(grid2[x][y] == player){
                consecutive++;
                if(consecutive == 4){
                    console.log("Player "+player+" wins");
                    break;
                }}
            else{
                consecutive=0;
            }     
        }
    }
}


function check(col){
    if(player==player1){
        yourTurnP2.style.display="block";
        yourTurnP1.style.display="none";
        if(grid2[col][0]==0){
            for(i=6 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.backgroundColor="#e10c00ff";
                    grid2[col][i]=1;
                    compare();
                    player=player2;
                    break;
                }
            }
        }
        else{
            console.log("Choisi une autre colonne");
        }
    }else{
        yourTurnP1.style.display="block";
        yourTurnP2.style.display="none";
        if(grid2[col][0]==0){
            for(i=6 ; i>=0 ; i--){
                if(grid2[col][i]==0){
                    grid[i][col].style.backgroundColor="#ffb000ff";
                    grid2[col][i]=2;
                    compare();
                    player=player1;      
                    break;
                }
            }
        }
        else{
            console.log("Choisi une autre colonne");
        }}
    }

