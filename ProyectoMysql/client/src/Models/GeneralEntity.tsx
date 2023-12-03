

export class TipoProcesoEntity {
    TipoProcesoId: number;
    Codigo: string;
    Nombre: string;;
    EstadoRegistro: boolean;

    constructor() {
        this.TipoProcesoId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.EstadoRegistro = false;
    }
}


export class EstadoProcesoEntity {
    EstadoProcesoId: number;
    Nombre: string;;

    constructor() {
        this.EstadoProcesoId = 0;
        this.Nombre = '';
    }
}