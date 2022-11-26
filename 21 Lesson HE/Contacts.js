class Contacts{
   static URL = 'https://62e664e269bd03090f6fd3ad.mockapi.io/contacts/';

   static EMPTY_CONTACT = {
      name: '',
      lastName: '',
      telephone: '',
      id: '',
   };

   static request(url = '', method = 'GET', body) {
       return fetch(Contacts.URL + url, {
           method,
           body: body ? JSON.stringify(body) : undefined,
           headers: {
               'Content-type': 'application/json',
           },
       })
           .catch((e) => {
               throw new Error(`Contacts can not execute request: ${e.message}`);
           });
   }

   static getList() {
       return Contacts
           .request()
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
               throw new Error("Can't retrieve contact list");
           });
   }

   static create(list) {
       return Contacts
           .request('', 'POST', list)
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
               throw new Error("Can't create new contact");
           });
   }

   static update(id, data) {
       return this.request(id, 'PUT', data);
   }

   static delete(id) {
       return Contacts
           .request(id, 'DELETE')
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
               throw new Error(`Can't delete contact with id "${id}"`);
           });
   }
}