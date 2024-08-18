from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TarifaMainModel(BaseModel):
    TarifaId: int = 0
    Valor: str = ''
    NomProducto: str = ''
    NomUnidad: str = ''
    NomMoneda: str = ''
    Valor: str = ''
    PrecioSinInpuesto: str = ''
    PrecioConInpuesto: str = ''
    FechaCreacion: str = ''
    Vigente: float = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)