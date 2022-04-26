import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Gonzalez";
  edad= 83;
  empresa= "NTSprint";
  usuarioRegistrado = true;

  constructor() { }

  ngOnInit(): void {
  }

  setRegistroUsuario(){
    this.usuarioRegistrado = !this.usuarioRegistrado;
    console.info(this.usuarioRegistrado);
  }

  showEmergentWindow(){
    alert("Usuario ha sido registrado");
  }
  

}
