from datetime import datetime


class ModalidadHorarioEntity:
    ModalidadHorarioId: int
    ModalidadHorario: str
    FechaRegistro: datetime
    UsuarioRegistro : str
    EstadoRegistro: bool


    def Cargar(_DB: any):
        c = ModalidadHorarioEntity()
        c.ModalidadHorarioId = _DB['ModalidadHorarioId']
        c.ModalidadHorario = _DB['ModalidadHorario']
        c.FechaRegistro = _DB['FechaRegistro']
        c.UsuarioRegistro = _DB['UsuarioRegistro']
        c.EstadoRegistro = bool(_DB['EstadoRegistro'])
        return c

    def CargarItems(_DB: any):
        c = ModalidadHorarioEntity()
        c.ModalidadHorarioId = _DB['ModalidadHorarioId']
        c.ModalidadHorario = _DB['ModalidadHorario']
        return c