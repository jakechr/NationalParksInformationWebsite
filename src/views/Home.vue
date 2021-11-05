<template>
<div class="home">
  <div class="main-body">
    <div class="main-body-size">
      <div class="main-body-container">
        <div class="intro-content">
          <img src="/images/avid_hiker.jpg" alt="Hiker Photo" class="intro-photo" />

          <div class="intro-text">
            <h1>Welcome!</h1>
            <p>
              Thank you for coming to my blog! Hi, my name is Avid Hiker, and
              I love to hike so much. I am always in search of the next good
              hike. Please take a look around and leave a comment if you see
              something that you like. Also, feel free to reach out if you
              know of a hike that I should go and try.
            </p>
          </div>
        </div>

        <div class="most-recent-blog-post">
          <div class="most-recent-blog-post-first-item">
            <img src="/images/most_recent_blog_post_transparent.png" alt="Most Recent Blog Post" class="blog-post-logo" />
          </div>
          <div class="most-recent-blog-post-last-item">
            <img src=" /images/angels_landing.jpg" alt="Angel's Landing" />
            <p>
              This beautiful location made me believe in angels. I'm frankly
              pretty sure that I saw one flying above my head, but I might've
              been dehydrated.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <custom-footer />
</div>
</template>

<script>
// @ is an alias to /src
import CustomFooter from "../components/CustomFooter.vue";

export default {
  name: "Home",
  components: {
    CustomFooter,
  },
};
</script>

import
url(//db.onlinewebfonts.com/c/02b0cfe9a43c6fc48f54c9bf6f59dbfb?family=Copyright+Klim+Type+Foundry);

<style>
@font-face {
  font-family: "Foundry";
  src: url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.eot");
  src: url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.svg#Copyright Klim Type Foundry") format("svg");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Foundry", serif;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  /* This and above removes blue from hyperlinks */
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Foundry";
}

.blog-body-size {
  width: 90%;
}

.main-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro-content .intro-text h1 {
  text-align: center;
}

.intro-content .intro-text p {
  font-size: large;
}

.intro-content img {
  max-height: 700px;
  max-width: 100%;
  height: auto;
  width: auto;
  padding: 0 0 5px 0;
}

.most-recent-blog-post {
  font-size: large;
  display: inline-flex;
  justify-content: center;
}

.most-recent-blog-post-first-item {
  width: 0;
  margin: 0;
}

.most-recent-blog-post-first-item img {
  height: auto;
}

.most-recent-blog-post-last-item {
  width: 90%;
  margin-left: 0;
  align-items: center;
}

.most-recent-blog-post-last-item img {
  max-width: 100%;
}

.header-container {
  text-align: center;
}

.main-body-container h2 {
  text-align: center;
}

.main-body-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.main-body-paragraph-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.main-body-image-container,
.recent-blog-post {
  display: flex;
}

.main-body-image-container,
.recent-blog-post img {
  width: 100%;
}

.navbar-brand {
  padding: 0px;
}

.navbar-brand img {
  height: 65px;
  padding: 15px;
  width: auto;
}

.newsletter_banner {
  width: 100%;
}

.newsletter-intro h1 {
  text-align: center;
}

.newsletter-invite img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.email-invite {
  padding-top: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.email-invite .email-form {
  width: 60%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-group {
  justify-content: center;
}

.blog-post-logo {
  width: 80%;
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.col-sm img {
  width: 100%;
}

.hike-gridd-container {
  display: flex;
  justify-content: center;
}

.hike-gridd-item {
  width: 100%;
  background-color: #edf4ee;
  padding: 0;
  margin-right: 0;
  margin-bottom: 15px;
}

.hike-gridd-item img {
  max-width: 100%;
  height: 280px;
  object-fit: cover;
}

.github-container {
  float: left;
  max-height: 50px;
  max-width: 100px;
}

.github-container img {
  width: 100%;
  height: auto;
}

.github-image {
  height: 50px;
}

.hike-gridd-item .text {}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .email-invite .email-form {
    width: 90%;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .blog-body-size {
    width: 90%;
  }

  .email-invite .email-form {
    width: 70%;
  }

  .main-body-size {
    width: 85%;
  }

  .intro-content .intro-text h1 {
    text-align: center;
  }

  .intro-content img {
    max-height: 700px;
    max-width: 100%;
    height: auto;
    width: auto;
    padding: 0 0 5px 0;
  }

  .most-recent-blog-post-first-item {
    width: 20%;
    display: flex;
    align-self: center;
    margin: 10px;
  }

  .most-recent-blog-post-first-item img {
    height: auto;
  }

  .most-recent-blog-post-last-item {
    float: right;
    width: 70%;
    margin-left: 10px;
    align-items: center;
  }

  .most-recent-blog-post-last-item img {
    max-width: 100%;
  }

  .hike-gridd {
    display: flex;
    justify-content: center;
    /* this and next for photos to align and change */
    flex-wrap: wrap;
    flex-direction: row;
    /* flex-direction: column; */
    align-items: center;
    /* needed for flex-frection: column; */
  }

  .hike-gridd-item {
    width: 300px;
    background-color: #edf4ee;
    padding: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .hike-gridd-item img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .hike-gridd-item p {
    width: 100%;
    height: 110px;
    background-color: ;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .main-body-size {
    width: 65%;
  }

  .blog-body-size {
    width: 80%;
  }

  .main-body-container {
    display: block;
  }

  .intro-content {
    margin-bottom: 20px;
  }

  .intro-content img {
    max-height: 700px;
    max-width: 70%;
    height: auto;
    width: auto;
    padding: 0 30px 40px 0;
  }

  .intro-photo {
    float: left;
    max-height: 100%;
    width: 70%;
    vertical-align: middle;
  }

  .intro-content .intro-text {
    padding-top: 0px;
  }

  .intro-content .intro-text h1 {
    text-align: center;
  }

  .most-recent-blog-post-first-item {
    width: 15%;
    display: flex;
    align-self: center;
    margin: 10px;
  }

  .most-recent-blog-post-first-item img {
    height: auto;
  }

  .most-recent-blog-post-last-item {
    float: right;
    max-width: 60%;
    min-width: 300px;
    margin-left: 10px;
    align-items: center;
  }

  .most-recent-blog-post-last-item img {
    max-width: 100%;
    min-width: 300px;
  }

  .hike-gridd {
    display: flex;
    justify-content: center;
    /* this and next for photos to align and change */
    flex-wrap: wrap;
    flex-direction: row;
    /* flex-direction: column; */
    align-items: center;
    /* needed for flex-frection: column; */
  }

  .hike-gridd-item {
    width: 370px;
    background-color: #edf4ee;
    padding: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .hike-gridd-item img {
    width: 350px;
    height: 350px;
    object-fit: cover;
  }

  .hike-gridd-item p {
    width: 100%;
    height: 80px;
    background-color: ;
  }
}
</style>
