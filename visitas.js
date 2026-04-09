const elementoContador = document.getElementById("contador-visitas");

// detecta se está em ambiente local
const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.protocol === "file:";

if (isLocal) {
    elementoContador.textContent = "modo teste";
} else {
    const chaveContador = "fisica-em-codigo-visitas-site";
    const url = `https://countapi.mileshilliard.com/api/v1/hit/${chaveContador}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            elementoContador.textContent = data.value;
        })
        .catch(() => {
            elementoContador.textContent = "indisponível";
        });
}