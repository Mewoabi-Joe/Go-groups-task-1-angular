import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../interfaces/Forecast';
import { Location } from '../interfaces/Location';
import { MyWeather } from '../interfaces/MyWeather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl =
    'http://api.weatherapi.com/v1/current.json?key=c0b6446e0e734b64ab1141033221907&q=';

  private forecastUrl =
    'http://api.weatherapi.com/v1/forecast.json?key=c0b6446e0e734b64ab1141033221907&q=';

  private searchUrl =
    'http://api.weatherapi.com/v1/search.json?key=c0b6446e0e734b64ab1141033221907&q=';

  constructor(private http: HttpClient) {}

  getMyLocationsWeather(longLat: string): Observable<MyWeather> {
    return this.http.get<MyWeather>(`${this.weatherUrl}${longLat}&aqi=no`);
  }
  getPlaceBySearch(term: string): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.searchUrl}${term}`);
  }

  getMyForecast(longLat: string): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${this.forecastUrl}${longLat}&days=10&aqi=no&alerts=no`
    );
  }
}
