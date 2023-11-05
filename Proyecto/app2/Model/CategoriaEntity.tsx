

export class CategoriaEntity {
    Cont:number;
    CategoriaId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;;
    EstadoRegistro: boolean;
    Action: number;
    FechaRegistroString: string;
    constructor() {
        this.Cont=0;
        this.CategoriaId = 0;
        this.Nombre = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = 0;
        this.FechaRegistroString ='';
    }
}