

export class ModeloEntity {
    Cont:number;
    ModeloId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;;
    EstadoRegistro: boolean;
    Action: number;

    constructor() {
        this.Cont=0;
        this.ModeloId = 0;
        this.Nombre = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = 0;
    }
}