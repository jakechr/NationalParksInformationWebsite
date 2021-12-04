<template>
  <div>
    <div class="content">
      <div class="admin">
        <h1>Hikes Admin Page</h1>
        <div class="heading">
          <h2>Add a hike</h2>
        </div>
        <div class="add">
          <div class="form">
            <div class="form-inputs">
              <input v-model="title" placeholder="Title" />
              <p></p>
              <textarea
                v-model="description"
                placeholder="Description"
              ></textarea>
              <p></p>
            </div>
            <div class="photo-submit">
              <input type="file" name="photo" @change="fileChanged" />
              <button @click="upload">Upload</button>
            </div>
          </div>
          <div class="item-display" v-if="addItem">
            <div class="item-display-photo">
              <img :src="addItem.imagePath" />
            </div>
            <div class="item-display-text">
              <h6>{{ addItem.title }}</h6>
              <p>
                {{ addItem.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="heading">
          <h2>Edit/Delete a hike</h2>
        </div>
        <div class="edit">
          <div class="form">
            <input v-model="findTitle" placeholder="Search" />
            <div class="suggestions" v-if="suggestions.length > 0">
              <div
                class="suggestion"
                v-for="s in suggestions"
                :key="s.id"
                @click="selectItem(s)"
              >
                {{ s.title }}
              </div>
            </div>
          </div>
          <div class="upload" v-if="findItem">
            <input v-model="findItem.title" />
            <p></p>
            <textarea v-model="findItem.description" />
            <p></p>
            <img :src="findItem.imagePath" />
          </div>
          <div class="actions" v-if="findItem">
            <button @click="deleteItem(findItem)">Delete</button>
            <button @click="editItem(findItem)">Edit</button>
          </div>
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
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
    };
  },
  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.title > b.title);
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
        let r1 = await axios.post("/api/hikes/photos", formData);
        let r2 = await axios.post("/api/hikes/items", {
          title: this.title,
          imagePath: r1.data.imagePath,
          description: this.description,
        });
        console.log(r2);
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/hikes/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/hikes/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/hikes/items/" + item._id, {
          title: this.findItem.title,
          description: this.findItem.description,
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
  background-color: #edf4ee;
  width: 370px;
  height: 350px;
  padding: 10px;
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
