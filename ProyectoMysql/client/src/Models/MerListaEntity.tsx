

export class MerListaEntity {
    Cont: number;
    ListaId: number;
    CampoId: number;
    Codigo: string;
    Nombre: string;
    Descripcion: string
    FechaRegistro: Date;
    CodUsuario: string;;
    EstadoRegistro: boolean;
    Action: number;
    CodigoTabla: string
    constructor() {
        this.Cont = 0;
        this.ListaId = 0;
        this.CampoId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.Descripcion = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = 0;
        this.CodigoTabla = '';
    }
}

export class MerListaTituloModel {
    Nombre: string;
    constructor() {
        this.Nombre = '';
    }
}