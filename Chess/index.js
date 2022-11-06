const bBishop1 = "chessGraphics/black_bishop.png";
const bBishop2 = "chessGraphics/black_bishop.png";
const bKing = "chessGraphics/black_king.png";
const bKnight1 = "chessGraphics/black_knight.png";
const bKnight2 = "chessGraphics/black_knight.png";
const bPawn1 = "chessGraphics/black_pawn.png";
const bPawn2 = "chessGraphics/black_pawn.png";
const bQueen = "chessGraphics/black_queen.png";
const bRook1 = "chessGraphics/black_rook.png";
const bRook2 = "chessGraphics/black_rook.png";
const wBishop1 = "chessGraphics/white_bishop.png";
const wBishop2 = "chessGraphics/white_bishop.png";
const wKing = "chessGraphics/white_king.png";
const wKnight1 = "chessGraphics/white_knight.png";
const wKnight2 = "chessGraphics/white_knight.png";
const wPawn1 = "chessGraphics/white_pawn.png";
const wPawn2 = "chessGraphics/white_pawn.png";
const wQueen = "chessGraphics/white_queen.png";
const wRook1 = "chessGraphics/white_rook.png";
const wRook2 = "chessGraphics/white_rook.png";
const empty = "chessGraphics/empty.png";

const positions = {
a8: 1,
b8: 2,
c8: 3,
d8: 4,
e8: 5,
f8: 6,
g8: 7,
h8: 8,
a7: 9,
b7: 10,
c7: 11,
d7: 12,
e7: 13,
f7: 14,
g7: 15,
h7: 16,
a6: 17,
b6: 18,
c6: 19,
d6: 20,
e6: 21,
f6: 22,
g6: 23,
h6: 24,
a5: 25,
b5: 26,
c5: 27,
d5: 28,
e5: 29,
f5: 30,
g5: 31,
h5: 32,
a4: 33,
b4: 34,
c4: 35,
d4: 36,
e4: 37,
f4: 38,
g4: 39,
h4: 40,
a3: 41,
b3: 42,
c3: 43,
d3: 44,
e3: 45,
f3: 46,
g3: 47,
h3: 48,
a2: 49,
b2: 50,
c2: 51,
d2: 52,
e2: 53,
f2: 54,
g2: 55,
h2: 56,
a1: 57,
b1: 58,
c1: 59,
d1: 60,
e1: 61,
f1: 62,
g1: 63,
h1: 64
};

const positionsReversed = {
    1: 'a8',
    2: 'b8',
    3: 'c8',
    4: 'd8',
    5: 'e8',
    6: 'f8',
    7: 'g8',
    8: 'h8',
    9: 'a7',
    10: 'b7',
    11: 'c7',
    12: 'd7',
    13: 'e7',
    14: 'f7',
    15: 'g7',
    16: 'h7',
    17: 'a6',
    18: 'b6',
    19: 'c6',
    20: 'd6',
    21: 'e6',
    22: 'f6',
    23: 'g6',
    24: 'h6',
    25: 'a5',
    26: 'b5',
    27: 'c5',
    28: 'd5',
    29: 'e5',
    30: 'f5',
    31: 'g5',
    32: 'h5',
    33: 'a4',
    34: 'b4',
    35: 'c4',
    36: 'd4',
    37: 'e4',
    38: 'f4',
    39: 'g4',
    40: 'h4',
    41: 'a3',
    42: 'b3',
    43: 'c3',
    44: 'd3',
    45: 'e3',
    46: 'f3',
    47: 'g3',
    48: 'h3',
    49: 'a2',
    50: 'b2',
    51: 'c2',
    52: 'd2',
    53: 'e2',
    54: 'f2',
    55: 'g2',
    56: 'h2',
    57: 'a1',
    58: 'b1',
    59: 'c1',
    60: 'd1',
    61: 'e1',
    62: 'f1',
    63: 'g1',
    64: 'h1'
    };

let clicked = null;
let figure = null;
let test;
let ready = true;
let white = true;
var sound = document.getElementById("move");
let wKingMoved = false;
let bKingMoved = false;

function onDown(id){
    

    if (document.getElementById(id).src.includes(empty) == false){
        test = true
    }


    function play(){
        document.getElementById(id).src = figure;
                    document.getElementById(clicked).src = empty;
                    figure = null;
                    console.log('mozna');
                    ready = false;
                    sound.play();
    }

    
    
    if (clicked != id && figure != null){
        if (document.getElementById(clicked).src.includes("white") && document.getElementById(id).src.includes("white") == false && white == true){

            if (document.getElementById(clicked).src.includes("rook")){
                if(positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = false;
                }
            }
            else if (document.getElementById(clicked).src.includes("bishop")){
                if(positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9){
                    play();
                    white = false;
                }
            }

            else if (document.getElementById(clicked).src.includes("knight")){
                if ([positions[clicked]-17,positions[clicked]-10,positions[clicked]-15,positions[clicked]-6,positions[clicked]+17,positions[clicked]+10,positions[clicked]+15,positions[clicked]+6].includes(positions[id])){
                    play();
                    white = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("queen")){
                if((positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9) || positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = false; 
                }
            }

            else if(document.getElementById(clicked).src.includes("king")){
                if([positions[clicked]-1,positions[clicked]-7,positions[clicked]-8,positions[clicked]-9,positions[clicked]+1,positions[clicked]+7,positions[clicked]+8,positions[clicked]+9].includes(positions[id])){
                    play();
                    white = false; 
                    wKingMoved = true;
                }
                else if (id == 'g1' && document.getElementById('f1').src.includes("empty") && document.getElementById('g1').src.includes("empty") && document.getElementById('h1').src.includes("rook") && wKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('h1').src = empty
                    document.getElementById('f1').src = wRook1
                    document.getElementById('g1').src = wKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
                else if (id == 'c1' && document.getElementById('b1').src.includes("empty") && document.getElementById('c1').src.includes("empty") && document.getElementById('d1').src.includes("empty") && document.getElementById('a1').src.includes("rook") && wKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('a1').src = empty
                    document.getElementById('d1').src = wRook1
                    document.getElementById('c1').src = wKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("pawn")){
                if(((positions[id] + 8 == positions[clicked] || (positions[clicked]>48 && positions[clicked]<57 && positions[id] + 16 == positions[clicked] && document.getElementById(positionsReversed[positions[clicked]-8]).src.includes("empty"))) && document.getElementById(id).src.includes(empty)) || ((positions[id] + 7 == positions[clicked] || positions[id] + 9 == positions[clicked]) && document.getElementById(id).src.includes("black"))){
                    play();
                    white = false; 
                }
            }
        }

        

        else if (document.getElementById(clicked).src.includes("black") && document.getElementById(id).src.includes("black") == false && white == false){

            if (document.getElementById(clicked).src.includes("rook")){
                if(positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = true;
                }
            }

            else if (document.getElementById(clicked).src.includes("bishop")){
                if(positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9){
                    play();
                    white = true;
                }
            }

            else if (document.getElementById(clicked).src.includes("knight")){
                if ([positions[clicked]-17,positions[clicked]-10,positions[clicked]-15,positions[clicked]-6,positions[clicked]+17,positions[clicked]+10,positions[clicked]+15,positions[clicked]+6].includes(positions[id])){
                    play();
                    white = true;
                }
            }

            else if(document.getElementById(clicked).src.includes("queen")){
                if((positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9) || positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = true; 
                }
            }

            else if(document.getElementById(clicked).src.includes("king")){
                if([positions[clicked]-1,positions[clicked]-7,positions[clicked]-8,positions[clicked]-9,positions[clicked]+1,positions[clicked]+7,positions[clicked]+8,positions[clicked]+9].includes(positions[id])){
                    play();
                    white = true; 
                    bKingMoved = true;
                }
                else if (id == 'g8' && document.getElementById('f8').src.includes("empty") && document.getElementById('g8').src.includes("empty") && document.getElementById('h8').src.includes("rook") && bKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('h8').src = empty
                    document.getElementById('f8').src = bRook1
                    document.getElementById('g8').src = bKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
                else if (id == 'c8' && document.getElementById('b8').src.includes("empty") && document.getElementById('c8').src.includes("empty") && document.getElementById('d8').src.includes("empty") && document.getElementById('a8').src.includes("rook") && bKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('a8').src = empty
                    document.getElementById('d8').src = bRook1
                    document.getElementById('c8').src = bKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("pawn")){
                if(((positions[id] - 8 == positions[clicked] || (positions[clicked]>8 && positions[clicked]<17 && positions[id] - 16 == positions[clicked] && document.getElementById(positionsReversed[positions[clicked]+8]).src.includes("empty"))) && document.getElementById(id).src.includes(empty)) || ((positions[id] - 7 == positions[clicked] || positions[id] - 9 == positions[clicked]) && document.getElementById(id).src.includes("white"))){
                    play();
                    white = true; 
                }
            }
        }

        



        /* document.getElementById(id).src = figure;
        document.getElementById(clicked).src = empty;
        figure = null; */
    } 
    else{
        figure = null;
    }





    if (document.getElementById(id).src.includes(empty) == false && ready == true){
        figure = document.getElementById(id).src;
    }
    else if (clicked == id && figure != null){
        figure = null;
    }
    test = false
    /* console.log(positions[id]); */
    clicked = id
    console.log(wKingMoved)
    ready = true
}

function onUp(id){
    
if(id != clicked)
{
    if (document.getElementById(id).src.includes(empty) == false){
        test = true
    }


    function play(){
        document.getElementById(id).src = figure;
                    document.getElementById(clicked).src = empty;
                    figure = null;
                    console.log('mozna');
                    ready = false;
                    sound.play();
    }

    
    
    if (clicked != id && figure != null){
        if (document.getElementById(clicked).src.includes("white") && document.getElementById(id).src.includes("white") == false && white == true){

            if (document.getElementById(clicked).src.includes("rook")){
                if(positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = false;
                }
            }
            else if (document.getElementById(clicked).src.includes("bishop")){
                if(positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9){
                    play();
                    white = false;
                }
            }

            else if (document.getElementById(clicked).src.includes("knight")){
                if ([positions[clicked]-17,positions[clicked]-10,positions[clicked]-15,positions[clicked]-6,positions[clicked]+17,positions[clicked]+10,positions[clicked]+15,positions[clicked]+6].includes(positions[id])){
                    play();
                    white = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("queen")){
                if((positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9) || positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = false; 
                }
            }

            else if(document.getElementById(clicked).src.includes("king")){
                if([positions[clicked]-1,positions[clicked]-7,positions[clicked]-8,positions[clicked]-9,positions[clicked]+1,positions[clicked]+7,positions[clicked]+8,positions[clicked]+9].includes(positions[id])){
                    play();
                    white = false; 
                    wKingMoved = true;
                }
                else if (id == 'g1' && document.getElementById('f1').src.includes("empty") && document.getElementById('g1').src.includes("empty") && document.getElementById('h1').src.includes("rook") && wKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('h1').src = empty
                    document.getElementById('f1').src = wRook1
                    document.getElementById('g1').src = wKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
                else if (id == 'c1' && document.getElementById('b1').src.includes("empty") && document.getElementById('c1').src.includes("empty") && document.getElementById('d1').src.includes("empty") && document.getElementById('a1').src.includes("rook") && wKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('a1').src = empty
                    document.getElementById('d1').src = wRook1
                    document.getElementById('c1').src = wKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("pawn")){
                if(((positions[id] + 8 == positions[clicked] || (positions[clicked]>48 && positions[clicked]<57 && positions[id] + 16 == positions[clicked] && document.getElementById(positionsReversed[positions[clicked]-8]).src.includes("empty"))) && document.getElementById(id).src.includes(empty)) || ((positions[id] + 7 == positions[clicked] || positions[id] + 9 == positions[clicked]) && document.getElementById(id).src.includes("black"))){
                    play();
                    white = false; 
                }
            }
        }

        

        else if (document.getElementById(clicked).src.includes("black") && document.getElementById(id).src.includes("black") == false && white == false){

            if (document.getElementById(clicked).src.includes("rook")){
                if(positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = true;
                }
            }

            else if (document.getElementById(clicked).src.includes("bishop")){
                if(positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9){
                    play();
                    white = true;
                }
            }

            else if (document.getElementById(clicked).src.includes("knight")){
                if ([positions[clicked]-17,positions[clicked]-10,positions[clicked]-15,positions[clicked]-6,positions[clicked]+17,positions[clicked]+10,positions[clicked]+15,positions[clicked]+6].includes(positions[id])){
                    play();
                    white = true;
                }
            }

            else if(document.getElementById(clicked).src.includes("queen")){
                if((positions[id]%7 == positions[clicked]%7 || positions[id]%9 == positions[clicked]%9) || positions[id]%8 == positions[clicked]%8 || Math.floor((positions[clicked]-1)/8) == Math.floor((positions[id]-1)/8)){
                    play();
                    white = true; 
                }
            }

            else if(document.getElementById(clicked).src.includes("king")){
                if([positions[clicked]-1,positions[clicked]-7,positions[clicked]-8,positions[clicked]-9,positions[clicked]+1,positions[clicked]+7,positions[clicked]+8,positions[clicked]+9].includes(positions[id])){
                    play();
                    white = true; 
                    bKingMoved = true;
                }
                else if (id == 'g8' && document.getElementById('f8').src.includes("empty") && document.getElementById('g8').src.includes("empty") && document.getElementById('h8').src.includes("rook") && bKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('h8').src = empty
                    document.getElementById('f8').src = bRook1
                    document.getElementById('g8').src = bKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
                else if (id == 'c8' && document.getElementById('b8').src.includes("empty") && document.getElementById('c8').src.includes("empty") && document.getElementById('d8').src.includes("empty") && document.getElementById('a8').src.includes("rook") && bKingMoved == false){
                    document.getElementById(clicked).src = empty
                    document.getElementById('a8').src = empty
                    document.getElementById('d8').src = bRook1
                    document.getElementById('c8').src = bKing
                    figure = null;
                    console.log('mozna');
                    ready = false;
                }
            }

            else if(document.getElementById(clicked).src.includes("pawn")){
                if(((positions[id] - 8 == positions[clicked] || (positions[clicked]>8 && positions[clicked]<17 && positions[id] - 16 == positions[clicked] && document.getElementById(positionsReversed[positions[clicked]+8]).src.includes("empty"))) && document.getElementById(id).src.includes(empty)) || ((positions[id] - 7 == positions[clicked] || positions[id] - 9 == positions[clicked]) && document.getElementById(id).src.includes("white"))){
                    play();
                    white = true; 
                }
            }
        }

        



        /* document.getElementById(id).src = figure;
        document.getElementById(clicked).src = empty;
        figure = null; */
    } 
    else{
        figure = null;
    }





    if (document.getElementById(id).src.includes(empty) == false && ready == true){
        figure = document.getElementById(id).src;
    }
    else if (clicked == id && figure != null){
        figure = null;
    }
    test = false
    /* console.log(positions[id]); */
    clicked = id
    console.log(wKingMoved)
    ready = true
}
}