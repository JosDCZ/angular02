import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubirArchivosRoutingModule } from './subir-archivos-routing.module';
import { SubirComponent } from './pages/subir/subir.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SubirComponent
  ],
  imports: [
    CommonModule,
    SubirArchivosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SubirArchivosModule { }
