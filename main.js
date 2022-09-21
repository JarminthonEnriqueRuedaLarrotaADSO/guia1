addEventListener("DOMContentLoaded", ()=>{
    // 28 .Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    // presupuestos para cada cliente.
    let m_cdrado = Number(prompt('introduce metros cuadrados para pintar ',))
    let presupuesto_mcuadrado = Number(prompt('introduce valor metro cuadrado segun material ', )) 
    let solucion = (m_cdrado*presupuesto_mcuadrado)
    
    console.log(`%cFormula (${"solucion = (m_cdrado*presupuesto_mcuadrado)"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El total de dinero a pagar por metro cuadrado pintado es:"${solucion}"`);

})
