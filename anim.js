// Espera a que el contenido de la página cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio");
    const lyricsContainer = document.getElementById("lyrics");
    const titulo = document.querySelector(".titulo");

    // Array de objetos con la letra y su tiempo de inicio
    const lyricsData = [
      { text: "Yo que vine y tú que no estás..", time: 0 },
      { text: "Tulipanes...", time: 4 },
      { text: "Siempre te quiero culpar", time: 7 },
      { text: "De alguna forma incriminar", time: 11 },
      { text: "Mas sé que tú saldrás impune", time: 15 },
      { text: "Perfume...", time: 20 },
      { text: "De tu cuerpo emana paz", time: 24 },
      { text: "Es tu aroma natural", time: 27.5 },
      { text: "Mas tu mirada nos desune", time: 32 },
      { text: "Octubre...", time: 37 },
      { text: "No me atrevo a recordar", time: 40 },
      { text: "No te atrevas a marcharte", time: 44 },
      { text: "Espero te haya gustado Jossi >_< ", time: 48 },
      // Puedes agregar el resto de la letra aquí
    ];

    // Evento que se dispara continuamente mientras la canción se reproduce
    audio.addEventListener("timeupdate", function() {
        // Busca la línea de letra más reciente que ya debería haber empezado
        let currentLineText = "";
        for (let i = 0; i < lyricsData.length; i++) {
            if (audio.currentTime >= lyricsData[i].time) {
                currentLineText = lyricsData[i].text;
            } else {
                break;
            }
        }

        // Actualiza el texto solo si ha cambiado para evitar recargas innecesarias
        if (lyricsContainer.innerText !== currentLineText) {
            lyricsContainer.style.opacity = 0; // Inicia la transición de desvanecimiento
            setTimeout(() => {
                lyricsContainer.innerText = currentLineText;
                lyricsContainer.style.opacity = 1; // Muestra la nueva letra con un fade-in
            }, 300); // Pequeña espera para que la transición sea suave
        }
    });

    // Función para ocultar el título inicial
    function ocultarTitulo() {
      // Define la animación de desaparición
      titulo.style.animation = "fadeOut 3s ease-in-out forwards";
      // Oculta el elemento del DOM después de que termine la animación
      setTimeout(function () {
        titulo.style.display = "none";
      }, 3000); 
    }

    // Llama a la función para ocultar el título después de 3 segundos
    setTimeout(ocultarTitulo, 3000);

    // Añadimos una animación de fadeOut al CSS para usarla aquí
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
});