import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

console.log(galleryList);

const galleryMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const createGallery = galleryItems.reduce((acc, item) => {
  return acc + galleryMarkup(item);
}, "");

galleryList.insertAdjacentHTML("beforeend", createGallery);
galleryList.addEventListener("click", modalOpenLightBox);

function modalOpenLightBox(event) {
  event.preventDefault();
  const img = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

  instance.show();

  galleryList.addEventListener("keydown", escClick);
  function escClick(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
