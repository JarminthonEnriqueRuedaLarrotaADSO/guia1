addEventListener("DOMContentLoaded", ()=>{
    // 30. . Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
    // invertida.

    let palabra = prompt('ingrese el nombre del trabajador: ')
    console.log(palabra)
    let palabraInvertida = palabra.split('').reverse().join('')

    
    console.log(`%cFormula (${"palabraInvertida = palabra.split('').reverse().join('')"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`"${palabraInvertida}"`);

})