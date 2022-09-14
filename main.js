addEventListener("DOMContentLoaded", ()=>{
    // 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    // tiempo y de un producto a otro, este dato se lee por teclado.
    let producto = Number(prompt("Ingrese el costo del producto:  ", ));
    let Iva = Number(prompt("Ingrese el valor del IVA en numero entero : ", ));
    let convertirIva= Iva/100
    let smf= producto*convertirIva
    let sumafinal=producto+smf
    console.log(`%cFormula (${'sumar el IVA al valor del producto: '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El valor original del producto es:   "${producto}"`);
    console.log(`El IVA es:   "${convertirIva}"`);
    console.log(`El valor final del producto con el IVA es:   "${sumafinal}"`);
})