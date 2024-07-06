import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListUsuarioComponent } from './dashboard/list-usuario/list-usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './dashboard/list-usuario/card-usuario/card-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListUsuarioComponent,
    FooterComponent,
    LayoutComponent,
    CardUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
