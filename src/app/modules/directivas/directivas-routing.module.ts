import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';

const routes: Routes = [
  { path: 'ngIf', component: NgIFComponent, title: 'ngIf' },
  { path: 'ngSwitch', component: NgSwitchComponent, title: 'ngSwitch' },
  { path: 'ngStyle', component: NgStyleComponent, title: 'ngStyle' },
  { path: 'ngClass', component: NgClassComponent, title: 'ngClass' },
  { path: 'binding', component: BindingComponent, title: 'binding' },
  { path: 'ngModel', component: NgModelComponent, title: 'ngModel' },
  { path: 'ngFor', component: NgForComponent, title: 'ngFor' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
