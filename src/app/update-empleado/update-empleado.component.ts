import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent implements OnInit {

  empleados:Empleado[]=[];
  campoNombre:string="";
  campoApellido:string="";
  campoCargo:string="";
  campoSalario:number=0;
  index:number;

  constructor(private router:Router, private service:EmpleadosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleados=this.service.empleados;
    this.index=this.route.snapshot.params['id'];
    let empleado:Empleado=this.service.FindEmpleado(this.index);
    this.campoNombre=empleado.nombre;
    this.campoApellido=empleado.apellido;
    this.campoCargo=empleado.cargo;
    this.campoSalario=empleado.salario;
  }

  goHome(){
    this.router.navigate(['']);
  } 
  

  UpdateEmpleado(){
    let empleado=new Empleado(this.campoNombre,this.campoApellido,this.campoCargo,this.campoSalario);
    this.service.updateEmpleadoService(this.index,empleado);
    this.router.navigate(['']);
  }
  
  DeleteEmpleado(){
    this.service.deleteEmpleadoService(this.index);
    this.router.navigate(['']);
  }

}
