import { Component, OnInit } from '@angular/core';
import { MODULE1, MODULE2, MODULE3 } from 'src/app/constants/constants';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
modulo1:string = MODULE1;
modulo2:string = MODULE2;
modulo3:string = MODULE3;


}
