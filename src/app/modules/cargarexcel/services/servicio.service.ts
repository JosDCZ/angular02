import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaciente } from '../interface/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class Servicio {
  private endpoint = 'http://localhost:8080/validar/insertar';

  constructor(private http: HttpClient) { }

  validarInsertarPaciente(paciente: IPaciente): Observable<IPaciente> {
    return this.http.post<IPaciente>(this.endpoint, paciente);
  }
}
