from datetime import datetime
from pydantic import BaseModel,validator
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TarifaMainModel(BaseModel):
    TarifaId: int = 0
    NomProducto: str = ''
    NomUnidad: str = ''
    NomMoneda: str = ''
    Valor: str = ''
    PrecioSinInpuesto: float = 0
    PrecioConInpuesto: float = 0
    FechaCreacion: datetime = datetime.now()
    Vigente: bool = False
    
    @validator('Vigente', pre=True)
    def convertir_a_bool(cls, v: any) -> bool:
        if isinstance(v, str):
            if v.lower() in ('true', '1'):
                return True
            elif v.lower() in ('false', '0'):
                return False
        return bool(v)
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class TarifaSaveModel(BaseModel):
    TarifaId: int = 0
    MercaderiaId: int = 0
    MonedaId: int = 0
    UnidadMedidaId: int = 0
    PorcentajeImpuestoId: int = 0
    PrecioSinInpuesto: float = 0
    PrecioConInpuesto: float = 0
    FechaCreacion: datetime = datetime.now()
    Vigente: bool = False
    
    @validator('Vigente', pre=True)
    def convertir_a_bool(cls, v: any) -> bool:
        if isinstance(v, str):
            if v.lower() in ('true', '1'):
                return True
            elif v.lower() in ('false', '0'):
                return False
        return bool(v)
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)