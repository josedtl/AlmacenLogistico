import { AccionEnum } from "../Lib/AccionEnum";

export class EntidadEmpresaEntity {
    EntidadId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    NombreCompleto: string;
    UbigeoId: number;
    FechaRegistro: Date;
    CodUsuario: string;
    EsEmpresa: boolean;
    Alias: string;
    Direccion: string;
    Telefono: string;
    Correo: string;
    Action: AccionEnum;
}
