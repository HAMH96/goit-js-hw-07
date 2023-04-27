import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const itemsGallery = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__link" href=${galleryItem.original}>
        <img class="gallery__image" src=${galleryItem.preview} 
        data-source=${galleryItem.original} alt=${galleryItem.description}/>
        </a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", itemsGallery);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalUrl}">`);
  instance.show();
  window.addEventListener("keydown", onEsckeyPress);

  function onEsckeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEsckeyPress);
    }
  }
});
