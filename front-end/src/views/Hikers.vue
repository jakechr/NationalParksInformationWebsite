<template>
  <div class="NewBlog">
    <div class="main-body">
      <div class="blog-body-size">
        <div class="main-body-container">
          <div class="header-container">
            <h1>Our Hikers</h1>
          </div>
          <div class="hike-gridd-container">
            <div class="hike-gridd">
              <div
                v-for="hiker in hikers"
                :key="hiker.id"
                class="hike-gridd-item"
              >
                <div class="photo">
                  <img :src="'' + hiker.imagePath" :alt="hiker.name" />
                </div>
                <div class="hike gridd-item text">
                  <h6>{{ hiker.name }}</h6>
                  <p>
                    {{ hiker.biography }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <custom-footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomFooter from "../components/CustomFooter.vue";
import axios from "axios";

export default {
  name: "Hikers",
  components: {
    CustomFooter,
  },
  data() {
    return {
      hikers: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        console.log("here");
        let response = await axios.get("/api/hikers/items");
        this.hikers = response.data;
        console.log(hikers);
        return true;
      } catch (error) {
        console.log("in error");
        console.log(error);
      }
    },
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

h6 {
  font-size: 20px;
  font-weight: 700;
}

p {
  font-size: 15px;
}

.hike.gridd-item.text {
  overflow-wrap: break-word;
  max-width: 400px;
  overflow: auto;
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
  padding: 10px;
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
  display: flex;
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
    flex-direction: column;
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
    width: 800px;
    background-color: #edf4ee;
    padding: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .hike-gridd-item img {
    width: 400px;
    height: 350px;
    object-fit: cover;
  }

  .hike-gridd-item p {
    width: 100%;
    height: 80px;
  }
}
</style>
