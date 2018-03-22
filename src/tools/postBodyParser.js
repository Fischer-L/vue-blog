const postBodyParser = {

  /**
   * @param docBody {HTMLBodyElement} a document.body of the document representing a post.
   * @return {Promise} Once done, the promise will be resolved with the virtual article element.
   */
  _buildArticleFromDOM(docBody) {
    return new Promise(resolve => {
      const MAX_LOOP_COUNT = 200;
      let article = { tagName: "article", children: [] };
      let elms = docBody.children || null;
      let count = elms ? elms.length : 0;
      buildArticle(resolve, article, elms, count, 0, MAX_LOOP_COUNT, null);
    });

    // This is a helping function to let us divide jobs into batches
    // so we will not blocking the main thread.
    function buildArticle(resolve, article, elms, count, currentIdx, MAX_LOOP_COUNT, pendingElmP) {
      let loopCount = 0
      while (currentIdx < count && loopCount < MAX_LOOP_COUNT) {
        let elm = elms[currentIdx];
        let tag = elm.tagName.toLocaleLowerCase();
        switch (tag) {
          case "a":
          case "span":
            if (!pendingElmP) {
              pendingElmP = {
                tagName: "p",
                children: [],
              };
            }

            if (tag === "a") {
              if (elm.href.indexOf("javascript") !== 0) {
                pendingElmP.children.push({
                  tagName: "a",
                  href: elm.href,
                  textContent: elm.textContent
                });
              } else {
                // Watch out! We see a `javascript` scripting url!
                // It's very unsafe so turn this into a <span>.
                tag = "span";
                elm = {
                  textContent: elm.textContent
                };
              }
            }

            if (tag === "span") {
              pendingElmP.children.push({
                tagName: "span",
                textContent: elm.textContent
              });
            }
            break;

          case "br":
          case "img":
            if (pendingElmP) {
              article.children.push(pendingElmP);
              pendingElmP = null;
            }
            
            if (tag === "img") {
              article.children.push({
                tagName: "img",
                src: elm.src
              });
            }
            break;
        }

        ++currentIdx;
        ++loopCount;
      }
      // Don't forget the last <p> if existed.
      if (pendingElmP) {
        article.children.push(pendingElmP);
        pendingElmP = null;
      }

      if (currentIdx < count) {
        // OK, there are more elements out there to loop but 
        // we've already looped long enough. Let's pause and continue in the next tick.
        window.requestAnimationFrame(() => {
          buildArticle(resolve, article, elms, count, currentIdx, MAX_LOOP_COUNT, pendingElmP);
        });
        return;
      }
      resolve(article);
    }
  },

  /**
   * Parse the text body of a post and turn it into a virtual article element.
   * This virtual article element is essentially an object. It is like as below:
   *
   * article = {
   *   // Corresponding to the HTMLElement's tagName property
   *   tagName: "article",
   *   
   *   // Corresponding to the HTMLElement's children property
   *   children: [
   *     {
   *       // Corresponding to the <p> element
   *       tagName: "p",
   * 
   *       children: [
   *         {
   *           // Corresponding to the <span> element
   *           tagName: "span",
   * 
   *           // Corresponding to the HTMLElement's textContent property
   *           textContent: "some text content"
   *         } | 
   *         {
   *           // Corresponding to the <a> element
   *           tagName: "a",
   *           
   *           // Corresponding to the <a> element's href property
   *           href: "https://foo.com",
   * 
   *           // Corresponding to the HTMLElement's textContent property
   *           textContent: "some text content"
   *         }
   *       ]
   *     } |
   *     {
   *       // Corresponding to the <img> element
   *       tagName: "img",
   *       
   *       // Corresponding to the <img> element's src property
   *       src: "https://foo.com/bar.jpg"
   *     }
   *   ]  
   * }
   * 
   * Why chose a virtual article element? Because
   * 1. It is a safer representation of a post article.
   *    Touching dom elements may trigger undesired scripts, 
   *    especially we are handling something from the outside.
   * 2. Better performance.
   *    Using an object in the memory is basically faster than a dom element.
   * 3. It is a good representation of a post article.
   *    We can think and handle it like a dom article.
   *    It also separates the rendering operation from the post data format.
   *    In the future, if we wanted to switch the post format from HTML to Markdown,
   *    for example, only would have to take care of that while parsing here, 
   *    the rest of the app wouldn't need to update.
   *
   * @param postBody {String} the post's text body
   * @return {Promise} If parsing is successful,
   *                   the promise will be resolved with the parsed article;
   *                   otherwise, will be resolve with `null`
   */
  async parse(postBody) {
    if (!postBody) {
      return null;
    }

    let article = null;
    try {
      // DOMParser is safe because no script would be executed.
      let doc = (new DOMParser()).parseFromString(postBody, "text/html");
      if (doc && doc.body) {
        // For safety concern, shoudln't use the parsed content from the outside directly.
        // Let's build our virtual article element.
        article = await this._buildArticleFromDOM(doc.body);
      }
    } catch (e) {
      // Print out the error so know what happened
      console.error(e);
      article = null;
    }
    return article && article.children.length > 0 ? article : null;
  },
};

export default postBodyParser;