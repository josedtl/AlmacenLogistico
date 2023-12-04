import { AccionEnum } from "../Lib/AccionEnum";

export class EntidadEntity {
    EntidadId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    // NombreCompleto: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EsEmpresa: boolean;
    Nombres: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    FechaNacimiento: Date;
    Direccion: string;
    Telefono: string;
    Correo: string;
    SexoId: number; 
    EstadoCivilId: number; 
    Accion: AccionEnum;
}
