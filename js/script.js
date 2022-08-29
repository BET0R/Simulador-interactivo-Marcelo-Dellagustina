let precio = parseFloat(prompt("Ingrese el monto de dinero:"))
let cuotas = parseInt(prompt("Ingresar cantidad de cuotas (1,3,6,9,12):"))
let descuento = precio * 0.10
let precioCuota = precio

const calculador = () => {
    if (cuotas != 1) {
        let precioInteres = precio * 0.05
        let cuotaInteres = ((precio / cuotas) + (precioInteres / cuotas)).toFixed(2)
        document.write ("Usted solicito $" + precio + " La cantidad de cuotas son: " + cuotas + (" El valor por cuota es: $" + cuotaInteres + " El precio final es $") + (precioInteres + precio))
    }
    else {
        document.write ("Usted solicito $" + precio + " en un pago, con 10% de descuento, el precio final es de $" + (precio - descuento))
    }
}

calculador()