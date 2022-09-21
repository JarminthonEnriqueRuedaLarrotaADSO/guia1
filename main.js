addEventListener("DOMContentLoaded", ()=>{
    // 22.Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.
    let compra1 = Number(prompt("Ingrese el valor de su compra 1:  ", ));
    let compra2 = Number(prompt("Ingrese el valor de su compra 2:  ", ));
    let compra3 = Number(prompt("Ingrese el valor de su compra 3:  ", ));
    let compra4 = Number(prompt("Ingrese el valor de su compra 4:  ", ));
    let compra5 = Number(prompt("Ingrese el valor de su compra 5:  ", ));
    let descuentoC1 = compra1*0.05 
    let descuentoC2 = compra2*0.05
    let descuentoC4 = compra3*0.02
    let descuentoC5 = compra4*0.02
    let apliDescuento1 = compra1-descuentoC1
    let apliDescuento2 = compra2-descuentoC2
    let apliDescuento4 = compra4-descuentoC4
    let apliDescuento5 = compra5-descuentoC5


    
    console.log(`%cFormula (${"Se multiplica el valor de la compra por el descuento y se resta ese valor a la compra original..."}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El precio del producto 3 es de: "${compra3}"`);
    console.log(`El precio del producto 1 con descuento es de: ${apliDescuento1}`)
    console.log(`El precio del producto 2 con descuento es de: ${apliDescuento2}`)
    console.log(`El precio del producto 4 con descuento es de: ${apliDescuento4}`)
    console.log(`El precio del producto 5 con descuento es de: ${apliDescuento5}`)    
})