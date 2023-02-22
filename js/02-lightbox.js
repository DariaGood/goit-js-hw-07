import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const galleryGeneral = document.querySelector(".gallery");

//Додаємо галерею на сторінку
const newArrayImages = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
<img class="gallery__image" 
src="${image.preview}" 
alt="${image.description}" />
</a>`
  )
  .join(""); // Дуже важливо!!!
galleryGeneral.insertAdjacentHTML("afterbegin", newArrayImages);

//Додаємо basicLightbox - бібліотеку JS для модальних вікон та пишем фунуцію відкриття
const onClickOpening = (event) => {
  if (event.target.tagName !== "IMG") {
    //Дуже важливо!!!
    return;
  }
  event.preventDefault();

  let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox", function () {
    console.log("open picture");
  });

  
};

// Відкриваємо зображення
galleryGeneral.addEventListener("click", onClickOpening);


