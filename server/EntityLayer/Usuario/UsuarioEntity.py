from datetime import datetime

class UsuarioEntity:
    UsuarioId : int
    PersonaId: int
    CodUsuario: str
    Contrasena :str
    FechaVigencia: datetime
    FechaRegistro: datetime
    UsuarioRegistro: str
    EstadoRegistro: bool

    def Cargar(_DB: any):
        c = UsuarioEntity()
        c.UsuarioId = _DB['UsuarioId']
        c.PersonaId = _DB['PersonaId']
        c.CodUsuario = _DB['CodUsuario']
        c.Contrasena = _DB['Contrasena']
        c.FechaVigencia = _DB['FechaVigencia']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarAcceso(_DB: any):
        c = UsuarioEntity()
        c.PersonaId = _DB['PersonaId']
        # c.FEC_VIG = datetime.strptime(_DB['FEC_VIG'], "%Y-%m-%d %H:%M:%S")
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c