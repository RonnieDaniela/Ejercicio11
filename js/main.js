let hojaEstiloOrdenado = 0;
function cambiarCssOrdenado() {
    if (hojaEstiloOrdenado == 0) {
        document.getElementById('hojaCss').href = 'css/estilo.css';
        hojaEstiloOrdenado = 1;
        console.log('Valor actual variable hojaEstilo: 1')
    }
    else if (hojaEstiloOrdenado == 1) {
        document.getElementById('hojaCss').href = 'css/estilos-futuro.css';
        hojaEstiloOrdenado = 2;
        console.log('Valor actual variable hojaEstilo: 2')
    }
    else if (hojaEstiloOrdenado == 2) {
        document.getElementById('hojaCss').href = 'css/estilos-peliculas.css';
        hojaEstiloOrdenado = 0;
        console.log('Valor actual variable hojaEstilo: 3')
    }
}
function cambiarCssSelect()
{
    if (document.getElementById('css').selectedIndex == 0) {
        console.log('Valor actual variable hojaEstilo: 1')
        document.getElementById('hojaCss').href = 'css/estilo-sinestilo.css';
    }
    else if (document.getElementById('css').selectedIndex == 1) {
        console.log('Valor actual variable hojaEstilo: 2')
        document.getElementById('hojaCss').href = 'css/estilo.css';
    }
    else if (document.getElementById('css').selectedIndex == 2) {
        console.log('Valor actual variable hojaEstilo: 3')
        document.getElementById('hojaCss').href = 'css/estilos-futuro.css';
    }
    else if (document.getElementById('css').selectedIndex == 3) {
        console.log('Valor actual variable hojaEstilo: 4')
        document.getElementById('hojaCss').href = 'css/estilos-peliculas.css';
    }
}

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