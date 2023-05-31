// Attendre que le document HTML soit entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les éléments avec la classe "gallery"
  const galleryElements = document.querySelectorAll(".gallery");

  // Parcourir chaque élément de la galerie
  galleryElements.forEach(function (element) {
    // Appliquer la fonction mauGallery sur chaque élément de la galerie avec les options spécifiées
    mauGallery(element, {
      columns: {
        xs: 1,  // Nombre de colonnes pour les écrans extra petits (<= 576px)
        sm: 2,  // Nombre de colonnes pour les écrans petits (>= 576px)
        md: 3,  // Nombre de colonnes pour les écrans moyens (>= 768px)
        lg: 3,  // Nombre de colonnes pour les écrans larges (>= 992px)
        xl: 3,  // Nombre de colonnes pour les écrans extra larges (>= 1200px)
      },
      lightBox: true,       // Activer la fonction lightbox
      lightboxId: "myAwesomeLightbox",  // ID de la lightbox
      showTags: true,       // Afficher les tags
      tagsPosition: "top",  // Position des tags (en haut)
    });
  });
});
