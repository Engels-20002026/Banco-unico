document.addEventListener("DOMContentLoaded", () => {
    const cinta = document.querySelector('.imgmovidas');
    const totalImagenes = 3;
    let indiceActual = 0;

    function moverCarrusel() {
        indiceActual++;

        if (indiceActual >= totalImagenes) {
            indiceActual = 0;
        }

        const desplazamiento = indiceActual * -(100 / totalImagenes);
        cinta.style.transform = `translateX(${desplazamiento}%)`;
    }

    setInterval(moverCarrusel, 5000);
});
