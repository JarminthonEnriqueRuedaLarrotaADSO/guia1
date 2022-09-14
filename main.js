addEventListener("DOMContentLoaded", ()=>{
    // 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    // ingresando el costo de los medicamentos calcules el descuento y el precio final.
    
    let producto = Number(prompt("Ingrese el valor del producto para calcular el 10% de descuento: ", ));
    let descuento=producto*0.10
    let aplicacionDescuento=producto-descuento
   
    console.log(`%cFormula (${'(producto*0.10)--la multiplicacion anterior se resta al valor original del producto '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`su descuento es de:  "${descuento}"`);
    console.log(`Su valor a pagar es de  "${aplicacionDescuento}"`);
})