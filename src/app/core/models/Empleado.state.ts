import { EmpleadoModel } from "../Empleado.interface";

export interface EmpleadoState {
    loading: boolean,
    empleados: ReadonlyArray<EmpleadoModel>;
}