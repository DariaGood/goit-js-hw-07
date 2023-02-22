import { galleryItems } from './gallery-items.js';


// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");

//Додаємо галерею на сторінку
const newArrayImages = galleryItems
.map((image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
  <img
  class="gallery__image"
  src="${image.preview}"
  data-source="${image.original}"
  alt="${image.description}"
 >
  </a>
</div>`)
.join("");  // Дуже важливо!!!
gallery.insertAdjacentHTML("afterbegin", newArrayImages);

//Додаємо basicLightbox - бібліотеку JS для модальних вікон та пишем фунуцію відкриття
const onClickOpening = (event) => {
  if(event.target.tagName !== 'IMG') { //Дуже важливо!!!
      return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`<div class="modal">
      <p>
      <img src="${event.target.dataset.source}" width="1000" height="500" class="modal__image">
      </p>
  </div>`)
     
instance.show();
console.log("open picture");
 
// Перевірка активованості обробника кліку та закриття модалки
const modalEl  = document.querySelector('.modal__image');
modalEl.addEventListener('click', (event) => {
    if (event.target === modalEl) {
      instance.close();
      console.log("close picture")
    }
  });
 };


// Відкриваємо зображення
gallery.addEventListener("click", onClickOpening);






    




