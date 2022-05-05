class Data {
  constructor() {}

  async getWeatherData(cityName) {
    let resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fc38bce8cac2070342a1b1097f3b67d8`
    );
    if (resp.ok) return resp.json();
  }

  getImageData(weather) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `https://api.unsplash.com/search/photos?client_id=Aaa3P9tHYMnN94hgU_hBCVzeR2rFGwJEOjCh6bmBGf0&query=${weather}`
      );
      xhr.responseType = "json";

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject(xhr.response);
      };
      xhr.send();
    });
  }
}

class Weather {
  #temp;
  #city;
  #time;
  #description;

  constructor(response) {
    this.#temp = `${(response.main.temp - 272).toFixed(1)}°C`;
    this.#description = response.weather[0].description;
    this.#time = new Date(response.dt * 1000).toLocaleDateString("ru-RU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    this.#city = response.name;
  }

  get description() {
    return this.#description;
  }

  get city() {
    return this.#city;
  }

  get time() {
    return this.#time;
  }

  get temp() {
    return this.#temp;
  }
}

window.onload = () => {
  let buttonElement = document.querySelector("#button");
  buttonElement.addEventListener("click", updateWeather);
};

async function updateWeather() {
  let cityName = document.querySelector("#city").value;
  let weatherPElement = document.querySelector("article > p");
  let bodyEl = document.querySelector("body");

  let data = new Data();
  let resp = await data.getWeatherData(cityName);
  if (!resp) alert("Введите корректное название города!");
  else {
    let weather = new Weather(resp);
    weatherPElement.innerHTML = `Время: ${weather.time} <br> Город: ${weather.city} <br> Температура: ${weather.temp}`;
    let imgResp = await data.getImageData(`${weather.description} ${weather.city}`);
    bodyEl.style.backgroundImage = `url(${imgResp.results[0].urls.full})`;
  }
}