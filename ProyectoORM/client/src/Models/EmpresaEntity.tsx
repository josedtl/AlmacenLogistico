import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
export class EmpresaEntity {
    EntidadId: number;
    TipoDocumentoIdentidadId: number;
    NumeroDocumento: string;
    NombreCompleto: string;
    NombreComercial: string;
    UbigeoId: number | null;
    Direccion: string;
    Telefono: string;
    Correo: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: ProcessActionEnum
    NomDocumento: string

    constructor() {
        this.EntidadId = 0;
        this.TipoDocumentoIdentidadId = 0;
        this.NumeroDocumento = '';
        this.NombreCompleto = '';
        this.NombreComercial = '';
        this.UbigeoId = 0;
        this.Direccion = '';
        this.Telefono = '';
        this.Correo = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = ProcessActionEnum.Add;
        this.NomDocumento = '';
    }
}

export class EntidadEmpresaEntity {
    EntidadId: number;
    TipoEntidadId: number;
    EsEmpresa: boolean;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    NombreCompleto: string;
    FechaRegistro: Date;
    CodUsuario: string;
    UbigeoId: number;
    constructor() {
        this.EntidadId = 0;
        this.TipoEntidadId = 0;
        this.TipoDocumentoIdentidadId = 0;
        this.NumDocumento = '';
        this.NombreCompleto = '';
        this.UbigeoId = 0;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EsEmpresa = false;
    }
}
