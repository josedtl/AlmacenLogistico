from pydantic import BaseModel


class HorarioDetalleModel(BaseModel):
    HorarioDetalleId: int
    HorarioId: int
    Items: int
    Hora: int
    Minuto: int
    TipoSecuenciaMarcacionId: int
    NomTipoSecuenciaMarcacion = str
    FlaInicio: bool
