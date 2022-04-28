import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caractEmpleado = new EventEmitter<string>();

  constructor(private service:EmpleadosService) { }

  addCaractEmpleado(value:string){
    this.caractEmpleado.emit(value);
  }  

  ngOnInit(): void {
  }

}
