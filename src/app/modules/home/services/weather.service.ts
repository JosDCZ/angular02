import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeather } from '../interface/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  APIKey: String = '21f4c87d3722eada8866ff9dc7f45e6e';
  URL: string = '';
  URLSend: string = '';

  constructor(private httpCliente: HttpClient) {}

  getWeather(ciudad: string, pais: string): Observable<IWeather> {
    this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.APIKey}&units=metric&lang=es&q=`;
    this.URLSend = `${this.URL}${ciudad},${pais}`;
    console.log(`${this.URL}${ciudad},${pais}`);
    return this.httpCliente.get<IWeather>(this.URLSend);
  }
}
