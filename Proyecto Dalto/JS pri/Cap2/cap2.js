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

    //document.write(frase)


let num = 0;
while (num<1000) {
    num++;
    document.write(num + "<br>");
    if (num==10){
        break;
    }
}

//

for (let numero1 = 0; numero1 < 6; numero1++) {
   // document.write(numero1 + "<br>")
}

//

array1 = ["pera","manzana","naranja"];
array2 = ["apio","papa",array1,"zanahoria"];

for (let array in array2) {
    if (array==2){
        for (let array of array1){
        document.write(array+"<br>");
        }   
    } else{
        document.write(array2[array]+"<br>");
    }
}

//