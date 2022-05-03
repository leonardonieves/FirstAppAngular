import { createAction, props } from '@ngrx/store';
import { EmpleadoModel } from 'src/app/core/Empleado.interface';
 
export const loadEmpleados = createAction(
    '[Empleado List] Load Empleados'
);
 
export const loadedEmpleados = createAction(
    '[Empleado List] Loaded Empleados',
    props<{empleados:EmpleadoModel[]}>()
)