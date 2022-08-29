document.querySelector('.calcular-edad-usuario').onclick = function () {
    const anioActual = Number(document.querySelector('#anio-actual').value);
    const anioNacimientoUsuario = Number(document.querySelector('#anio-nacimiento-usuario').value);
    const edadUsuario = calcularEdadUsuario(anioActual, anioNacimientoUsuario);

    document.querySelector('.resultado').innerText = `Tu edad es ${edadUsuario} años`;
    return false;
};

function calcularEdadUsuario(anioActualUsuario, anioNacimientoUsuario) {
    let edadUsuario = anioActualUsuario - anioNacimientoUsuario;
    return edadUsuario;
}

document.querySelector('#borrar').onclick = function () {
    document.querySelector('.resultado').innerText = '¿Queres saber tu edad?';
};
