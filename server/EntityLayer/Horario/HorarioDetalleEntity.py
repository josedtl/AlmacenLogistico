from datetime import datetime


class HorarioDetalleEntity:
    HorarioDetalleId: int
    HorarioId: int
    Items: int
    Hora : int
    Minuto: int
    TipoSecuenciaMarcacionId : int
    FlaInicio: bool


    def Cargar(_DB: any):
        c = HorarioDetalleEntity()
        c.HorarioDetalleId = _DB['HorarioDetalleId']
        c.HorarioId = _DB['HorarioId']
        c.Items = _DB['Items']
        c.Hora = _DB['Hora']
        c.Minuto = _DB['Minuto']
        c.TipoSecuenciaMarcacionId = _DB['TipoSecuenciaMarcacionId']
        c.FlaInicio = bool(_DB['FlaInicio'])
        return c
