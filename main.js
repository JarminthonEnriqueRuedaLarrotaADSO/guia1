addEventListener("DOMContentLoaded", ()=>{
    // 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    // puntos.
    let nota1 = Number(prompt("Ingrese su calificacion de 1 a 5:  ", ));
    let nota2 = Number(prompt("Ingrese su calificacion de 1 a 5:  ", ));
    let nota3 = Number(prompt("Ingrese su calificacion de 1 a 5:  ", ));
    let nota4 = Number(prompt("Ingrese su calificacion de 1 a 5:  ", ));
    let promedio=(nota1+nota2+nota3+nota4)/4
    console.log(`%cFormula (${'Se suman las notas y se dividen en la cantidad de notas '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`Su calificacion es de: "${promedio}"`);
    
})