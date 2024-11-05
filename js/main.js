
const INTERES_ANUAL = 5; 


function calcularCredito() {
    let monto = obtenerMonto(); 
    let plazoMeses = obtenerPlazo(); 

    // VALIDAR LA INFO
    if (monto === null || plazoMeses === null) {
        return; 
    }

    const interesMensual = (INTERES_ANUAL / 100) / 12; 
    const cuota = calcularCuota(monto, interesMensual, plazoMeses);
    mostrarResultado(cuota, plazoMeses, monto);
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
        document.getElementById('resultado').innerText = "Por favor, selecciona un plazo válido (3, 6 o 12 meses).";
        return null; 
    }
}

//----------------------- CALCULO DE CUOTAS --------------------------
function calcularCuota(monto, interesMensual, plazoMeses) {
    return monto * (interesMensual / (1 - Math.pow(1 + interesMensual, -plazoMeses)));
}

//----------------------- MOSTRAR RESULTADOS --------------------------
function mostrarResultado(cuota, plazoMeses, monto) {
    const totalAPagar = cuota * plazoMeses; 
    const totalInteres = totalAPagar - monto; 

    document.getElementById('resultado').innerText = 
        `Cuota Mensual: $${cuota.toFixed(2)}\n` +
        `Total a Pagar: $${totalAPagar.toFixed(2)}\n` +
        `Total de Intereses: $${totalInteres.toFixed(2)}`;
}
