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
              <div class="photo">
                <img :src="'' + hike.image" :alt="hike.name" />
              </div>
              <div class="hike gridd-item text">
                <h6>{{ hike.name }}</h6>
                <p>
                  {{ hike.description }}
                </p>
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
import axios from "axios";

export default {
  name: "Blog",
  components: {
    CustomFooter,
  },
  data() {
    return {
      hikes: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/hikes/items");
        this.hikes = response.data;
        console.log(hikes);
        return true;
      } catch (error) {
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
