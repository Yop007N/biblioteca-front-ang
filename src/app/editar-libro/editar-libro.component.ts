import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  id : any;
  descripcion :any;
  cantidad : any;
  obs : any;

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
        axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/libro/find/" + this.id).then(resultado=>{
          console.log("Resultados de la consola");
          //console.log(resultado.data);
          this.descripcion = resultado['data']['result']['descripcion'];
          this.cantidad = resultado['data']['result']['cantidad'];
          this.obs= resultado['data']['result']['obs'];
         
        });
      }  
   
  }

  guardarLibro=() =>{

    const libroUpdate = {
      codigo : this.id,
      descripcion : this.descripcion,
      cantidad : this.cantidad,
      obs : this.obs
    };

    axios.put("http://localhost:8080/PROYECTO-REST/rest/libro/update", libroUpdate).then((resultado:any)=>{
      console.log(resultado.data['result']);
      this._snackBar.open(`Registro Guardado  #${resultado.data['result']['codigo']}`, " ", {
        duration: 3000
      });
        

           this.router.navigate(["/consultarlibro"]);
   });
  }


}