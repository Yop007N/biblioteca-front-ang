import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {

  id : any;
  descripcion :any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramens=>{
      this.id = paramens.id;

    })

      if(this.id>0){
        axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/ciudad/find/" + this.id).then(resultado=>{
          console.log("Resultados de la consola");
          //console.log(resultado.data);
          this.descripcion = resultado['data']['result']['descripcion'];
         
        });
      }
   
  }

  guardarCiudad=() =>{

    const ciudadUpdate = {
      codigo : this.id,
      descripcion : this.descripcion
    };

    axios.put("http://localhost:8080/PROYECTO-REST/rest/ciudad/update", ciudadUpdate).then((resultado:any)=>{
      console.log(resultado.data['result']);
      this._snackBar.open(`Registro Guardado  #${resultado.data['result']['codigo']}`, " ", {
        duration: 3000
      });
           

           this.router.navigate(["/consultarciudad"]);
          });
  }


}