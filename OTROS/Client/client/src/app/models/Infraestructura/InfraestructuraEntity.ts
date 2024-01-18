export interface InfraestructuraEntity {
    Item: number,
    InfraestructuraId: number,
    SucursalId: number,
    Estado: number,
    CodigoSistema?: string,
    CodigoInterno?: string,
    Descripcion?: string,
    TipoInfraestructuraId?: string,
    InfraestructuraDimensionId?: string,
    Aforo?: number,
    PisoId?: number,
    FechaRegistro?: Date,
    CodUsuario?: string,
    EstadoRegistro?: boolean,
    Action?: number,
    Seleccion:boolean
}