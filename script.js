let PARK_SUBMIT = "parkSubmit";
let PARK_INPUT = "parkInput";
let PARK_RESULT = "parkResult";
let RESULT_DIVS = "resultDivs";
let PARK_INFO = "parkInfo";
let DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


document.getElementById(PARK_SUBMIT).addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById(PARK_INPUT).value;
  if (value === "")
    return;
  const url = "https://developer.nps.gov/api/v1/parks?limit=40&start=0&q=" + value + "&api_key=DpXaMIhw6NpRLqadO3J0L9mS1lgstpqjIh69HEoa";
  fetch(url)
    .then(function(response) {
      console.log(response);
      console.log(response.status);
      return response.json();
    }).then(function(json) {
      console.log(json);
      let backgroundImage = 'url(images/standardbg.jpg)';
      if (json.cod == '404') {
        document.getElementById("resultDivs").innerHTML = "";
      } else {

        let infoToDisplay = null;
        // It returns many national parks so iterate through to find the correct one
        for (i = 0; i < json.data.length; i++) {
          if (json.data[i].fullName.toLowerCase().includes(value.toLowerCase())) {
            infoToDisplay = json.data[i];
            break;
          }
        }

        let resultDivs = "<div id='" + PARK_RESULT + "'></div>";
        let parkResult = "";

        if (infoToDisplay == null) {
          document.getElementById(RESULT_DIVS).innerHTML = resultDivs;

          parkResult += '<h2>No results found for:</h2>';
          parkResult += '<h2>' + value + '</h2>';
        } else {
          // This is where to put json info
          console.log(infoToDisplay.fullName);
          resultDivs += "<div id='" + PARK_INFO + "'></div>";
          document.getElementById(RESULT_DIVS).innerHTML = resultDivs;

          parkResult = '<h2>' + infoToDisplay.fullName + '</h2>';
          parkResult += '<p>' + infoToDisplay.description + '</p>';

          let parkInfo = "<div id = 'parkActivities'></div>";
          parkInfo += "<div id = 'parkPhotos'></div>";
          parkInfo += "<div id = 'parkEntranceInfo'></div>";
          parkInfo += "<div id = 'parkWeather'></div>";
          document.getElementById(PARK_INFO).innerHTML = parkInfo;

          // Adding activities
          let activitiesInfo = "<h3>Available Activities</h3><p>";
          let activitiesLength = infoToDisplay.activities.length
          for (i = 0; i < activitiesLength; i++) {
            activitiesInfo += infoToDisplay.activities[i].name;
            if (i != activitiesLength - 1) {
              activitiesInfo += ", ";
            }
          }
          activitiesInfo += "</p>";
          document.getElementById("parkActivities").innerHTML = activitiesInfo;

          // Adding images
          let newImageDivs = "";
          let numPhotos = 4;
          if (infoToDisplay.images.length < numPhotos) {
            numPhotos = infoToDisplay.images.length;
          }
          for (i = 1; i < numPhotos; i++) {
            newImageDivs += "<div class='park-photo-container'><img src='" +
              infoToDisplay.images[i].url +
              "'></div>";
          }
          console.log(newImageDivs);
          document.getElementById("parkPhotos").innerHTML = newImageDivs;

          // Adding park entrance info
          let entranceInfo = "<h3>Entrance Hours</h3>";
          for (let i = 0; i < DAYS.length; i++) {
            let currDay = DAYS[i].toLowerCase();
            let test = infoToDisplay.operatingHours[0].standardHours[currDay];
            entranceInfo += "<p>" + DAYS[i] + ": " + infoToDisplay.operatingHours[0].standardHours[currDay] + "</p>";
          }
          entranceInfo += "<div></div>";
          document.getElementById("parkEntranceInfo").innerHTML = entranceInfo;



          // Adding weather
          let weatherInfo = "<h3>Weather</h3><p>" + infoToDisplay.weatherInfo + "</p>";
          document.getElementById("parkWeather").innerHTML = weatherInfo;





          backgroundImage = "url(" + infoToDisplay.images[0].url + ")";
          document.body.style.backgroundImage = backgroundImage;
        }
        document.getElementById(PARK_RESULT).innerHTML = parkResult;
      }

    });
  // const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=60347f560a3b028d1ea0ceda27cb0ea4";
  // fetch(url2)
  //   .then(function(response) {
  //     return response.json();
  //   }).then(function(json) {
  //     console.log(json);
  //     let currDate = moment(json.list[0].dt_txt).format('MMMM Do');
  //     let forecast = "<div id = 'day-table'>";
  //     forecast += "<div class = 'day-row-container'><div class = 'day-row'><h2>" + currDate + "</h2><div class = 'day-row-elements-container'>";
  //
  //     for (let i = 0; i < json.list.length; i++) {
  //       if (moment(json.list[i].dt_txt).format('MMMM Do') != currDate) {
  //         currDate = moment(json.list[i].dt_txt).format('MMMM Do');
  //         forecast += "</div></div></div><div class = 'day-row-container'><div class = 'day-row'><h2>" + currDate + "</h2><div class = 'day-row-elements-container'>";
  //       }
  //       forecast += "<div class = 'day-row-element'><h4>" + moment(json.list[i].dt_txt).format('h a') + "</h2>";
  //       forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
  //       forecast += "<p>" + json.list[i].main.temp + " &deg;F</p>";
  //       forecast += "</div>";
  //     }
  //     forecast += "</div></div></div></div>";
  //     document.getElementById("forecastResults").innerHTML = forecast;
  //   });
});