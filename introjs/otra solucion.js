/otra solucion/

"use strct";

const definirCompra = (n)=>{
    let din = prompt(`dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado marca uno`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado marca dos`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado marca tres`);
    if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4kg`);
    else return (`4{n}:"lo siento, no tienes dinero suficiente"`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));