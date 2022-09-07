addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule el volumen de una esfera:
    // Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3
   
    let radio = Number(prompt("Ingrese el volumen del radio", 3));

    let volumenEsfera =(4/3*Math.PI*Math.pow(radio, 3)) ;
    console.log(`%cFormula (${4} / ${3} * ${'Pi'} * ${'radio**3'})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`El volumen de la esfera es : "${volumenEsfera}"`);

})