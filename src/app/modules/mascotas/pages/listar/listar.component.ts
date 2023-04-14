import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent implements OnInit {
  mascotitass: IMascota[] = []; //array de mascotas
  parametroBuscar: string = ''; //parametro de busqueda

  // Inyectar el servicio
  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp) =>{this.mascotitass=resp;});
  }


  buscar(): void { // metodo para buscar
    this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp) =>{this.mascotitass=resp;});
  }


}
