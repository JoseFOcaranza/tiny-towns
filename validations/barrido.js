//función barrido
var myArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function barrido(myArray, material) {
    var indices = [];
    var valor = myArray.indexOf(material);

    indices.push(valor);
    return indices;
}
//Funcion para reiniciar los campos donde no se construyo
function resetTD(id) {
    document.getElementById(id).innerHTML = '';
    document.getElementById(id).classList.remove("construir");
    document.getElementById(id).classList.add("td-tablero", "tdh", "tda");
    document.getElementById(id).style.pointerEvents = "auto";
    console.log(myArray);
    myArray[id] = '';
    // document.getElementById(ok).removeEventListener('onclick', true);
}

//Aplicar la imagen a la recuadro que se eligio para construir
function applyConst(id, img) {
    document.getElementById(id).innerHTML = img;
    document.getElementById(id).classList.remove("td-tablero", "tdh", "tda", "construir");
    document.getElementById(id).classList.add("construido");
    document.getElementById(id).style.pointerEvents = "none";
    // console.log(document.getElementById(id).onpointerdown = applyConst());
}

//Funcion que aplica el diseno al tablero en la celda donde se pueda construir
function construirDesignTD(id) {
    document.getElementById(id).classList.add("construir");
    document.getElementById(id).classList.remove("td-tablero", "tdh", "tda");
    document.getElementById(id).style.pointerEvents = "auto";
}

function cotage(myArray, material) {
    var condicion = barrido(myArray, material);
    console.log(myArray)

    function constCotage(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;


    }

    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("CASA 1");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 5] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5);
                console.log("CASA 2 ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3);
                console.log("CASA 3");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("CASA 4");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("CASA 5");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("CASA 6");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("CASA 7");
            }
            break;
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4);
                console.log("CASA");
            }
            break;
        case "l":
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 3] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 3);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("CASA");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCotage(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("CASA");
            }
            break;

    }
}

function cathedral(myArray, material) {
    var condicion = barrido(myArray, material);

    function constCatedral(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha8.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;
    }

    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("CONSTRUYE catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 5] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5);
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
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4);
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
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 3] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 3);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("construye catedral");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constCatedral(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("construye catedral");
            }
            break;

        default:
            break;
    }
}

function farm(myArray, material) {
    var condicion = barrido(myArray, material);

    function constFarm(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha3.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("CONSTRUYE granja termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("construye granja rotada 90 termina con t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("construye granja rotada 180 termina con t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("construye granja rotada 270 termina con t");
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
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("CONSTRUYE granja termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("construye granja rotada 90 termina con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("construye granja rotada 180 termina con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("construye granja rotada 270 termina con t");
            }
            break;

        default:
            break;
    }
}

function fountain(myArray, material) {
    var condicion = barrido(myArray, material);

    function constFountain(c1, c2) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha1.png' alt='granero' />`)
                resetTD(c2);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "m":
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) + 1);
                console.log("CONSTRUYE fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) + 4);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "p"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) - 1);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) - 4);
                console.log("construye fuente");
            }
            break;
        case "p":
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "m"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) + 1);
                console.log("CONSTRUYE fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) + 4);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "m"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) - 1);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFountain(parseInt(condicion), parseInt(condicion) - 4);
                console.log("construye fuente");
            }
            break;

        default:
            break;
    }
}

function cloister(myArray, material) {
    var condicion = barrido(myArray, material);

    function constcloister(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha7.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "m":
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 2] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("CONSTRUYE CLAUSTRO terminando con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8, parseInt(condicion) + 9);
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
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) + 2);
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "p" &&
                myArray[parseInt(condicion) - 9] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8, parseInt(condicion) - 9);
                console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 6);
                console.log("CONSTRUYE CLAUSTRO espejeado terminando con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 7] == "v" &&
                myArray[parseInt(condicion) - 8] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 7, parseInt(condicion) - 8);
                console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 6] == "v" &&
                myArray[parseInt(condicion) - 2] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 6, parseInt(condicion) - 2);
                console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 7, parseInt(condicion) + 8);
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
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) + 1);
                console.log("CONSTRUYE CLAUSTRO terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) - 4);
                console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 3);
                console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) - 4, parseInt(condicion) + 5);
                console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("CONSTRUYE CLAUSTRO espejeado terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) + 4);
                console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 1, parseInt(condicion) - 5);
                console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 3, parseInt(condicion) + 4);
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
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) - 4);
                console.log("CONSTRUYE CLAUSTRO terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "m" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 4);
                console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 2] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("CONSTRUYE CLAUSTRO espejeado terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 8);
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
                constcloister(parseInt(condicion), parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("CONSTRUYE CLAUSTRO terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 9] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 9);
                console.log("CONSTRUYE CLAUSTRO rotado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 2] == "m" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("CONSTRUYE CLAUSTRO rotado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 9] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 9);
                console.log("CONSTRUYE CLAUSTRO rotado 270 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 6] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 6);
                console.log("CONSTRUYE CLAUSTRO espejeado terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 7] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 7);
                console.log("CONSTRUYE CLAUSTRO espejeado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 6] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 6);
                console.log("CONSTRUYE CLAUSTRO espejeado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 7] == "m"
            ) {
                //Llamar la funcion construir()
                constcloister(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 7);
                console.log("CONSTRUYE CLAUSTRO espejeado 270 terminando con v");
            }
            break;

        default:
            break;
    }
}
//5
function archGuild(myArray, material) {
    var condicion = barrido(myArray, material);

    function constArchGuild(c1, c2, c3, c4, c5) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        construirDesignTD(c5);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha8.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c5).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c5).onclick = function() {
                applyConst(c5, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        bandera = true;
    }
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) - 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 9, parseInt(condicion) + 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 9, parseInt(condicion) - 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 6, parseInt(condicion) + 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 6, parseInt(condicion) - 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 6, parseInt(condicion) - 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 7, parseInt(condicion) - 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 9);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 4);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 2, parseInt(condicion) + 3);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 2, parseInt(condicion) + 3);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 9);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) - 2, parseInt(condicion) - 3);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 9);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 6, parseInt(condicion) - 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 6, parseInt(condicion) - 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 7, parseInt(condicion) + 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 9, parseInt(condicion) - 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 9, parseInt(condicion) + 10);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) - 6);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 5, parseInt(condicion) + 5, parseInt(condicion) - 1, parseInt(condicion) - 1);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) + 1, parseInt(condicion) + 5);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) - 4, parseInt(condicion) - 5);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) + 4, parseInt(condicion) + 5);
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
                constArchGuild(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 1, parseInt(condicion) + 3, parseInt(condicion) - 3);
                console.log("CONSTRUYE gremioArqui espejeado 270 terminando con m");
            }
            break;

        default:
            break;
    }
}
//4
function palaceMandras(myArray, material) {
    var condicion = barrido(myArray, material);

    function constMandras(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha8.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "m":
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio  ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio  ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
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
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "v" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
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
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
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
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye palacio  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye palacio ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constMandras(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye palacio ");
            }
            break;

        default:
            break;
    }
}
//3
function inn(myArray, material) {
    var condicion = barrido(myArray, material);

    function constInn(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha4.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;


    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("Construye posada");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("Construye posada");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye posada");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
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
                constInn(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constInn(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "v"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("Construye posada da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "v"
            ) {
                //Llamar la funcion construir()
                constInn(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("Construye posada  da");
            }
            break;

        default:
            break;
    }
}

function granary(myArray, material) {
    var condicion = barrido(myArray, material);

    function constGranary(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha3.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 5);

                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
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
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye granero ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye granero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
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
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye granero  l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero  l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero   l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye granero  l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye granero   l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye granero  l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye granero  l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                constGranary(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye granero  l");
            }
            break;
        default:
            break;
    }
}

function greehouse(myArray, material) {
    var condicion = barrido(myArray, material);

    function constrGreenH(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha3.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
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
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye invernadero  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
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
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye invernadero");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constrGreenH(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye invernadero");
            }
            break;
        default:
            break;
    }
}

function orchard(myArray, material) {
    var condicion = barrido(myArray, material);

    function constOrchard(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha3.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye huerto ");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
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
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye huerto ");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
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
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye huerto");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye huerto ");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constOrchard(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye huerto");
            }

            break;
        default:
            break;
    }
}

function abbey(myArray, material) {
    var condicion = barrido(myArray, material);

    function constAbbey(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha7.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "l":
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 2] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8, parseInt(condicion) + 9);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "p" &&
                myArray[parseInt(condicion) + 2] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) + 2);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "p" &&
                myArray[parseInt(condicion) - 9] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8, parseInt(condicion) - 9);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 6);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 7] == "v" &&
                myArray[parseInt(condicion) - 8] == "p"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 7, parseInt(condicion) - 8);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "p" &&
                myArray[parseInt(condicion) - 6] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) - 6);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 7, parseInt(condicion) + 8);
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
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 11, parseInt(condicion) - 4);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 4);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye abadia");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 3, parseInt(condicion) + 4);
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
                constAbbey(parseInt(condicion), parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 9] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 9);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye abadia  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "p" &&
                myArray[parseInt(condicion) + 9] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 9);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 6] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 6);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 7] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 7);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "p" &&
                myArray[parseInt(condicion) + 6] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 6);
                console.log("Construye abadia ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 7] == "l"
            ) {
                //Llamar la funcion construir()
                constAbbey(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 7);
                console.log("Construye abadia ");
            }
            break;

        default:
            break;
    }
}

function chapel(myArray, material) {
    var condicion = barrido(myArray, material);

    function constChapel(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha7.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "p":
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 2] == "v" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8, parseInt(condicion) + 9);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 4);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 8, parseInt(condicion) + 8);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 6);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye capilla");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 7, parseInt(condicion) + 8);
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
                constChapel(parseInt(condicion), parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 3);
                console.log("Construye capilla  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v" &&
                myArray[parseInt(condicion) + 9] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 9);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 7] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 7);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v" &&
                myArray[parseInt(condicion) + 6] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 6);
                console.log("Construye capilla ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constChapel(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye capilla ");
            }
            break;

        default:
            break;
    }
}

function temple(myArray, material) {
    var condicion = barrido(myArray, material);

    function constTemple(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha7.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "l":
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 2] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8, parseInt(condicion) + 9);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 3);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "v" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) + 4);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 6);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) + 4);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "v" &&
                myArray[parseInt(condicion) + 1] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) + 1);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 7, parseInt(condicion) + 8);
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
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) - 4);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "l" &&
                myArray[parseInt(condicion) + 1] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8, parseInt(condicion) + 1);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 4);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2, parseInt(condicion) + 4);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye templo");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) - 8);
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
                constTemple(parseInt(condicion), parseInt(condicion) + 2, parseInt(condicion) + 3, parseInt(condicion) + 4);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 9] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 5, parseInt(condicion) - 9);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 2, parseInt(condicion) - 3, parseInt(condicion) - 4);
                console.log("Construye templo  ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 9] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 5, parseInt(condicion) + 9);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 6] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 5, parseInt(condicion) - 6);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 7] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 3, parseInt(condicion) + 7);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 6] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 6);
                console.log("Construye templo ");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 7] == "l"
            ) {
                //Llamar la funcion construir()
                constTemple(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) - 3, parseInt(condicion) - 7);
                console.log("Construye templo ");
            }
            break;

        default:
            break;
    }
}

function almshouse(myArray, material) {
    var condicion = barrido(myArray, material);

    function constalms(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha4.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;


    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("Construye asilo");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("Construye asilo");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye asilo");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
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
                constalms(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye asilo da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye asilo da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1);
                console.log("Construye asilo da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constalms(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4);
                console.log("Construye asilo  da");
            }
            break;
        default:
            break;
    }
}

function feastHall(myArray, material) {
    var condicion = barrido(myArray, material);

    function constfeast(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha4.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;


    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 2] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 8] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 2] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
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
                constfeast(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1);
                console.log("Construye SalaDeFiestas");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constfeast(parseInt(condicion), parseInt(condicion) - 44, parseInt(condicion) + 4);
                console.log("Construye SalaDeFiestas ");
            }
            break;
        default:
            break;
    }
}

function tavern(myArray, material) {
    var condicion = barrido(myArray, material);

    function consttavern(c1, c2, c3) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha4.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                // return 'casa';
            }
        }
        bandera = true;


    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 2] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 2);
                console.log("Construye taverna");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) - 8);
                console.log("Construye taverna");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye taverna");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
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
                consttavern(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye taverna da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye taverna da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1);
                console.log("Construye taverna da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                consttavern(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 4);
                console.log("Construye taverna  da");
            }
            break;
        default:
            break;
    }
}

function bakery(myArray, material) {
    var condicion = barrido(myArray, material);

    function constBakery(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha5.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) + 1] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye pasteleria");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye pasteleria");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye pasteleria");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constBakery(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 8);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "l" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 5);
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
                constBakery(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 5, parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye pasteleria da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "l"
            ) {
                //Llamar la funcion construir()
                constBakery(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye pasteleria  da");
            }
            break;

        default:
            break;
    }
}

function market(myArray, material) {
    var condicion = barrido(myArray, material);

    function constMarket(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha5.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye mercado");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye mercado");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye mercado");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constMarket(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye mercado da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "m" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 8);
                console.log("Construye mercado da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye mercado da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 5);
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
                constMarket(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye mercado");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 5, parseInt(condicion) - 1, parseInt(condicion) + 3);
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
                constMarket(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 5);
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "p"
            ) {
                //Llamar la funcion construir()
                constMarket(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye mercado ");
            }
            break;

        default:
            break;
    }
}

function tailor(myArray, material) {
    var condicion = barrido(myArray, material);

    function constTailor(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha5.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye sastre");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye sastre");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye sastre");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constTailor(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 8);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 5);
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
                constTailor(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 5, parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye sastre da");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "p"
            ) {
                //Llamar la funcion construir()
                constTailor(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye sastre  da");
            }
            break;

        default:
            break;
    }
}

function theater(myArray, material) {
    var condicion = barrido(myArray, material);

    function constTeatro(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha5.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 1] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 4, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constTeatro(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "p" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 8);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye teatro");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "m" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 5);
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
                constTeatro(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye teatro da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 5] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 5, parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("Construye teatro da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye teatro da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                constTeatro(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye teatro  da");
            }
            break;

        default:
            break;
    }
}

function uni(myArray, material) {
    var condicion = barrido(myArray, material);

    function constUni(c1, c2, c3, c4) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                // return 'casa';
            }
        }
        bandera = true;
    }
    switch (myArray[condicion]) {
        case "v":
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye uni");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 1);
                console.log("Construye uni");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) + 1, parseInt(condicion) + 4);
                console.log("Construye uni");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 1, parseInt(condicion) - 4, parseInt(condicion) + 4);
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
                constUni(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 2);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) + 4, parseInt(condicion) + 5, parseInt(condicion) + 8);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 8);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) + 1, parseInt(condicion) + 2, parseInt(condicion) + 5);
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
                constUni(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 5);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 5, parseInt(condicion) - 1, parseInt(condicion) + 3);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) + 1, parseInt(condicion) + 5);
                console.log("Construye uni da");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "p"
            ) {
                //Llamar la funcion construir()
                constUni(parseInt(condicion), parseInt(condicion) - 3, parseInt(condicion) - 4, parseInt(condicion) - 5);
                console.log("Construye uni  da");
            }
            break;

        default:
            break;
    }
}

function bank(myArray, material) {
    var condicion = barrido(myArray, material);

    function constBank(c1, c2, c3, c4, c5) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        construirDesignTD(c5);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha6.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c5).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c5).onclick = function() {
                applyConst(c5, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        bandera = true;
    }
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
                constBank(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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

    function constFactory(c1, c2, c3, c4, c5) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        construirDesignTD(c5);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha6.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c5).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c5).onclick = function() {
                applyConst(c5, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        bandera = true;
    }
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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
                constFactory(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
                console.log("Construye fabrica");
            }
            break;

        default:
            break;
    }
}

function tradingPost(myArray, material) {
    var condicion = barrido(myArray, material);

    function constTrading(c1, c2, c3, c4, c5) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        construirDesignTD(c3);
        construirDesignTD(c4);
        construirDesignTD(c5);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha6.png' alt='granero' />`)
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }

        if (document.getElementById(c2).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c2).onclick = function() {
                applyConst(c2, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c3);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c3).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c3).onclick = function() {
                applyConst(c3, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c4);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c4).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c4).onclick = function() {
                applyConst(c4, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c5);
                // return 'casa';
            }
        }
        if (document.getElementById(c5).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c5).onclick = function() {
                applyConst(c5, `<img src='/public/ficha2.png' alt='granero' />`)
                resetTD(c1);
                resetTD(c2);
                resetTD(c3);
                resetTD(c4);
                // return 'casa';
            }
        }
        bandera = true;
    }
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
                constTrading(parseInt(condicion), parseInt(condicion) + 3, parseInt(condicion) + 4, parseInt(condicion) + 6, parseInt(condicion) + 7);
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