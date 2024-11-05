const INTERES_ANUAL = 30;  

function calcularCredito() {
    let monto = obtenerMonto(); 
    let plazoMeses = obtenerPlazo(); 

    // VALIDAR LA INFO
    if (monto === null || plazoMeses === null) {
        return; 
    }

    const interesTotal = monto * (INTERES_ANUAL / 100); 
    const totalAPagar = monto + interesTotal; 
    const cuota = totalAPagar / plazoMeses;

    mostrarResultado(cuota, plazoMeses, monto, interesTotal);
}

//----------------------- VALIACION MONTOS --------------------------
function obtenerMonto() {
    let montoInput = document.getElementById('monto').value; 

    montoInput = parseFloat(montoInput);
    if (isNaN(montoInput) || montoInput <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un monto válido (mayor que 0).";
        return null; 
    }

    return montoInput; 
}

//----------------------- MESES --------------------------
function obtenerPlazo() {
    let plazoInput = document.getElementById('plazo').value;

    if (plazoInput === "3") {
        return 3; 
    } else if (plazoInput === "6") {
        return 6; 
    } else if (plazoInput === "12") {
        return 12; 
    } else {
        // document.getElementById('resultado').innerText = "Por favor, selecciona un plazo válido (3, 6 o 12 meses).";
        return null; 
    }
}

//----------------------- MOSTRAR RESULTADOS --------------------------
function mostrarResultado(cuota, plazoMeses, monto, interesTotal) {
    const totalAPagar = cuota * plazoMeses; 
    const totalInteres = interesTotal; 

    console.log("Cuota: ", cuota);
    console.log("Total a Pagar: ", totalAPagar);
    console.log("Total de Intereses: ", totalInteres);

    document.getElementById('resultado').innerText = 
        `Cuota Mensual: $${cuota.toFixed(2)}\n` +
        `Total a Pagar: $${totalAPagar.toFixed(2)}\n` +
        `Total de Intereses: $${totalInteres.toFixed(2)}`;
}
