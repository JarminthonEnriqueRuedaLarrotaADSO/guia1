addEventListener("DOMContentLoaded", ()=>{
    // 27. tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
    // 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a
    // Lorena?
    let Martin = 2/3
    let Jairo = 1/4 
    let solucion = (Martin+Jairo)
    let lorena = (1/1)-solucion

    console.log(`%cFormula (${"solucion = (1/1)-solucion(solucion es la suma de martin y jairo)"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`la cantidad que le pretenece a lorena es:"${lorena}"`);
    
})