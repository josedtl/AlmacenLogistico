import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
export class EmpresaEntity {
    EmpresaId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    Nombres: string;
    NombreComercial: string;
    UbigeoId: number ;
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
        this.NumDocumento = '';
        this.Nombres = '';
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
