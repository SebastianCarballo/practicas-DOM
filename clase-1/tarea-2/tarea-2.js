document.querySelector('#calcular-salario-mensual').onclick = function () {
    const salarioAnual = Number(document.querySelector('#salario-anual-usuario').value);
    const salarioMensualUsuario = calcularSalarioMensual(salarioAnual);

    document.querySelector('#resultado-sueldo-mensual').value = salarioMensualUsuario;
    return false;
};

function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_EL_ANIO = 12;
    let salarioAnualTotal = salarioAnual / MESES_EN_EL_ANIO;
    return salarioAnualTotal;
}

document.querySelector('#calcular-salario-anual').onclick = function () {
    const salarioMensual = Number(document.querySelector('#salario-mensual-usuario').value);
    const salarioAnualUsuario = calcularSalarioAnual(salarioMensual);

    document.querySelector('#resultado-sueldo-anual').value = salarioAnualUsuario;
    return false;
};

function calcularSalarioAnual(salarioMensual) {
    const MESES_EN_EL_ANIO = 12;
    let salarioMensualTotal = salarioMensual * MESES_EN_EL_ANIO;
    return salarioMensualTotal;
}

document.querySelector('#calcular-salario-por-quincena-usuario').onclick = function () {
    const salarioPorQuincena = Number(document.querySelector('#salario-por-quincena-usuario').value);
    const salarioMensualUsuarioQuincenas = calcularSalarioMensualQuincenas(salarioPorQuincena);

    document.querySelector('#resultado-sueldo-mensual-quincenas').value = salarioMensualUsuarioQuincenas;
    return false;
};

function calcularSalarioMensualQuincenas(salarioPorQuincena) {
    const QUINCENAS_POR_MES = 2;
    let salarioMensualTotal = salarioPorQuincena * QUINCENAS_POR_MES;
    return salarioMensualTotal;
}


document.querySelector('#calcular-por-semana-usuario').onclick = function () {
    const salarioPorQuincena = Number(document.querySelector('#salario-por-quincena-usuario').value);
    const salarioMensualUsuarioQuincenas = calcularSalarioMensualQuincenas(salarioPorQuincena);

    document.querySelector('#resultado-sueldo-mensual-quincenas').value = salarioMensualUsuarioQuincenas;
    return false;
};

function calcularSalarioMensualQuincenas(salarioPorQuincena) {
    const QUINCENAS_POR_MES = 2;
    let salarioMensualTotal = salarioPorQuincena * QUINCENAS_POR_MES;
    return salarioMensualTotal;
}
