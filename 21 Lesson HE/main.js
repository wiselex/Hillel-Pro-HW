'use strict'

const CONTACT_LIST_SELECTOR = ('#contactsList');
const CONTACT_ITEM_SELECTOR = ('.contact_item');
const ADD_CONTACT_SELECTOR = ('#addBtn');
const EDIT_BTN_SELECTOR = ('.edit_btn');
const DELETE_BTN_SELECTOR = ('.delete_btn');
const MODAL_SELECTOR = ('#contactModal');
const CONTACT_FORM_SELECTOR = ('#contactForm');

let contactListArr = [];

$(ADD_CONTACT_SELECTOR).on('click', onAddContactBtnClick);

const $contactList = $(CONTACT_LIST_SELECTOR)
    .on('click', DELETE_BTN_SELECTOR, onDeleteClick)
    .on('click', EDIT_BTN_SELECTOR, onEditClick)

const $form = $(CONTACT_FORM_SELECTOR)[0];

const $modal = $(MODAL_SELECTOR).dialog({
    autoOpen: false,
    modal: true,
    show: {
        effect: "blind",
        duration: 500
    },
    hide: {
        effect: "blind",
        duration: 500
    },
    buttons: {
        Save: () => {
            const contact = getContact();

            if(!isContactValid(contact)){
                alert("Everything must be filled!")
                return;
            }
            
            if (contact.id) {
                updateContact(contact.id, contact);
            } else {
                createContact(contact);
            }

            closeModal();
        },
        Close: closeModal
    },
})

Contacts.getList()
    .then((list) => {
        contactListArr = list;

        renderContactList(list);
    })

function onAddContactBtnClick(e) {
    e.preventDefault();
    openModal(Contacts.EMPTY_CONTACT);
}

function onDeleteClick(e) {
    const id = getElementId($(e.target));

    deleteContact(id);
}

function onEditClick() {
    const $id = getElementId($(this));
    const contact = contactListArr.find(item => item.id === $id);

    openModal(contact);
}

function renderContactList(list) {
    const $list = list.map(generateHtml);

    $contactList.append($list);
}

function renderContactItem(item){
    const $item = generateContactEl(item);

    $contactList.append($item);
}

function getContact(){
    return {
        ...Contacts.EMPTY_CONTACT,
        id: $form.id.value,
        name: $form.name.value,
        lastName: $form.lastName.value,
        telephone: $form.telephone.value,
    };
}

function generateHtml(contact){
    return `
        <li class="contact_item" data-id="${contact.id}">
            <span>${contact.name}</span>
            <span>${contact.lastName}</span>
            <span>${contact.telephone}</span>
            <span>
                <button class="contacts_form_btn edit_btn">Edit</button>
                <button class="contacts_form_btn delete_btn">Delete</button>
            </span>
        </li>
    `;
}

function openModal(contact) {
    fillForm(contact);
    $modal.dialog('open');
}

function closeModal() {
    $modal.dialog('close');
}

function fillForm(contact){
    $form.name.value = contact.name;
    $form.lastName.value = contact.lastName;
    $form.telephone.value = contact.telephone;
    $form.id.value = contact.id;
}

function getElementId($el) {
    const $contact = getContactEl($el);

    return String($contact.data('id'));
}

function getContactEl($el) {
    return $el.closest(CONTACT_ITEM_SELECTOR);
}

function findContactElById(id) {
    return $contactList.find(`[data-id="${id}"]`);
}

function generateContactEl(contact) {
    return $(generateHtml(contact));
}

function createContact(contact) {
    Contacts
        .create(contact)
        .then((newContact) => {
            renderContactItem(newContact);
            contactListArr.push(newContact);
        })
}

function updateContact(id, changes) {
    Contacts.update(id, changes)
        .then(() => {
            const contact = contactListArr.find(item => item.id === id);
            const $contact = findContactElById(id);

            Object.keys(changes).forEach(key => contact[key] = changes[key]);
            $contact.replaceWith(generateContactEl(contact));
        })
}

function deleteContact(id) {
    Contacts.delete(id)
        .then(() => {
            const $contact = findContactElById(id);
            contactListArr = $contactList.filter(item => item.id !== id);

            $contact.remove();
        })
}

function validateEmpty(enter){
    let enterValue = enter.trim();
    return enterValue !== '';
}

function isContactValid(contact){
    return (validateEmpty(contact.name) || validateEmpty(contact.lastName) || validateEmpty(contact.telephone))
}