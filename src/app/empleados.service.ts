import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[]=[];
  /*empleados: Empleado[]= [
    new Empleado("Juan", "Gonzalez","Director",1000),
    new Empleado("Pepe", "Gonzalez","Director Adjunto",900),
    new Empleado("Julio", "Gonzalez","Tecnico",800),
    new Empleado("Lorenzo", "Gonzalez","Secretario",700),
  ];*/

  constructor(private dataService:DataService) { }

  getEmpleados(){
    return this.dataService.loadEmpleados();
  }

  setEmpleados(allEmpleados:Empleado[]){
    this.empleados=allEmpleados;
  }

  addEmpleadoService(empleado:Empleado){
    this.empleados.push(empleado);
    this.dataService.saveEmpleados(this.empleados);
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
