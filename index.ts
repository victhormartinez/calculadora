document.addEventListener("DOMContentLoaded", () => {
    const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
    btnCalcular.addEventListener("click", () => {
        const primerNumero = parseFloat((document.getElementById("primerNumero") as HTMLInputElement).value);
        const segundoNumero = parseFloat((document.getElementById("segundoNumero") as HTMLInputElement).value);

        // SE VERIFICA QUE HAYA SELECCIONADO UNA OPERACION
        const btnOperacion = document.querySelector('.btn-operacion.active') as HTMLButtonElement;
        if (!btnOperacion) {
            alert("Seleccione una operación");
            return;
        }

        const operacion = btnOperacion.getAttribute("operacion") as string;
        let resultado: number;
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

        document.getElementById("resultado")!.textContent = `${resultado}`;
    });

    // SE RESETEAN TODOS LOS BOTONES .btn-operacion QUE ESTED active
    const operaciones = document.querySelectorAll('.btn-operacion') as NodeListOf<HTMLButtonElement>;
    operaciones.forEach(operacion => {
        operacion.addEventListener("click", () => {
            operaciones.forEach(op => op.classList.remove("active"));
            operacion.classList.add("active");
        });
    });
});

function suma(primerNumero: number, segundoNumero: number): number {
    return primerNumero + segundoNumero;
}

function resta(primerNumero: number, segundoNumero: number): number {
    return primerNumero - segundoNumero;
}

function multiplicacion(primerNumero: number, segundoNumero: number): number {
    return primerNumero * segundoNumero;
}

function division(primerNumero: number, segundoNumero: number): number {
    if (segundoNumero === 0) {
        alert("Bastante que vas a poder dividir entre cero xD");
        return NaN;
    }
    return primerNumero / segundoNumero;
}
