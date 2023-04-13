import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  titulo = 'Directiva NgModel';
  nom = '';
  nombre = '';
  nombre2 = '';
  formatNombre():void{
    this.nombre = this.nom.toLowerCase();
    this.nombre2 = this.nom.toUpperCase();
  }
}
