from datetime import datetime


class TipoSecuenciaMarcacionEntity:
    TipoSecuenciaMarcacionId: int
    NomTipoSecuencia: str
    EsPrincipal: bool
    Condicion:int
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool


    def Cargar(_DB: any):
        c = TipoSecuenciaMarcacionEntity()
        c.TipoSecuenciaMarcacionId = _DB['TipoSecuenciaMarcacionId']
        c.NomTipoSecuencia = _DB['NomTipoSecuencia']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarItems(_DB: any):
        c = TipoSecuenciaMarcacionEntity()
        c.TipoSecuenciaMarcacionId = _DB['TipoSecuenciaMarcacionId']
        c.NomTipoSecuencia = _DB['NomTipoSecuencia']
        return c