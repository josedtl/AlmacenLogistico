// export interface IMarca {
//     Cont: number,
//     MarcaId: number,
//     Nombre: string,
//     FechaRegistro: Date,
//     CodUsuario: string,
//     EstadoRegistro: boolean
// }


// export interface IMarcaForm {
//     MarcaId: number,
//     Nombre: string,
//     FechaRegistro: Date,
//     CodUsuario: string,
//     EstadoRegistro: boolean,
//     Action: number
// }

export class MarcaEntity {
    Cont:number;
    MarcaId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;;
    EstadoRegistro: boolean;
    Action: number;

    constructor() {
        this.Cont=0;
        this.MarcaId = 0;
        this.Nombre = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = 0;
    }
}