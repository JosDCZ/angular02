import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "./layout/skeleton/skeleton.component";
import { Error404Component } from "@shared/error404/error404.component";
import { FormularioComponent } from "@shared/formulario/formulario.component";

const routes: Routes=[

  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {
    path:``,component:SkeletonComponent,
    children: [
      { path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
      { path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule) },
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule)},
      { path: 'scroll', loadChildren: () => import('@modules/anime/anime.module').then(m => m.AnimeModule) }
    ]
 },
 {path: 'Formulario', component: FormularioComponent, title: 'Formulario'},
 {path: 'Error', component: Error404Component, title: 'Errorr'},
 {path: '**', redirectTo: 'Error'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
