let center = document.querySelector('#center');
let del = document.querySelector('#reset-game');

let player = 'X';
let table = '';
let rows = 10;
let size = +prompt('Введите размер поля');

function createTab() {
    for (let i = 1; i <= size; i++) {
        table += '<tr >';
        for (let x = 1; x <= size; x++) {
            table += '<td class="z"' + x + '></td>';
        }
        table += '</tr>';
    }
    center.innerHTML = '<table id="myTable">' + table + '<table>';
}

createTab();

let td = document.querySelectorAll('td');
for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', click1);
}

del.addEventListener('click', delClick);

function click1() {
    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert('Ячейка занята');
        return;
    }

    if (checkWinnerX()) {
        restart('Выграл: ' + player);
    } else if (checkWinnerO()) {
        restart('Выграл: ' + player);
    } else {
        let draw = true;
        for (let i in td) {
            if (td[i].innerHTML == '') draw = false;
        }
        if (draw) {
            restart('Ничья');
        }
    }

    player = player == 'X' ? 'O' : 'X';
}

function checkWinnerX() {
    let table = document.querySelector('#myTable');
    let flag = true;
    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'X') {
                    flag = false;
                }
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (table.rows[j].cells[i].innerHTML != 'X') {
                    flag = false;
                }
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = 0; i < size; ) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'X') {
                    flag = false;
                }
                i++;
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = size - 1; i > 0; ) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'X') {
                    flag = false;
                }
                i--;
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }
    }
}

function checkWinnerO() {
    let table = document.getElementById('myTable');
    let flag = true;
    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'O') {
                    flag = false;
                }
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (table.rows[j].cells[i].innerHTML != 'O') {
                    flag = false;
                }
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = 0; i < size; ) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'O') {
                    flag = false;
                }
                i++;
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }

        for (let i = size - 1; i > 0; ) {
            for (let j = 0; j < size; j++) {
                if (table.rows[i].cells[j].innerHTML != 'O') {
                    flag = false;
                }
                i--;
            }
            if (flag === true) {
                return true;
            }
            flag = true;
        }
    }
}

function restart(text) {
    setTimeout(() => alert(text), 0);
    setTimeout(() => location.reload(), 1000);
    return false;
}

function delClick() {
    for (let i = 0; i < td.length; i++) {
        td[i].innerHTML = '';
    }
}
