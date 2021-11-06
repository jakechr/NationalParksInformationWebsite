<template>
  <div class="parks">
    <div id="wrapper">
      <div id="form-box">
        <h1>National Park Info</h1>
        <form @submit.prevent="submitform">
          <label>Enter a National Park</label>
          <input type="text" v-model="formdata.parkInput" /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="resultDivs"></div>
    </div>
    <custom-footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import CustomFooter from "../components/CustomFooter.vue";
  import axios from "axios";

  export default {
    name: "Parks",
    components: {
      CustomFooter,
    },
    data() {
      return {
        formdata: { parkInput: "" },
      };
    },
    methods: {
      submitform() {
        let PARK_SUBMIT = "parkSubmit";
        let PARK_INPUT = "parkInput";
        let PARK_RESULT = "parkResult";
        let RESULT_DIVS = "resultDivs";
        let PARK_INFO = "parkInfo";
        let DAYS = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];

        const value = this.formdata.parkInput;
        if (value === "") return;
        const url =
          "https://developer.nps.gov/api/v1/parks?limit=40&start=0&q=" +
          value +
          "&api_key=DpXaMIhw6NpRLqadO3J0L9mS1lgstpqjIh69HEoa";
        //
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            let backgroundImage = "url(images/standardbg.jpg)";
            if (json.cod == "404") {
              document.getElementById("resultDivs").innerHTML = "";
            } else {
              let infoToDisplay = null;

              for (let i = 0; i < json.data.length; i++) {
                if (
                  json.data[i].fullName
                    .toLowerCase()
                    .includes(value.toLowerCase())
                ) {
                  infoToDisplay = json.data[i];
                  break;
                }
              }

              let resultDivs = "<div id='" + PARK_RESULT + "'></div>";
              let parkResult = "";

              if (infoToDisplay == null) {
                document.getElementById(RESULT_DIVS).innerHTML = resultDivs;

                parkResult += "<h2>No results found for:</h2>";
                parkResult += "<h2>" + value + "</h2>";
              } else {
                // This is where to put json info
                resultDivs += "<div id='" + PARK_INFO + "'></div>";
                document.getElementById(RESULT_DIVS).innerHTML = resultDivs;

                parkResult = "<h2>" + infoToDisplay.fullName + "</h2>";
                parkResult += "<p>" + infoToDisplay.description + "</p>";

                let parkInfo = "<div id = 'parkActivities'></div>";
                parkInfo += "<div id = 'parkPhotos'></div>";
                parkInfo += "<div id = 'parkEntranceInfo'></div>";
                parkInfo += "<div id = 'parkWeather'></div>";
                document.getElementById(PARK_INFO).innerHTML = parkInfo;

                // Adding activities
                let activitiesInfo = "<h3>Available Activities</h3><p>";
                let activitiesLength = infoToDisplay.activities.length;
                for (let i = 0; i < activitiesLength; i++) {
                  activitiesInfo += infoToDisplay.activities[i].name;
                  if (i != activitiesLength - 1) {
                    activitiesInfo += ", ";
                  }
                }
                activitiesInfo += "</p>";
                document.getElementById("parkActivities").innerHTML =
                  activitiesInfo;

                // Adding images
                let newImageDivs = "";
                let numPhotos = 4;
                if (infoToDisplay.images.length < numPhotos) {
                  numPhotos = infoToDisplay.images.length;
                }
                for (let i = 1; i < numPhotos; i++) {
                  newImageDivs +=
                    "<div class='park-photo-container'><img src='" +
                    infoToDisplay.images[i].url +
                    "'></div>";
                }
                document.getElementById("parkPhotos").innerHTML = newImageDivs;

                // Adding park entrance info
                let entranceInfo = "<h3>Entrance Hours</h3>";
                for (let i = 0; i < DAYS.length; i++) {
                  let currDay = DAYS[i].toLowerCase();
                  let test =
                    infoToDisplay.operatingHours[0].standardHours[currDay];
                  entranceInfo +=
                    "<p>" +
                    DAYS[i] +
                    ": " +
                    infoToDisplay.operatingHours[0].standardHours[currDay] +
                    "</p>";
                }
                entranceInfo += "<div></div>";
                document.getElementById("parkEntranceInfo").innerHTML =
                  entranceInfo;

                // Adding weather
                let weatherInfo =
                  "<h3>Weather</h3><p>" + infoToDisplay.weatherInfo + "</p>";
                document.getElementById("parkWeather").innerHTML = weatherInfo;

                backgroundImage = "url(" + infoToDisplay.images[0].url + ")";
                document.body.style.backgroundImage = backgroundImage;
              }
              document.getElementById(PARK_RESULT).innerHTML = parkResult;
            }
          });
      },
    },
  };
</script>

<style>
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
    resize: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Foundry", serif;
  }

  html {
    height: 100%;
  }

  .navbar {
    background-color: white;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.75);
    -moz-box-shadow: 0 0 20px black;
    -webkit-box-shadow: 0 0 20px black;
    box-shadow: 0 0 20px black;
    text-align: left;
  }

  .navbar-brand {
    padding: 0px;
  }

  .navbar-brand img {
    height: 65px;
    padding: 15px;
    width: auto;
  }

  body {
    /* Location of the image */
    background-image: url(/images/standardbg.jpg);
    /* Image is centered vertically and horizontally at all times */
    background-position: center center;
    /* Image doesn't repeat */
    background-repeat: no-repeat;
    /* Makes the image fixed in the viewport so that it doesn't move when
     the content height is greater than the image height */
    background-attachment: fixed;
    /* This is what makes the background image rescale based on its container's size */
    background-size: cover;
    /* Pick a solid background color that will be displayed while the background image is loading */
    background-color: #f7f7f7;
    /* SHORTHAND CSS NOTATION
   * background: url(background-photo.jpg) center center cover no-repeat fixed;
   */
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  #wrapper {
    flex: 1 0 auto;
  }

  #form-box {
    display: inline-block;
    margin: 50px auto;
    margin-bottom: 0px;
    padding: 20px;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.5);
    -moz-box-shadow: 0 0 20px black;
    -webkit-box-shadow: 0 0 20px black;
    box-shadow: 0 0 20px black;
  }

  input[type="text"] {
    background: rgb(255, 255, 255);
    /* The Fallback */
    background: rgba(255, 255, 255, 0.3);
    margin: 5px 0 5px 0;
  }

  input[type="submit"] {
    background: rgb(255, 255, 255);
    /* The Fallback */
    background: rgba(255, 255, 255, 0.3);
  }

  #resultDivs {
    display: flex;
    flex-direction: column;
    min-height: 500px;
  }

  #parkResult,
  #parkWeather,
  #parkActivities {
    position: relative;
    display: inline-block;
    margin: 50px auto;
    margin-bottom: 0;
    padding: 20px;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.6);
    -moz-box-shadow: 0 0 20px black;
    -webkit-box-shadow: 0 0 20px black;
    box-shadow: 0 0 20px black;
  }

  #parkEntranceInfo {
    position: relative;
    display: list-item;
    width: 210px;
    margin: 50px auto;
    margin-bottom: 0;
    padding: 20px;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.6);
    -moz-box-shadow: 0 0 20px black;
    -webkit-box-shadow: 0 0 20px black;
    box-shadow: 0 0 20px black;
  }

  #parkInfo {
    position: relative;
    display: inline-block;
    margin-bottom: 50px;
  }

  #parkPhotos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
    margin-bottom: 0px;
  }

  .park-photo-container {
    display: inline-block;
    margin: 20px;
    padding: 20px;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.25);
    -moz-box-shadow: 0 0 20px black;
    -webkit-box-shadow: 0 0 20px black;
    box-shadow: 0 0 20px black;
  }

  .park-photo-container img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  .footer {
    flex-shrink: 0;
    display: flex;
  }

  .footer-item {
    display: inline-block;
    width: 100%;
    min-height: 100%;
    height: 100%;
    padding: 20px;
    margin-bottom: 0px;
    background: rgb(245, 245, 245);
    /* The Fallback */
    background: rgba(245, 245, 245, 0.25);
    -moz-box-shadow: 0 0 0px black;
    -webkit-box-shadow: 0 0 0px black;
    box-shadow: 0 0 0px black;
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

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    #form-box,
    #weatherResults,
    #parkResult,
    #parkWeather,
    #parkEntranceInfo,
    #parkActivities {
      max-width: 100%;
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    #form-box,
    #weatherResults,
    #parkResult,
    #parkWeather,
    #parkEntranceInfo,
    #parkActivities {
      max-width: 80%;
    }

    .park-photo-container img {
      width: 350px;
      height: 250px;
      object-fit: cover;
    }
  }

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    #form-box,
    #weatherResults,
    #parkResult,
    #parkWeather,
    #parkEntranceInfo,
    #parkActivities {
      max-width: 50%;
    }

    #parkPhotos {
      max-width: 90%;
    }

    .park-photo-container img {
      width: 500px;
      height: 350px;
      object-fit: cover;
    }
  }
</style>
