import { IMascota } from './../../interface/mascotas.interface';
import { MascotasService } from './../../services/mascotas.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() obj!:IMascota;

  /*Para enviar la accion de eliminar al padre, utilizando el decorador Output*/

  @Output()
  eliminar = new EventEmitter<IMascota>();

  constructor(private mascocotasService: MascotasService, private toastr: ToastrService, private router: Router) {}

  borrar(pet:IMascota){

  }

  eliminarPets(obj: IMascota){
    this.eliminar.emit(obj); /*para enviar la accion al componente padre, enviamos el id a eliminar*/
  }
}
