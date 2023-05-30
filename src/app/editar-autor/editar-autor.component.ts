import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {

  id : any;
  nombre :any;


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
        axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/autor/find/" + this.id).then(resultado=>{
          console.log("Resultados de la consola");
          //console.log(resultado.data);
          this.nombre = resultado['data']['result']['nombre'];
         
        });
      }
   
  }

  guardarAutor=() =>{
    console.log("Presionado guardar");
    const autorUpdate = {
      codigo : this.id,
      nombre : this.nombre
    };

    axios.put("http://localhost:8080/PROYECTO-REST/rest/autor/update", autorUpdate).then((resultado:any)=>{
      console.log(resultado.data['result']);
      this._snackBar.open(`Registro Guardado  #${resultado.data['result']['codigo']}`, " ", {
        duration: 3000
      });
          

           this.router.navigate(["/consultarautor"]);
          });
  }


}