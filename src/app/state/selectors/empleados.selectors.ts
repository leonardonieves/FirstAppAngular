import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { EmpleadoState } from 'src/app/core/models/Empleado.state';
import { AppState } from '../app.state';

 
 
export const selectEmpleadosFeature = (state: AppState) => state.empleados;
 
export const selectListEmpleados = createSelector(
  selectEmpleadosFeature,
  (state: EmpleadoState) => state.empleados
);

export const selectLoading =createSelector(
    selectEmpleadosFeature,
    (state:EmpleadoState) => state.loading
)