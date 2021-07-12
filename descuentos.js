console.log("Practica con porcentajes y descuentos")

// const precioOriginal = 120;

// const descuento = 18;

// const porcentajePrecioDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioDescuento,
//    precioConDescuento
// })

function calcularPrecioConDescuento(price, discount){
    const porcPriceDiscount = 100 - discount;

    const priceWithDiscount = (price * porcPriceDiscount) / 100;
    
    return priceWithDiscount;
}
calcularPrecioConDescuento();