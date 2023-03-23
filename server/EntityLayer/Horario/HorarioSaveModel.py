from datetime import datetime
from pydantic import BaseModel
from EntityLayer.Horario.HorarioDetalleModel import HorarioDetalleModel

class HorarioSaveModel(BaseModel):
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
    data:  list[HorarioDetalleModel]