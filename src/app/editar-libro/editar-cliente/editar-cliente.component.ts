import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id: any;
  nombre: any;
  direccion: any;
  ciudad: any;
  ciudades:any;
  obs: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

    })

    this.consultarCiudad();

    if (this.id > 0) {
      axios.get<any>(`http://localhost:8080/PROYECTO-REST/rest/cliente/find/${this.id}`).then(resultado => {
        if (resultado.data['success'] == true) {
          this.nombre = resultado.data["result"]["nombre"];
          this.direccion = resultado.data["result"]["direccion"];
          this.ciudad = resultado.data["result"]["ciudad"]["codigo"];
          this.obs = resultado.data["result"]["obs"];
        }
      });
    }

    

  }

  consultarCiudad = () => {
    axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/ciudad/list").then(resultado => {
      if (resultado.data["success"] == true) {
        this.ciudades = resultado.data["result"];
      } else {
        this._snackBar.open(resultado.data["result"], "", { duration: 3000 });
      }

    });

  }


  guardarCliente = () => {


    const clienteUpdate = {
      codigo: this.id,
      nombre: this.nombre,
      direccion: this.direccion,
      obs: this.obs,
      ciudad: {codigo :this.ciudad}
    }


    axios.put("http://localhost:8080/PROYECTO-REST/rest/cliente/update", clienteUpdate).then((resultado:any) => {
      //console.log(resultado.data);
      this._snackBar.open(`Registro guardado #${resultado.data["result"]["codigo"]}`, "", { duration: 3000 });
   

    this.router.navigate(["/consultarcliente"]);
  });
  }

}
