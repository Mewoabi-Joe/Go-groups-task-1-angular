import { Component } from '@angular/core';
import { AForecast } from './interfaces/Forecast';
import { Location } from './interfaces/Location';
import { MyWeather } from './interfaces/MyWeather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDegree = true;
  title = 'weather-app';
  status = '';
  logAndLatSet = false;
  latitude = 0;
  longitude = 0;
  weather?: MyWeather;
  today = '';
  loading = true;
  sectionTwoLoading = true;
  image: string = '';
  forecasts: AForecast[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    if (!navigator.geolocation) {
      this.status = 'Geolocation is not supported by your browser';
    } else {
      this.status = 'Locating…';
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          this.status = `Latitude: ${this.latitude} °, Longitude: ${this.longitude} °`;
          this.logAndLatSet = true;
          this.getMyLocationsWeather();
          this.getForecast();
        },
        () => {
          this.status = 'Unable to retrieve your location';
        }
      );
    }
  }

  getMyLocationsWeather() {
    this.loading = true;
    this.weatherService
      .getMyLocationsWeather(`${this.latitude},${this.longitude}`)
      .subscribe({
        next: (weather) => {
          this.weather = weather;
          this.image = this.weather.current.condition.icon;
          // this.image = this.weather.current.condition.icon.replace(
          //   '//cdn.weatherapi.com/weather/64x64/day/',
          //   ''
          // );
          this.today = new Date(weather.location.localtime).toDateString();
          this.loading = false;
        },
        error: (e) => console.error(e),
        // complete: () => console.info('complete')
      });
  }

  getForecast() {
    this.sectionTwoLoading = true;
    this.weatherService
      .getMyForecast(`${this.latitude},${this.longitude}`)
      .subscribe({
        next: (myForecast) => {
          this.forecasts = myForecast.forecast.forecastday.filter(
            (forecast, index) => index !== 0
          );
          this.sectionTwoLoading = false;
        },
        error: (e) => console.error(e),
        // complete: () => console.info('complete')
      });
  }

  handleSearch(location: Location) {
    this.latitude = location.lat;
    this.longitude = location.lon;
    this.getMyLocationsWeather();
    this.getForecast();
  }

  handleChangedToDegree(wasDegree: boolean) {
    if (wasDegree) {
      this.isDegree = true;
    } else {
      this.isDegree = false;
    }
  }
}
