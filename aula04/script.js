// const parar = document.getElementById ("Parar")

// parar.style.backgroundColor = "red"
// const atencao = document.getElementById("atencao")
// atencao.style.backgroundColor = "yellow"

function parar() {
    document.getElementById("stop").style.backgroundColor = "red";
    document.getElementById("atencao").style.backgroundColor = "grey";
    document.getElementById("go").style.backgroundColor = "grey";
}

function atencao() {
    document.getElementById("atencao").style.backgroundColor = "yellow";
    document.getElementById("stop").style.backgroundColor = "grey";
    document.getElementById("go").style.backgroundColor = "grey";
}

function go() {
    document.getElementById("go").style.backgroundColor = "green";
    document.getElementById("stop").style.backgroundColor = "grey";
    document.getElementById("atencao").style.backgroundColor = "grey";
}