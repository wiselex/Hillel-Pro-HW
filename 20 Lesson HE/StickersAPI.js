class StickersApi {
   static URL = "https://63680d18edc85dbc84e1209b.mockapi.io/api/hillel/api_hw-20";

   static request(settings) {
      const setting = {
         uri: '',
         method: 'GET',
         data: null,
         error: 'API request error.',
         ...settings,
      };

      return fetch(`${this.URL}/${setting.uri}`, {
         method: setting.method,
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: setting.data ? JSON.stringify(setting.data) : undefined,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         throw new Error(setting.error);
      });
   }

   static getAll() {
      return this.request({ error: 'Can not fetch stickers.' });
   }

   static create() {
      let sticker = {
         description : ''
      }
      return this.request({ method: 'POST', data: sticker, error: `Can not create sticker.` });
   }

   static update(id, text) {
      let sticker = {
         description : text,
         id: id,
      }
      return this.request({ uri: id, method: 'PUT', data: sticker, error: `Can not update sticker.` });
   }

   static delete(id) {
      return this.request({ uri: id, method: 'DELETE', error: `Can not delete sticker.` });
   }
}