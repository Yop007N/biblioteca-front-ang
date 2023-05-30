import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';


@Component({
  selector: 'app-consultar-autor',
  templateUrl: './consultar-autor.component.html',
  styleUrls: ['./consultar-autor.component.css']
})
export class ConsultarAutorComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'actions'];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;

  constructor(
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.consultar();
  }
  consultar = () => {
    axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/autor/list").then(resultado => {
      console.log(resultado.data); 
      if(resultado.data['success']==true){
        this.dataSource = new MatTableDataSource(resultado.data['result']);
        this.dataSource['paginator'] = this.paginator;
      }else{
        this._snackBar.open(resultado.data['result'], " ", {
          duration: 3000,
        });
      }
      
    });
  }


  borrar = (codigo: number) => {
    axios.delete<any>(`http://localhost:8080/PROYECTO-REST/rest/autor/delete/${codigo}`).then(resultado => {

      if(resultado.data['success']==true){
     
      this.consultar();
      this._snackBar.open(`Registro #${codigo} Borrado!`, " ", {
        duration: 3000,
      });
    }else{
      this._snackBar.open(resultado.data['result'], " ", {
        duration: 3000,
      });
    }
    }).catch(error => {
      console.error(error);
      this._snackBar.open(`Ocurrio un error al eliminar el registro, consulte con el administrador!`, " ", {
        duration: 3000,
      });
    });
  }

}

