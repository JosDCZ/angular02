import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirComponent } from './pages/subir/subir.component';

const routes: Routes = [
  { path:'',component:SubirComponent,title:'Subir Archivo' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubirArchivosRoutingModule { }
