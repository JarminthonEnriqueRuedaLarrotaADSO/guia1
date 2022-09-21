addEventListener("DOMContentLoaded", ()=>{
    // 25.En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
    // de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
    // nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
    // hacer el bizcocho es
    let harina = 100
    let grcacao = 10
    let grcacao1 = Number(prompt('introduce los gramos de cacao: ',20))
    let solucion = (harina*grcacao1)/grcacao
    

    console.log(`%cFormula (${"solucion = (harina*grcacao1)/grcacao"}} )`, `background-color: black; color: aliceblue;border: blue dashed 3px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; border-radius: 5px;`);
    console.log(`la cantidad de grampos de harina para hacer bizcocho es:   "${solucion}"`);
    
})