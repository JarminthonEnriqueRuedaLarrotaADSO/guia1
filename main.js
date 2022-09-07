addEventListener("DOMContentLoaded", ()=>{
//     Escribir un programa que calcule el área y el volumen de un cilindro:
//  A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
//  V = (PI * r2) * h

   
    let valordeH = Number(prompt("Ingrese el valor de la altura ", ));
    let valordeR = Number(prompt("Ingrese el valor del radio ", ));

    let area =(2 * (Math.PI * valordeR**2)) + ((2 * Math.PI * valordeR) * valordeH);
    let volumen =(Math.PI * valordeR*2) * valordeH ;
    console.log(`%cFormula (${(2 * (Math.PI * valordeR**2))} + ${((2 * Math.PI * valordeR) * valordeH)})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`%cFormula (${(Math.PI * valordeR*2)} * ${valordeH}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`El volumen de la esfera es : "${area}"`);
    console.log(`El volumen de la esfera es : "${volumen}"`);

})