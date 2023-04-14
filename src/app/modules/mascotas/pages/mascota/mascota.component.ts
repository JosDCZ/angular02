import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascotita!: IMascota;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // como devuelve un observable - WitchMap, operador de transformacion
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.mascotaById(id)))
      .subscribe((resp: IMascota) => {
        this.mascotita = resp;
      });
  }

  regresar() {
    // para ir a la ruta indicada
    this.router.navigate(['mascotas/listar']);
  }
}
