import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';
import { loadedEmpleados, loadEmpleados } from '../state/actions/empleados.actions';
import { selectListEmpleados, selectLoading } from '../state/selectors/empleados.selectors';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

loading$: Observable<boolean> = new Observable()
  AddEmpleado(){
    let empleado=new Empleado(this.campoNombre,this.campoApellido,this.campoCargo,this.campoSalario);
    this.service.addEmpleadoService(empleado);
  }

  campoNombre:string="";
  campoApellido:string="";
  campoCargo:string="";
  campoSalario:number=0;
  

  constructor(private service:EmpleadosService, private store: Store<any>) { 
    //this.empleados=this.service.empleados;
  }
  empleados:Empleado[]=[];
  empleados$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.store.select(selectLoading);
    this.empleados$ =  this.store.select(selectListEmpleados);
    this.store.dispatch(loadEmpleados())

    
    
  }

}
