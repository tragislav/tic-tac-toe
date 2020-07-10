for (var i = 0; i < 9; i++){
    document.getElementById('game').innerHTML+='<div class = "block"></div>';
}

var hod = 0;

document.getElementById('game').addEventListener('click', function(event){
    console.log('click');
    if (event.target.className === 'block'){
        if (hod%2 === 0){
            event.target.innerHTML = 'X';
        }
        else {
            event.target.innerHTML = 'O';
        }
        hod++;
        checkWinner();
    }
});

function checkWinner(){
    var allb = document.getElementsByClassName('block');
    var arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ]

    for (var z = 0; z < arr.length; z++){
        if (allb[arr[z][0]].innerHTML == 'X' && allb[arr[z][1]].innerHTML == 'X' && allb[arr[z][2]].innerHTML == 'X'){
            alert('Победили крестики');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'O' && allb[arr[z][1]].innerHTML == 'O' && allb[arr[z][2]].innerHTML == 'O'){
            alert('Победили нолики');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'X' && allb[arr[z][1]].innerHTML == 'O' && allb[arr[z][2]].innerHTML == 'X'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'X' && allb[arr[z][1]].innerHTML == 'X' && allb[arr[z][2]].innerHTML == 'O'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'X' && allb[arr[z][1]].innerHTML == 'O' && allb[arr[z][2]].innerHTML == 'O'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'O' && allb[arr[z][1]].innerHTML == 'O' && allb[arr[z][2]].innerHTML == 'X'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'O' && allb[arr[z][1]].innerHTML == 'X' && allb[arr[z][2]].innerHTML == 'O'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } else if (allb[arr[z][0]].innerHTML == 'O' && allb[arr[z][1]].innerHTML == 'X' && allb[arr[z][2]].innerHTML == 'X'){
            alert('Ничья');
            setTimeout(() => location.reload(), 1000);
        } 
    }
}




