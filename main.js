function valorEntrada() {

    var capCantidad = document.getElementById('cantidad').value;
    var capCategoria = document.getElementById('categoria').value;
    
    const TICKET = 200;
    var resumenTotal = 0;

    if (capCategoria == 0) {
        resumenTotal = capCantidad * TICKET;
    }

    if (capCategoria == 1) {
        resumenTotal = capCantidad * TICKET * 0.2;
    }

    if (capCategoria == 2){
        resumenTotal = capCantidad * TICKET * 0.5;
    }

    if (capCategoria == 3){
        resumenTotal = capCantidad * TICKET * 0.85;
    }

document.getElementById('total').innerText = resumenTotal;

}

const BTNCLICK = document.getElementById('btnResumen');

BTNCLICK.addEventListener('click', valorEntrada);

