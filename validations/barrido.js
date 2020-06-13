//función barrido
var myArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function cotage(myArray, material) {
    var condicion = barrido(myArray, material);

    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Quieres construir una casita crack???
                //Llamar la funcion construir()
            }
            break;

        default:
            break;
    }
}

function barrido(myArray, material) {
    var indices = [];
    var valor = myArray.indexOf(material);
    while (valor != -1) {
        indices.push(valor);
        valor = myArray.indexOf(material, valor + 1);
    }
    return indices;
}