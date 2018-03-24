import * as dummy from "../../static/dummyData.js";

// this `appData` in charge of providing the data for our app's use.
// Currently, mainly, the data is posts.
const appData = {
  _fetchingPromise: {},

  _fetch(key, params = {}) {
    let data = null;
    switch (key) {
      case "post":
        let id = params.id;
        if (id) {
          let post = dummy.posts.find(post => post.id === id);  
          if (post) {
            data = Object.assign({}, post);
          }
        }
        break;

      case "postList":
      case "promoPosts":
        data = dummy[key].map(item => Object.assign({}, item));
        break;
    }

    return data;
  },

  get(key, params) {
    return new Promise((resolve, reject) => {
      // `requestIdleCallback` fits us more in this case
      // but it got less support than `requestAnimationFrame` so...
      window.requestAnimationFrame(() => {
        let data = this._fetch(key, params);
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