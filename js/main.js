js>
let ;hojaEstilo=0;

function cambiarCss() {
    if (hojaEstilo == 0) {
        document.getElementById('css').href = 'cssprueba/retro.css';
        hojaEstilo = 1;
    }
    else if (hojaEstilo == 1) {
        document.getElementById('css').href = 'cssprueba/futuro.css';
        hojaEstilo = 2;
    }
    else if (hojaEstilo == 2) {
        document.getElementById('css').href = 'css/estilo.css';
        hojaEstilo = 0;
    }
}