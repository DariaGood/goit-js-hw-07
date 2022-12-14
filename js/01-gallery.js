import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryGridEL = document.querySelector('.gallery');
// Создаем элементы 
const galleryMarkup = galleryItems 
   
    .map (({preview, original, description}) => 
         
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join ('');

// Добавляем элементы в верстку

galleryGridEL.insertAdjacentHTML('beforeend', galleryMarkup);

// Устанавливаем прослушивателя события на клик по картинке ()

galleryGridEL.addEventListener('click', onClickPicture);
function onClickPicture (e) {
    if (e.target.nodeName !== "IMG") { // Проверка делегирования события
        return;
      };

      const instance = basicLightbox.create(` // Шаблонная функция лайтбокс для создания модал окна и зума картинки
      <img src="${e.target.dataset.source}" width="1400" height="600">
`)
instance.show();

// Добавляем возможность закрыть развернутую картинку с клавиатуры

window.addEventListener('keydown', closedBtnPicture);
function closedBtnPicture(e) {
    if (e.code === 'Escape') {
        instance.close();
      };
      
}

};


console.log(galleryItems);