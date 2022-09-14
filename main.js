addEventListener("DOMContentLoaded", ()=>{
    // 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    // kilómetros por hora, proporcione la velocidad en metros por segundos.
    
    let km = Number(prompt("Ingrese los km que quiere transformar a metros: ", ));
    let conver=km/3.6
   
    console.log(`%cFormula (${'los km se dividen en 3.600 '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`Sus mt/s son:  "${conver}"`);
})