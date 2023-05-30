import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  hide = true;
  id : any;
  username :any;
  password:any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private _snackBar: MatSnackBar,
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramens=>{
      this.id = paramens.id;

    })

      if(this.id>0){
        axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/usuario/find/" + this.id).then(resultado=>{
          console.log("Resultados de la consola");
          //console.log(resultado.data);
          this.username = resultado['data']['result']['username'];
          this.password = resultado['data']['result']['password'];

         
        });
      }
   
  }

  guardarUsuario=() =>{

    const usuarioUpdate = {
      codigo : this.id,
      username : this.username,
      password : this.password
    };

    axios.put("http://localhost:8080/PROYECTO-REST/rest/usuario/update", usuarioUpdate).then((resultado:any)=>{
      console.log(resultado.data['result']);
      this._snackBar.open(`Registro Guardado  #${resultado.data['result']['codigo']}`, " ", {
        duration: 3000
      });
         

           this.router.navigate(["/consultarusuario"]);
          });
  }


}