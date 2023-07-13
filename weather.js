
/* api key */
/* https://api.openweathermap.org/data/2.5/weather?q=giridih&appid=578b7153ba1316232303203add048620&units=metric */

const apiurl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "578b7153ba1316232303203add048620";

// const api          = 'https://api.openweathermap.org/data/2.5/weather?q=giridih&appid=578b7153ba1316232303203add048620&units=metric'; 
const search_input = document.querySelector('.search > input');
const search = document.querySelector('.search > span');
const temp = document.querySelector('.temp');
const area = document.querySelector('.area > div > h2');
const real_temp = '';
const img = document.querySelector('img');





const Get_temp = async (city) => {
  try {

    const realData = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await realData.json();
    temp.innerHTML = data.main.temp + '°C';
    area.innerHTML = data.name;

    console.log(data);

    if (data.main.temp < 20) {
      img.src = "weather/cold.jpg";
      temp.style.color = "grey";
      area.style.color = "grey";
      search_input.style.color = "grey"
    }
   else if (data.weather[0].main == 'Haze' || data.weather[0].main == "Clouds") {
      img.src = "weather/weather_backgd.jpg";
      temp.style.color = "#ffffffcc";
      area.style.color = "#ffffffcc";
      search_input.style.color = "white"

    }
    else if (data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Rain") {
      img.src = "weather/rainy.png";
      temp.style.color = "#ffffffcc";
      area.style.color = "#ffffffcc";
      search_input.style.color = "white"

    }
    else if (data.weather[0].main == "cold") {
      img.src = "weather/cold.jpg";
      temp.style.color = "black";
      area.style.color = "black";
    }
    else if (data.weather[0].main == 'Mist') {
      img.src = "weather/mint.jpeg";
      temp.style.color = "#ffffffcc";
      area.style.color = "#ffffffcc";
      search_input.style.color = "white"
     console.log("yes");
    }
  
  }
  catch (error) {
    alert(error)
  }

}




search.addEventListener('click', () => {

  Get_temp(search_input.value);
});




