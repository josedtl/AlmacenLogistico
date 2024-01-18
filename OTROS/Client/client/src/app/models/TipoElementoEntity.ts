import { Title } from '@angular/platform-browser';

export interface TipoElementoEntity {
    TipoElementoId?: number,
    Nombre?: string,
    FechaRegistro?: Date,
    CodUsuario?: string,
    EstadoRegistro?: boolean,
    Action?: number
};