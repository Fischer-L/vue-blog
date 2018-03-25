import Dexie from "dexie";
import { doItLater } from "./utils";
import * as dummy from "../../static/dummyData.js";

function nonEmptyString(s) {
  return s && typeof s === "string";
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
      doItLater(window, () => this._db.posts.put(Object.assign({}, post)));
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
// Currently, mainly, the data are posts and we assume data passed from
// the server as below:
//
// Post: {
// 
//   id: String. The post unique id,
// 
//   author: String. The post author name,
//   
//   time: Number. The post publish time in MS since January 1, 1970, 00:00:00,
//   
//   thumbnail: String. The author's thumbnail img url,
//   
//   title: String. The post title,
//   
//   // The main img is the img highlighting this post, will
//   // be used on promoting, listing the post and so on.
//   mainImg: {
//     basic: String. Must, the url of the default version.
//     big: String. Optional, the url of the version for the big srcreen device,
//     mid: String. Optional, the url of the version for the mid srcreen device,
//     small: String. Optional, the url of the version for the small srcreen device,
//     xsmall: String. Optional, the url of the version for the extra small srcreen device,
//   },
// 
//   // String. The body of the post.
//   // We assume there is an post-editing page which let users write posts.
//   // The page can let users input text, insert links and insert pictures right now.
//   // And in our system we store the article body in the HTML format.
//   body: `
//     <span>............<span>
//     <a href="https://a.com">a.com</a>
//     <img src="https://b.com/b.jpg"
//          // Belows are optional
//          data-srcset-big="The srcset value for the big srcreen device"
//          data-srcset-mid="The srcset value for the mid srcreen device"
//          data-srcset-small="The srcset value for the small srcreen device"
//          data-srcset-xsmall="The srcset value for the extra small srcreen device"
//          data-sizes-big="The sizes value for the big srcreen device"
//          data-sizes-mid="The sizes value for the mid srcreen device"
//          data-sizes-small="The sizes value for the small srcreen device"
//          data-sizes-xsmall="The sizes value for the extra small srcreen device" />
//   `
// }
// 
// promoPost: {
// 
//   id: String. The post unique id,
//   
//   title: String. The post title,
//   
//   // The main img is the img highlighting this post, will
//   // be used on promoting, listing the post and so on.
//   mainImg: {
//     basic: String. Must, the url of the default version.
//     big: String. Optional, the url of the version for the big srcreen device,
//     mid: String. Optional, the url of the version for the mid srcreen device,
//     small: String. Optional, the url of the version for the small srcreen device,
//     xsmall: String. Optional, the url of the version for the extra small srcreen device,
//   },
// 
// }
// 
// postListItem: {
// 
//   id: String. The post unique id,
//   
//   title: String. The post title,
//   
//   // The main img is the img highlighting this post, will
//   // be used on promoting, listing the post and so on.
//   mainImg: {
//     basic: String. Must, the url of the default version.
//     big: String. Optional, the url of the version for the big srcreen device,
//     mid: String. Optional, the url of the version for the mid srcreen device,
//     small: String. Optional, the url of the version for the small srcreen device,
//     xsmall: String. Optional, the url of the version for the extra small srcreen device,
//   },
// 
//   author: String. The post author name,
//    
//   time: Number. The post publish time in MS since January 1, 1970, 00:00:00,
//   
//   thumbnail: String. The author's thumbnail img url,
// 
// }
const appData = {

  _sanitizePromoPost(data) {
    let cleanData = {};

    if (nonEmptyString(data.id)) {
      cleanData.id = data.id;
    } else {
      cleanData = null;
    }

    if (cleanData && nonEmptyString(data.title)) {
      cleanData.title = data.title;
    } else {
      cleanData = null;
    }

    if (cleanData &&
        data.mainImg && typeof data.mainImg === "object") {

      let { basic, big, mid, small, xsmall } = data.mainImg;
      cleanData.mainImg = {};
      if (nonEmptyString(basic)) {
        // We need at least the basic version
        cleanData.mainImg.basic = basic;
        cleanData.mainImg.big = nonEmptyString(big) ? big : undefined;
        cleanData.mainImg.mid = nonEmptyString(mid) ? mid : undefined;
        cleanData.mainImg.small = nonEmptyString(small) ? small : undefined;
        cleanData.mainImg.xsmall = nonEmptyString(xsmall) ? xsmall : undefined;
      } else {
        cleanData = null;
      }
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

    if (cleanData && nonEmptyString(data.author)) {
      cleanData.author = data.author;
    } else {
      cleanData = null;
    }
    
    if (cleanData && nonEmptyString(data.thumbnail)) {
      cleanData.thumbnail = data.thumbnail;
    } else {
      cleanData = null;
    }

    return cleanData;
  },

  _sanitizePost(data) {
    let cleanData = this._sanitizePostListItem(data);

    if (cleanData && nonEmptyString(data.body)) {
      cleanData.body = data.body;
    } else {
      cleanData = null;
    }

    return cleanData;
  },

  // Somewhere in our app, there must be a place doing this job
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

  // The _fetch in charge of going out to the network to fetch data.
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
      doItLater(window, async () => {
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