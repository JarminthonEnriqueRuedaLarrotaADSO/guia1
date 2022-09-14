addEventListener("DOMContentLoaded", ()=>{
    // 21. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello
    // d = rc((x2-x1)^2 + (y2-y1)^2)
    let valX = Number(prompt("Ingrese el valor de x:  ", ));
    let valY = Number(prompt("Ingrese el valor de y:  ", ));
    let valRC = Number(prompt("Ingrese el valor de R:  ", ));
    let solucion= valRC*((valX*(2)-valX*(1))**2 + (valY*(2)-valY*(1))**2)
    console.log(`%cFormula (${'d = rc((x2-x1)^2 + (y2-y1)^2)'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`La solucion de la formula es : "${solucion}"`);
    
})