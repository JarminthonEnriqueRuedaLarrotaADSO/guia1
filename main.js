addEventListener("DOMContentLoaded", ()=>{
    // 15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit
    
    let gradosC = Number(prompt("Ingrese los grados centigrados para transformar a farenheit: ", ));
    let conversion=(gradosC * 9/5) + 32
   
    console.log(`%cFormula (${'(C° * 9/5) + 32'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`Sus grados farenheit son:   "${conversion}"`);
})