function HideRows(el) {


var rows = document.getElementById('mytable').getElementsByTagName('tr');
for(var x = 0; x < rows.length; x++) {
    rows[x].className = (x % 2 == 0) ? 'even' : 'odd';

    if(x % 2)
          rows[x].style.display = 'none';
    else
          rows[x].style.display = '';
}
}

function ShowRows(el) {


var rows = document.getElementById('mytable').getElementsByTagName('tr');
for(var x = 0; x < rows.length; x++) {
    rows[x].className = (x % 2 == 0) ? 'even' : 'odd';

    if(x % 2)
          rows[x].style.display = '';
    else
          rows[x].style.display = '';
}

}

