import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {


  AddEmpleado(){
    let empleado=new Empleado(this.campoNombre,this.campoApellido,this.campoCargo,this.campoSalario);
    this.service.addEmpleadoService(empleado);
  }

  campoNombre:string="";
  campoApellido:string="";
  campoCargo:string="";
  campoSalario:number=0;
  

  constructor(private service:EmpleadosService,) { 
    //this.empleados=this.service.empleados;
  }
  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleados=this.service.empleados;
  }

}
