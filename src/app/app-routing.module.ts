import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCiudadComponent } from './consultar-ciudad/consultar-ciudad.component';
import { EditarCiudadComponent } from './editar-ciudad/editar-ciudad.component';
import{ ConsultarLibroComponent } from './consultar-libro/consultar-libro.component';
import{ EditarLibroComponent } from './editar-libro/editar-libro.component';
import{ ConsultarClienteComponent} from './consultar-cliente/consultar-cliente.component';
import{ EditarClienteComponent} from './editar-libro/editar-cliente/editar-cliente.component';
import{ ConsultarAutorComponent} from './consultar-autor/consultar-autor.component';
import{ EditarAutorComponent} from './editar-autor/editar-autor.component';
import{ ConsultarUsuarioComponent} from './consultar-usuario/consultar-usuario.component';
import{ EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: 'consultarciudad',
    component: ConsultarCiudadComponent 
  },
  {
    path: 'editarciudad/:id',
    component: EditarCiudadComponent
  },
  {
    path: 'consultarlibro',
    component: ConsultarLibroComponent 
  },
  {
    path: 'editarlibro/:id',
    component: EditarLibroComponent
  }
  ,
  {
    path: 'consultarcliente',
    component: ConsultarClienteComponent 
  },
  {
    path: 'editarcliente/:id',
    component: EditarClienteComponent
  }
  ,
  {
    path: 'consultarautor',
    component: ConsultarAutorComponent 
  },
  {
    path: 'editarautor/:id',
    component: EditarAutorComponent
  },
  {
    path: 'consultarusuario',
    component: ConsultarUsuarioComponent 
  },
  {
    path: 'editarusuario/:id',
    component: EditarUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
