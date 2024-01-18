import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipoElementoMainComponent } from './components/tipo-elemento-main/tipo-elemento-main.component';
import { CargoMainComponent } from './components/cargo-main/cargo-main.component'
import { ServicioBasicoMainComponent } from './components/servicio-basico-main/servicio-basico-main.component'
import { PisoMainComponent } from './components/piso-main/piso-main.component'
import { PersonaNaturalSaveComponent } from './components/PersonaNatural/persona-natural-save/persona-natural-save.component';
import { PersonaNaturalMainComponent } from './components/PersonaNatural/persona-natural-main/persona-natural-main.component';
import { LoginComponent } from './components/login/login.component';
import { InfraestructuraMainComponent} from './components/Infraestructura/infraestructura-main/infraestructura-main.component'
import { InfraestructuraSaveComponent} from './components/Infraestructura/infraestructura-save/infraestructura-save.component'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,pathMatch: 'full'
  },
  {
    path: 'TipoElementoMain',
    component: TipoElementoMainComponent
  },

  {
    path: 'cargoMain',
    component: CargoMainComponent
  }, {
    path: 'PisoMain',
    component: PisoMainComponent
  },
  {
    path: 'ServicioBasicoMain',
    component: ServicioBasicoMainComponent
  }
  ,
  {
    path: 'PersonaNaturalMain',
    component: PersonaNaturalMainComponent
  },
  // {
  //   path: 'PersonaNaturalSave',
  //   component: PersonaNaturalSaveComponent
  // }
  // ,
  {
    path: 'PersonaNaturalSave/:id',
    component: PersonaNaturalSaveComponent
  },
  {
    path: 'InfraestructuraMain',
    component: InfraestructuraMainComponent
  },
  {
    path: 'InfraestructuraSave/:id',
    component: InfraestructuraSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
