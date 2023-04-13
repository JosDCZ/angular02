import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent{

  tema: string='Uso de ngClass';

  alerta:string = 'alert-danger';

  propiedad = {
    danger: false,
  };

  // para usar ngClass usando condicion
  message:number = 1;
}
