addEventListener("DOMContentLoaded", ()=>{
    // 29. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    // pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
    // que representen el algoritmo para solucionar este problema.
    // Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula
    // sostenida y la edad del entrevistado.
    let nombreTrabj = prompt('ingrese el nombre del trabajador: ')
    let añoNacimiento = Number(prompt('ingrese el año en el que nacio:  ',))
    let añoActual = Number(prompt('ingrese el año en el que se encuentra:  ', )) 
    let solucion = (añoActual-añoNacimiento)
    
    console.log(`%cFormula (${"solucion=(año actual-Edad del trabajador)"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El nombre del trabajador es "${nombreTrabj}" y su edad es : ${solucion}`);

})