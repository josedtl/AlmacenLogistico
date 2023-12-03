import { AccionEnum } from "../Lib/AccionEnum";

export class EntidadEntity {
    EntidadId: number;
    TipoDocumentoIdentidadId: number;
    NumDocumento: string;
    NombreCompleto: string;
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
    SexoId: number; // Podría ser un número según tu enumeración
    EstadoCivilId: number; // Podría ser un número según tu enumeración
    Accion: AccionEnum;
}
