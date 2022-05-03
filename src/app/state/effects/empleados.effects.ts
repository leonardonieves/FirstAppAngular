import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EmpleadosService } from 'src/app/empleados.service';

@Injectable()
export class EmpleadosEffects {

  loadEmpleados$ = createEffect(() => this.actions$.pipe(
    ofType('[Empleado List] Load Empleados'),
    mergeMap(() => this.empleadoService.getEmpleados()
      .pipe(
        map(empleados => ({ type: '[Empleado List] Loaded Empleados', empleados })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private empleadoService:EmpleadosService
  ) {}
}