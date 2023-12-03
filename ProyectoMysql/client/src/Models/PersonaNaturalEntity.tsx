import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class PersonaNaturalEntity {
    PersonaNaturalId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    Nombres: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    FechaNacimiento: Date;
    UbigeoId: number | null;
    Direccion: string;
    Telefono: string;
    Correo: string;
    SexoId: number | null;
    EstadoCivilId: number | null;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: ProcessActionEnum
    NomDocumento: string;
    constructor() {
        this.PersonaNaturalId = 0;
        this.TipoDocumentoIdentidadId = 0;
        this.NumDocumento = '';
        this.Nombres = '';
        this.ApellidoPaterno = '';
        this.ApellidoMaterno = '';
        this.FechaNacimiento = new Date();
        this.UbigeoId = 0;
        this.Direccion = '';
        this.Telefono = '';
        this.Correo = '';
        this.SexoId = 0;
        this.EstadoCivilId = 0;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = ProcessActionEnum.Add;
        this.NomDocumento = '';
    }
}
