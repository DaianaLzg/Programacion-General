let pc1 = {
    nombre: "PC",
    procesador: "intel core i7",
    ram: "16gb",
    espacio: "1tb"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de <b>${espacio}</b> <br>`;

document.write(frase)