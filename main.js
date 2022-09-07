addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule el volumen de un elipsoide
    // V = (4/3) * PI * a * b *c
   
    let valorA = Number(prompt("Ingrese el valor de A ", ));
    let valorB = Number(prompt("Ingrese el valor de B ", ));
    let valorC = Number(prompt("Ingrese el valor de C ", ));

    let Formula =(4/3) * Math.PI * valorA * valorB * valorC ;
    console.log(`%cFormula (${'(4/3) * PI * a * b *c'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El volumen de la elipsoide es : "${Formula}"`);

})