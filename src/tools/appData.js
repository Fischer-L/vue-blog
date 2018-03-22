import postData from "../../static/postData.js";

// this `appData` in charge of providing the data for our app's use.
// Currently, mainly, the data is posts.
const appData = {
  _get(key, params = {}) {

    let data = null;
    switch (key) {
      case "post":
        let id = params.id;
        id = "0"; // TMP
        if (id) {
          let post = postData.find(post => post.id === id);  
          if (post) {
            data = Object.assign({}, post);
          }
        }
        break;
    }

    return data;
  },

  get(key, params) {
    return new Promise((resolve, reject) => {
      // `requestIdleCallback` fits us more in this case
      // but it got less support than `requestAnimationFrame` so...
      window.requestAnimationFrame(() => {
        let data = this._get(key, params);
        if (data) {
          resolve(data);
        } else {
          resolve(null);
        }
      });
    });
  }
};

export default appData;