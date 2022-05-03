import { ActionReducerMap } from "@ngrx/store";
import { EmpleadoModel } from "../core/Empleado.interface";
import { EmpleadoState } from "../core/models/Empleado.state";
import { empleadosReducer } from "./reducers/empleados.reducers";


export interface AppState {
  empleados: EmpleadoState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    empleados: empleadosReducer
}