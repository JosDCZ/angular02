import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadExcelComponent } from './pages/read-excel/read-excel.component';

const routes: Routes = [
  { path: '', component: ReadExcelComponent, title: 'Excel' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarexcelRoutingModule { }
