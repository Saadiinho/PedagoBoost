alert("Les prestations ne sont pas encore disponible");

const goAbout = document.getElementById("goAbout");


// Sélectionnez la div que vous souhaitez surveiller
const about = document.getElementById("about");

// Fonction pour gérer les changements de taille d'écran
function gestionnaireDeChangementDeTaille() {
  // Utilisez une media query pour vérifier la largeur de l'écran
  if (window.matchMedia("(max-width: 768px)").matches) {
    about.classList.remove("animate__fadeOut");
    about.classList.add("animate__fadeIn");
  } 
}
// Fonction pour vérifier si la div est visible
function estVisible(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter une classe lorsque la div est visible
function addClassAbout() {
  if (estVisible(about)) {
    about.classList.remove("animate__fadeOut");
    about.classList.add("animate__fadeIn");
  } else {
    about.classList.add("animate__fadeOut");
    about.classList.remove("animate__fadeIn");
  }
  gestionnaireDeChangementDeTaille();
}

function addClassAbout() {
    if (estVisible(about)) {
      about.classList.remove("animate__fadeOut");
      about.classList.add("animate__fadeIn");
    } else {
      about.classList.add("animate__fadeOut");
      about.classList.remove("animate__fadeIn");
    }
    gestionnaireDeChangementDeTaille();
  }

// Ajoutez un gestionnaire d'événements de défilement
window.addEventListener("scroll", addClassAbout);

// Ajoutez un gestionnaire d'événements pour les changements de taille d'écran (par exemple, redimensionnement de la fenêtre)
window.addEventListener("resize", gestionnaireDeChangementDeTaille);

// Appelez la fonction une fois au chargement de la page pour gérer la classe en fonction de la taille d'écran initiale


// Appelez la fonction une fois au chargement de la page pour vérifier l'état initial
addClassAbout();
