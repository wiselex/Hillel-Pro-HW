'use strict'

const STICKERS_CONTAINER_SELECTOR = '#stickersContainer';
const STICKER_SELECTOR = '.sticker';
const CREATE_NEW_STICKER_SELECTOR = '#createNewSticker';
const DELETE_BTN_SELECTOR = '.sticker__delete_btn';
const DESCRIPTION_AREA_SELECTOR = '.sticker__description';

const $stickersContainer = $(STICKERS_CONTAINER_SELECTOR);
const $rootContainer = $('#rootContainer');

$rootContainer.on('click', CREATE_NEW_STICKER_SELECTOR , onCreateNewStickerClick);
$stickersContainer.on('click', DELETE_BTN_SELECTOR, onDeleteBtnClick);
$stickersContainer.on('click',DESCRIPTION_AREA_SELECTOR, onDescriptionAreaClick);

StickersApi.getAll().then(renderStickers)

function onCreateNewStickerClick(){
   StickersApi.create()
   .then(newSticker => {
      renderSticker(newSticker)
   })
   .catch(showError);
}

function onDeleteBtnClick(e) {
   const $stickerEl = getSticker($(e.target));
   const $id = getIdBySticker($(e.target));

   StickersApi.delete($id).catch(showError);
   $stickerEl.remove();
}

function onDescriptionAreaClick(e){
   const $stickerEl = getSticker($(e.target))
   const id = $stickerEl[0].dataset.id;
   let $textAreaValue = $stickerEl[0].children[1].textContent;

   $($stickerEl[0].children[1]).on('change', function () {
      $textAreaValue = $(this).val();
      StickersApi.update(id, $textAreaValue)
      .catch(showError);
   })
}

function renderStickers(stickers) {
   const html = stickers.map(generateHtmlStickers).join('');
   $stickersContainer.append( html);
}

function renderSticker(sticker){
   const html = generateHtmlStickers(sticker);
   $stickersContainer.append(html);
}

function generateHtmlStickers(sticker){
   return ` 
      <div class="sticker" data-id="${sticker.id}">
         <button type="button" class="sticker__delete_btn">X</button>
         <textarea name="description" id="description" class="sticker__description">${sticker.description}</textarea>
      </div>
   `;
}

function getIdBySticker($el){
   const $result = getSticker($el);
   return $result.data('id');
}

function getSticker($el) {
   return $el.closest(STICKER_SELECTOR);
}

function showError(e) {
   alert(e.message);
}