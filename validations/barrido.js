//función barrido
var myArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function barrido(myArray, material) {
  var indices = [];
  var valor = myArray.indexOf(material);

  indices.push(valor);
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
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye Cotage");
      }
      break;

    default:
      break;
  }
}

function cathedral(myArray, material) {
  var condicion = barrido(myArray, material);

  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye catedral");
      }
      break;

    default:
      break;
  }
}

function farm(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja  ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granja  ");
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
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuente");
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
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 7] == "v" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
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
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
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
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO");
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
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye CLAUSTRO ");
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
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 9] == "p" &&
        myArray[parseInt(condicion) + 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 9] == "p" &&
        myArray[parseInt(condicion) - 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 6] == "p" &&
        myArray[parseInt(condicion) + 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 6] == "p" &&
        myArray[parseInt(condicion) - 10] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 6] == "v" &&
        myArray[parseInt(condicion) + 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
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
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui  ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
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
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui  ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
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
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 6] == "l" &&
        myArray[parseInt(condicion) - 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 6] == "m" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 7] == "l" &&
        myArray[parseInt(condicion) + 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 9] == "l" &&
        myArray[parseInt(condicion) - 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 9] == "l" &&
        myArray[parseInt(condicion) + 10] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
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
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui  ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) - 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye gremioArqui ");
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
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
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
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palaci");
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
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palaci");
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
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye palacio ");
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
        console.log("Construye posada");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 1] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada  da");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye posada  da");
      }
      break;

    default:
      break;
  }
}

function granary(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero   l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero   l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye granero  l");
      }
      break;
    default:
      break;
  }
}

function greehouse(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye invernadero");
      }
      break;
    default:
      break;
  }
}

function orchard(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye huerto");
      }

      break;
    default:
      break;
  }
}

function abbey(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 7] == "v" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye abadia ");
      }
      break;

    default:
      break;
  }
}

function chapel(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye capilla ");
      }
      break;

    default:
      break;
  }
}

function temple(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 6] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) + 1] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) + 1] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye templo ");
      }
      break;

    default:
      break;
  }
}

function almshouse(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye asilo  da");
      }
      break;
    default:
      break;
  }
}

function feastHall(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye SalaDeFiestas ");
      }
      break;
    default:
      break;
  }
}

function tavern(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye taverna  da");
      }
      break;
    default:
      break;
  }
}

function bakery(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria  da");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye pasteleria  da");
      }
      break;

    default:
      break;
  }
}

function market(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado  da");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye mercado ");
      }
      break;

    default:
      break;
  }
}

function tailor(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre  da");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre da");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye sastre  da");
      }
      break;

    default:
      break;
  }
}

function theater(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye teatro  da");
      }
      break;

    default:
      break;
  }
}

function uni(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni  da");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni da");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye uni  da");
      }
      break;

    default:
      break;
  }
}

function bank(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 7] == "t" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 8] == "m" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 8] == "m" &&
        myArray[parseInt(condicion) - 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye banco  ");
      }
      break;
    default:
      break;
  }
}

function factory(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 6] == "p" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 7] == "p" &&
        myArray[parseInt(condicion) + 11] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 6] == "p" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 11] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 9] == "p" &&
        myArray[parseInt(condicion) - 13] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 9] == "p" &&
        myArray[parseInt(condicion) + 13] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 11] == "m" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "l" &&
        myArray[parseInt(condicion) + 13] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 6] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 7] == "m" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      break;

    default:
      break;
  }
}

function tradingPost(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial   ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial   ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 7] == "l" &&
        myArray[parseInt(condicion) + 1] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial  ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "p" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye centro comercial  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("construye centro comercial  ");
      }
      break;
    default:
      break;
  }
}

function archOfTheSA(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA   l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA   l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  l");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye archOfTheSA ");
      }
      break;
    default:
      break;
  }
}

function castle(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 12] == "l" &&
        myArray[parseInt(condicion) + 13] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "v" &&
        myArray[parseInt(condicion) - 12] == "l" &&
        myArray[parseInt(condicion) - 13] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "v" &&
        myArray[parseInt(condicion) - 11] == "p" &&
        myArray[parseInt(condicion) - 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 11] == "p" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 7] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "v" &&
        myArray[parseInt(condicion) - 11] == "t" &&
        myArray[parseInt(condicion) - 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 7] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 11] == "t" &&
        myArray[parseInt(condicion) + 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 12] == "m" &&
        myArray[parseInt(condicion) + 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "v" &&
        myArray[parseInt(condicion) - 12] == "m" &&
        myArray[parseInt(condicion) - 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 9] == "v" &&
        myArray[parseInt(condicion) - 12] == "t" &&
        myArray[parseInt(condicion) - 13] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "v" &&
        myArray[parseInt(condicion) + 12] == "t" &&
        myArray[parseInt(condicion) + 13] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 11] == "m" &&
        myArray[parseInt(condicion) + 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "v" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 7] == "v" &&
        myArray[parseInt(condicion) - 11] == "m" &&
        myArray[parseInt(condicion) - 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "v" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 7] == "v" &&
        myArray[parseInt(condicion) + 11] == "l" &&
        myArray[parseInt(condicion) + 12] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 6] == "v" &&
        myArray[parseInt(condicion) - 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 7] == "v" &&
        myArray[parseInt(condicion) - 11] == "l" &&
        myArray[parseInt(condicion) - 12] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "v" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 9] == "v" &&
        myArray[parseInt(condicion) - 12] == "p" &&
        myArray[parseInt(condicion) - 13] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "v" &&
        myArray[parseInt(condicion) + 12] == "p" &&
        myArray[parseInt(condicion) + 13] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "m" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 7] == "p" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fabrica ");
      }
      break;
    default:
      break;
  }
}

function warehouse(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "l" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen  ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) + 1] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen");
      }
      break;

    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen  ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye almacen ");
      }

      break;

    default:
      break;
  }
}

function opaleye(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "t" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 11] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 6] == "t" &&
        myArray[parseInt(condicion) - 7] == "t" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 7] == "t" &&
        myArray[parseInt(condicion) - 11] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 9] == "t" &&
        myArray[parseInt(condicion) - 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "t" &&
        myArray[parseInt(condicion) + 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "t" &&
        myArray[parseInt(condicion) + 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "t" &&
        myArray[parseInt(condicion) - 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 8] == "t" &&
        myArray[parseInt(condicion) - 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "v" &&
        myArray[parseInt(condicion) + 8] == "t" &&
        myArray[parseInt(condicion) + 12] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 9] == "t" &&
        myArray[parseInt(condicion) + 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 9] == "t" &&
        myArray[parseInt(condicion) - 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "v" &&
        myArray[parseInt(condicion) + 6] == "t" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 7] == "t" &&
        myArray[parseInt(condicion) - 11] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "v" &&
        myArray[parseInt(condicion) - 6] == "t" &&
        myArray[parseInt(condicion) - 7] == "t" &&
        myArray[parseInt(condicion) - 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 11] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) - 8] == "m" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 8] == "t" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "v" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 5] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 6] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 7] == "m" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) - 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 11] == "m" &&
        myArray[parseInt(condicion) + 12] == "l" &&
        myArray[parseInt(condicion) + 13] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 6] == "p" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 8] == "v" &&
        myArray[parseInt(condicion) + 11] == "p" &&
        myArray[parseInt(condicion) + 12] == "l" &&
        myArray[parseInt(condicion) + 13] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) - 9] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye atalayaOpalo");
      }
      break;

    default:
      break;
  }
}

function fort(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "l" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 7] == "l" &&
        myArray[parseInt(condicion) - 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      break;
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 5] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      break;

    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 8] == "t" &&
        myArray[parseInt(condicion) - 9] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) - 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 7] == "p" &&
        myArray[parseInt(condicion) + 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 2] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "m" &&
        myArray[parseInt(condicion) + 6] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 8] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 2] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 7] == "l" &&
        myArray[parseInt(condicion) + 8] == "p"
      ) {
        //Llamar la funcion construir()
        console.log("Construye fuerte");
      }
      break;

    default:
      break;
  }
}

function statue(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "v" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "v" &&
        myArray[parseInt(condicion) - 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 12] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 12] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "v" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "m" &&
        myArray[parseInt(condicion) + 9] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "m" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      break;
    case "v":
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 12] == "m" &&
        myArray[parseInt(condicion) - 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua  ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "m" &&
        myArray[parseInt(condicion) + 13] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 7] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 11] == "t" &&
        myArray[parseInt(condicion) + 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 7] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "v" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 11] == "t" &&
        myArray[parseInt(condicion) - 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "v" &&
        myArray[parseInt(condicion) - 2] == "p" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 9] == "m" &&
        myArray[parseInt(condicion) + 13] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "v" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 9] == "p" &&
        myArray[parseInt(condicion) - 13] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 4] == "m" &&
        myArray[parseInt(condicion) + 5] == "p" &&
        myArray[parseInt(condicion) + 6] == "p" &&
        myArray[parseInt(condicion) + 7] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) - 3] == "p" &&
        myArray[parseInt(condicion) - 7] == "p" &&
        myArray[parseInt(condicion) - 11] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 6] == "m" &&
        myArray[parseInt(condicion) - 7] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 3] == "p" &&
        myArray[parseInt(condicion) + 7] == "p" &&
        myArray[parseInt(condicion) + 11] == "v"
      ) {
        //Llamar la funcion construir()
        console.log("Construye estatua");
      }
      break;

    default:
      break;
  }
}

function forum(myArray, material) {
  var condicion = barrido(myArray, material);
  switch (myArray[condicion]) {
    case "m":
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) - 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 5] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum  ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 3] == "t" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "t" &&
        myArray[parseInt(condicion) + 8] == "l" &&
        myArray[parseInt(condicion) + 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "m" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 5] == "p" &&
        myArray[parseInt(condicion) - 8] == "p" &&
        myArray[parseInt(condicion) - 12] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      break;
    case "l":
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 2] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 9] == "t" &&
        myArray[parseInt(condicion) + 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 3] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) - 8] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "p" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 6] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 3] == "t" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 8] == "m" &&
        myArray[parseInt(condicion) + 4] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 2] == "m" &&
        myArray[parseInt(condicion) - 5] == "t" &&
        myArray[parseInt(condicion) + 1] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "l" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 7] == "t" &&
        myArray[parseInt(condicion) + 8] == "p" &&
        myArray[parseInt(condicion) + 12] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      break;
    case "p":
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 2] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "l" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) + 1] == "m" &&
        myArray[parseInt(condicion) + 4] == "t"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 4] == "m" &&
        myArray[parseInt(condicion) + 1] == "t" &&
        myArray[parseInt(condicion) + 4] == "l" &&
        myArray[parseInt(condicion) + 8] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "m" &&
        myArray[parseInt(condicion) - 4] == "t" &&
        myArray[parseInt(condicion) + 1] == "l" &&
        myArray[parseInt(condicion) + 2] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "p" &&
        myArray[parseInt(condicion) - 1] == "t" &&
        myArray[parseInt(condicion) - 4] == "l" &&
        myArray[parseInt(condicion) - 8] == "l" &&
        myArray[parseInt(condicion) + 4] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      break;
    case "t":
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 2] == "l" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 9] == "l" &&
        myArray[parseInt(condicion) + 3] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 2] == "l" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum ");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 9] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "m" &&
        myArray[parseInt(condicion) - 4] == "p" &&
        myArray[parseInt(condicion) - 5] == "l" &&
        myArray[parseInt(condicion) - 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 1] == "p" &&
        myArray[parseInt(condicion) - 5] == "m" &&
        myArray[parseInt(condicion) + 3] == "l" &&
        myArray[parseInt(condicion) + 7] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) + 3] == "m" &&
        myArray[parseInt(condicion) + 4] == "p" &&
        myArray[parseInt(condicion) + 5] == "l" &&
        myArray[parseInt(condicion) + 6] == "l"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      if (
        myArray[parseInt(condicion)] == "t" &&
        myArray[parseInt(condicion) - 3] == "l" &&
        myArray[parseInt(condicion) - 7] == "l" &&
        myArray[parseInt(condicion) + 1] == "p" &&
        myArray[parseInt(condicion) + 5] == "m"
      ) {
        //Llamar la funcion construir()
        console.log("Construye forum");
      }
      break;

    default:
      break;
  }
}
