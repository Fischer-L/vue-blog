import Dexie from "dexie";
import * as dummy from "../../static/dummyData.js";

function doItLater(task) {
  // This is for the case we want to use `requestIdleCallback`
  // but it got less support than `requestAnimationFrame` so...
  let later = window.requestIdleCallback || window.requestAnimationFrame;
  later(task);
}

// OK, we only save posts locally, why?
// Posts shouldn't change once written. They are static.
// However, the post list and the promotion posts may be changed
// because of the server settings. These are dynamical.
// We may save the post list and the promotion posts locally
// once we got some policy here in the future.
const postsDB = {
  _db: new Dexie("vueBlog_db"),

  init() {
    this._db.version(1).stores({
      posts: "id"
    });
  },

  set(post) { 
    if (post) {
      doItLater(() => this._db.posts.put(Object.assign({}, post)));
    }
  },

  async get(id) {
    let post = null;
    try {
      post = await this._db.posts.get({ id });
    } catch(e) {
      console.error(e);
    }
    return post || null;
  }
};
postsDB.init();

// this `appData` in charge of providing the data for our app's use.
// Currently, mainly, the data is posts.
const appData = {
  _sanitizePromoPost(data) {
    let cleanData = {};

    if (data.id && typeof data.id === "string") {
      cleanData.id = data.id;
    } else {
      cleanData = null;
    }

    if (cleanData &&
        data.title && typeof data.title === "string") {
      cleanData.title = data.title;
    } else {
      cleanData = null;
    }

    if (cleanData &&
        data.mainImg && typeof data.mainImg === "string") {
      cleanData.mainImg = data.mainImg;
    } else {
      cleanData = null;
    }

    return cleanData;
  },

  _sanitizePostListItem(data) {
    let cleanData = this._sanitizePromoPost(data);

    let t = parseInt(data.time);
    if (cleanData && t > 0) {
      cleanData.time = t;
    } else {
      cleanData = null;
    }

    if (cleanData &&
        data.author && typeof data.author === "string") {
      cleanData.author = data.author;
    } else {
      cleanData = null;
    }
    
    if (cleanData &&
        data.thumbnail && typeof data.thumbnail === "string") {
      cleanData.thumbnail = data.thumbnail;
    } else {
      cleanData = null;
    }

    return cleanData;
  },

  _sanitizePost(data) {
    let cleanData = this._sanitizePostListItem(data);

    if (cleanData &&
        data.body && typeof data.body === "string") {
      cleanData.body = data.body;
    } else {
      cleanData = null;
    }

    return cleanData;
  },

  // Somwwhere in our app, there must be a place doing this job
  // and this is that place.
  _sanitizeData(key, data) {
    if (!data) {
      return null;
    }

    let cleanData = null;
    switch (key) {
      case "post":
        cleanData = this._sanitizePost(data);
        break;

      case "postList":
      case "promoPosts":
        if (data instanceof Array) {
          let sanitizer =
            key === "postList" ? "_sanitizePostListItem" : "_sanitizePromoPost";
          cleanData = [];
          data.forEach(item => {
            let cleanItem = this[sanitizer](item);
            if (cleanItem) {
              cleanData.push(cleanItem);
            }
          });
          if (cleanData.length == 0) {
            cleanData = null;
          }
        }
        break;
    }
    return cleanData;
  },

  // The _fetch in charge of go out to the network to fetch data.
  // Although now we use the local dummy data, still should see it as an async method.
  async _fetch(key, params = {}) {
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

  get(key, params = {}) {
    return new Promise(resolve => {
      doItLater(async () => {
        let data = null;
        
        if (key === "post" && params.id) {
          let dbData = await postsDB.get(params.id);
          data = dbData || data;
        }

        if (!data) {
          data = await this._fetch(key, params);
          data = this._sanitizeData(key, data);  
          if (data && key === "post") {
            postsDB.set(data);
          }
        }
        resolve(data);
      });
    });
  }
};

export default appData;