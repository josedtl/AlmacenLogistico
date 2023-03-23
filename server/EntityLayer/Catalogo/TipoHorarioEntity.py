from datetime import datetime


class TipoHorarioEntity:
    TipoHorarioId: int
    TipoHorario: str
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool


    def Cargar(_DB: any):
        c = TipoHorarioEntity()
        c.TipoHorarioId = _DB['TipoHorarioId']
        c.TipoHorario = _DB['TipoHorario']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarItems(_DB: any):
        c = TipoHorarioEntity()
        c.TipoHorarioId = _DB['TipoHorarioId']
        c.TipoHorario = _DB['TipoHorario']
        return c