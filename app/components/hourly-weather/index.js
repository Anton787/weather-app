class HourlyWeather{
  constructor(time, temp, icon){
    this.time = time;
    this.temp = temp;
    this.icon = icon;
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class='hourly-forecast__timelapse'>
          <div class="hourly-info">
            <div class="weather-status">
              <img src="${this.icon}" alt="">
            </div>
            <span class="hour">${this.time}</span>
            <h2>${this.temp}<span>&deg;</span></h2>
          </div>
        </div>
        `;

      return template.content.firstElementChild;
  }
}

const weather_block = document.getElementById('hourly-weather');

const weather = new HourlyWeather('12:00 AM', '234', '../../public/sun.svg');
const weather_html = weather.render();

weather_block.appendChild(weather_html);