// Variable para rastrear el idioma actual
let currentLanguage = 'en'; // Predeterminado a inglés

  // Lógica para cambiar otras partes de la página según el idioma
  function idioma() {

    // Redirige a la página correspondiente según el idioma
    if (currentLanguage == 'es') {
      location.href = '../es/index.html';
    } else {
      location.href = '../html/index.html';
    }
  }


// Función para cambiar de idioma
function changeLanguage() {
  // Cambia el idioma actual
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

  // Actualiza el texto del botón según el idioma
  const languageBtn = document.getElementById('changeLanguageBtn');
  languageBtn.textContent = currentLanguage === 'en' ? 'En' : 'Es';

  // Muestra un mensaje en la consola para verificar que la función se ejecuta
console.log("Cambiando de idioma...");

  // Llama a la función idioma después de un breve retraso (500 milisegundos)
  setTimeout(idioma, 500);
}

  // Cambia el texto del botón de cambio de idioma
  document.getElementById('changeLanguageBtn').textContent = currentNavbarContent.languageBtn;