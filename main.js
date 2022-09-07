addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que evalúe la siguiente expresión:
    // (a+7*c)/(b+2-a)+2*b 
   
    let a = Number(prompt("Ingrese el valor de 'a' ", ));
    let b = Number(prompt("Ingrese el valor de 'b' ", ));
    let c = Number(prompt("Ingrese el valor de 'c' ", ));

    let Formula =((a+7*c)/(b+2-a)+2*b) ;
    console.log(`%cFormula (${(a+7*c)} / ${(b+2-a)} + ${'2*b'})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`El volumen de la esfera es : "${Formula}"`);

})