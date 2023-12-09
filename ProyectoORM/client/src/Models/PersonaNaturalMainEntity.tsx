
export class PersonaNaturalMainEntity {
    EntidadId: number;
    NomDocumento: string;
    NumDocumento: string;
    NombreCompleto: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    constructor() {
        this.EntidadId = 0;
        this.NumDocumento = '';
        this.NombreCompleto = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.NomDocumento = '';
    }
}