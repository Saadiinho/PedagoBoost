alert("Les prestations ne sont pas encore disponible");

const goAbout = document.getElementById("goAbout");


// Sélectionnez la div que vous souhaitez surveiller
const about = document.getElementById("about");

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
function ajouterClasseQuandVisible() {
  if (estVisible(about)) {
    about.classList.remove("animate__fadeOut");
    about.classList.add("animate__fadeIn");
  } else {
    about.classList.add("animate__fadeOut");
    about.classList.remove("animate__fadeIn");
  }
}

// Ajoutez un gestionnaire d'événements de défilement
window.addEventListener("scroll", ajouterClasseQuandVisible);

// Appelez la fonction une fois au chargement de la page pour vérifier l'état initial
ajouterClasseQuandVisible();
