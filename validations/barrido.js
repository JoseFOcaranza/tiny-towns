//función barrido
var myArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function barrido(myArray, material) {
  var indices = [];
  var valor = myArray.indexOf(material);
  while (valor != -1) {
    indices.push(valor);
    valor = myArray.indexOf(material, valor + 1);
  }
  return indices;
}

function cotage(myArray, material) {
  var condicion = barrido(myArray, material);

  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CASA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
      }
      break;

    default:
      break;
  }
}

function cathedral(myArray, material) {
  var condicion = barrido(myArray, material);
  console.log("ENtro a CATEDRAL");
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye catedral");
      }
      break;

    default:
      break;
  }
}

function farm(myArray, material) {
  var condicion = barrido(myArray, material);
  //console.log("ENtro a farm");
  console.log(myArray[condicion]);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      break;

    default:
      break;
  }
}

function fountain(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye fuente");
      }
      break;

    default:
      break;
  }
}

function cloister(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 7] == "v" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 270 terminando con m");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 270 terminando con l");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 270 terminando con p");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE CLAUSTRO espejeado 270 terminando con v");
      }
      break;

    default:
      break;
  }
}

function archGuild(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 9] == "p" &&
        myArray[parseInt(condicion) + 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 9] == "p" &&
        myArray[parseInt(condicion) - 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 6] == "p" &&
        myArray[parseInt(condicion) + 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 6] == "p" &&
        myArray[parseInt(condicion) - 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 6] == "v" &&
        myArray[parseInt(condicion) + 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 7] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 6] == "m" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 6] == "l" &&
        myArray[parseInt(condicion) - 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 6] == "m" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 7] == "l" &&
        myArray[parseInt(condicion) + 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 9] == "l" &&
        myArray[parseInt(condicion) - 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 9] == "l" &&
        myArray[parseInt(condicion) + 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) - 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
      }
      break;

    default:
      break;
  }
}

function palaceMandras(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE palacio terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 90 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 270 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 90  terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 180 terminando con m");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 270 terminando con m");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE palacio terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 90 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 180 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 270 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 90  terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 180 terminando con l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 270 terminando con l");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE palacio terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 90 terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 180 terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 270 terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 90  terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 180 terminando con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 270 terminando con t");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE palacio terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 90 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 180 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio rotado 270 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 90  terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 180 terminando con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye palacio espejeado rotado 270 terminando con v");
      }
      break;

    default:
      break;
  }
}

function inn(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE posada terminada con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 90 terminada con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 180 terminada con v");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 270 terminada con v");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 1] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE posada terminada con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 90 terminada con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 180 terminada con p");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 270 terminada con p");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE posada terminada con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 90 terminada con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 180 terminada con t");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye posada rotada 270 terminada con t");
      }
      break;

    default:
      break;
  }
}

function granary(myArray, material) {
  var condicion = barrido(myArray, material);
  //console.log("ENtro a farm");
  console.log(myArray[condicion]);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("CONSTRUYE granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye granja");
      }
      break;

    default:
      break;
  }
}
