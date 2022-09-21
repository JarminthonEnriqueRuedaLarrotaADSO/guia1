addEventListener("DOMContentLoaded", ()=>{
    // 23.• Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.
    let radio = Number(prompt("ingrese el valor del radio: ", ))
    let alturaH = Number(prompt("ingrese el valor de la altura: ", ))
    let hallarVol = Math.PI * Math.pow(radio,2) * alturaH
    let tiempo = Number(prompt("Ingrese el valor del tiempo (en minutos ):  ", ));
    let tiempoSeg = tiempo*60
    let Q = hallarVol/tiempoSeg


    console.log(`%cFormula (${"Q=V/T"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El teimpo estimado de llenado del deposito es de:  "${Q}"`);
    
})