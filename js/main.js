/* const btn = document.getElementById('cambioCss') */
document.getElementById('cambioCss').addEventListener('click', cambiarCss) //La paguina queda tenta a que se realice un clik en
    function cambiarCss() {     
        /* const btn = document.getElementById('cambioCss')
        btn.addEventListener("click", cambiarCss) */
        var dado = Math.ceil(Math.random()*4); //se crea el dado, de numros enteros entre el 1 y 4
        console.log(dado) //se muestra el numero elegiso
        if (dado == 1) {
            document.getElementById('estilo').style.href = 'css/estilo.css' // se selecciona el css
        }
        else if (dado == 2) {
            document.getElementById('futuro').style.href = 'css/estilos-futuro.css' //se selecciona el css
        }
        else if (dado == 3) {
            console.log('Aun no hay Css ajajaj') // Falta un Css
        }
        else if (dado == 4) {
            console.log('No hay un estilo Css') // La idea es que si sale el numero 4, se muestra la paguina sin estilo
        }
    }