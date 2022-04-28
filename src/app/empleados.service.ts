import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[]= [
    new Empleado("Juan", "Gonzalez","Director",1000),
    new Empleado("Pepe", "Gonzalez","Director Adjunto",900),
    new Empleado("Julio", "Gonzalez","Tecnico",800),
    new Empleado("Lorenzo", "Gonzalez","Secretario",700),
  ];

  constructor() { }

  addEmpleadoService(empleado:Empleado){
    this.empleados.push(empleado);
  }

  FindEmpleado(id:number){
    let empleado:Empleado=this.empleados[id];
    return empleado;
  }

  updateEmpleadoService(id:number, updateEmpleado:Empleado){
    let empleado:Empleado=this.empleados[id];
    empleado.nombre=updateEmpleado.nombre;
    empleado.apellido=updateEmpleado.apellido;
    empleado.cargo=updateEmpleado.cargo;
    empleado.salario=updateEmpleado.salario;
  }

  deleteEmpleadoService(id:number){
    this.empleados.splice(id,1);

  }
}
