import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleado[]= [
    new Empleado("Juan", "Gonzalez","Director",1000),
    new Empleado("Pepe", "Gonzalez","Director Adjunto",900),
    new Empleado("Julio", "Gonzalez","Tecnico",800),
    new Empleado("Lorenzo", "Gonzalez","Secretario",700),
  ];

  AddEmpleado(){
    let empleado=new Empleado(this.campoNombre,this.campoApellido,this.campoCargo,this.campoSalario);
    this.empleados.push(empleado);
  }

  campoNombre:string="";
  campoApellido:string="";
  campoCargo:string="";
  campoSalario:number=0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
