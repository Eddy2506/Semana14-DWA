import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }