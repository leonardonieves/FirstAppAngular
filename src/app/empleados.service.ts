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
}
