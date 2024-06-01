

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


export class EntidadNombreCompletoModel {
    EntidadId: number;
    Nombres: string;
    constructor() {
        this.EntidadId = 0;
        this.Nombres = '';
    }
}
// export class RecepListaModel {
//     ListaId: number;
//     Nombre: string;
//     constructor() {
//         this.ListaId = 0;
//         this.Nombre = '';
//     }
// }

export class TipoEntidadItemModel {
    TipoEntidadId: number;
    Codigo: string;
    Nombre: string;

    constructor() {
        this.TipoEntidadId = 0;
        this.Codigo = '';
        this.Nombre = '';
    }


}

export class DatosClienteItemModel {
    TipoEntidadId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    Nombres: string;
    ApellidoPaterno: string = '';
    ApellidoMaterno: string = '';
    CodUsuario: string;
    NombreComercial: string;
    EntidadId: number;
    constructor() {
        this.TipoEntidadId = 0;
        this.TipoDocumentoIdentidadId = 0;
        this.NumDocumento = '';
        this.Nombres = '';
        this.ApellidoPaterno = '';
        this.ApellidoMaterno = '';
        this.CodUsuario = '';
        this.EntidadId=0;
        this.NombreComercial = '';
    }

}