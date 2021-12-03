<template>
<div class="contact">
  <div class='main-body'>
    <div class='main-body-size'>
      <div class='main-body-container'>
        <div class='intro-content'>
          <img src='/images/hiker_selfie.jpg' alt="Me the hiker" class="intro-photo" />

          <div class='intro-text'>
            <h1>Join Me</h1>
            <h2>Want to hike with me?</h2>
            <p>I'm looking for people to join me on my incredible hikes. While it's peaceful
              to hike alone, it's always more fun to hike with others. Reach out to me if you
              want to join me on my amazing adventures.</p>
            <p>I am also currently exploring the vast mountain ranges of Utah! I am also
              taking hike recommendations. Please send me some new ideas through my email
              or on social media.</p>
            <p>Check out all of <a href=/blog.html>my past hikes</a> to see what I've down!</p>
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
  name: "Contact",
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
}
</style>
