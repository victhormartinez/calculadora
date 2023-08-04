"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", function () {
        var primerNumero = parseFloat(document.getElementById("primerNumero").value);
        var segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
        // SE VERIFICA QUE HAYA SELECCIONADO UNA OPERACION
        var btnOperacion = document.querySelector('.btn-operacion.active');
        if (!btnOperacion) {
            alert("Seleccione una operación");
            return;
        }
        var operacion = btnOperacion.getAttribute("operacion");
        var resultado;
        switch (operacion) {
            case "sumar":
                resultado = suma(primerNumero, segundoNumero);
                break;
            case "restar":
                resultado = resta(primerNumero, segundoNumero);
                break;
            case "multiplicar":
                resultado = multiplicacion(primerNumero, segundoNumero);
                break;
            case "dividir":
                resultado = division(primerNumero, segundoNumero);
                break;
            default:
                resultado = NaN;
        }
        document.getElementById("resultado").textContent = "Resultado: ".concat(resultado);
    });
    var operaciones = document.querySelectorAll('.btn-operacion');
    operaciones.forEach(function (operacion) {
        operacion.addEventListener("click", function () {
            operaciones.forEach(function (op) { return op.classList.remove("active"); });
            operacion.classList.add("active");
        });
    });
});
function suma(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
function resta(primerNumero, segundoNumero) {
    return primerNumero - segundoNumero;
}
function multiplicacion(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
}
function division(primerNumero, segundoNumero) {
    if (segundoNumero === 0) {
        alert("Bastante que vas a poder dividir entre cero xD");
        return NaN;
    }
    return primerNumero / segundoNumero;
}
