'use strict'

const CONTACT_ITEM_SELECTOR = '.contact_item';
const DELETE_BTN_CLASS = 'delete_btn';

const contactList = document.querySelector('#contactsList');
const addingForm = document.querySelector('#addingForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phone = document.querySelector('#phone');

addingForm.addEventListener('submit', onAddingFormSubmit);
contactList.addEventListener('click', onContactListClick);

Contacts.getList().then(renderContactList);

function onAddingFormSubmit(e){
   e.preventDefault();
   const contact = getContact();

   if (contact === undefined){
      return;
   }

   Contacts.create(contact)
      .then(newContact => {
         renderContactItem(newContact);
         clearForm(addingForm);
      })
      .catch(showError);
}

function onContactListClick(e) {
   const contactItem = getContactItem(e.target);

   if (contactItem) {
      if (e.target.classList.contains(DELETE_BTN_CLASS)) {
         e.target.closest(CONTACT_ITEM_SELECTOR).remove();
         Contacts.delete(contactItem.dataset.id);
      }
   }
}

function getContact() {
   if(!validateEmpty(firstName) || !validateEmpty(lastName) || !validateEmpty(phone)){
      alert("All field must be filled in!")
      return;
   }
   return {
      name: firstName.value,
      lastName: lastName.value,
      telephone: phone.value,
   };
}

function getContactItem(el) {
   return el.closest(CONTACT_ITEM_SELECTOR);
}

function renderContactList(list) {
   const html = list.map(generateHtml).join('');
   contactList.insertAdjacentHTML('beforeend', html);
}

function renderContactItem(list){
   const contactItemTemplateHTML = generateHtml(list);
   contactList.insertAdjacentHTML('beforeend', contactItemTemplateHTML);
}

function generateHtml(contact){
   return `
      <tr class="contact_item" data-id="${contact.id}">
         <td>${contact.name}</td>
         <td>${contact.lastName}</td>
         <td>${contact.telephone}</td>
         <td>
            <button class="delete_btn" id="deleteBtn">Delete</button>
         </td>
      </tr>
   `;
}

function validateEmpty(enter){
   let enterValue = enter.value.trim();
   return enterValue !== '';
}

function clearForm(form){
   form.reset();
}

function showError(e) {
   alert(e.message);
}