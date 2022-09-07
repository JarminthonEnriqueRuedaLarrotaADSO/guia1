addEventListener("DOMContentLoaded", ()=>{
    // . Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    // pesos y un IVA de 20%.

    let tiempoLL = Number(prompt("Ingrese el tiempo de la llamada ", ));
    let precioLL=365
    let iva=precioLL*0.20 ;
    let Formula =precioLL*tiempoLL ;
    let total= Formula+iva

    console.log(`%cFormula (${'cada minuto cuesta $355 pesos y un iva de 20%'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El costo de la llamada es : "${total}"`);

})