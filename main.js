addEventListener("DOMContentLoaded", ()=>{
    // 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
    // cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
    // sueldo del vendedor?.
    let venta1 = Number(prompt("Ingrese el valor de la venta 1:  ", ));
    let venta2 = Number(prompt("Ingrese el valor de la venta 2:  ", ));
    let venta3 = Number(prompt("Ingrese su valor de la venta 3:  ", ));
    let promedio=(venta1+venta2+venta3)
    let valor=promedio*0.10
    console.log(`%cFormula (${'Se suman las notas y se dividen en la cantidad de notas '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El valor de las ventas es: "${promedio}"`);
    console.log(`Su valor de comision por la compra es de : "${valor}" mas su sueldo base`);
    
})