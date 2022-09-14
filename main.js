addEventListener("DOMContentLoaded", ()=>{
    // 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
    // compone de los siguientes porcentajes:
    // • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    // • 30% de la calificación examen final y
    // • 15% de la calificación trabajo final.

    let nota1 = Number(prompt("Ingrese la nota del parcial1:  ", ));
    let nota2 = Number(prompt("Ingrese la nota del parcial2: ", ));
    let nota3 = Number(prompt("Ingrese la nota del parcial3: ", ));
    let nota4 = Number(prompt("Ingrese la nota del examen final: ", ));
    let nota5 = Number(prompt("Ingrese la nota del trabajo final: ", ));
    let sumPromedio=(nota1+nota2+nota3)/3*0.55
    let examf= nota4*0.30
    let trabajof= nota5*0.15
    let sumafinal= sumPromedio+examf+trabajof
    console.log(`%cFormula (${'sumar el porcentaje de las notas'} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`Su nota final es:   "${sumafinal}"`);
})