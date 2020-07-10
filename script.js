for(var i = 0; i < 9; i++){
    document.getElementById('game').innerHTML+='<div class = "block"></div>';
}

var hod = 0;

document.getElementById('game').addEventListener('click', function(event){
    console.log('click');
    if (event.target.className == 'block'){
        if (hod%2 == 0){
            event.target.innerHTML = 'X';
            //alert('Ход второго игрока');
        }
        else {
            event.target.innerHTML = 'O';
            //alert('Ход первого игрока');
        }
        hod++;
        checkWinner();
    }
});

function checkWinner(){
    var allb = document.getElementsByClassName('block');
    
    //КРЕСТИКИ
    if (allb[0].innerHTML == 'X' && allb[1].innerHTML == 'X' && allb[2].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[3].innerHTML == 'X' && allb[4].innerHTML == 'X' && allb[5].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[6].innerHTML == 'X' && allb[7].innerHTML == 'X' && allb[8].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[0].innerHTML == 'X' && allb[4].innerHTML == 'X' && allb[8].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[2].innerHTML == 'X' && allb[4].innerHTML == 'X' && allb[6].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[0].innerHTML == 'X' && allb[3].innerHTML == 'X' && allb[6].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[1].innerHTML == 'X' && allb[4].innerHTML == 'X' && allb[7].innerHTML == 'X'){
        alert('Победили крестики')
    }
    if (allb[2].innerHTML == 'X' && allb[5].innerHTML == 'X' && allb[8].innerHTML == 'X'){
        alert('Победили крестики')
    }

    //НОЛИКИ
    if (allb[0].innerHTML == 'O' && allb[1].innerHTML == 'O' && allb[2].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[3].innerHTML == 'O' && allb[4].innerHTML == 'O' && allb[5].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[6].innerHTML == 'O' && allb[7].innerHTML == 'O' && allb[8].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[0].innerHTML == 'O' && allb[4].innerHTML == 'O' && allb[8].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[2].innerHTML == 'O' && allb[4].innerHTML == 'O' && allb[6].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[0].innerHTML == 'O' && allb[3].innerHTML == 'O' && allb[6].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[1].innerHTML == 'O' && allb[4].innerHTML == 'O' && allb[7].innerHTML == 'O'){
        alert('Победили нолики')
    }
    if (allb[2].innerHTML == 'O' && allb[5].innerHTML == 'O' && allb[8].innerHTML == 'O'){
        alert('Победили нолики')
    }      
}


