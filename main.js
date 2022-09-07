addEventListener("DOMContentLoaded", ()=>{
    // . Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 + b * x + c, siendo X un valor constante.

   
    let valorX = Number(prompt("Ingrese el valor de X ", ));
    let valorA = Number(prompt("Ingrese el valor de A ", ));
    let valorB = Number(prompt("Ingrese el valor de B ", ));
    let valorC = Number(prompt("Ingrese el valor de C ", ));

    let Formula =(valorA * valorX*2 + valorB * valorX + valorC) ;
    console.log(`%cFormula (${'A * x2 + b * x + c'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El volumen de la esfera es : "${Formula}"`);

})