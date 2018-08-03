export class IngresoEgreso {

    descripcion: string;
    monto: number;
    tipo: string;
    uid?: string;
    date: any;

    constructor ( obj ) {
        this.descripcion = obj && obj.descripcion || null;
        this.monto = obj && obj.monto || null;
        this.tipo = obj && obj.tipo || null;
        // this.uid = obj && obj.uid || null;
        this.date = obj && obj.date || null;
    }

}
