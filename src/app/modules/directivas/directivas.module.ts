import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgIFComponent,
    NgSwitchComponent,
    BindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgModelComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
    FormsModule
  ]
})
export class DirectivasModule { }
