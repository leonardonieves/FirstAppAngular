import { createReducer, on } from '@ngrx/store';
import { EmpleadoModel } from 'src/app/core/Empleado.interface';
import { EmpleadoState } from 'src/app/core/models/Empleado.state';
import { loadEmpleados, loadedEmpleados } from '../actions/empleados.actions';

export const initialState: EmpleadoState = { loading: false, empleados: [] };

export const empleadosReducer = createReducer(
  initialState,
  on(loadEmpleados, (state) => {
    return {...state, loading: true}
  }),
  on(loadedEmpleados, (state, {empleados}) => {
    return {...state, loading: false, empleados}
  })
);