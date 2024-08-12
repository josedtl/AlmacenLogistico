from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class DespachoDetalleSaveModel(BaseModel):
    DespachoDetalleId : int = 0
    DespachoId: int = 0
    OrdenPedidoDetalleId: int = 0 
    Cantidad : float = 0
    NomProducto: str = ''
    CodigoUM: str = ''
    CantidadSolicitado : float = 0
    CantidadAtendido : float = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)