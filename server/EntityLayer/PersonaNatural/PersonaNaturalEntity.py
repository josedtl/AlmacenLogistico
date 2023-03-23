from datetime import datetime


class PersonaNaturalEntity:
    PersonaId: int
    TipoDocumentoIdentidadId: int
    NumDocumento: str
    Nombres: str
    ApellidoPaterno: str
    ApellidoMaterno: str
    FechaNacimiento: datetime
    FechaVencimiento: datetime
    TipoSexoId: int
    EstadoCivilId: int
    Direccion: str
    DireccionReferencia: str
    UbigeoId: int
    FechaRegistro: datetime
    UsuarioRegistro: str
    EstadoRegistro: bool



    def Cargar(_DB: any):
        c = PersonaNaturalEntity()
        c.PersonaId = _DB['PersonaId']
        c.TipoDocumentoIdentidadId = _DB['TipoDocumentoIdentidadId']
        c.NumDocumento = _DB['NumDocumento']
        c.Nombres = _DB['Nombres']
        c.ApellidoPaterno = _DB['ApellidoPaterno']
        c.ApellidoMaterno = _DB['ApellidoMaterno']
        # c.FEC_NAC = datetime(_json['FEC_NAC'])
        # c.FEC_VEC = datetime(_json['FEC_VEC'])
        c.TipoSexoId = _DB['TipoSexoId']
        c.EstadoCivilId = _DB['EstadoCivilId']
        c.Direccion = _DB['Direccion']
        c.DireccionReferencia = _DB['DireccionReferencia']
        c.UbigeoId = _DB['UbigeoId']
        # c.FEC_REG = datetime(_json['FEC_REG'])
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarSoloNombre(_DB: any):
        c = PersonaNaturalEntity()
        c.PersonaId = _DB['PersonaId']
        c.NumDocumento = _DB['NumDocumento']
        c.Nombres = _DB['Nombres']
        c.ApellidoPaterno = _DB['ApellidoPaterno']
        c.ApellidoMaterno = _DB['ApellidoMaterno']
        return c

    def CargarSoloNombreId(_DB: any):
        c = PersonaNaturalEntity()
        c.PersonaId = _DB['PersonaId']
        return c