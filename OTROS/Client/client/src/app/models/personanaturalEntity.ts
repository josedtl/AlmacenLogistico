import { Title } from '@angular/platform-browser';

export interface PersonaNaturalEntity {

    PersonaNaturalId?: number,
    TipoDocumentoIdentidadId?: number,
    NumDocumento?: string,
    Nombres?: string,
    ApellidoPaterno?: string,
    ApellidoMaterno?: string,
    FechaNacimiento?: Date,
    UbigeoId?: number,
    Direccion?: string,
    Telefono?: string,
    Correo?: string,
    Genero?: number,
    EstadoCivil?: number,
    Action?: number

}