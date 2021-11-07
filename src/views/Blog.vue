<template>
  <div class="main-body">
    <div class="blog-body-size">
      <div class="main-body-container">
        <div class="header-container">
          <h1>My Hikes</h1>
        </div>
        <div class="hike-gridd-container">
          <div class="hike-gridd">
            <div v-for="hike in hikes" :key="hike.id" class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img :src="'' + hike.image" alt="Angel's Landing" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  {{ hike.location }}
                  {{ hike.description }}
                </p>
              </div>
            </div>
            <div class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img src="/images/mount_timp.jpg" alt="Mount Timpanogas" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  From the top of this mountain I was able to see the entire
                  Utah Valley. It was absolutely incredible.
                </p>
              </div>
            </div>
            <div class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img
                  src="/images/primrose_overlook.jpg"
                  alt="Primrose Overlook"
                />
              </div>
              <div class="hike-gridd-item">
                <div class="hike gridd-item photo">
                  <img src="/images/mount_timp.jpg" alt="Mount Timpanogas" />
                </div>
                <div class="hike gridd-item text">
                  <p>
                    From the top of this mountain I was able to see the entire
                    Utah Valley. It was absolutely incredible.
                  </p>
                </div>
              </div>
              <div class="hike-gridd-item">
                <div class="hike gridd-item photo">
                  <img
                    src="/images/primrose_overlook.jpg"
                    alt="Primrose Overlook"
                  />
                </div>
                <div class="hike gridd-item text">
                  <p>
                    Easy and short hike that I recommend to anyone wanting a
                    little challenged and an amazing view.
                  </p>
                </div>
              </div>
              <div class="hike-gridd-item">
                <div class="hike gridd-item photo">
                  <img src="/images/delicate_arch.jpg" alt="Delicate Arch" />
                </div>
                <div class="hike gridd-item text">
                  <p>
                    When I arrived at delicate arch there was a small boy trying
                    to climb it until his parents noticed. I can testify that
                    the arch is delicate. That 45 pound boy made it shake and
                    almost made it come crashing down.
                  </p>
                </div>
              </div>
              <div class="hike-gridd-item last-item">
                <div class="hike gridd-item photo">
                  <img src="/images/kanarra_creek.jpg" alt="Kanarra Creek" />
                </div>
                <div class="hike gridd-item text">
                  <p>
                    This was easily one of the most beautiful hikes that I have
                    ever done. Hiking a slot canyon always feel like a
                    once-of-a-lifetime kind of experience so slot canyons don't
                    exist everywhere.
                  </p>
                </div>
              </div>
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
  name: "Blog",
  computed: {
    hikes() {
      return this.$root.$data.hikes;
    },
    components: {
      CustomFooter,
    },
  },
};
</script>

<style scoped>
  @font-face {
    font-family: "Foundry";
    src: url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.eot");
    src: url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/02b0cfe9a43c6fc48f54c9bf6f59dbfb.svg#Copyright Klim Type Foundry")
        format("svg");
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
    }
  }
</style>
