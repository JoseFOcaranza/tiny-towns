document.getElementById('madera').onclick = function() {
    document.getElementById("container").classList.remove("cursormadera", "cursortrigo", "cursorladrillo", "cursorvidrio", "cursorpiedra");
    document.getElementById("container").classList.toggle("cursormadera");
}

document.getElementById('trigo').onclick = function() {
    document.getElementById("container").classList.remove("cursormadera", "cursortrigo", "cursorladrillo", "cursorvidrio", "cursorpiedra");
    document.getElementById("container").classList.toggle("cursortrigo");
}

document.getElementById('ladrillo').onclick = function() {
    document.getElementById("container").classList.remove("cursormadera", "cursortrigo", "cursorladrillo", "cursorvidrio", "cursorpiedra");
    document.getElementById("container").classList.toggle("cursorladrillo");

}

document.getElementById('vidrio').onclick = function() {
    document.getElementById("container").classList.remove("cursormadera", "cursortrigo", "cursorladrillo", "cursorvidrio", "cursorpiedra");
    document.getElementById("container").classList.toggle("cursorvidrio");

}

document.getElementById('piedra').onclick = function() {
    document.getElementById("container").classList.remove("cursormadera", "cursortrigo", "cursorladrillo", "cursorvidrio", "cursorpiedra");
    document.getElementById("container").classList.toggle("cursorpiedra");

}

// function getId(id) {
//     console.log(id);
// }

function setMaterial(id) {
    console.log(document.getElementById('container').classList.value);
    console.log(id)
    switch (document.getElementById('container').classList.value) {
        case 'container cursorpiedra':
            document.getElementById(id).innerHTML = "<img src='/public/Piedra.png' alt='piedra' class='img-material'/>";
            document.getElementById(id).
            console.log(id)
            break;
        case 'container cursorladrillo':
            document.getElementById(id).innerHTML = "<img src='/public/Ladrillo.png' alt='piedra' class='img-material'/>";
            break;
        case 'container cursormadera':
            document.getElementById(id).innerHTML = "<img src='/public/madera.png' alt='piedra' class='img-material'/>";
            break;
        case 'container cursorvidrio':
            document.getElementById(id).innerHTML = "<img src='/public/Vidrio.png' alt='piedra' class='img-material'/>";
            break;
        case 'container cursortrigo':
            document.getElementById(id).innerHTML = "<img src='/public/Trigo.png' alt='piedra' class='img-material'/>";
            break;
        default:
            break;
    }
    document.getElementById(id).removeAttribute(onclick);
}

function restart() {
    for (let i = 0; i < 15; i++) {
        document.getElementById.
        document.getElementById(id).getAttribute(onclick);
    }
}