from datetime import datetime


class TurnoEntity:
    TurnoId: int
    Turno: str
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool


    def Cargar(_DB: any):
        c = TurnoEntity()
        c.TurnoId = _DB['TurnoId']
        c.Turno = _DB['Turno']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarItems(_DB: any):
        c = TurnoEntity()
        c.TurnoId = _DB['TurnoId']
        c.Turno = _DB['Turno']
        return c