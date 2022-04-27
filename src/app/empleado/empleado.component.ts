import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() listEmpleados:Empleado;
  @Input() indice:number;

  caracteristicas = [''];

  addCaracteristica(caracteristica:string){
    this.caracteristicas.push(caracteristica);
  }

  constructor() { }

  ngOnInit(): void {
  }  

}
