import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarexcelRoutingModule } from './cargarexcel-routing.module';
import { ReadExcelComponent } from './pages/read-excel/read-excel.component';


@NgModule({
  declarations: [
    ReadExcelComponent
  ],
  imports: [
    CommonModule,
    CargarexcelRoutingModule,
    HttpClientModule
  ]
})
export class CargarexcelModule { }
