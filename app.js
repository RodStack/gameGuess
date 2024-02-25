let numeroSecreto = 0
let intentos = 0
let numeroOcupados = []
let numeroMaximo = 10


function assingTextElement(element, text) {
    let elementHtml = document.querySelector(element)
    elementHtml.innerHTML = text
    return
}

function verificarNumero() {
    let numeroIngresado = parseInt(document.getElementById("valor").value)
    if (numeroIngresado === numeroSecreto) {
        assingTextElement("p", `Lo lograste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroIngresado > numeroSecreto) {
            assingTextElement("p", "Te pasaste")
        } else {
            assingTextElement("p", "Te falto")
        }
        intentos++
        limpiarCampos()
    }
}

function limpiarCampos() {
    document.querySelector("#valor").value = ""
}

function generaNumero() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
   if (numeroOcupados.length == numeroMaximo) {
    assingTextElement("p", "Ya no quedan números")
   } else {

    if(numeroOcupados.includes(numeroGenerado)){
        return generaNumero()
    } else {
        numeroOcupados.push(numeroGenerado)
        return numeroGenerado
    }

   }
}


function mensajeInicial() {
    assingTextElement("h1", "Número Secreto");
    assingTextElement("p", `Indica número de 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumero();
    intentos = 1;

    // Verificar si ya no quedan números disponibles después de generar el número secreto
    
}


function reiniciarJuego() {
    //Borrar campos
    limpiarCampos()
    mensajeInicial()
    //Desablitar el boton reinicio
   document.getElementById("reiniciar").setAttribute("disabled","")
}


mensajeInicial()
