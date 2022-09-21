addEventListener("DOMContentLoaded", ()=>{
// 24. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
// $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
// sobran $91000. ¿cuánto dinero tenía?
    let sobrante = 91000
    let JuegosdeLlaves = 11500*5
    let Bomba = 1168000
    let cajaPerno = 87000*3
    let sumaCompra = JuegosdeLlaves+Bomba+cajaPerno+sobrante

    console.log(`%cFormula (${"se calcula el precio de la compra y se le suma el restante inicial.."}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`El dinero que traia es:   "${sumaCompra}"`);
    
})