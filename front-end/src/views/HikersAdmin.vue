<template>
  <div class="admin">
    <h1>The Hiker Admin Page!</h1>
    <div class="form-container">
      <div class="heading">
        <h2>Add a hiker</h2>
      </div>
      <div class="add">
        <div class="form">
          <input v-model="name" placeholder="Name" />
          <p></p>
          <textarea v-model="biography" placeholder="Biography"></textarea>
          <p></p>
          <input type="file" name="photo" @change="fileChanged" />
          <button @click="upload">Upload</button>
        </div>
        <div class="item-display" v-if="addItem">
          <h2>{{ addItem.name }}</h2>
          <div class="item-display-image">
            <img :src="addItem.imagePath" />
          </div>
          <h3>{{ addItem.biography }}</h3>
        </div>
      </div>
      <div class="heading">
        <h2>Edit/Delete a hiker</h2>
      </div>
      <div class="edit">
        <div class="form">
          <input v-model="findName" placeholder="Search" />
          <div class="suggestions" v-if="suggestions.length > 0">
            <div
              class="suggestion"
              v-for="s in suggestions"
              :key="s.id"
              @click="selectItem(s)"
            >
              {{ s.name }}
            </div>
          </div>
        </div>
        <div class="upload" v-if="findItem">
          <input v-model="findItem.name" />
          <p></p>
          <textarea v-model="findItem.biography" />
          <p></p>
          <img :src="findItem.imagePath" />
        </div>
        <div class="actions" v-if="findItem">
          <button @click="deleteItem(findItem)">Delete</button>
          <button @click="editItem(findItem)">Edit</button>
        </div>
      </div>
    </div>
    <custom-footer />
  </div>
</template>

<script>
import axios from "axios";
import CustomFooter from "../components/CustomFooter.vue";

export default {
  name: "Admin",
  components: {
    CustomFooter,
  },
  data() {
    return {
      name: "",
      file: null,
      addItem: null,
      items: [],
      findName: "",
      findItem: null,
    };
  },
  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.name.toLowerCase().startsWith(this.findName.toLowerCase())
      );
      return items.sort((a, b) => a.name > b.name);
    },
  },

  created() {
    this.getItems();
  },

  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/hikers/photos", formData);
        let r2 = await axios.post("/api/hikers/items", {
          name: this.name,
          imagePath: r1.data.imagePath,
          biography: this.biography,
        });
        console.log(r2);
        this.addItem = r2.data;
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/hikers/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findName = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/hikers/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/hikers/items/" + item._id, {
          name: this.findItem.name,
          biography: this.findItem.biography,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.item-display-text {
  overflow-wrap: break-word;
  overflow: auto;
}
.item-display {
  width: 100%;
  background-color: #edf4ee;
  padding: 0;
  margin-right: 0;
  margin-bottom: 15px;
}

.item-display img {
  max-width: 100%;
  height: 280px;
  object-fit: cover;
}

button {
  margin-left: 5px;
}
.content {
  padding: 20px 100px;
  min-height: 500px;
}

.item-display {
  height: 250px;
  min-width: 50%;
}

.item-display-image img {
  height: 200px;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

.add.form {
  margin-right: 50px;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.form-inputs {
  display: block;
  float: left;
  max-width: 50%;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
  max-height: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 2px solid #ccc;
  justify-content: center;
  justify-items: center;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>
