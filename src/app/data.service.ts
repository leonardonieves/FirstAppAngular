import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  loadEmpleados(){
    return this.httpClient.get('https://angularfirebasecrud-1ffaa-default-rtdb.firebaseio.com/empleados.json');
  }

  saveEmpleados(empleados:Empleado[]){
    this.httpClient.put('https://angularfirebasecrud-1ffaa-default-rtdb.firebaseio.com/empleados.json', empleados)
        .subscribe(
          response=>console.log('Se han guardado correctamente: ' + response),
          error=>console.log("Error: " + error)
        );
  }
}
