/* const btn = document.getElementById('cambioCss') */
document.getElementById('cambioCss').addEventListener('click', cambiarCss)
    function cambiarCss() {     
        /* const btn = document.getElementById('cambioCss')
        btn.addEventListener("click", cambiarCss) */
        var dado = Math.ceil(Math.random()*4);
        console.log(dado)
        if (dado == 1) {
            document.getElementById('estilo').style.href = 'css/estilo.css'
        }
        else if (dado == 2) {
            document.getElementById('futuro').style.href = 'css/estilos-futuro.css'
        }
        else if (dado == 3) {
            console.log('Aun no hay Css ajajaj')
        }
        else if (dado == 4) {
            console.log('No hay un estilo Css')
        }
    }