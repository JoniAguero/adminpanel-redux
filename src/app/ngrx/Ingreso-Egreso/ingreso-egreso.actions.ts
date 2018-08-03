import { Action } from '@ngrx/store';
import { IngresoEgreso } from '../../models/IngresoEgreso.model';

export const SET_INGRESO_EGRESO = '[SET INGRESO_EGRESO] Set ...';
export const UNSET_INGRESO_EGRESO = '[UNSET INGRESO_EGRESO] Unset ...';

export class SetIngresoEgresoAction implements Action {
    readonly type = SET_INGRESO_EGRESO;
    constructor(public ingresoEgreso: IngresoEgreso[]) { }
}

export class UnsetIngresoEgresoAction implements Action {
    readonly type = UNSET_INGRESO_EGRESO;
}

export type actions = SetIngresoEgresoAction |
                      UnsetIngresoEgresoAction;
