window.onload = randomBuilds();
window.onload = ruletaInicio();
var idMaterial = '';
var materiales = [];

//Funcion que obtiene el id del campo del material seleccionado
async function getid(id) {
    idMaterial = id;
}

//Funciones para cambiar el cursor a la imagen del material seleccionado
async function madera() {
    getid()
    document.getElementById("madera").onclick = function() {
        document.getElementById("container")
            .classList.remove(
                "cursormadera",
                "cursortrigo",
                "cursorladrillo",
                "cursorvidrio",
                "cursorpiedra",
                "cursornormal"
            );
        document.getElementById("container").classList.toggle("cursormadera");
    };
}

async function trigo() {
    getid()
    document.getElementById("trigo").onclick = function() {
        document.getElementById("container")
            .classList.remove(
                "cursormadera",
                "cursortrigo",
                "cursorladrillo",
                "cursorvidrio",
                "cursorpiedra",
                "cursornormal"
            );
        document.getElementById("container").classList.toggle("cursortrigo");

    };
}

async function vidrio() {
    getid()
    document.getElementById("vidrio").onclick = function() {
        document.getElementById("container")
            .classList.remove(
                "cursormadera",
                "cursortrigo",
                "cursorladrillo",
                "cursorvidrio",
                "cursorpiedra",
                "cursornormal"
            );
        document.getElementById("container").classList.toggle("cursorvidrio");

    };
}


async function ladrillo() {
    getid()
    document.getElementById("ladrillo").onclick = function() {
        document.getElementById("container")
            .classList.remove(
                "cursormadera",
                "cursortrigo",
                "cursorladrillo",
                "cursorvidrio",
                "cursorpiedra",
                "cursornormal"
            );
        document.getElementById("container").classList.toggle("cursorladrillo");

    };
}

async function piedra() {
    getid()
    document.getElementById("piedra").onclick = function() {
        document.getElementById("container")
            .classList.remove(
                "cursormadera",
                "cursortrigo",
                "cursorladrillo",
                "cursorvidrio",
                "cursorpiedra",
                "cursornormal"
            );
        document.getElementById("container").classList.toggle("cursorpiedra");
    };
}

//Funcion para poner en el tablero el material, el cursor cambia con las clases 'cursor'
function setMaterial(id) {
    switch (document.getElementById("container").classList.value) {
        case "container cursorpiedra":
            if (document.getElementById(id).classList.contains('construir')) {} else {
                document.getElementById(id).innerHTML =
                    "<img src='/public/Piedra.png' alt='piedra' class='img-material'/>";
                document
                    .getElementById("container")
                    .classList.remove(
                        "cursormadera",
                        "cursortrigo",
                        "cursorladrillo",
                        "cursorvidrio",
                        "cursorpiedra"
                    );
                document.getElementById("container").classList.add("cursornormal");
                document.getElementById(id).style.pointerEvents = "none";
                cambiarMaterial();
                myArray[parseInt(id)] = "p";
                barrido(myArray, "p");
                cotage(myArray, "p");
                cathedral(myArray, "p");
                fountain(myArray, "p");
                cloister(myArray, "p");
                archGuild(myArray, "p");
                inn(myArray, "p");
                orchard(myArray, "p");
                abbey(myArray, "p");
                chapel(myArray, "p");
                temple(myArray, "p");
                almshouse(myArray, "p");
            }
            break;
        case "container cursorladrillo":
            if (document.getElementById(id).classList.contains('construir')) {

            } else {
                document.getElementById(id).innerHTML =
                    "<img src='/public/Ladrillo.png' alt='Ladrillo' class='img-material'/>";
                document
                    .getElementById("container")
                    .classList.remove(
                        "cursormadera",
                        "cursortrigo",
                        "cursorladrillo",
                        "cursorvidrio",
                        "cursorpiedra"
                    );
                document.getElementById("container").classList.add("cursornormal");
                document.getElementById(id).style.pointerEvents = "none";
                cambiarMaterial();
                myArray[parseInt(id)] = "l";
                barrido(myArray, "l");
                cotage(myArray, "l");
                cathedral(myArray, "l");
                cloister(myArray, "l");
                archGuild(myArray, "l");
                palaceMandras(myArray, "l");
                granary(myArray, "l");
                abbey(myArray, "l");
                temple(myArray, "l");
            }
            break;
        case "container cursormadera":
            if (document.getElementById(id).classList.contains('construir')) {

            } else {
                document.getElementById(id).innerHTML =
                    "<img src='/public/madera.png' alt='madera' class='img-material'/>";
                document
                    .getElementById("container")
                    .classList.remove(
                        "cursormadera",
                        "cursortrigo",
                        "cursorladrillo",
                        "cursorvidrio",
                        "cursorpiedra"
                    );
                document.getElementById("container").classList.add("cursornormal");
                document.getElementById(id).style.pointerEvents = "none";
                cambiarMaterial();
                myArray[parseInt(id)] = "m";
                barrido(myArray, "m");
                cotage(myArray, "m");
                farm(myArray, "m");
                cathedral(myArray, "m");
                fountain(myArray, "m");
                cloister(myArray, "m");
                archGuild(myArray, "m");
                palaceMandras(myArray, "m");
                granary(myArray, "m");
                greehouse(myArray, "m");
                orchard(myArray, "m");
                feastHall(myArray, "m");
            }
            break;
        case "container cursorvidrio":
            if (document.getElementById(id).classList.contains('construir')) {

            } else {
                document.getElementById(id).innerHTML =
                    "<img src='/public/Vidrio.png' alt='Vidrio' class='img-material'/>";
                document
                    .getElementById("container")
                    .classList.remove(
                        "cursormadera",
                        "cursortrigo",
                        "cursorladrillo",
                        "cursorvidrio",
                        "cursorpiedra"
                    );
                document.getElementById("container").classList.add("cursornormal");
                document.getElementById(id).style.pointerEvents = "none";
                cambiarMaterial();
                myArray[parseInt(id)] = "v";
                barrido(myArray, "v");
                cotage(myArray, "v");
                cathedral(myArray, "v");
                cloister(myArray, "v");
                archGuild(myArray, "v");
                palaceMandras(myArray, "v");
                inn(myArray, "v");
                greehouse(myArray, "v");
                abbey(myArray, "v");
                chapel(myArray, "v");
                temple(myArray, "v");
                almshouse(myArray, "v");
                feastHall(myArray, "v");
            }
            break;
        case "container cursortrigo":
            if (document.getElementById(id).classList.contains('construir')) {

            } else {
                document.getElementById(id).innerHTML =
                    "<img src='/public/Trigo.png' alt='Trigo' class='img-material'/>";
                document
                    .getElementById("container")
                    .classList.remove(
                        "cursormadera",
                        "cursortrigo",
                        "cursorladrillo",
                        "cursorvidrio",
                        "cursorpiedra"
                    );
                document.getElementById("container").classList.add("cursornormal");
                document.getElementById(id).style.pointerEvents = "none";
                cambiarMaterial();
                myArray[parseInt(id)] = "t";
                barrido(myArray, "t");
                cotage(myArray, "t");
                farm(myArray, "t");
                cathedral(myArray, "t");
                archGuild(myArray, "t");
                palaceMandras(myArray, "t");
                inn(myArray, "t");
                granary(myArray, "t");
                greehouse(myArray, "t");
                orchard(myArray, "t");
            }
            break;
        default:
            break;
    }
}

//Ps el boton de reinicio
function restart() {
    var mensaje = confirm("¿Seguro quieres reiniciar el juego?");
    if (mensaje.valueOf()) {
        for (let i = 0; i < 16; i++) {
            document.getElementById(i).innerHTML = "";
            ruletaInicio();
            document.getElementById(i).style.pointerEvents = "auto";
            document.getElementById("container")
                .classList.remove(
                    "cursormadera",
                    "cursortrigo",
                    "cursorladrillo",
                    "cursorvidrio",
                    "cursorpiedra",
                    "construir",
                    "construido"
                );
            document.getElementById("container").classList.add("cursornormal");
            document.getElementById(i).classList.remove("td-tablero", "tdh", "tda", "construir", "construido");
            document.getElementById(i).classList.toggle("td-tablero");
        }
        myArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        randomBuilds();
        ruletaInicio();
    } else {}
}

//funcion que genera la seleccion de edificios aleatoria
function randomBuilds() {
    for (let i = 0; i < 6; i++) {
        var random = Math.ceil(Math.random() * 4);
        var indice = 10 * i + random;
        switch (indice) {
            case 1:
                document.getElementById("c2").innerHTML =
                    "<img src='/public/builds/granja.png' alt='granja' class='img-builds'/>";
                break;
            case 2:
                document.getElementById("c2").innerHTML =
                    "<img src='/public/builds/granero.png' alt='granero' class='img-builds'/>";
                break;
            case 3:
                document.getElementById("c2").innerHTML =
                    "<img src='/public/builds/invernadero.png' alt='invernadero' class='img-builds'/>";
                break;
            case 4:
                document.getElementById("c2").innerHTML =
                    "<img src='/public/builds/huerto.png' alt='huerto' class='img-builds'/>";
                break;
            case 11:
                document.getElementById("c3").innerHTML =
                    "<img src='/public/builds/fuente.png' alt='fuente' class='img-builds'/>";
                break;
            case 12:
                document.getElementById("c3").innerHTML =
                    "<img src='/public/builds/molinoPiedra.png' alt='molinoPiedra' class='img-builds'/>";
                break;
            case 13:
                document.getElementById("c3").innerHTML =
                    "<img src='/public/builds/cobertizo.png' alt='cobertizo' class='img-builds'/>";
                break;
            case 14:
                document.getElementById("c3").innerHTML =
                    "<img src='/public/builds/pozo.png' alt='pozo' class='img-builds'/>";
                break;
            case 21:
                document.getElementById("c4").innerHTML =
                    "<img src='/public/builds/abadia.png' alt='abadia' class='img-builds'/>";
                break;
            case 22:
                document.getElementById("c4").innerHTML =
                    "<img src='/public/builds/capilla.png' alt='capilla' class='img-builds'/>";
                break;
            case 23:
                document.getElementById("c4").innerHTML =
                    "<img src='/public/builds/claustro.png' alt='claustro' class='img-builds'/>";
                break;
            case 24:
                document.getElementById("c4").innerHTML =
                    "<img src='/public/builds/templo.png' alt='templo' class='img-builds'/>";
                break;
            case 31:
                document.getElementById("c5").innerHTML =
                    "<img src='/public/builds/asilo.png' alt='asilo' class='img-builds'/>";
                break;
            case 32:
                document.getElementById("c5").innerHTML =
                    "<img src='/public/builds/sala de fiestas.png' alt='sala de fiestas' class='img-builds'/>";
                break;
            case 33:
                document.getElementById("c5").innerHTML =
                    "<img src='/public/builds/posada.png' alt='posada' class='img-builds'/>";
                break;
            case 34:
                document.getElementById("c5").innerHTML =
                    "<img src='/public/builds/taverna.png' alt='taverna' class='img-builds'/>";
                break;
            case 41:
                document.getElementById("c6").innerHTML =
                    "<img src='/public/builds/pasteleria.png' alt='pasteleria' class='img-builds'/>";
                break;
            case 42:
                document.getElementById("c6").innerHTML =
                    "<img src='/public/builds/mercado.png' alt='mercado' class='img-builds'/>";
                break;
            case 43:
                document.getElementById("c6").innerHTML =
                    "<img src='/public/builds/sastre.png' alt='sastre' class='img-builds'/>";
                break;
            case 44:
                document.getElementById("c6").innerHTML =
                    "<img src='/public/builds/teatro.png' alt='teatro' class='img-builds'/>";
                break;
            case 51:
                document.getElementById("c7").innerHTML =
                    "<img src='/public/builds/banco.png' alt='banco' class='img-builds'/>";
                break;
            case 52:
                document.getElementById("c7").innerHTML =
                    "<img src='/public/builds/fabrica.png' alt='fabrica' class='img-builds'/>";
                break;
            case 53:
                document.getElementById("c7").innerHTML =
                    "<img src='/public/builds/centroComercial.png' alt='centroComercial' class='img-builds'/>";
                break;
            case 54:
                document.getElementById("c7").innerHTML =
                    "<img src='/public/builds/almacen.png' alt='almacen' class='img-builds'/>";
                break;
            default:
                break;
        }
    }
    var random2 = Math.ceil(this.Math.random() * 12);
    switch (random2) {
        case 1:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/gremioArquitecto.png' alt='gremioArquitecto' class='img-builds' />";

            break;
        case 2:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/palacioMandras.png' alt='palacioMandras' class='img-builds'/>";
            break;
        case 3:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/atalayaOpalo.png' alt='atalayaOpalo' class='img-builds'/>";
            break;
        case 4:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/archivoSegundaEdad.png' alt='archivoSegundaEdad' class='img-builds'/>";
            break;
        case 5:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/santuario.png' alt='santuario' class='img-builds'/>";
            break;
        case 6:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/castilloBarret.png' alt='castilloBarret' class='img-builds'/>";
            break;
        case 7:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/forum.png' alt='forum' class='img-builds'/>";
            break;
        case 8:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/catedral.png' alt='catedral' class='img-builds'/>";
            break;
        case 9:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/starloom.png' alt='starloom' class='img-builds'/>";
            break;
        case 10:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/Fuerte.png' alt='Fuerte' class='img-builds'/>";
            break;
        case 11:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/estatua.png' alt='estatua' class='img-builds'/>";
            break;
        case 12:
            document.getElementById("c8").innerHTML =
                "<img src='/public/builds/uni.png' alt='uni' class='img-builds'/>";
            break;

        default:
            break;
    }
}

//Funcion que revuelve los materiales del array materiales
async function randomArray() {
    materiales = ["m", "m", "m", "p", "p", "p", "v", "v", "v", "t", "t", "t", "l", "l", "l"];
    materiales = await materiales.sort(function() {
        return Math.random() - 0.5;
    });
}

//Funcion que agrega los primeros 3 materiales
function ruletaInicio() {
    randomArray()
    if (materiales[0] === 'm') {
        document.getElementById(`m1`).innerHTML = `<img src="/public/madera.png" class="img-material" id="madera" onclick='madera()'>`;
        madera();
        idMaterial = 'm1';

    } else if (materiales[0] === 'p') {
        document.getElementById(`m1`).innerHTML = `<img src='/public/Piedra.png' id='piedra' class='img-material' onclick='piedra()'>`;
        piedra();
        idMaterial = 'm1';

    } else if (materiales[0] === 'v') {
        document.getElementById(`m1`).innerHTML = `<img src='/public/Vidrio.png' id='vidrio' class='img-material' onclick='vidrio()'>`;
        vidrio();
        idMaterial = 'm1';

    } else if (materiales[0] === 't') {
        document.getElementById(`m1`).innerHTML = `<img src='/public/Trigo.png' id='trigo' class='img-material' onclick='trigo()'>`;
        trigo();
        idMaterial = 'm1';

    } else if (materiales[0] === 'l') {
        document.getElementById(`m1`).innerHTML = `<img src='/public/Ladrillo.png' id='ladrillo' class='img-material' onclick='ladrillo()'>`;
        ladrillo();
        idMaterial = 'm1';
    }
    if (materiales[1] === 'm') {
        document.getElementById(`m2`).innerHTML = `<img src="/public/madera.png" class="img-material" id="madera" onclick='madera()'>`;
        madera();
        idMaterial = 'm2';

    } else if (materiales[1] === 'p') {
        document.getElementById('m2').innerHTML = `<img src='/public/Piedra.png' id='piedra' class='img-material' onclick='piedra()'>`;
        piedra();
        idMaterial = 'm2';

    } else if (materiales[1] === 'v') {
        document.getElementById('m2').innerHTML = `<img src='/public/Vidrio.png' id='vidrio' class='img-material' onclick='vidrio()'>`;
        vidrio();
        idMaterial = 'm2';

    } else if (materiales[1] === 't') {
        document.getElementById('m2').innerHTML = `<img src='/public/Trigo.png' id='trigo' class='img-material' onclick='trigo()'>`;
        trigo();
        idMaterial = 'm2';

    } else if (materiales[1] === 'l') {
        document.getElementById('m2').innerHTML = `<img src='/public/Ladrillo.png' id='ladrillo' class='img-material' onclick='ladrillo()'>`;
        ladrillo();
        idMaterial = 'm2';

    }
    if (materiales[2] === 'm') {
        document.getElementById(`m3`).innerHTML = `<img src="/public/madera.png" class="img-material" id="madera" onclick='madera()'>`;
        madera();
        idMaterial = 'm3';

    } else if (materiales[2] === 'p') {
        document.getElementById(`m3`).innerHTML = `<img src='/public/Piedra.png' id='piedra' class='img-material' onclick='piedra()'>`;
        piedra();
        idMaterial = 'm3';

    } else if (materiales[2] === 'v') {
        document.getElementById(`m3`).innerHTML = `<img src='/public/Vidrio.png' id='vidrio' class='img-material' onclick='vidrio()'>`;
        vidrio();
        idMaterial = 'm3';

    } else if (materiales[2] === 't') {
        document.getElementById(`m3`).innerHTML = `<img src='/public/Trigo.png' id='trigo' class='img-material' onclick='trigo()'>`;
        trigo();
        idMaterial = 'm3';

    } else if (materiales[2] === 'l') {
        document.getElementById(`m3`).innerHTML = `<img src='/public/Ladrillo.png' id='ladrillo' class='img-material' onclick='ladrillo()'>`;
        ladrillo();
        idMaterial = 'm3';
    }
    ruletaMateriales();
    ruletaMateriales();
    ruletaMateriales();
}


//funcion de cambio de materiales ruleta
async function cambiarMaterial() {
    switch (materiales[0]) {
        case 'm':
            document.getElementById(idMaterial).innerHTML = await `<img src="/public/madera.png"id="madera" class="img-material" onclick='madera()'>`;
            ruletaMateriales();
            break;
        case 'l':
            document.getElementById(idMaterial).innerHTML = await `<img src='/public/Ladrillo.png' id='ladrillo' class='img-material' onclick='ladrillo()'>`;
            ruletaMateriales();
            break;
        case 'p':
            document.getElementById(idMaterial).innerHTML = await `<img src='/public/Piedra.png' id='piedra' class='img-material' onclick='piedra()'>`;
            ruletaMateriales();
            break;
        case 'v':
            document.getElementById(idMaterial).innerHTML = await `<img src='/public/Vidrio.png' id='vidrio' class='img-material' onclick='vidrio()'>`;
            ruletaMateriales();
            break;
        case 't':
            document.getElementById(idMaterial).innerHTML = await `<img src='/public/Trigo.png' id='trigo' class='img-material' onclick='trigo()'>`;
            ruletaMateriales();
            break;
        default:
            break;
    }
}

function ruletaMateriales() {
    var primerMaterial = materiales[0];
    materiales.shift();
    materiales.push(primerMaterial);
}