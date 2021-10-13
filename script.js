document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  const url = "https://developer.nps.gov/api/v1/parks?limit=50&start=0&q=" + value + "&api_key=DpXaMIhw6NpRLqadO3J0L9mS1lgstpqjIh69HEoa";
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
        backgroundImage = "url(" + json.data[0].images[0].url + ")";


        // let resultDivs = "<div id=\"weatherResults\"></div><div id=\"forecastResults\"></div>";
        // document.getElementById("resultDivs").innerHTML = resultDivs;
        //
        // let results = "";
        // results += '<h2>Weather in ' + json.name + "</h2>";
        // for (let i = 0; i < json.weather.length; i++) {
        //   results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        // }
        // results += '<div class = \'info-table\'>'; //Add this div to prevent text aligning with upper image
        // results += '<div class = \'table-left\'>' + 'Temperature</div><div class = \'table-right\'>' + json.main.temp + " &deg;F</div>";
        // results += '<div class = \'table-left\'>' + 'Feels Like</div><div class = \'table-right\'>' + json.main.feels_like + " &deg;F</div>";
        // results += '<div class = \'table-left\'>' + 'Daily High</div><div class = \'table-right\'>' + json.main.temp_max + " &deg;F</div>";
        // results += '<div class = \'table-left\'>' + 'Daily Low</div><div class = \'table-right\'>' + json.main.temp_min + " &deg;F</div>";
        // results += '<div class = \'table-left\'>' + 'Humidity</div><div class = \'table-right\'>' + json.main.humidity + "%</div>";
        // results += '<div class = \'table-left\'>' + 'Wind Speed</div><div class = \'table-right\'>' + json.wind.speed + " mph</div>";
        // results += '</div>';
        // document.getElementById("weatherResults").innerHTML = results;
      }

      document.body.style.backgroundImage = backgroundImage;

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