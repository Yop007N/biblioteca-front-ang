import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarCiudadComponent } from './consultar-ciudad/consultar-ciudad.component';
import { EditarCiudadComponent } from './editar-ciudad/editar-ciudad.component';
import { NgModule } from '@angular/core';
import { ConsultarLibroComponent } from './consultar-libro/consultar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { EditarClienteComponent } from './editar-libro/editar-cliente/editar-cliente.component';
import { ConsultarAutorComponent } from './consultar-autor/consultar-autor.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarCiudadComponent,
    EditarCiudadComponent,
    ConsultarLibroComponent,
    EditarLibroComponent,
    ConsultarClienteComponent,
    EditarClienteComponent,
    ConsultarAutorComponent,
    EditarAutorComponent,
    ConsultarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, 
    MatSnackBarModule,
    MatPaginatorModule,
    MatSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
