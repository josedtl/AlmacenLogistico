from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ReservaItemModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    NomCategoria: str = ''
    NomTipoProducto: str = ''
    NomMarca: str = ''
    NomModelo: str = ''
    NomUnidadMedida: str = ''
    Stock: float = 0
    Reserva: float = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)