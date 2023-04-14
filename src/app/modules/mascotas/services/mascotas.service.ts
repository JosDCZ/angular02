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

  buscarMascota(termino:string):Observable<IMascota[]>{
    if (termino.length>1) {
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limit=5`);
    } else {
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
    }
  }

  mascotaById(id:string):Observable<IMascota>{
    if (id.length>=1) {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/`);
    }
  }

}
