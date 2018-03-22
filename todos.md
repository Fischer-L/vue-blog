# App structure
<App>
  v <navBar sfc>
  <router-view/>

# Router views
- v <Home sfc> = /
  - v <slider sfc>
  - v <Posts>

# v <Posts sfc> = /posts
  - v <Posts>

# <Post sfc> = /posts/:postId
  - <article>
  - <Posts>


  <article class="article">
    <section class="article-header text-left">
      <AuthorBlock :author="TMP_author" :thumbnail="TMP_thumbnail" :time="TMP_time" />
      <h2 class="article-header-title text-truncate">My Bathroom Mirror Is Smarter Than Yours</h2>
    </section>
    <img class="article-main-img w-100 d-block" v-bind:style="TMP_styleObject" />
    <section class="article-body text-left">
      <p class="article-body-p"><span class="align-text-top">Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies.There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a </span><a class="align-text-top" href='http://www.twowaymirrors.com/'>two-way mirror</a><span class="align-text-top">, a </span><a class="align-text-top" href='http://www.amazon.com/dp/B00H0FK2A6/'>display panel</a><span> and </span><a class="align-text-top" href='http://www.ebay.com/itm/360626141655'>controller board</a><span class="align-text-top">, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result:</span></p>
      <img class="article-body-img" src='http://localhost:8080/static/post_0_pic1.jpg' />
      <p class="article-body-p"><span>Welcome to my bathroom. Please excuse the carefully arranged mess around the medicine cabinet and its pristine mirror surface. To the right of where my face would be we have the time and date. To the left is the current weather and a 24-hour forecast. Below are some recent news headlines. Here’s a close-up of that area:</span></p>
    </section>
  </article>
</template>