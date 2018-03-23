<script>
import AuthorBlock from "./AuthorBlock";

export default {
  // Actually this component represents a *post*, however,
  // we already got a Post.vue so take another similar name...
  name: "Article",

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  components: {
    AuthorBlock
  },

  // The render template:
  // <template>
  //   <article class="vueBlog-article">
  //     <section class="vueBlog-article-header text-left">
  //       <AuthorBlock :author="" :thumbnail="" :time="" />
  //       <h2 class="vueBlog-article-header-title text-truncate"></h2>
  //     </section>
  //     <img class="vueBlog-article-main-img w-100 d-block" v-bind:style="background-img" />
  //     <section class="vueBlog-article-body text-left">
  //       <p class="vueBlog-article-body-p">
  //         <span class="align-text-top"></span>
  //         <a class="vueBlog-article-link align-text-top" href=''></a>
  //       </p>
  //       <img class="vueBlog-article-body-img" src='' />
  //     </section>
  //   </article>
  render(createElement) {
    let header = this._renderHeader(this.post, createElement);
    let mainImg = this._renderMainImg(this.post, createElement);
    let body = this._renderArticleBody(this.post, createElement);
    return createElement("article", {
      attrs: {
        class: "vueBlog-article"
      }
    }, [ header, mainImg, body ]);
  },

  methods: {
    _renderHeader(post, createElement) {
      let authorBlock = createElement(AuthorBlock, {
        props: {
          author: post.author,
          thumbnail: post.thumbnail,
          time: post.time,
        }
      });
      let title = createElement("h2", {
        attrs: {
          class: "vueBlog-article-header-title text-truncate"
        },
        domProps: {
          textContent: post.title
        }
      });
      return createElement("section", {
        attrs: {
          class: "vueBlog-article-header text-left"
        }
      }, [ authorBlock, title ]);
    },

    _renderMainImg(post, createElement) {
      return createElement("img", {
        attrs: {
          class: "vueBlog-article-main-img w-100 d-block"
        },
        style: {
          backgroundImage: `url(${encodeURI(post.mainImg)})`
        }
      });
    },

    _renderArticleBody(post, createElement) {
      let elms = post.article.children;
      let count = elms.length;
      let children = [];
      for (let i = 0; i < count; ++i) {
        let elm = elms[i];
        switch (elm.tagName.toLowerCase()) {
          case "img":
            children.push(createElement("img", {
              attrs: {
                class: "vueBlog-article-body-img d-block",
                src: encodeURI(elm.src)
              }
            }));
            break;

          case "p":
            children.push(this._renderParagraph(elm, createElement));
            break;
        }
      }

      return createElement("section", {
        attrs: {
          class: "vueBlog-article-body text-left"
        }
      }, children);
    },

    _renderParagraph(p, createElement) {
      let elms = p.children;
      let count = elms.length;
      let children = [];

      for (let i = 0; i < count; ++i) {
        let elm = elms[i];
        let tag = elm.tagName.toLowerCase();

        switch (elm.tagName.toLowerCase()) {
          case "a":
            children.push(createElement("a", {
              attrs: {
                href: encodeURI(elm.href),
                class: "vueBlog-article-link  align-text-top",
              },
              domProps: {
                textContent: elm.textContent
              }
            }));
            break;

          case "span":
            children.push(createElement("span", {
              attrs: {
                class: "align-text-top",
              },
              domProps: {
                textContent: elm.textContent
              }
            }));
            break;
        }
      }

      return createElement("p", {
        attrs: {
          class: "vueBlog-article-body-p"
        }
      }, children);
    },
  },
}

</script>

<style scoped lang="scss">
.vueBlog-article-body,
.vueBlog-article-header {
  padding: 1.5em;
}

.vueBlog-article-header-title {
  margin: 0.5em 0 0 0;
  white-space: normal;
}

.vueBlog-article-main-img {
  height: 25em;
  background: center/cover no-repeat;
}

.vueBlog-article-body-img {
  max-width: 100%;
  margin: 1.8em auto;
}

.vueBlog-article-body-p {
  margin: 1.2em 0;
}

.vueBlog-article-body-p:first-child::first-letter {
  font-size: 5em;
  float: left;
}

.vueBlog-article-link,
.vueBlog-article-link:hover,
.vueBlog-article-link:active {
  color: unset;
  text-decoration: underline;
}
</style>
