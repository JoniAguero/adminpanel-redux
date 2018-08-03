export class User {

    public nombre: string;
    public email: string;
    public uid: string;

    constructor(obj: ObjUSer) {
        this.nombre = obj && obj.nombre || null;
        this.email  = obj && obj.email  || null;
        this.uid    = obj && obj.uid    || null;
    }

}

interface ObjUSer {
    uid: string;
    nombre: string;
    email: string;
}
