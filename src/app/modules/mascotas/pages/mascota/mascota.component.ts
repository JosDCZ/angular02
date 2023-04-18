import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { map, switchMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascotita!: IMascota;
  razita: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // como devuelve un observable - switchMap, operador de transformacion
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.mascotasService.mascotaById(id)))
      .subscribe((resp: IMascota) => {
        this.mascotita = resp;
        console.log(this.mascotita.id);
      });
      this.activatedRoute.params
      .pipe(
        map(({ raza }) => this.todasMayusculas(decodeURIComponent((raza)))))
      .subscribe((resp: string) => {
        this.razita = resp;
        console.log("Raza es: ",this.razita);
      });
  }

  private todasMayusculas(valor: string){
    return valor.toLocaleUpperCase();
  }

  regresar() {
    // para ir a la ruta indicada
    this.router.navigate(['mascotas/listar']);
  }

  delete() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.deleteMascota(id)))
      .subscribe((resp: IMascota) => {
        this.mascotita = resp;
      });
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Se elimino registro',
    });
    this.regresar();
  }
}
