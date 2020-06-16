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

        default:
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

    function constCotage(c1, c2) {
        var bandera = true;
        construirDesignTD(c1);
        construirDesignTD(c2);
        if (document.getElementById(c1).classList.contains("construir") && bandera == true) {
            bandera = false;
            document.getElementById(c1).onclick = function() {
                applyConst(c1, `<img src='/public/ficha2.png' alt='granero' />`)
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
                constFarm(parseInt(condicion), parseInt(condicion) + 1);
                console.log("CONSTRUYE fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 4);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "p"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 1);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 4);
                console.log("construye fuente");
            }
            break;
        case "p":
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 1);
                console.log("CONSTRUYE fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) + 4);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 1);
                console.log("construye fuente");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                constFarm(parseInt(condicion), parseInt(condicion) - 4);
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
                applyConst(c1, `<img src='/public/ficha2.png' alt='granero' />`)
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
    switch (myArray[condicion]) {
        case "t":
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 90 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 180 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 270 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado  termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 90 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 180 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 270 termina t");
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
                console.log("CONSTRUYE granero termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 90 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 180 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 270 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado  termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 90 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 180 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 270 termina m");
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
                console.log("CONSTRUYE granero termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 90 termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 180 termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero rotado 270 termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado  termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 90 termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 180 termina l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE granero espejeado 270 termina l");
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
                console.log("CONSTRUYE invernadero termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 90 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 180 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 270 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado  termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 90 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 180 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 270 termina t");
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
                console.log("CONSTRUYE invernadero termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 90 termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 180 termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 270 termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado  termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 90 termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 180 termina v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 270 termina v");
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
                console.log("CONSTRUYE invernadero termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 90 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 180 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero rotado 270 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado  termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 90 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) - 3] == "t" &&
                myArray[parseInt(condicion) - 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 180 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE invernadero espejeado 270 termina m");
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
                console.log("CONSTRUYE huerto termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 90 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) - 1] == "m" &&
                myArray[parseInt(condicion) + 3] == "t" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 180 termina t");
            }
            if (
                myArray[parseInt(condicion)] == "t" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 270 termina t");
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
                console.log("CONSTRUYE huerto termina p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "m" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 90 termina p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) - 4] == "t" &&
                myArray[parseInt(condicion) - 5] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 180 termina p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "m" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 270 termina p");
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
                console.log("CONSTRUYE huerto termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 90 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "t" &&
                myArray[parseInt(condicion) + 4] == "t" &&
                myArray[parseInt(condicion) + 5] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 180 termina m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "t" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 4] == "t"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE huerto rotado 270 termina m");
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
                console.log("CONSTRUYE abadia terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "p" &&
                myArray[parseInt(condicion) + 2] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "p" &&
                myArray[parseInt(condicion) - 9] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 270 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 7] == "v" &&
                myArray[parseInt(condicion) - 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 2] == "p" &&
                myArray[parseInt(condicion) - 6] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 270 terminando con l");
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
                console.log("CONSTRUYE abadia terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 270 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 270 terminando con p");
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
                console.log("CONSTRUYE abadia terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 9] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "p" &&
                myArray[parseInt(condicion) + 9] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia rotado 270 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "p" &&
                myArray[parseInt(condicion) - 6] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "p" &&
                myArray[parseInt(condicion) + 7] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "p" &&
                myArray[parseInt(condicion) + 6] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 3] == "p" &&
                myArray[parseInt(condicion) - 7] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE abadia espejeado 270 terminando con v");
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
                console.log("CONSTRUYE capilla terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 270 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "v" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 270 terminando con p");
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
                console.log("CONSTRUYE capilla terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v" &&
                myArray[parseInt(condicion) + 9] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla rotado 270 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 7] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "v" &&
                myArray[parseInt(condicion) + 6] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 3] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE capilla espejeado 270 terminando con v");
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
                console.log("CONSTRUYE templo terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "p" &&
                myArray[parseInt(condicion) + 9] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 3] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "v" &&
                myArray[parseInt(condicion) + 4] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 270 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "p" &&
                myArray[parseInt(condicion) + 6] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 3] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 90 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "v" &&
                myArray[parseInt(condicion) + 1] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 180 terminando con l");
            }
            if (
                myArray[parseInt(condicion)] == "l" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 7] == "v" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 270 terminando con l");
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
                console.log("CONSTRUYE templo terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "l" &&
                myArray[parseInt(condicion) + 1] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 270 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "l" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) + 4] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "v" &&
                myArray[parseInt(condicion) + 4] == "l" &&
                myArray[parseInt(condicion) + 8] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 90 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 1] == "l" &&
                myArray[parseInt(condicion) + 2] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 180 terminando con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) - 4] == "l" &&
                myArray[parseInt(condicion) - 8] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 270 terminando con p");
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
                console.log("CONSTRUYE templo terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 9] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 2] == "l" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 9] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo rotado 270 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 5] == "l" &&
                myArray[parseInt(condicion) - 6] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 1] == "p" &&
                myArray[parseInt(condicion) + 3] == "l" &&
                myArray[parseInt(condicion) + 7] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 90 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 5] == "l" &&
                myArray[parseInt(condicion) + 6] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 180 terminando con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) - 3] == "l" &&
                myArray[parseInt(condicion) - 7] == "l"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE templo espejeado 270 terminando con v");
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
                console.log("CONSTRUYE asilo terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "p" &&
                myArray[parseInt(condicion) - 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 90 terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 180 terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 270 terminada con v");
            }
            break;
        case "p":
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 1] == "p" &&
                myArray[parseInt(condicion) + 2] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE asilo terminada con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) + 4] == "p" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 90 terminada con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 180 terminada con p");
            }
            if (
                myArray[parseInt(condicion)] == "p" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "p"
            ) {
                //Llamar la funcion construir()
                console.log("construye asilo rotada 270 terminada con p");
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
                console.log("CONSTRUYE SalaDeFiestas terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) - 4] == "m" &&
                myArray[parseInt(condicion) - 8] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 90 terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 2] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 180 terminada con v");
            }
            if (
                myArray[parseInt(condicion)] == "v" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 8] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 270 terminada con v");
            }
            break;
        case "m":
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 1] == "m" &&
                myArray[parseInt(condicion) + 2] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("CONSTRUYE SalaDeFiestas terminada con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) + 4] == "m" &&
                myArray[parseInt(condicion) + 8] == "v"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 90 terminada con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 1] == "v" &&
                myArray[parseInt(condicion) + 1] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 180 terminada con m");
            }
            if (
                myArray[parseInt(condicion)] == "m" &&
                myArray[parseInt(condicion) - 4] == "v" &&
                myArray[parseInt(condicion) + 4] == "m"
            ) {
                //Llamar la funcion construir()
                console.log("construye SalaDeFiestas rotada 270 terminada con m");
            }
            break;
        default:
            break;
    }
}