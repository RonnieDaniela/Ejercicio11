let hojaEstilo;
function cambiarCss() {
    var dado = Math.ceil(Math.random()*4);
    console.log(dado)
    if (dado == 1) {
        document.getElementById('hojaCss').href = 'css/estilo.css';
        hojaEstilo = dado;
        console.log('CSS Base')
    }
    else if (dado == 2) {
        document.getElementById('hojaCss').href = 'css/estilos-futuro.css';
        hojaEstilo = dado;
        console.log('CSS Futuro')
    }
    else if (dado == 3) {
        document.getElementById('hojaCss').href = 'css/estilos-peliculas.css';
        hojaEstilo = dado;
        console.log('CSS de Pelis')
    }
    else if (dado == 4) {
        document.getElementById('hojaCss').href = 'css/estilo-sinestilo.css';
        hojaEstilo = dado;
        console.log('Sin CSS')
    }
}