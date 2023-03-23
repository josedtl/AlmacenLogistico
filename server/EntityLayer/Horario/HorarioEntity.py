from datetime import datetime


class HorarioEntity:
    HorarioId: int
    Nombre: str
    InicioHora : int
    InicioMinutos: int
    TerminoHora : int
    TerminoMinutos: int
    TotalHorasTrabajo: int
    TurnoId : int
    TipoHorarioId : int
    ModalidadHorarioId : int
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool


    def Cargar(_DB: any):
        c = HorarioEntity()
        c.HorarioId = _DB['HorarioId']
        c.Nombre = _DB['Nombre']
        c.InicioHora = _DB['InicioHora']
        c.InicioMinutos = _DB['InicioMinutos']
        c.TerminoHora = _DB['TerminoHora']
        c.TerminoMinutos = _DB['TerminoMinutos']
        c.TotalHorasTrabajo = _DB['TotalHorasTrabajo']
        c.TurnoId = _DB['TurnoId']
        c.TipoHorarioId = _DB['TipoHorarioId']
        c.ModalidadHorarioId = _DB['ModalidadHorarioId']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c
