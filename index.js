function calcular() {
    /* Pide los datos */
    let precio = pedirPrecio();
    let iva = pedirIVA();
    /* Calcula el total */
    let total = calcularTotal(precio, iva);
    /* Verifico que no haya dado mal el calculo */
    if(total === -1) { return; }
    /* Imprimo el string con los datos */
    alert(getString(precio, iva, total));
}

function pedirPrecio() {
    /* Variable de precio */
    let precio;
    do {
        /* Pide y parsea el precio */
        precio = parseFloat(prompt("Ingrese el precio del producto"));
        /* Variable de control en true por defecto */
        var flag = true;
        /* Si es invalido el precio */
        if(isNaN(precio)) {
            /* Mensaje de alerta */
            alert("Ingrese unicamente numeros");
            /* Bajo la bandera */
            flag = false;
        }
        /* Si sigue en true, todo salio bien */
    } while(!flag);
    /* Devuelvo el precio validado */
    return precio;
}

/**
 * Pide y valida un IVA. Por defecto 21
 * @returns 
 */
function pedirIVA() {
    /* Pide y parsea el IVA */
    let iva = parseFloat(prompt("Ingrese un IVA (% - Por defecto 21%)"));
    /* Opcion 1, condiciones por separado */

    /* Veo si no fue numerico */
    if(isNaN(iva)) { iva = 21; }
    /* O si esta fuera del rango valido */
    else if(!(iva > 0 && iva < 100)) { iva = 21; }
    /* En ambos casos, asigno el valor por defecto, sino, dejo el ingresado */

    /* Opcion 2, doble condicion */
    /* Pregunto todo lo de arriba con una OR */
    if(isNaN(iva) || !(iva > 0 && iva < 100)) { iva = 21; }
    /* Devuelvo el IVA validado */
    return iva;
}

/**
 * Calcula el total a pagar
 * @param {Number} precio Precio del producto (obligatorio)
 * @param {Number} iva IVA del producto (opcional)
 * @returns 
 */
function calcularTotal(precio = null, iva = 21) {
    /* Verifico que el precio haya sido ingresado */
    if(precio === null) { return -1; }
    /* Calculo el precio total */
    let total = precio * (1 + iva / 100);
    /* Devuelvo el total si salio todo bien */
    return total;
}

/** 
 * Arma un string para imprimir
 * @param {Number} precio
 * @param {Number} iva
 * @param {Number} total
 * @returns
*/
function getString(precio, iva, total) {
    /* Devuelve el string completo para imprimir por console o alert */
    return `Precio: $${precio} - IVA: ${iva}% - Total: ${total}`
}