import { IMGE_WEATHER } from '@modules/home/constants/home.consts';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IWeather } from '@modules/home/interface/weather.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  image: string = IMGE_WEATHER;
  year = new Date();
  weather!: IWeather;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeather('San Vicente', 'sv');
  }

  getWeatherMal(ciudadName: string, paisName: string): void {
    this.weatherService.getWeather(ciudadName, paisName)
    .subscribe(
      (resp: IWeather) => {
        console.log(resp), (this.weather = resp);
      },
      (err) => {
        console.log(err),
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal, Ciudad o pais incorrecto.',
          });
      }
    );
  }

  getWeather(ciudadName: string, paisName: string): void {
    this.weatherService.getWeather(ciudadName, paisName)
    .subscribe(
        {
          next: (resp: IWeather) => {
            console.log(resp);
            this.weather = resp;
          },
          error: (err: any) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salio mal, Ciudad o pais incorrecto.',
            });
          }
        }
    );
  }

  submitLocalizacion(ciudadName: HTMLInputElement, paisName: HTMLInputElement) {
    if (ciudadName.value && paisName.value) {
      this.getWeather(ciudadName.value, paisName.value);

      ciudadName.value = '';
      paisName.value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal, completa el formulario',
      });
    }

    ciudadName.focus();
    return false;
  }

  ngSubmitLocalizacion(
    ciudadName: HTMLInputElement,
    paisName: HTMLInputElement
  ) {
    if (ciudadName.value && paisName.value) {
      this.getWeather(ciudadName.value, paisName.value);

      ciudadName.value = '';
      paisName.value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal, completa el formulario',
      });
    }

    ciudadName.focus();
  }
}
