import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
};

const createGallery = galleryItems.reduce((acc, item) => {
  return acc + galleryMarkup(item);
}, "");

galleryList.insertAdjacentHTML("beforeend", createGallery);

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });