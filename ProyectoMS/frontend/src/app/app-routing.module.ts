import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaNaturalComponent} from './pages/persona-natural/persona-natural.component'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'PersonaNatural',
    component: PersonaNaturalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
