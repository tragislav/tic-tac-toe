let game = document.getElementById('game');
let block = document.getElementsByClassName('block');
let del = document.getElementById('reset-game');

let player = "X";
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
]

del.addEventListener('click', delClick);

for (var i = 0; i < 9; i++){
    game.innerHTML+="<div class = 'block' pos = " + i +"></div>";
}

for (let i = 0; i< block.length; i++) {
    block[i].addEventListener('click', bClick);
}

function bClick() {
    
    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(let i in block){
        if(block[i].innerHTML == player){
            data.push(parseInt(block[i].getAttribute('pos')));
        }
    }

    if(checkWinner(data)) {
        restart("Выграл: " + player);
    }else {
        let draw = true;
        for(let i in block) {
            if(block[i].innerHTML == '') draw = false;
        }
        if(draw) {
            restart("Ничья")
        }
    }

    player = player == "X" ? "O" : "X";   
}

function checkWinner(data){
    for (let i in arr) {
        let win = true;
        for (let j in arr[i]) {
            let id = arr[i][j];
            let index = data.indexOf(id);

            if (index == -1) {
                win = false;
            }
        }

        if (win) {
            return true;
        }
    }
    return false;
}

function restart(text) {
    setTimeout(() => alert(text), 0);
    setTimeout(() => location.reload(), 1000);
    return false;
}

function delClick() {
    for(let i = 0; i < block.length; i++) {
        block[i].innerHTML = '';
    }
}


