export class ProcesoEntity {
    ProcesoId: number;
    ModuloSistemaId: number;
    TipoProcesoId: number;
    Nombre: string;
    Descripcion: string;
    EsPordefecto: boolean;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;

    constructor() {
        this.ProcesoId = 0;
        this.ModuloSistemaId = 0;
        this.TipoProcesoId = 0;
        this.Nombre = '';
        this.Descripcion = '';
        this.EsPordefecto = false;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
    }
}


export class ProcesoModel {
    ProcesoId: number;
    Nombre: string;

    constructor() {
        this.ProcesoId = 0;
        this.Nombre = '';
    }
}