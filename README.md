# vue-blog

> A Vue.js project

## 頁面規劃

- 首頁 (route: /, Home.vue)
  - Promotion Posts (PromoPostsContainer.vue): 整合 Swiperjs
  - 文章列表 (PostListContainer.vue)

- 文章列表頁 (route: /posts, Posts.vue)
  - 文章列表 (PostListContainer.vue)

- 文章頁 (route: /posts/:id, Post.vue)
  - 文章主體 (Article.vue) or 404 訊息 (當找不到文章主體時顯示)
  - 其他文章列表 (PostListContainer.vue)

## 說明
1. 採用 Bootstrap 4, Vue, Vue Router, SCSS, Vue Webpack template

2. 執行 `npm run build` 或 `yarn build` 會建置專案，JS, CSS, HTML 皆會被 minified 於 ./dist 目錄下

## 遇到困難
基本上功能需求都有完成，但還是可以說明一下碰到的問題

- 和其他專案時間衝突: 因為也有其他專案作業先提出了，和本專案產生時間衝突，無法於原本需求時間完成
  - 解決方案：由於已先答應其他專案作業需求，仍須先執行，經初步評估各專案規模, 個人可利用時間與合理遞延，訂出了另一個截止時間，提出了延後截止時間的要求，也謝謝你們願意諒解本人的困難而同意延後要求

  - 替代方案: 取消其他家的面談邀請，收到本專案作業後同時又有其他家的面談邀情，但考量如此將影響本專案之時間，所以取消其他家的面談邀請

- 未曾使用過 Vue: Vue 雖然聽過，但從未使用過與碰過，熟悉度為零
  - 解決方案
    - 尋找 Vue 教學文章, 影片，學習基本操作
    - 利用技術限制，找出 Vue 重點功能
    - 利用 Vue 生態系: 利用 Vue Webpack template 快速建置專案環境


## 如何執行
(請在新版 Firefox/Chrome 試驗)

1. 安裝 nodejs 或 yarn(optional).

2. 下載此 repo 

3. 在 repo folder 下執行 `npm install` 或 `yarn install`

4. 執行 `npm run start` 或 `yarn start`

5. 打開 `http://localhost:8080` 於 Firefox/Chrome

6. 萬一執行出現問題，以下本專案環境設定供參考:
    - MAC OS 10.12.6
    - node v9.4.0
    - yarn 1.3.2
    - npm 5.6.0

