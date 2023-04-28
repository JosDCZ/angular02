import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotitass: IMascota[] = []; //array de mascotas
  parametroBuscar: string = ''; //parametro de busqueda

  // Inyectar el servicio
  constructor(
    private mascotasService: MascotasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp) => {
      this.mascotitass = resp;
    });
  }

  buscar(): void {
    // metodo para buscar
    this.mascotasService
      .buscarMascota(this.parametroBuscar)
      .subscribe((resp) => {
        this.mascotitass = resp;
      });
  }

  eliminarMascota(pet: IMascota) {
    Swal.fire({
      title: 'Estas Seguro de eliminar?',
      text: `Estas seguro de borrar a ${pet.raza}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        //actualizar el array omitiendo la mascota eliminada
        this.mascotitass = this.mascotitass.filter(
          (objMascota: IMascota) => objMascota.id !== pet.id
        );

        // para quitar definitivo del json
        this.mascotasService.borrarMascota(pet).subscribe((resp: any) => {
          this.toastr.success(
            'El registro fue eliminado con exito',
            'Eliminado',
            { positionClass: 'toast-top-right' }
          );
        }),
          (err: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: err.console.msg,
            });
          };
      }
    });
  }
}
