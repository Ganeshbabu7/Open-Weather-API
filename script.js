const containerEl = document.getElementById("card");

function restCountries() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i<data.length; i++) {
        let countryName = data[i].name.official;
        let capital = data[i].capital;
        let region = data[i].region;
        let population = data[i].population
        let countryCode = data[i].cca2;
        let image = data[i].flags.png;

            containerEl.innerHTML += `<div id="cardWrapper" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="card h-100">
                                          <div class="card-header">
                                            <h5 class="card-title d-flex justify-content-center"><b>${countryName} (${countryCode})</b></h5>
                                          </div>
                                          <div class="card-body">
                                            <img src=${image} class="card-img-top" alt="...">
                                            <div class="card-text">  
                                              <ul class="list-group list-group-flush">
                                                <li class="list-group-item card-text"><b>Native Name : </b>${countryName}</li>
                                                <li class="list-group-item card-text"><b>Capital : </b>${capital}</li>
                                                <li class="list-group-item card-text"><b>Region : </b>${region}</li>
                                                <li class="list-group-item card-text"><b>Population : </b>${population}</li>
                                              <div id="weather${i}">
                                              </div>
                                                <a id="toggle" class= "btn btn-primary" onclick="weather('${countryName}', ${i})"> Click For Weather </a>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>` 
      } 
  });
}
restCountries();

function weather (country, i){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=1ab91661d835035ed31ed8383bde62a4`)
  .then(response1 => (response1.json()))
  .then(data1 => {
    let weatherEl = document.getElementById('weather'+i)
    let temp = data1.main.temp
    let pressure = data1.main.pressure
    let humidity = data1.main.humidity
    let windSpeed = data1.wind.speed

    weatherEl.innerHTML += `<div class="card-body1"><b>Weather Details</b>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item card-text"><b>Temperature : </b>${temp}</li>
                                <li class="list-group-item card-text"><b>Pressure : </b>${pressure}</li>
                                <li class="list-group-item card-text"><b>Humidity : </b>${humidity}</li>
                                <li class="list-group-item card-text"><b>Wind Speed : </b>${windSpeed}</li>
                              </ul>
                            </div?`
  })
}