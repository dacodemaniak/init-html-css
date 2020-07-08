/**
 * Modal : Gère l'affichage de la boîte modale au clic sur un élément de menu
 */

 function openModal() {
     console.log('Je dois ouvrir la boîte modale')

     // Récupérer le contenu du template #form-template
     const formTemplate = document.getElementById('form-template')

     // Copie du contenu du template
     const templateContent = formTemplate.content.cloneNode(true)

     // Raccrocher le contenu à l'élément "body" du document HTML
     document.body.appendChild(templateContent)
 }

 function closeModal() {
     const modal = document.getElementsByClassName('outer-modal')[0]
     document.body.removeChild(modal)
 }