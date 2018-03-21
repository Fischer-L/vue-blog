# App structure
<App>
  <navBar sfc>
  <router-view/>

# Router views
- <Home sfc> = /
  - <slider sfc>
  - <Posts>

# <Posts sfc> = /posts
  - <article-link>

# <Post sfc> = /posts/:postId
  - <article>
  - <Posts>

