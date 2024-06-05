import { async } from 'regenerator-runtime';

export default {
  timeout(s) {
    return new Promise((_, reject) => {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  },

  AJAX: async function (url, uploadData = undefined) {
    try {
      const fetchApi = uploadData
        ? fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(uploadData),
          })
        : fetch(url);

      const request = await Promise.race([fetchApi, this.timeout(5)]);
      const data = await request.json();
      if (!request.ok)
        throw new Error(`❌ ${data.message}(${error.status}) ❌`);
      return data;
    } catch (error) {
      console.error(`💣 ${error}`);
      throw error;
    }
  },

  // async getJson(url) {
  //   try {
  //     const request = await Promise.race([fetch(`${url}`), this.timeout(5)]);
  //     const data = await request.json();

  //     if (!request.ok) throw new Error(`${request.status}`);

  //     return data;
  //   } catch (err) {
  //     throw err;
  //   }
  // },

  // async sendJson(url, uploadData) {
  //   try {
  //     const sendData = fetch(url, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(uploadData),
  //     });

  //     console.log(JSON.stringify(uploadData));

  //     const request = await Promise.race([sendData, this.timeout(5)]);
  //     const data = await request.json();

  //     if (!request.ok) throw new Error(`💣${data.message} (${request.status})`);
  //     return data;
  //   } catch (error) {
  //     console.error(`💣 ${error}`);
  //     throw error;
  //   }
  // },
};
