import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsuarioComponent } from './dashboard/list-usuario/list-usuario.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'layout',pathMatch:'full'},
  {path: 'layout', component: LayoutComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path:'', component: ListUsuarioComponent},
    {path:'usuario/:id', component:UsuarioComponent}
  ]
  },
  {path: '**', redirectTo:'layout',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
