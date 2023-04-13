import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private baseUrl: string= environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  get mascotas(): Observable<IMascota[]>{
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
   }


}
