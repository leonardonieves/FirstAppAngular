import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectListEmpleados } from '../state/selectors/empleados.selectors';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() listEmpleados:Empleado;
  @Input() indice:number;

  empleados$: Observable<any> = new Observable()

  caracteristicas = [''];

  addCaracteristica(caracteristica:string){
    this.caracteristicas.push(caracteristica);
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.empleados$ = this.store.select(selectListEmpleados)
  }  

}
