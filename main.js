addEventListener("DOMContentLoaded", ()=>{
    // 26. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿ Cuántos Kg
    // transporta ?
    let cajas = 25
    let undCaja = 748 
    let solucion = (cajas*undCaja)
    

    console.log(`%cFormula (${"solucion = (cajas*undCaja)"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`la cantidad de kg que transporta el camion es:"${solucion}"`);
    
})