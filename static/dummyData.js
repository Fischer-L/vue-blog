// This is just our dummy data source.

const ROOT_PATH = "http://localhost:8080/static/";

const posts = [
  {
    id: "0",
    author: "Ami Carey",
    time: 1521822580304,
    thumbnail: ROOT_PATH + "author_0.png",
    title: "My Bathroom Mirror Is Smarter Than Yours",
    mainImg: {
      basic: ROOT_PATH + "post_0_main.jpg",
      big: ROOT_PATH + "post_0_main.jpg",
      mid: ROOT_PATH + "post_0_main.jpg",
      small: ROOT_PATH + "post_0_main.jpg",
      xsmall: ROOT_PATH + "post_0_main.jpg",
    },
    body: `
      <span>Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies.There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a </span>
      <a href='http://www.twowaymirrors.com/'>two-way mirror</a>
      <span>, a </span>
      <a href='http://www.amazon.com/dp/B00H0FK2A6/'>display panel</a>
      <span> and </span>
      <a href='http://www.ebay.com/itm/360626141655'>controller board</a>
      <span>, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result:</span>
      <img src='http://localhost:8080/static/post_0_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_0_pic1.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic1.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_0_pic1.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>Welcome to my bathroom. Please excuse the carefully arranged mess around the medicine cabinet and its pristine mirror surface. To the right of where my face would be we have the time and date. To the left is the current weather and a 24-hour forecast. Below are some recent news headlines. Here’s a close-up of that area:</span>
      <br />
      <span>Unless the weather is cloudy, there will be a little color in the UI, but for the most part the text and icons are monochrome to prevent them from being too distracting. The code behind this UI uses some simple Android APIs (e.g. this one is neat) plus Forecast for the weather and the Associated Press for news. Other concepts I’m playing with are traffic, reminders, and essentially anything that has a Google Now card. The idea is that you don’t need to interact with this UI. Instead, it updates automatically and there’s an open-ended voice search interface for anything else.</span>
      <br />
      <span>The display is only a couple of millimeters thin and embedded in a layer between the two-way mirror glass and the door of the medicine cabinet. That way it looks very clean and I can keep using all the shelf space inside. Here’s the open door at an angle and viewed edge-on:</span>
      <img src='http://localhost:8080/static/post_0_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."  
           data-srcset-big="http://localhost:8080/static/post_0_pic2.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic2.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_0_pic2.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>This prototype is still a work in progress and I haven’t spent much time on the software yet. The UI above is only a few hundred lines of code and I’m experimenting with different devices to run it—initially Chromecast, then Nexus Player, and most recently Fire TV Stick. That means until I settle on a platform and clean up the electronics it does look a little bit messy when you peek inside:</span>
      <img src='http://localhost:8080/static/post_0_pic3.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_0_pic3.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic3.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic3.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_0_pic3.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>And that’s where I am with this project so far. Looking forward to realizing some of the remaining ideas. Maybe I’ll post a more detailed making-of with the pictures I took during the build.</span>
    `
  },
  {
    id: "1",
    author: "Joel Searby",
    time: 1521649803416,
    thumbnail: ROOT_PATH + "author_1.jpg",
    title: "Should You Leave SF for Austin? Meh, Perhaps Not",
    mainImg: {
      basic: ROOT_PATH + "post_1_main.jpg",
      big: ROOT_PATH + "post_1_main.jpg",
      mid: ROOT_PATH + "post_1_main.jpg",
      small: ROOT_PATH + "post_1_main.jpg",
      xsmall: ROOT_PATH + "post_1_main.jpg",
    },
    body: `
      <span>Imoved to San Francisco just shy of a year ago, bright-eyed and brimming with foolish optimism, like most other people who end up in this city. A copywriting contract in a posh Financial District office and a healthy uptick in my regular magazine work represented, in my mind, the equivalent of an Oprah “aha!” moment—not much could convince me that I shouldn’t make the 28-hour journey west from my home in Austin, Texas.</span>
      <br />
      <span>Yes, Austin—the only suitable place in the Lone Star State for any liberal-minded person to set up shop, the town known for live music festivals and cowboy-crafted beer, the bastion for Southern creatives. It’s a metropolis with a reputation of being a hipster haven in the middle of the country, one that seamlessly blends green grass and spring-fed pools with high-end city living and a vivacious gastronomic scene. One where food trucks populate any spare lots that have yet to fall prey to urban planners. Where BBQ perfumes the air around Barton Springs Road; dog parks abound; coffee shops never close; and people seem unabashedly happy. But I’m here to tell you that there are caveats to what you’re dreaming up in your head as a cheaper, more relaxed version of San Francisco.</span>
      <br />
      <span>When the above statement is volleyed at me, my throat always clenches, my mind dizzy from the assumptions. The reason for my visceral full-body response every time a San Franciscan equates Austin with utopia? Because, well, I fear there’s an unhealthy sense of perfectionism Bay Area locals now equate with Austin living—and that they’re willing to bet their proverbial farms on it in order to get out of Dodge. While it’s a great city, don’t get me wrong—it’s definitely not paradise. Let me lament on the reasons why that’s so.</span>
      <br />
      <span>The nightlife and live music scenes are great...for a while, at least.</span>
      <img src='http://localhost:8080/static/post_1_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic1.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_1_pic1.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic1.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>Admittedly, Austin’s become pigeonholed as an up-and-coming Nashville, in the same way that it’s been pedestaled as the Silicon Valley of tomorrow. (More on the latter later.) It’s sprouted a healthy nightlife scene, bristling with lively venue spaces and bars that span every cultural and societal niche. Unfortunately, though, on a busy, bustling weekend night, bars and venues on 6th and 4th Streets become pressure cookers for college-aged drunks looking to empty out their financial-aid refund and stereotypical tourists who’ve Googled “nightlife in Austin” 15 minutes prior to showing up. When you find yourself combing South Congress for a parking spot, glancing up at the construction cranes above your head, it’s abundantly clear that the city is moving in a million directions, with no clear North Star on the horizon. </span>
      <a href="https://www.bizjournals.com/austin/news/2017/03/22/how-many-people-moved-to-austin-in-2016.html">Because of that high-paced, multidirectional growth spurt</a>
      <span>, Austin is suffering from a myriad of growing pains that are, frankly, lending an unwelcoming amount of monotony to this once unapologetically spontaneous city. The gay bars have remained virtually unchanged. And if you’re a quasi-social gay man like myself, it can feel at times that you may, in fact, be acquainted with virtually every homosexual man in the city. San Francisco, by comparison, sports a much larger pool of rainbow-hued fish to school with.</span>
      <img src='http://localhost:8080/static/post_1_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic2.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_1_pic2.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic2.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>It’s true that rent prices are lower in Austin than SF (where are they not) and that the </span>
      <a href="https://www.nerdwallet.com/cost-of-living-calculator/compare/san-francisco-vs-austin">overall cost of living is roughly one-third less</a>
      <span> —but focusing solely on those statistics doesn’t paint the full picture. Aping the renting habits of most San Franciscans, the vast majority of Austinites and soon-to-be locals can’t afford to live in the city. Instead, they set up five-year-old IKEA foldable mattress on the outskirts of downtown. It’s not uncommon nor ungastly to see $2,500 listings on Zillow for one-bedroom units in Austin’s downtown, eerily mirroring the rental prices of apartments in the Mission or SOMA. But unlike the Bay Area’s transportation system, Austin’s is deplorable, and the city is virtually unwalkable. While the populations of the two metropolises are virtually identical, San Francisco spans seven miles at its widest. Austin? Twenty-one. If you have a job and fancy being punctual for it, you’ll need to burden yourself with a 60-month car loan — or build Armstrong-like calves to help propel you through the loosely marked bike lanes latticing the city.</span>
      <img src='http://localhost:8080/static/post_1_pic3.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic3.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic3.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_1_pic3.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic3.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>You, too, will come to understand how people seemingly lose their minds in the summer’s heat, committing all kinds of acts of unusual criminal mischief in 100-degree afternoons. Seat belts and leather-wrapped steering wheels double as automotive necessities and branding irons come early June. When you find yourself in the full glow of a searing, glaring, blistering summer Texas sun, you’ll begin to wonder why you were ever petulant toward Karl the Fog in the first place.<span>
    `
  },
  {
    id: "2",
    author: "Emily Lizz",
    time: 1521563413037,
    thumbnail: ROOT_PATH + "author_2.jpg",
    title: "I Am The Nameless African From Your Last Instagram Post",
    mainImg: {
      basic: ROOT_PATH + "post_2_main.jpg",
      big: ROOT_PATH + "post_2_main.jpg",
      mid: ROOT_PATH + "post_2_main.jpg",
      small: ROOT_PATH + "post_2_main.jpg",
      xsmall: ROOT_PATH + "post_2_main.jpg",
    },
    body: `
      <span>Hey there. It’s me, the nameless African woman from your last Instagram post.</span>
      <span>Thank you for including me in the documentation of your time on the “</span>
      <a href="http://tvtropes.org/pmwiki/pmwiki.php/Main/DarkestAfrica">dark continent</a>
      <span>.” I had a quick look around your account; you posted our selfie after your close-up shot of our dearly departed Sudan the rhinoceros (love that you called for a moment of silence for the majestic beast — will you do the same after I pass away?), but before the panoramic sunset photo with the silhouette of an acacia tree. Great job on the caption, by the way; Serengeti does indeed mean “endless plain” in the Maasai language.</span>
      <img src='http://localhost:8080/static/post_2_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_2_pic1.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_2_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_2_pic1.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_2_pic1.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>I know I wasn’t bare-breasted, as you expected to find me — our people are “famously and frequently unclothed,” as you know. I do like to think of myself as a noble savage, though, with a </span>
      <a href="https://granta.com/how-to-write-about-africa/">rolling laugh</a>
      <br />
      <span>Why ask me questions anyway, when that article you read on the plane already told you everything you need to know about my community? You know what our houses look like, what our primitive diets consist of, our literacy rates, our recent troubles, our surprising resilience. I could see in your eyes that you didn’t know what to do with your immense guilt upon meeting me. You’re dreaming about “becoming successful, having a big family in a big house in a beautiful country,” while I’m rotting away “alone with my child in my small house made of mud and trees.” I re-lived the guilt you felt (we Africans are deeply compassionate) when I read your Instagram post. You’re right, we are poor but happy.</span>
      <img src='http://localhost:8080/static/post_2_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_2_pic2.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_2_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_2_pic2.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_2_pic2.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>I wasn’t aware until I saw our photo that I’m a “wild nomadic wife” that you picked up on your travels. A couple of questions about that. Will I be invited to the wedding? Will our wedding be themed “Colonial Africa” like that one in South Africa, with touches from the good old days, like khaki pants and rifles and an all-black staff? Will you have me wear, like that female “Maasai warrior” from California, red nail polish that makes you feel fierce and pearl earrings that remind you of home? Can we turn the whole thing into a music video, kind of Old Hollywood meets Out of Africa?</span>
      <br />
      <span>In the meantime, I’ll be reveling in the greatest joy of my sad, disease-riddled life — “sitting on your lap and drinking from a bottle of Coca-Cola.” And of course, watching our Instagram photo grow in popularity. 98 likes in four hours? Not bad.</span>
    `
  },
  {
    id: "3",
    author: "Casey Beth",
    time: 1521040202415,
    thumbnail: ROOT_PATH + "author_0.png",
    title: "My Bathroom Mirror Is Smarter Than Yours",
    mainImg: {
      basic: ROOT_PATH + "post_0_main.jpg",
      big: ROOT_PATH + "post_0_main.jpg",
      mid: ROOT_PATH + "post_0_main.jpg",
      small: ROOT_PATH + "post_0_main.jpg",
    },
    body: `
      <span>Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies.There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a </span>
      <a href='http://www.twowaymirrors.com/'>two-way mirror</a>
      <span>, a </span>
      <a href='http://www.amazon.com/dp/B00H0FK2A6/'>display panel</a>
      <span> and </span>
      <a href='http://www.ebay.com/itm/360626141655'>controller board</a>
      <span>, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result:</span>
      <img src='http://localhost:8080/static/post_0_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_0_pic1.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic1.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
      />
      <span>Welcome to my bathroom. Please excuse the carefully arranged mess around the medicine cabinet and its pristine mirror surface. To the right of where my face would be we have the time and date. To the left is the current weather and a 24-hour forecast. Below are some recent news headlines. Here’s a close-up of that area:</span>
      <br />
      <span>Unless the weather is cloudy, there will be a little color in the UI, but for the most part the text and icons are monochrome to prevent them from being too distracting. The code behind this UI uses some simple Android APIs (e.g. this one is neat) plus Forecast for the weather and the Associated Press for news. Other concepts I’m playing with are traffic, reminders, and essentially anything that has a Google Now card. The idea is that you don’t need to interact with this UI. Instead, it updates automatically and there’s an open-ended voice search interface for anything else.</span>
      <br />
      <span>The display is only a couple of millimeters thin and embedded in a layer between the two-way mirror glass and the door of the medicine cabinet. That way it looks very clean and I can keep using all the shelf space inside. Here’s the open door at an angle and viewed edge-on:</span>
      <img src='http://localhost:8080/static/post_0_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."  
           data-srcset-big="http://localhost:8080/static/post_0_pic2.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic2.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
      />
      <span>This prototype is still a work in progress and I haven’t spent much time on the software yet. The UI above is only a few hundred lines of code and I’m experimenting with different devices to run it—initially Chromecast, then Nexus Player, and most recently Fire TV Stick. That means until I settle on a platform and clean up the electronics it does look a little bit messy when you peek inside:</span>
      <img src='http://localhost:8080/static/post_0_pic3.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_0_pic3.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_0_pic3.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_0_pic3.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
      />
      <span>And that’s where I am with this project so far. Looking forward to realizing some of the remaining ideas. Maybe I’ll post a more detailed making-of with the pictures I took during the build.</span>
    `
  },
  {
    id: "4",
    author: "Linus Borg",
    time: 1520781090899,
    thumbnail: ROOT_PATH + "author_1.jpg",
    title: "Should You Leave SF for Austin? Meh, Perhaps Not",
    mainImg: {
      basic: ROOT_PATH + "post_1_main.jpg",
      small: ROOT_PATH + "post_1_main.jpg",
    },
    body: `
      <span>Imoved to San Francisco just shy of a year ago, bright-eyed and brimming with foolish optimism, like most other people who end up in this city. A copywriting contract in a posh Financial District office and a healthy uptick in my regular magazine work represented, in my mind, the equivalent of an Oprah “aha!” moment—not much could convince me that I shouldn’t make the 28-hour journey west from my home in Austin, Texas.</span>
      <br />
      <span>Yes, Austin—the only suitable place in the Lone Star State for any liberal-minded person to set up shop, the town known for live music festivals and cowboy-crafted beer, the bastion for Southern creatives. It’s a metropolis with a reputation of being a hipster haven in the middle of the country, one that seamlessly blends green grass and spring-fed pools with high-end city living and a vivacious gastronomic scene. One where food trucks populate any spare lots that have yet to fall prey to urban planners. Where BBQ perfumes the air around Barton Springs Road; dog parks abound; coffee shops never close; and people seem unabashedly happy. But I’m here to tell you that there are caveats to what you’re dreaming up in your head as a cheaper, more relaxed version of San Francisco.</span>
      <br />
      <span>When the above statement is volleyed at me, my throat always clenches, my mind dizzy from the assumptions. The reason for my visceral full-body response every time a San Franciscan equates Austin with utopia? Because, well, I fear there’s an unhealthy sense of perfectionism Bay Area locals now equate with Austin living—and that they’re willing to bet their proverbial farms on it in order to get out of Dodge. While it’s a great city, don’t get me wrong—it’s definitely not paradise. Let me lament on the reasons why that’s so.</span>
      <br />
      <span>The nightlife and live music scenes are great...for a while, at least.</span>
      <img src='http://localhost:8080/static/post_1_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic1.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic1.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>Admittedly, Austin’s become pigeonholed as an up-and-coming Nashville, in the same way that it’s been pedestaled as the Silicon Valley of tomorrow. (More on the latter later.) It’s sprouted a healthy nightlife scene, bristling with lively venue spaces and bars that span every cultural and societal niche. Unfortunately, though, on a busy, bustling weekend night, bars and venues on 6th and 4th Streets become pressure cookers for college-aged drunks looking to empty out their financial-aid refund and stereotypical tourists who’ve Googled “nightlife in Austin” 15 minutes prior to showing up. When you find yourself combing South Congress for a parking spot, glancing up at the construction cranes above your head, it’s abundantly clear that the city is moving in a million directions, with no clear North Star on the horizon. </span>
      <a href="https://www.bizjournals.com/austin/news/2017/03/22/how-many-people-moved-to-austin-in-2016.html">Because of that high-paced, multidirectional growth spurt</a>
      <span>, Austin is suffering from a myriad of growing pains that are, frankly, lending an unwelcoming amount of monotony to this once unapologetically spontaneous city. The gay bars have remained virtually unchanged. And if you’re a quasi-social gay man like myself, it can feel at times that you may, in fact, be acquainted with virtually every homosexual man in the city. San Francisco, by comparison, sports a much larger pool of rainbow-hued fish to school with.</span>
      <img src='http://localhost:8080/static/post_1_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic2.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic2.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>It’s true that rent prices are lower in Austin than SF (where are they not) and that the </span>
      <a href="https://www.nerdwallet.com/cost-of-living-calculator/compare/san-francisco-vs-austin">overall cost of living is roughly one-third less</a>
      <span> —but focusing solely on those statistics doesn’t paint the full picture. Aping the renting habits of most San Franciscans, the vast majority of Austinites and soon-to-be locals can’t afford to live in the city. Instead, they set up five-year-old IKEA foldable mattress on the outskirts of downtown. It’s not uncommon nor ungastly to see $2,500 listings on Zillow for one-bedroom units in Austin’s downtown, eerily mirroring the rental prices of apartments in the Mission or SOMA. But unlike the Bay Area’s transportation system, Austin’s is deplorable, and the city is virtually unwalkable. While the populations of the two metropolises are virtually identical, San Francisco spans seven miles at its widest. Austin? Twenty-one. If you have a job and fancy being punctual for it, you’ll need to burden yourself with a 60-month car loan — or build Armstrong-like calves to help propel you through the loosely marked bike lanes latticing the city.</span>
      <img src='http://localhost:8080/static/post_1_pic3.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-big="http://localhost:8080/static/post_1_pic3.jpg 1024w"
           data-sizes-big="(min-width: 1024px) 1024px"
           data-srcset-mid="http://localhost:8080/static/post_1_pic3.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-xsmall="http://localhost:8080/static/post_1_pic3.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>You, too, will come to understand how people seemingly lose their minds in the summer’s heat, committing all kinds of acts of unusual criminal mischief in 100-degree afternoons. Seat belts and leather-wrapped steering wheels double as automotive necessities and branding irons come early June. When you find yourself in the full glow of a searing, glaring, blistering summer Texas sun, you’ll begin to wonder why you were ever petulant toward Karl the Fog in the first place.<span>
    `
  },
  {
    id: "5",
    author: "Anne Hathaway",
    time: 1520694752305,
    thumbnail: ROOT_PATH + "author_2.jpg",
    title: "I Am The Nameless African From Your Last Instagram Post",
    mainImg: {
      basic: ROOT_PATH + "post_2_main.jpg",
      mid: ROOT_PATH + "post_2_main.jpg",
      xsmall: ROOT_PATH + "post_2_main.jpg",
    },
    body: `
      <span>Hey there. It’s me, the nameless African woman from your last Instagram post.</span>
      <span>Thank you for including me in the documentation of your time on the “</span>
      <a href="http://tvtropes.org/pmwiki/pmwiki.php/Main/DarkestAfrica">dark continent</a>
      <span>.” I had a quick look around your account; you posted our selfie after your close-up shot of our dearly departed Sudan the rhinoceros (love that you called for a moment of silence for the majestic beast — will you do the same after I pass away?), but before the panoramic sunset photo with the silhouette of an acacia tree. Great job on the caption, by the way; Serengeti does indeed mean “endless plain” in the Maasai language.</span>
      <img src='http://localhost:8080/static/post_2_pic1.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-mid="http://localhost:8080/static/post_2_pic1.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_2_pic1.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_2_pic1.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>I know I wasn’t bare-breasted, as you expected to find me — our people are “famously and frequently unclothed,” as you know. I do like to think of myself as a noble savage, though, with a </span>
      <a href="https://granta.com/how-to-write-about-africa/">rolling laugh</a>
      <br />
      <span>Why ask me questions anyway, when that article you read on the plane already told you everything you need to know about my community? You know what our houses look like, what our primitive diets consist of, our literacy rates, our recent troubles, our surprising resilience. I could see in your eyes that you didn’t know what to do with your immense guilt upon meeting me. You’re dreaming about “becoming successful, having a big family in a big house in a beautiful country,” while I’m rotting away “alone with my child in my small house made of mud and trees.” I re-lived the guilt you felt (we Africans are deeply compassionate) when I read your Instagram post. You’re right, we are poor but happy.</span>
      <img src='http://localhost:8080/static/post_2_pic2.jpg'
           data-comments="All sizes uses the same image? Come on, this is local dummy test..."
           data-srcset-mid="http://localhost:8080/static/post_2_pic2.jpg 768w"
           data-sizes-mid="(min-width: 768px) 768px"
           data-srcset-small="http://localhost:8080/static/post_2_pic2.jpg 414w"
           data-sizes-small="(min-width: 414px) 414px"
           data-srcset-xsmall="http://localhost:8080/static/post_2_pic2.jpg 320w"
           data-sizes-xsmall="(min-width: 320px) 320px"
      />
      <span>I wasn’t aware until I saw our photo that I’m a “wild nomadic wife” that you picked up on your travels. A couple of questions about that. Will I be invited to the wedding? Will our wedding be themed “Colonial Africa” like that one in South Africa, with touches from the good old days, like khaki pants and rifles and an all-black staff? Will you have me wear, like that female “Maasai warrior” from California, red nail polish that makes you feel fierce and pearl earrings that remind you of home? Can we turn the whole thing into a music video, kind of Old Hollywood meets Out of Africa?</span>
      <br />
      <span>In the meantime, I’ll be reveling in the greatest joy of my sad, disease-riddled life — “sitting on your lap and drinking from a bottle of Coca-Cola.” And of course, watching our Instagram photo grow in popularity. 98 likes in four hours? Not bad.</span>
    `
  },
];

const postList = posts.map(post => {
  let {
    id,
    author,
    time,
    thumbnail,
    title,
    mainImg,
  } = post;
  return {
    id,
    author,
    time,
    thumbnail,
    title,
    mainImg,
  };
});

const promoPosts = posts.reduce((promoPosts, post) => {
  if (promoPosts.length < 3) {
    promoPosts.push({
      id: post.id,
      title: post.title,
      mainImg: post.mainImg
    });
  }
  return promoPosts;
}, []);

export { posts, postList, promoPosts };
