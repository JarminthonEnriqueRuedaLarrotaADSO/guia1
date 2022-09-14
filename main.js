addEventListener("DOMContentLoaded", ()=>{
    // 18. Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago
    // en hora. Pagohora=15300
    let Trabajador = (prompt("Ingrese su nombre:  ", ));
    let horas = Number(prompt("ingrese las horas trabajadas:  ", ));
    let Pagohora=15300
    let calculoSueldo= horas*15300
    console.log(`%cFormula (${'se multiplican horas trabajadas*pagohora(15300) '} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`señor "${Trabajador}"`);
    console.log(`El valor de su salario segun sus horas trabajadas es de:   "${calculoSueldo}"`);
})