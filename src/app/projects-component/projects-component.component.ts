import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  empleados:Empleado[]=[];
  campoNombre:string="";
  campoApellido:string="";
  campoCargo:string="";
  campoSalario:number=0;

  constructor(private router:Router, private service:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.service.empleados;
  }

  goHome(){
    this.router.navigate(['']);
  } 

  AddEmpleado(){
    let empleado=new Empleado(this.campoNombre,this.campoApellido,this.campoCargo,this.campoSalario);
    this.service.addEmpleadoService(empleado);
    this.router.navigate(['']);
  }  

}
