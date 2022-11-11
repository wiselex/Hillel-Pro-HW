class Contacts {
   static URL = "https://63680d18edc85dbc84e1209b.mockapi.io/api/hillel/api_hw-18";

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

   static delete(id) {
      return fetch(`${this.URL}/${id}`, {
         method: 'DELETE',
      })
      .then(res => {
         if (res.ok) {
            return res.json()
         }
            throw new Error(`Can't delete contact with id "${id}"`)
         })
   }
}  