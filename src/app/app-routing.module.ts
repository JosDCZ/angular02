import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "./layout/skeleton/skeleton.component";
import { Error404Component } from "@modules/home/pages/error404/error404.component";

const routes: Routes=[

  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {
    path:``,component:SkeletonComponent,
    children: [
      { path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
      { path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule) },
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)}
    ]
 },
 {path: '**', component: Error404Component}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
