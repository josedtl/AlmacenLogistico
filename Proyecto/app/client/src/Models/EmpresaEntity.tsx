import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
export class EmpresaEntity {
    EmpresaId: number;
    TipoDocumentoIdentidadId: number;
    NumeroDocumento: string;
    RazonSocial: string;
    NombreComercial: string;
    UbigeoId: number | null;
    Direccion: string;
    Telefono: string;
    Correo: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: ProcessActionEnum
    NomDocumento :string

    constructor() {
        this.EmpresaId = 0;
        this.TipoDocumentoIdentidadId = 0;
        this.NumeroDocumento = '';
        this.RazonSocial = '';
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
