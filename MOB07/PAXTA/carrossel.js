const imagens = [
    "jena.png",
    "sako.jpg",
    "jkbts.png"
]
let indice = 0;
function atualizar() {
    document.getElementById("slide").src = imagens[indice];
    document.getElementById("atual").innerText = indice + 1;
}
function proxima() { indice = (indice + 1) % imagens.length; atualizar(); }
function anterior() { indice = (indice - 1 + imagens.length) % imagens.length; atualizar(); }