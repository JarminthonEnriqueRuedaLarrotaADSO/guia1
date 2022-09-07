addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo.

    let km = Number(prompt("Ingrese los kilomentros", 2));
    let minutos = Number(prompt("Ingrese los minutos", 5));

    let espacio =(km*1000) ;
    let tiempo =(minutos*60) ;
    let formvelocidad =(espacio/tiempo) ;
    console.log(`%cFormula (${espacio} / ${tiempo})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`La velocidad del proyectil es  : "${formvelocidad}"`);

})