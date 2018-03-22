// The postData.js is just our dummy posts source.

const ROOT_PATH = "http://localhost:8080/static/";

const posts = [
  {
    id: "0",
    author: "Ami Carey",
    time: 1521428435336,
    thumbnail: ROOT_PATH + "author_0.png",
    title: "My Bathroom Mirror Is Smarter Than Yours",
    mainImg: ROOT_PATH + "post_0_main.jpg",
    body: `
      <span>Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies.There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a </span>
      <a href='http://www.twowaymirrors.com/'>two-way mirror</a>
      <span>, a </span>
      <a href='http://www.amazon.com/dp/B00H0FK2A6/'>display panel</a>
      <span> and </span>
      <a href='http://www.ebay.com/itm/360626141655'>controller board</a>
      <span>, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result:</span>
      <img src='http://localhost:8080/static/post_0_pic1.jpg' />
      <span>Welcome to my bathroom. Please excuse the carefully arranged mess around the medicine cabinet and its pristine mirror surface. To the right of where my face would be we have the time and date. To the left is the current weather and a 24-hour forecast. Below are some recent news headlines. Here’s a close-up of that area:</span>
      <br />
      <span>Unless the weather is cloudy, there will be a little color in the UI, but for the most part the text and icons are monochrome to prevent them from being too distracting. The code behind this UI uses some simple Android APIs (e.g. this one is neat) plus Forecast for the weather and the Associated Press for news. Other concepts I’m playing with are traffic, reminders, and essentially anything that has a Google Now card. The idea is that you don’t need to interact with this UI. Instead, it updates automatically and there’s an open-ended voice search interface for anything else.</span>
      <br />
      <span>The display is only a couple of millimeters thin and embedded in a layer between the two-way mirror glass and the door of the medicine cabinet. That way it looks very clean and I can keep using all the shelf space inside. Here’s the open door at an angle and viewed edge-on:</span>
      <img src='http://localhost:8080/static/post_0_pic2.jpg' />
      <span>This prototype is still a work in progress and I haven’t spent much time on the software yet. The UI above is only a few hundred lines of code and I’m experimenting with different devices to run it—initially Chromecast, then Nexus Player, and most recently Fire TV Stick. That means until I settle on a platform and clean up the electronics it does look a little bit messy when you peek inside:</span>
      <img src='http://localhost:8080/static/post_0_pic3.jpg' />
      <span>And that’s where I am with this project so far. Looking forward to realizing some of the remaining ideas. Maybe I’ll post a more detailed making-of with the pictures I took during the build.</span>
    `
  },
  // {
  //   id: "2",
  //   author: "Joel Searby",
  //   time: 1521428435336,
  //   thumbnail: ROOT_PATH + "author_1.png",
  //   title: "Should You Leave SF for Austin? Meh, Perhaps Not",
  //   mainImg: ROOT_PATH + "post_1_main.jpg",
  //   body: `
  //     <span>Imoved to San Francisco just shy of a year ago, bright-eyed and brimming with foolish optimism, like most other people who end up in this city. A copywriting contract in a posh Financial District office and a healthy uptick in my regular magazine work represented, in my mind, the equivalent of an Oprah “aha!” moment—not much could convince me that I shouldn’t make the 28-hour journey west from my home in Austin, Texas.</span>
  //     <br />
  //   `
  // },
];

const postData = [
  posts[0],
];

export default postData;
