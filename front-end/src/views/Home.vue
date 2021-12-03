<template>
  <div class="home">
    <div class="main-body">
      <div class="main-body-size">
        <div class="main-body-container">
          <div class="intro-content">
            <img
              src="/images/avid_hiker.jpg"
              alt="Hiker Photo"
              class="intro-photo"
            />

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
              <img
                src="/images/most_recent_blog_post_transparent.png"
                alt="Most Recent Blog Post"
                class="blog-post-logo"
              />
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

<style scoped>
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

  .main-body-image-container,
  .recent-blog-post {
    display: flex;
  }

  .main-body-image-container,
  .recent-blog-post img {
    width: 100%;
  }

  .blog-post-logo {
    width: 80%;
    justify-content: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    .main-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
  }
</style>
